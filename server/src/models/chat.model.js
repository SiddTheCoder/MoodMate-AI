import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "New Chat",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    messages: [
      {
        role: { type: String, enum: ["user", "assistant"] },
        content: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
    mood: {
      type: String,
      enum: ["positive", "neutral", "negative", "angry", "sad", "happy"],
      default: "neutral",
    },
    topics: [
      {
        type: String,
        trim: true,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);
