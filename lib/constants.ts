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
  task: string;
  message: string;
  screenshot: string;
  screenshotAlt: string;
}[] = [
  {
    id: "hard",
    label: "Hard",
    task: "Finish report",
    message:
      "You said you'd finish this by 3pm. It's 5pm now. Where the hell is it? Don't make excuses. Get it done.",
    screenshot: "/screenshots/tone-hard.jpg",
    screenshotAlt:
      "Plany AI Hard tone notification for Finish report with direct accountability message",
  },
  {
    id: "normal",
    label: "Normal",
    task: "Investor Pitch Deck v3",
    message:
      "Investor Pitch Deck v3 was due today. Did you get it wrapped up, or is something blocking you?",
    screenshot: "/screenshots/tone-normal.jpg",
    screenshotAlt:
      "Plany AI Normal tone notification for Investor Pitch Deck v3 with a friendly check-in",
  },
  {
    id: "motivated",
    label: "Motivated",
    task: "Launch Landing Page",
    message:
      "You're 80% there. The launch landing page is almost ready. One final push and it's live. Ready to finish it?",
    screenshot: "/screenshots/tone-motivated.jpg",
    screenshotAlt:
      "Plany AI Motivated tone notification for Launch Landing Page with encouraging message",
  },
  {
    id: "professional",
    label: "Professional",
    task: "Submit YC Application Update",
    message:
      "You set this deadline yourself. It's overdue now. What happened? Progress or excuses?",
    screenshot: "/screenshots/tone-professional.jpg",
    screenshotAlt:
      "Plany AI Professional tone notification for Submit YC Application Update",
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
