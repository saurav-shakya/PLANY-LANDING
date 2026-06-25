export const STORE_LINKS = {
  appStore: "https://apps.apple.com/app/plany",
  playStore: "https://play.google.com/store/apps/details?id=com.plany.app",
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#product" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_CHIPS = [
  "Walk · 19 min",
  "Pan card apply",
  "2/2 Subtasks done",
  "Timeline bugs fix",
];

export const PROBLEMS = [
  {
    title: "Lists don't show time",
    description:
      "Your todo app is a pile of tasks. You still don't know when anything happens.",
  },
  {
    title: "Reminders feel dumb",
    description:
      "You get pinged at the wrong time — or not at all when you're actually near the place.",
  },
  {
    title: "No accountability",
    description:
      "You mark things done… or you don't. Nobody asks why.",
  },
];

export const FEATURES = [
  {
    icon: "Clock" as const,
    title: "See your whole day at a glance",
    description:
      "Tasks sit on a visual timeline — not buried in a list.",
  },
  {
    icon: "Bell" as const,
    title: "Reminds you when it actually matters",
    description:
      "Set time-based reminders that fit your schedule — not random pings.",
  },
  {
    icon: "MapPin" as const,
    title: "Reminds you when you're near the place",
    description:
      "Buy groceries when you're at the store. Call mom when you're home.",
  },
  {
    icon: "Sparkles" as const,
    title: "Your week planned in 30 seconds",
    description:
      "Tell Plany what you need — it builds the tasks for you.",
  },
  {
    icon: "Settings2" as const,
    title: "Notifications that fit how you work",
    description:
      "Customize how and when Plany nudges you for each task.",
  },
  {
    icon: "MessageCircle" as const,
    title: "Done? Plany asks. Not done? It asks why.",
    description:
      "Pick your tone: Hard · Normal · Motivated · Professional.",
  },
];

export type ToneId = "hard" | "normal" | "motivated" | "professional";

export const AI_TONES: {
  id: ToneId;
  label: string;
  message: string;
}[] = [
  {
    id: "hard",
    label: "Hard",
    message: "You said you'd finish this by 3pm. What happened?",
  },
  {
    id: "normal",
    label: "Normal",
    message: "Hey — did you get this done?",
  },
  {
    id: "motivated",
    label: "Motivated",
    message: "You're 80% there. Finish strong!",
  },
  {
    id: "professional",
    label: "Professional",
    message: "Status update: Task 'Finish report' — completed?",
  },
];
export const FAQ_ITEMS = [
  {
    question: "Is Plany free?",
    answer:
      "Yes — you can plan your day and use core features for free. Pro unlocks advanced AI tones and deeper insights.",
  },
  {
    question: "Does Plany work offline?",
    answer:
      "Your timeline and tasks sync when you're back online. Reminders work with your device's notification system.",
  },
  {
    question: "How does location-based reminding work?",
    answer:
      "Set a place on any task — Plany nudges you when you arrive nearby, like reminding you to buy groceries at the store.",
  },
  {
    question: "What are AI accountability check-ins?",
    answer:
      "Plany follows up on tasks you committed to — asking if you finished and why not, in a tone you choose.",
  },
];

export const SOCIAL_PROOF = {
  quote:
    "Finally an app that shows my day as a timeline, not a endless list. The AI follow-ups actually keep me honest.",
  author: "Early beta user",
  role: "Product designer",
};
