import type { BlogPost } from "../types";

export const howToDeleteAccountPost: BlogPost = {
  slug: "how-to-delete-your-plany-timeline-account",
  title: "How to delete your Plany Timeline account",
  description:
    "Step-by-step guide to delete your Plany Timeline account, what happens to your data, the 10-minute undo window, and how to contact support.",
  category: "Guides & Updates",
  date: "2026-07-29",
  lede:
    "You can delete your Plany Timeline account anytime from the app. Below are the steps, what happens next, the short restore window, and how to get help if you deleted by mistake.",
  blocks: [
    {
      type: "h2",
      text: "How to delete your account",
    },
    {
      type: "ol",
      items: [
        "Open Plany Timeline",
        "Go to the Settings tab",
        "Scroll to Profile Account",
        "Tap Delete account",
        "In the confirmation popup, choose Delete",
        "Your account is deleted, you are signed out, and local app data on the device is cleared",
      ],
    },
    {
      type: "note",
      text: "Sign out is not the same as delete. Sign out only ends your session. Delete account removes your account and schedules your data for removal.",
    },
    {
      type: "h2",
      text: "What happens after you delete",
    },
    {
      type: "table",
      headers: ["Topic", "What happens"],
      rows: [
        ["Sign out", "You are signed out of the app immediately"],
        ["Local data", "Timeline and settings stored on your phone are cleared"],
        [
          "Cloud data",
          "Your account is marked deleted; tasks, chats, and settings are scheduled for removal",
        ],
        [
          "Within 10 minutes",
          "If you deleted by mistake, sign in again with the same email to restore your account automatically",
        ],
        [
          "After 10 minutes",
          "Login with that account is blocked. You’ll be pointed to support or signing up with a new email",
        ],
        [
          "After about 30 days",
          "Deleted account data is permanently removed and cannot be restored",
        ],
        [
          "New account",
          "You can create a new account anytime with a different email",
        ],
      ],
    },
    {
      type: "h2",
      text: "Accidental delete and restore",
    },
    {
      type: "p",
      text: "Within 10 minutes: Sign in again with the same email and password (or Google). Your account will be restored automatically.",
    },
    {
      type: "p",
      text: "After 10 minutes: You won’t be able to log in with that account. To request a restore, email hq@plany.space.",
    },
    {
      type: "ul",
      items: [
        "Subject example: Account restore request",
        "Include: your registered email and roughly when you deleted the account",
        "Within about 30 days, support may restore your account manually",
        "After permanent removal, data cannot be recovered",
      ],
    },
    {
      type: "h2",
      text: "What is deleted",
    },
    {
      type: "ul",
      items: [
        "Account and profile",
        "Tasks and timeline",
        "AI chat history",
        "Settings and preferences",
        "Device notification tokens",
      ],
    },
    {
      type: "note",
      text: "If you use Pro through Google Play or the App Store, manage or cancel your subscription in the store. Deleting your Plany account does not automatically cancel a store subscription.",
    },
    {
      type: "h2",
      text: "FAQ",
    },
    {
      type: "faq",
      items: [
        {
          question: "Does signing out delete my account?",
          answer:
            "No. Sign out only ends your session. Your account and data stay until you choose Delete account.",
        },
        {
          question: "Can I create a new account with the same email?",
          answer:
            "During the delete window, signing up again with the same email may not work. Use a different email, wait until the window ends, or contact support.",
        },
        {
          question: "When is my data permanently deleted?",
          answer:
            "After about 30 days from deletion, account data is permanently removed and cannot be restored.",
        },
        {
          question: "Can I delete my account from the web?",
          answer:
            "The primary path is in the app: Settings → Profile Account → Delete account. You can also email hq@plany.space to request deletion.",
        },
      ],
    },
    {
      type: "h2",
      text: "Your data, your control",
    },
    {
      type: "p",
      text: "Plany is built so you stay in control of your account and planning data. If you need help, we’re here.",
    },
    {
      type: "links",
      items: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        {
          label: "hq@plany.space",
          href: "mailto:hq@plany.space",
          external: true,
        },
      ],
    },
  ],
};
