import {
  detectEmotionFromCombinedMessages,
  detectEmotionForEachMessage,
  mapToLevel,
  getSuggestion,
} from "./utils/moodAnalyzer.js";

import { summarizeMessages, generateChatTitle } from "./config/openai.js";

const sampleMessages = [
  "I'm feeling really horny today.",
  "Nothing's going right and I feel overwhelmed.",
  "I dont wanna die ",
  "I  wanna cry ",
];

(async () => {
  // const emotion = await detectEmotionFromCombinedMessages(sampleMessages);
  const summarize = await generateChatTitle(sampleMessages);
  const emotion = await detectEmotionForEachMessage("i want to sleep");
  const level = mapToLevel(emotion);
  const tip = getSuggestion(level);

  console.log(`📝 Summary: ${summarize}`);
  console.log(`🧠 Emotion: ${emotion}`);
  console.log(`📊 Level: ${level}`);
  console.log(`💡 Suggestion: ${tip}`);
})();
