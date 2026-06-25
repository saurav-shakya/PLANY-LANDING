import { describe, expect, it } from "vitest";
import { AI_TONES, type ToneId } from "./constants";
import { getToneMessage } from "./tone";

const EXPECTED: Record<ToneId, string> = {
  hard: "You said you'd finish this by 3pm. It's 5pm now. Where the hell is it? Don't make excuses. Get it done.",
  normal:
    "Investor Pitch Deck v3 was due today. Did you get it wrapped up, or is something blocking you?",
  motivated:
    "You're 80% there. The launch landing page is almost ready. One final push and it's live. Ready to finish it?",
  professional:
    "You set this deadline yourself. It's overdue now. What happened? Progress or excuses?",
};

describe("getToneMessage", () => {
  for (const tone of AI_TONES) {
    it(`returns plan copy for ${tone.id}`, () => {
      expect(getToneMessage(tone.id)).toBe(EXPECTED[tone.id]);
    });
  }
});