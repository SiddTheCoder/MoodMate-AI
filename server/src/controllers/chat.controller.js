// # Handles messages from user & generates AI reply
import { Message } from "../models/message.model.js";
import {
  detectEmotionForEachMessage,
  detectEmotionFromCombinedMessages,
  getSuggestion,
  mapToLevel,
} from "../utils/moodAnalyzer.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Chat } from "../models/chat.model.js";
import OpenAI from "openai";
import dotenv from "dotenv";
import { summarizeMessages, generateChatTitle } from "../config/openai.js";
import { MoodLog } from "../models/moodLog.model.js";

import {
  identityQuestions,
  identityResponses,
  chromoverseCreatorQuestions,
  chromoverseCreatorResponses,
} from "../constant.js";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const MOOD_TRIGGER_COUNT = 5; // After 5 user messages

function trimRepeatedEmojis(text, maxRepetition = 2) {
  // Match sequences of the same emoji repeated consecutively
  const emojiRepeatRegex = /([\p{Emoji}])\1{2,}/gu;

  return text.replace(emojiRepeatRegex, (_, emoji) =>
    emoji.repeat(maxRepetition)
  );
}

function estimateTokens(text) {
  return Math.ceil(text.split(" ").length * 1.5); // rough approximation
}

function trimMessagesToTokenLimit(messages, maxTokens = 3000) {
  const trimmed = [];
  let totalTokens = 0;

  for (let i = messages.length - 1; i >= 0; i--) {
    const tokens = estimateTokens(messages[i].content);
    if (totalTokens + tokens > maxTokens) break;
    trimmed.unshift(messages[i]);
    totalTokens += tokens;
  }

  return trimmed;
}

// Controllers --------------------------------------------------------------------

export const sendMessageToActiveChat = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { message } = req.body;

  let chat = await Chat.findOne({ user: userId, isActive: true });
  let mentalState = {};
  if (!chat) {
    chat = await Chat.create({
      user: userId,
      messages: [{ role: "user", content: message }],
      title: "New Chat",
    });
  } else {
    chat.messages.push({ role: "user", content: message });
    // generating chat title
    const userMessages = chat.messages.filter((m) => m.role === "user");
    const userMessagesContent = userMessages.map((m) => m.content);
    if (chat.messages.length > 2) {
      const messages = userMessagesContent.slice(-2);
      const title = await generateChatTitle(messages);
      if (chat.title === "New Chat") {
        chat.title = title;
      }
      await chat.save();
    }

    // generating moodLog of chat
    if (chat.messages.length > MOOD_TRIGGER_COUNT) {
      const messages = userMessagesContent.slice(-MOOD_TRIGGER_COUNT);
      const emotion = await detectEmotionFromCombinedMessages(messages);
      const level = mapToLevel(emotion);
      const tip = getSuggestion(level);
      mentalState = { emotion, level, tip };
      await MoodLog.create({
        userId: req.user._id,
        combinedMessages: messages,
        mentalState,
      });
    }

    await chat.save();
  }

  let aiReply = "";
  const lowerMsg = message
    ?.toLowerCase()
    .trim()
    .replace(/[^\w\s]/gi, "");

  if (
    chromoverseCreatorQuestions.some((q) => lowerMsg.includes(q.toLowerCase()))
  ) {
    const randomIndex = Math.floor(
      Math.random() * chromoverseCreatorResponses.length
    );
    aiReply = chromoverseCreatorResponses[randomIndex];
  } else if (
    identityQuestions.some((q) => lowerMsg.includes(q.toLowerCase()))
  ) {
    const randomIndex = Math.floor(Math.random() * identityResponses.length);
    aiReply = identityResponses[randomIndex];
  } else {
    // Emotion detection for each message
    const emotion = await detectEmotionForEachMessage(message);
    const level = mapToLevel(emotion);
    const tip = getSuggestion(level);
    mentalState = { emotion, level, tip };
    await MoodLog.create({
      userId: req.user._id,
      message: message,
      mentalState: mentalState,
    });

    const allMessages = chat.messages;
    let summarizedContext = "";

    if (allMessages.length > 6) {
      const older = allMessages.slice(0, -5);
      summarizedContext = await summarizeMessages(older);
    }

    const recentMessages = allMessages.slice(-5);
    const combinedMessages = summarizedContext
      ? [
          {
            role: "system",
            content: `Summary of earlier conversation: ${summarizedContext}`,
          },
          ...recentMessages,
        ]
      : [...recentMessages];

    const safeMessages = trimMessagesToTokenLimit(combinedMessages, 3000);

    // 🎯 Emotion-aware system prompt
    const responseLengthInstruction =
      Math.random() < 0.1
        ? "Respond briefly and concisely, maximum 50 words. Ask a follow-up question."
        : "Respond in a thoughtful manner, maximum 150 words. Ask follow-up questions.";

    const systemPrompt = `You're a caring and human-like assistant named Buddy. The user is currently feeling "
    ${mentalState.emotion}" (mental level: ${mentalState.level}). Keep that in mind as you reply.
    Offer support if needed, adapt your tone appropriately, and ask thoughtful follow-up questions. Avoid repeating answers, speak naturally, and use fewer emojis.
    Mental health tip: "${mentalState.tip}"
    ${responseLengthInstruction}`;

    const formattedMessages = [
      { role: "system", content: systemPrompt },
      ...safeMessages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

    try {
      const completion = await openai.chat.completions.create({
        model: "mistralai/Mistral-7B-Instruct", // or "gpt-3.5-turbo"
        messages: formattedMessages,
        temperature: 0.85,
        max_tokens: 400,
      });

      const raw = completion.choices?.[0]?.message?.content || "";
      aiReply = trimRepeatedEmojis(raw || "Hmm, I’m not sure how to respond.");
      chat.messages.push({ role: "assistant", content: aiReply });
      await chat.save();

      const tokenEstimate = formattedMessages.reduce(
        (sum, m) => sum + estimateTokens(m.content),
        0
      );
      console.log("🧠 Total tokens sent:", tokenEstimate);
    } catch (err) {
      console.error("🔥 AI provider error:", err?.error || err);
      aiReply =
        "Oops! I ran into an issue generating a reply. Can you try rephrasing?";
    }
  }

  // 📝 Save messages
  await Message.create({ user: userId, role: "user", content: message });
  await Message.create({ user: userId, role: "assistant", content: aiReply });

  res
    .status(200)
    .json(new ApiResponse(200, { chat, mentalState }, "Chat with AI"));
});

// Start a new chat
export const startNewChat = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // Mark all existing chats as inactive
  await Chat.updateMany(
    { user: userId, isActive: true },
    { $set: { isActive: false } }
  );

  // Create a new active chat
  const newChat = await Chat.create({
    user: userId,
    title: "New Chat",
    isActive: true,
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { chat: newChat, messages: [] },
        "Started a new chat with AI"
      )
    );
});

// get all chats
export const getUserAllChats = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const chats = await Chat.find({
    user: userId,
  }).sort({ createdAt: -1 });

  res.json(
    new ApiResponse(
      200,
     chats,
      "Fetched all chats"
    )
  );
});

export const offCurrentChat = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  await Chat.updateMany(
    { user: userId, isActive: true },
    { $set: { isActive: false } }
  );
  res.json({ message: "Chat ended" });
});
