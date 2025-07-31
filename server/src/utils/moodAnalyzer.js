import { InferenceClient } from "@huggingface/inference";
import dotenv from "dotenv";
dotenv.config();

const HF_API_KEY = process.env.HF_API_KEY?.trim();

if (
  !HF_API_KEY ||
  typeof HF_API_KEY !== "string" ||
  !HF_API_KEY.startsWith("hf_")
) {
  throw new Error("❌ Invalid Hugging Face API key.");
}

// ✅ FIX HERE: pass just the key, not an object
const client = new InferenceClient(HF_API_KEY);

/**
 * Combines messages into a clean 100-word max string
 */
function summarizeMessages(messages = []) {
  const text = messages
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ") // collapse whitespace
    .replace(/([.?!])\s*/g, "$1 ") // normalize punctuation
    .slice(0, 500); // limit raw string length
  return text.trim() || "I'm feeling okay.";
}

/**
 * Emotion detection using Hugging Face model
 */
export async function detectEmotionFromCombinedMessages(messages) {
  const summary = summarizeMessages(messages);

  try {
    const response = await client.textClassification({
      model: "SamLowe/roberta-base-go_emotions",
      inputs: summary,
    });

    if (!response?.[0]) {
      console.warn("⚠️ Invalid response from Hugging Face:", response);
      return "neutral";
    }

    const best = response[0];
    if (best.score < 0.5) return "neutral";

    console.log(
      "🧠 Detected emotion:",
      best.label,
      "| Score:",
      best.score.toFixed(2)
    );
    return best.label.toLowerCase();
  } catch (error) {
    console.error("❌ Hugging Face emotion detection failed:", error.message);
    return "neutral";
  }
}

export async function detectEmotionForEachMessage(message) {
  // const summary = summarizeMessages(messages);

  try {
    const response = await client.textClassification({
      model: "j-hartmann/emotion-english-distilroberta-base",
      inputs: message,
    });

    if (!response?.[0]) {
      console.warn("⚠️ Invalid response from Hugging Face:", response);
      return "neutral";
    }


    const best = response[0];
    if (best.score < 0.5) return "neutral";

    console.log(
      "🧠 Detected emotion:",
      best.label,
      "| Score:",
      best.score.toFixed(2)
    );
    return best.label.toLowerCase();
  } catch (error) {
    console.error("❌ Hugging Face emotion detection failed:", error.message);
    return "neutral";
  }
}

/**
 * Map emotion label to mood intensity level (1-5)
 */
export function mapToLevel(label) {
  const mapping = {
    joy: 5,
    love: 4,
    surprise: 4,
    neutral: 3,
    fear: 2,
    anger: 2,
    sadness: 1,
  };
  return mapping[label?.toLowerCase()] || 3;
}

/**
 * Mood-based encouragement or advice
 */
export function getSuggestion(level) {
  const suggestions = {
    5: [
      '😊 Keep smiling! "Happiness is not by chance, but by choice."',
      "😊 You're radiating positivity! Spread that energy around!",
      "😊 Joy looks great on you. Keep it up!",
      "😊 The world shines brighter with your smile.",
      "😊 Keep dancing through the day — you're doing great!",
      "😊 Share that energy, someone might need it today!",
      "😊 You’ve got this glow — keep it alive!",
    ],
    4: [
      "😄 You're doing great! Maybe play your favorite song?",
      "😄 Keep up the momentum! Try writing something you're grateful for.",
      "😄 Feeling upbeat? Share the vibe with someone today.",
      "😄 Use that spark — maybe start a small creative task!",
      "😄 Laugh a little louder today. You’ve earned it.",
      "😄 Bright mood? Pass it on with a compliment.",
      "😄 How about a mini dance break?",
    ],
    3: [
      "😐 Feeling neutral? How about a quick walk or break?",
      "😐 Not bad, not great? A cup of tea and a stretch might help.",
      "😐 Take a moment to check in with yourself.",
      "😐 Maybe switch things up — try a new playlist?",
      "😐 A small change in routine can boost the day.",
      "😐 Let the stillness be your strength.",
      "😐 Reflect — you're doing better than you think.",
    ],
    2: [
      '😟 A bit down? Try: "Breathe. It\'s just a bad day, not a bad life."',
      "😟 It's okay to feel low. Maybe journal how you feel?",
      "😟 Try doing one small thing you enjoy. It might lift you.",
      "😟 You're stronger than this moment feels.",
      "😟 Call or text someone who lifts you up.",
      "😟 Be kind to yourself — you're trying.",
      "😟 Step outside, even for 2 minutes. Nature helps.",
    ],
    1: [
      '😢 Stressed? "Even the darkest night will end and the sun will rise."',
      "😢 It’s okay to cry. You’re not alone.",
      "😢 Deep breaths. You’ve made it through tough times before.",
      "😢 Pause and rest. You deserve a moment of peace.",
      "😢 It’s hard now, but healing begins with today.",
      "😢 Speak gently to yourself. You’re doing your best.",
      "😢 One step at a time. That’s enough right now.",
    ],
  };

  const list = suggestions[level] || ["🙂 Hope your day gets better!"];
  return list[Math.floor(Math.random() * list.length)];
}

