export const STORE_LINKS = {
  playStore: "https://play.google.com/store/apps/details?id=com.timelineapp",
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

export type PricingRegion = "IN" | "MX" | "US";
export type ProBillingInterval = "monthly" | "yearly" | "lifetime";

const INDIA_LANG =
  /(^|,)\s*(hi([-_][A-Za-z]+)?|([a-z]{2,3}[-_])?IN)(;|,|$)/i;

const MEXICO_LANG =
  /(^|,)\s*(es([-_]MX)?|([a-z]{2,3}[-_])?MX)(;|,|$)/i;

/** True when Accept-Language looks India-focused (en-IN, hi, hi-IN, …). */
export function acceptLanguageSuggestsIndia(
  acceptLanguage: string | null | undefined
): boolean {
  return Boolean(acceptLanguage && INDIA_LANG.test(acceptLanguage));
}

export function acceptLanguageSuggestsMexico(
  acceptLanguage: string | null | undefined
): boolean {
  return Boolean(acceptLanguage && MEXICO_LANG.test(acceptLanguage));
}

/**
 * Resolve pricing region from geo.
 * Prefer Vercel geo. If missing (local/dev), fall back to Accept-Language.
 */
export function resolvePricingRegion(options: {
  vercelCountry?: string | null;
  acceptLanguage?: string | null;
}): { region: PricingRegion; fromGeo: boolean } {
  const country = options.vercelCountry?.trim().toUpperCase() ?? "";

  if (country === "IN") {
    return { region: "IN", fromGeo: true };
  }
  if (country === "MX") {
    return { region: "MX", fromGeo: true };
  }
  if (country) {
    return { region: "US", fromGeo: true };
  }
  if (acceptLanguageSuggestsIndia(options.acceptLanguage)) {
    return { region: "IN", fromGeo: false };
  }
  if (acceptLanguageSuggestsMexico(options.acceptLanguage)) {
    return { region: "MX", fromGeo: false };
  }
  return { region: "US", fromGeo: false };
}

/** Client fallback when geo header is absent (e.g. localhost). */
export function timezoneSuggestsIndia(timeZone: string): boolean {
  return timeZone === "Asia/Kolkata" || timeZone === "Asia/Calcutta";
}

export function timezoneSuggestsMexico(timeZone: string): boolean {
  return (
    timeZone === "America/Mexico_City" ||
    timeZone === "America/Cancun" ||
    timeZone === "America/Monterrey" ||
    timeZone === "America/Tijuana" ||
    timeZone === "America/Mazatlan" ||
    timeZone === "America/Chihuahua" ||
    timeZone === "America/Hermosillo" ||
    timeZone === "America/Merida"
  );
}

export function regionFromTimezone(timeZone: string): PricingRegion | null {
  if (timezoneSuggestsIndia(timeZone)) return "IN";
  if (timezoneSuggestsMexico(timeZone)) return "MX";
  return null;
}

/** Regional Pro prices from the launch price sheet. Yearly save % vs 12× monthly. */
export const PRICING_BY_REGION = {
  IN: {
    free: "₹0",
    monthly: "₹199",
    yearly: "₹1499",
    lifetime: "₹2499",
    yearlySavePercent: 37,
    periodLabels: {
      monthly: "/ month",
      yearly: "/ year",
      lifetime: "once",
    },
  },
  MX: {
    free: "MXN 0",
    monthly: "MXN 69",
    yearly: "MXN 459",
    lifetime: "MXN 999",
    yearlySavePercent: 45,
    periodLabels: {
      monthly: "/ month",
      yearly: "/ year",
      lifetime: "once",
    },
  },
  US: {
    free: "$0",
    monthly: "$4.99",
    yearly: "$24.99",
    lifetime: "$89.99",
    yearlySavePercent: 58,
    periodLabels: {
      monthly: "/ month",
      yearly: "/ year",
      lifetime: "once",
    },
  },
} as const;

export const FREE_PLAN = {
  name: "Free",
  period: "14 days",
  description: "Try Plany free for 14 days — plan your day with core AI help.",
  features: [
    "10 chats / day",
    "Human-touch notifications",
    "AI follow-up messages",
    "Tasks, icons & theme customization",
  ],
  cta: "Get the app",
  href: STORE_LINKS.playStore,
  badge: "14 days free",
} as const;

/** Razorpay checkout — same links for every country (incl. Mexico). */
export const PRO_CHECKOUT_LINKS: Record<ProBillingInterval, string> = {
  monthly: "https://rzp.io/rzp/S1VcHceP",
  yearly: "https://rzp.io/rzp/mHAPBHG",
  lifetime: "https://rzp.io/rzp/liSp1Lc",
};

export const PRO_PLAN = {
  name: "Pro",
  description:
    "Deeper follow-ups, memory, and full customization for how you work.",
  features: [
    "20 chats / day",
    "Human-touch notifications",
    "Highly follow-up, task-related notifications",
    "Notification customization",
    "Memory",
    "Notes (coming soon)",
    "Analytics (coming soon)",
    "Location-based reminders (coming soon)",
    "Tasks, icons & theme customization",
    "Visual day timeline",
    "Time-based reminders",
    "AI planning & accountability tones",
  ],
  cta: "Get Pro",
  badge: "Most popular",
} as const;

/** Extra perk shown when Lifetime billing is selected. */
export const LIFETIME_PERK =
  "All future features included — free forever" as const;

export type ComparisonValue = boolean | string | "soon";

export const PRICING_COMPARISON: {
  feature: string;
  free: ComparisonValue;
  pro: ComparisonValue;
}[] = [
  { feature: "AI chats / day", free: "10", pro: "20" },
  { feature: "Human-touch notifications", free: true, pro: true },
  { feature: "AI follow-up messages", free: true, pro: true },
  {
    feature: "Highly follow-up, task-related notifications",
    free: false,
    pro: true,
  },
  { feature: "Notification customization", free: false, pro: true },
  { feature: "Memory", free: false, pro: true },
  { feature: "Notes", free: false, pro: "soon" },
  { feature: "Analytics", free: false, pro: "soon" },
  { feature: "Location-based reminders", free: false, pro: "soon" },
  { feature: "Tasks, icons & theme customization", free: true, pro: true },
  { feature: "Visual day timeline", free: false, pro: true },
  { feature: "Time-based reminders", free: false, pro: true },
  { feature: "AI planning & accountability tones", free: false, pro: true },
  {
    feature: "All future features (Lifetime)",
    free: false,
    pro: "Lifetime",
  },
];

export const PRO_BILLING_OPTIONS: {
  id: ProBillingInterval;
  label: string;
}[] = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
  { id: "lifetime", label: "Lifetime" },
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
      "Yes — start with a 14-day Free plan (10 chats/day, human-touch notifications, and AI follow-ups). Pro unlocks 20 chats/day, deeper task follow-ups, memory, and more.",
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

export const SOCIAL_PROOF = [
  {
    quote:
      "I can finally see my day laid out, not buried in a list. The follow-ups keep me honest.",
    author: "Maya",
    role: "Product designer",
  },
  {
    quote:
      "Location nudges actually fire when I'm at the store. Reminds me like a friend, not an alarm.",
    author: "Arjun",
    role: "Founder",
  },
  {
    quote:
      "The AI check-in is the only thing that makes me finish tasks I keep pushing to tomorrow.",
    author: "Leah",
    role: "Freelance writer",
  },
] as const;
