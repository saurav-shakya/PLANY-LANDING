export const STORE_LINKS = {
  appStore: "https://apps.apple.com/app/plany",
  playStore: "https://play.google.com/store/apps/details?id=com.plany.app",
};

export const NAV_LINKS = [
  { label: "Product", href: "/#product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
] as const;

export const SOCIAL_LINKS = [
  {
    id: "x",
    label: "X / Twitter",
    description: "New releases and updates",
    href: "https://x.com/planydotspace",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "What we're building",
    href: "https://www.linkedin.com/company/planydotspace/",
  },
  {
    id: "instagram",
    label: "Instagram",
    description: "Build updates and day-to-day",
    href: "https://instagram.com/plany.space",
  },
  {
    id: "youtube",
    label: "YouTube",
    description: "Demos and how-tos",
    href: "https://youtube.com/@planyspace",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Plan your day without paying a cent.",
    features: [
      "Visual day timeline",
      "Time-based reminders",
      "Location nudges",
      "Basic AI check-ins",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/ month",
    description: "More follow-ups, more insight.",
    features: [
      "All Free features",
      "Advanced AI tones",
      "Weekly insights",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$12",
    period: "/ user / mo",
    description: "Shared planning for small teams.",
    features: [
      "All Pro features",
      "Shared timelines",
      "Team accountability",
      "Admin dashboard",
    ],
    cta: "Contact us",
    highlighted: false,
  },
] as const;

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
      "Wrong time, wrong place. Or nothing when you're finally there.",
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
      "Tasks on a timeline, not lost in a list.",
  },
  {
    icon: "Bell" as const,
    title: "Reminds you at the right time",
    description:
      "Time reminders that match your day, not random pings.",
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
      "Tell Plany what you need. It builds the list.",
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
    message: "Hey, did you get this done?",
  },
  {
    id: "motivated",
    label: "Motivated",
    message: "You're 80% there. Finish strong!",
  },
  {
    id: "professional",
    label: "Professional",
    message: "Status update: did you finish 'Finish report'?",
  },
];
export const FAQ_ITEMS = [
  {
    question: "Is Plany free?",
    answer:
      "Yes. Plan your day and use core features free. Pro adds AI tones and weekly insights.",
  },
  {
    question: "Does Plany work offline?",
    answer:
      "Your timeline and tasks sync when you're back online. Reminders work with your device's notification system.",
  },
  {
    question: "How does location-based reminding work?",
    answer:
      "Add a place to any task. Plany pings you when you're nearby, like at the grocery store.",
  },
  {
    question: "What are AI accountability check-ins?",
    answer:
      "Plany checks back on tasks you said you'd do. You pick how direct it gets.",
  },
];

export const SOCIAL_PROOF = {
  quote:
    "I can finally see my day laid out, not buried in a list. The follow-ups keep me honest.",
  author: "Early beta user",
  role: "Product designer",
};
