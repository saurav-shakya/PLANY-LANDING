export const ILLUSTRATIONS = {
  dayStory: "/illustrations/illust-day-story.png",
  listVsTime: "/illustrations/illust-list-vs-time.png",
  timeline: "/illustrations/sticker-timeline.png",
  focus: "/illustrations/sticker-focus.png",
  pin: "/illustrations/sticker-pin.png",
  chat: "/illustrations/sticker-chat.png",
  spark: "/illustrations/sticker-spark.png",
  check: "/illustrations/sticker-check.png",
  student: "/illustrations/sticker-student.png",
  founder: "/illustrations/sticker-founder.png",
  freelance: "/illustrations/sticker-freelance.png",
  adhd: "/illustrations/sticker-adhd.png",
  errands: "/illustrations/sticker-errands.png",
} as const;

export const STORY_BEATS = [
  {
    id: "timeline",
    sticker: ILLUSTRATIONS.timeline,
    stickerAlt: "Illustrated sticker of a color-coded day timeline",
    overline: "the line",
    title: "put the day on a vertical timeline",
    story:
      "Walk, work, errands — each gets a time slot, a duration, and a color. You see the collision before it happens.",
    image: "/screenshots/timeline.png",
    imageAlt: "Plany timeline with Walk, Pan card apply, and daily tasks",
  },
  {
    id: "focus",
    sticker: ILLUSTRATIONS.focus,
    stickerAlt: "Illustrated sticker of a live countdown clock",
    overline: "the lock-in",
    title: "focus mode counts the minutes for you",
    story:
      "Tap a block. Watch the time left. Skip it or mark it done. The afternoon stops vanishing.",
    image: "/screenshots/focus-mode.png",
    imageAlt: "Plany focus mode with a live countdown timer",
  },
  {
    id: "location",
    sticker: ILLUSTRATIONS.pin,
    stickerAlt: "Illustrated sticker of a green location pin",
    overline: "the place",
    title: "nudged when you're already there",
    story:
      "Add a place to a task. Time reminders still fire — and a ping hits when you're near the store, not an hour after you left.",
    image: "/screenshots/timeline-live.png",
    imageAlt: "Plany live timeline with a location reminder",
  },
  {
    id: "ai",
    sticker: ILLUSTRATIONS.chat,
    stickerAlt: "Illustrated sticker of a check-in chat bubble",
    overline: "the ask",
    title: "then Plany asks if you finished",
    story:
      "Hard, Normal, Motivated, or Professional. Done? It asks. Not done? It asks why.",
    image: "/screenshots/tone-normal.jpg",
    imageAlt: "Plany AI check-in in Normal tone",
  },
] as const;
