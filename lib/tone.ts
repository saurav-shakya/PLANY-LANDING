import { AI_TONES, type ToneId } from "./constants";

const TONE_MESSAGES: Record<ToneId, string> = {
  hard: "You said you'd finish this by 3pm. What happened?",
  normal: "Hey, did you get this done?",
  motivated: "You're 80% there. Finish strong!",
  professional: "Status update: did you finish 'Finish report'?",
};

export function getToneMessage(toneId: ToneId): string {
  const fromMap = TONE_MESSAGES[toneId];
  if (fromMap) return fromMap;

  const fallback = AI_TONES.find((t) => t.id === toneId);
  return fallback?.message ?? AI_TONES[0].message;
}