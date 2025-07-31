import React, { useEffect, useState } from "react";

// Delay helper
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Emojis cleaner: keep just one emoji if repeated
function stripExtraEmojis(text) {
  const emojiRegex = /([\p{Emoji_Presentation}\p{Emoji}\u200d\uFE0F]+)/gu;
  const all = [...text.matchAll(emojiRegex)].map((m) => m[0]);

  if (all.length > 1) {
    const first = all[0];
    const cleanText = text.replace(emojiRegex, "").trimStart();
    return `${first} ${cleanText}`;
  }

  return text;
}

// Parses and formats raw AI text
function parseText(rawText) {
  const lines = rawText
    .split("\n")
    .map((line) => stripExtraEmojis(line.trim()))
    .filter((line) => line.length > 0);

  const intro = [];
  const tips = [];

  let isTips = false;
  for (let line of lines) {
    if (/^\d\./.test(line)) {
      isTips = true;
      tips.push(line.replace(/^\d+\.\s*/, ""));
    } else if (isTips && tips.length > 0) {
      tips[tips.length - 1] += " " + line;
    } else {
      intro.push(line);
    }
  }

  if (
    !isTips &&
    tips.length === 0 &&
    intro.length === 1 &&
    intro[0].length > 250
  ) {
    const chunks = intro[0].match(/[^.!?]+[.!?]+/g) || [intro[0]];
    intro.length = 0;
    chunks.forEach((chunk) => intro.push(chunk.trim()));
  }

  return [
    ...intro.map((text) => ({ text, isList: false })),
    ...tips.map((text) => ({ text, isList: true })),
  ];
}

// Main animated response component
export function FormatAIResponse({ rawText }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const lines = React.useMemo(() => parseText(rawText), [rawText]);

  useEffect(() => {
    if (lines.length === 0 || currentLineIndex >= lines.length) return;

    const typeLine = async () => {
      const line = lines[currentLineIndex];
      const { text, isList } = line;
      let display = "";

      const mode = Math.random() < 0.4 ? "word" : "letter";
      const chunks = mode === "word" ? text.split(" ") : [...text];

      for (let i = 0; i < chunks.length; i++) {
        display += chunks[i] + (mode === "word" ? " " : "");
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = { text: display, isList };
          return updated;
        });
        await delay(mode === "word" ? 80 : 15);
      }

      setCurrentLineIndex((prev) => prev + 1);
    };

    typeLine();
  }, [currentLineIndex, lines]);

  useEffect(() => {
    setDisplayedLines(
      Array.from({ length: lines.length }, () => ({ text: "", isList: false }))
    );
    setCurrentLineIndex(0); // restart animation on new message
  }, [rawText]);

  return (
    <div className="space-y-4 text-white leading-relaxed">
      {displayedLines.map((line, idx) => {
        if (!line || !line.text) return null;
        return line.isList ? (
          <li key={idx} className="text-[1.05rem] list-decimal ml-5">
            {line.text}
          </li>
        ) : (
          <p key={idx} className="text-[1.05rem]">
            {line.text}
          </p>
        );
      })}
    </div>
  );
}
