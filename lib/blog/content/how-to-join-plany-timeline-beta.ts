import type { BlogPost } from "../types";

export const howToJoinBetaPost: BlogPost = {
  slug: "how-to-join-plany-timeline-beta",
  title: "How to join and install the Plany Timeline beta on Android",
  description:
    "Step-by-step visual guide to joining the Plany Timeline beta: join the Google Group, become a tester on Google Play, and download the app to unlock AI timelines and daily tasks.",
  category: "Guides & Updates",
  date: "2026-07-30",
  ogImage: {
    url: "/blog/join-beta/step-3-download-play-store.png",
    width: 998,
    height: 457,
  },
  lede:
    "Plany Timeline is our biggest leap forward in AI-powered productivity, and it is rolling out through Google Play's official testing program. Here is the 3-step guide to becoming a beta tester and unlocking the new AI features today.",
  blocks: [
    {
      type: "h2",
      text: "Before you start",
    },
    {
      type: "p",
      text: "To ensure absolute stability, the Plany Timeline beta is distributed via Google Play's official testing program. The whole process takes about two minutes and only needs to be done once.",
    },
    {
      type: "note",
      text: "Critical: Make sure you are logged into your web browser and the Google Play Store with the exact same Gmail account throughout this entire process. If the accounts differ, the app will not be visible to you on the Play Store.",
    },
    {
      type: "h2",
      text: "Step 1: Join the Google Group (access authorization)",
    },
    {
      type: "p",
      text: "Your email must be registered on our authorization list first, otherwise the app will not be visible on the Play Store. To begin, join our official Google Group: [Join the Plany Timeline Google Group](https://groups.google.com/g/plany-timeline)",
    },
    {
      type: "image",
      src: "/blog/join-beta/step-1-join-google-group.png",
      alt: "Plany Timeline Google Group page with the Join group button",
      width: 475,
      height: 113,
      caption: "Click the blue “Join group” button on the Google Group page.",
    },
    {
      type: "ol",
      items: [
        "Open the [Plany Timeline Google Group](https://groups.google.com/g/plany-timeline) link",
        "Make sure you are signed in with the Gmail account you use on your phone",
        "Click the blue **Join group** button",
      ],
    },
    {
      type: "h2",
      text: "Step 2: Become an official beta tester",
    },
    {
      type: "p",
      text: "After joining the group, you must officially opt in to the testing program on the Google Play portal: [Plany Google Play testing portal](https://play.google.com/apps/testing/com.timelineapp)",
    },
    {
      type: "image",
      src: "/blog/join-beta/step-2-become-a-tester.png",
      alt: "Google Play testing portal for Plany Timeline with the Become a tester button",
      width: 1004,
      height: 400,
      caption: "Click “Become a tester” to officially opt in to the beta program.",
    },
    {
      type: "ol",
      items: [
        "Open the [testing portal](https://play.google.com/apps/testing/com.timelineapp)",
        "Click the **Become a tester** button",
        "You will see a confirmation message once you are successfully registered",
      ],
    },
    {
      type: "h2",
      text: "Step 3: Download or update from the Play Store",
    },
    {
      type: "p",
      text: "Once you are registered as a tester, Google will display a confirmation screen. You have two options to download or update the app:",
    },
    {
      type: "ul",
      items: [
        "**Option A (direct from the Google web screen):** click the inline blue link on the confirmation page that says “download it on Google Play” to open the build directly.",
        "**Option B (direct link):** head straight to the app listing here: [Download Plany Timeline on Google Play](https://play.google.com/store/apps/details?id=com.timelineapp)",
      ],
    },
    {
      type: "image",
      src: "/blog/join-beta/step-3-download-play-store.png",
      alt: "Google Play confirmation screen showing the download it on Google Play link for Plany Timeline",
      width: 998,
      height: 457,
      caption: "Use Google's on-screen link or our direct link above to install the beta.",
    },
    {
      type: "note",
      text: "If you see an authorization error or the update does not appear instantly, wait 2–5 minutes for Google to sync your account status, then refresh the page.",
    },
    {
      type: "h2",
      text: "Troubleshooting",
    },
    {
      type: "table",
      headers: ["Issue", "Fix"],
      rows: [
        [
          "App not visible on the Play Store",
          "Confirm you joined the Google Group in Step 1 and that your browser and Play Store use the same Gmail account",
        ],
        [
          "“Become a tester” shows an authorization error",
          "Join the Google Group first, wait 2–5 minutes, then refresh the testing portal",
        ],
        [
          "Update does not appear after opting in",
          "Give Google a few minutes to sync, then reopen the Play Store listing or check for updates in Manage apps & device",
        ],
        [
          "Wrong Google account signed in",
          "Sign out, sign back in with the Gmail account you used for the Google Group, and repeat Step 2",
        ],
      ],
    },
    {
      type: "h2",
      text: "What's new inside this beta",
    },
    {
      type: "ul",
      items: [
        "**Advanced AI Timelines:** smart planning features that automatically adapt and change based on your day.",
        "**Daily Tasks feature:** a fluid, streamlined interface built for tracking your routines and habits.",
        "**Bug fixes & speed:** core optimization tweaks to ensure a completely smooth experience without lag.",
      ],
    },
    {
      type: "h2",
      text: "FAQ",
    },
    {
      type: "faq",
      items: [
        {
          question: "Is the Plany Timeline beta free?",
          answer:
            "Yes. Joining the Google Group and the Play Store testing program is completely free.",
        },
        {
          question: "Why can't I find Plany Timeline on the Play Store?",
          answer:
            "The beta build is only visible to authorized testers. Make sure you have joined the Google Group (Step 1) and opted in on the testing portal (Step 2) with the same Gmail account you use on the Play Store.",
        },
        {
          question: "How long does it take for access to activate?",
          answer:
            "Usually instantly, but Google can take 2–5 minutes to sync your tester status. If the app still does not appear, refresh the page or reopen the Play Store.",
        },
        {
          question: "How do I leave the beta program?",
          answer:
            "Open the testing portal link again and choose “Leave the program”. You can then uninstall the beta build and reinstall the public version from the Play Store.",
        },
      ],
    },
    {
      type: "h2",
      text: "We need your feedback",
    },
    {
      type: "p",
      text: "If you encounter any bugs during testing or have features you want to suggest, reach out to us directly through our community channels. Happy planning!",
    },
    {
      type: "links",
      items: [
        {
          label: "Plany Timeline Google Group",
          href: "https://groups.google.com/g/plany-timeline",
          external: true,
        },
        {
          label: "Google Play testing portal",
          href: "https://play.google.com/apps/testing/com.timelineapp",
          external: true,
        },
        {
          label: "Download on Google Play",
          href: "https://play.google.com/store/apps/details?id=com.timelineapp",
          external: true,
        },
        {
          label: "hq@plany.space",
          href: "mailto:hq@plany.space",
          external: true,
        },
      ],
    },
  ],
};
