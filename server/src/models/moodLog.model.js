import mongoose from "mongoose";

const MoodLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: String,
    combinedMessages: [String],
    mentalState: {
      emotion: String,
      level: String,
      tip: String,
    },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const MoodLog = mongoose.model("MoodLog", MoodLogSchema);
