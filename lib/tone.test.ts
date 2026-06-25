import { describe, expect, it } from "vitest";
import { AI_TONES, type ToneId } from "./constants";
import { getToneMessage } from "./tone";

const EXPECTED: Record<ToneId, string> = {
  hard: "You said you'd finish this by 3pm. What happened?",
  normal: "Hey — did you get this done?",
  motivated: "You're 80% there. Finish strong!",
  professional: "Status update: Task 'Finish report' — completed?",
};

describe("getToneMessage", () => {
  for (const tone of AI_TONES) {
    it(`returns plan copy for ${tone.id}`, () => {
      expect(getToneMessage(tone.id)).toBe(EXPECTED[tone.id]);
    });
  }
});