import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function summarizeMessages(messagesArray) {
  const systemPrompt =
    "You are a helpful assistant that summarizes entire conversations in a **single sentence**, omitting any reference to roles like 'user' or 'assistant'. The tone should be concise, professional, and neutral.";

  const userPrompt = `Summarize the following messages in **one sentence only**:\n\n${messagesArray.join(
    "\n"
  )}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "mistralai/Mistral-7B-Instruct",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.6,
      max_tokens: 150,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("Summarization failed:", error);
    return "❌ Failed to summarize messages.";
  }
}

export async function generateChatTitle(messagesArray) {
  const recentMessages = messagesArray // adjust number if needed

  const systemPrompt = `
You are a helpful assistant that creates concise, relevant, and professional chat titles based on the content of the conversation.
The title should be a single line, under 6 to 3 words, without mentioning 'user', 'assistant', or speaker roles.
Only return the title — no explanation or formatting.
`;

  const userPrompt = `Generate a short title within 6 to 3 words for this conversation:\n\n${recentMessages.join(
    "\n"
  )}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "mistralai/Mistral-7B-Instruct",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 50,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("Title generation failed:", error);
    return "❌ Untitled Chat";
  }
}
