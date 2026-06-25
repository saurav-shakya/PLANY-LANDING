export const SCREENSHOTS = {
  timeline: "/screenshots/timeline.png",
  timelineLive: "/screenshots/timeline-live.png",
  taskDetail: "/screenshots/task-detail.png",
  focusMode: "/screenshots/focus-mode.png",
} as const;

export const SHOWCASE_ITEMS = [
  {
    id: "timeline",
    overline: "Visual planning",
    title: "See your whole day at a glance",
    description:
      "Tasks on a vertical timeline with colors, durations, and subtasks. Not another flat list.",
    image: SCREENSHOTS.timeline,
    imageAlt: "Plany timeline showing Walk, Pan card apply, Checklist App setup, and completed tasks",
    align: "right" as const,
  },
  {
    id: "focus",
    overline: "Stay on track",
    title: "Focus mode with a live countdown",
    description:
      "Lock in on a task. See time left, skip it, or mark done. Location shows when it's relevant.",
    image: SCREENSHOTS.focusMode,
    imageAlt: "Plany focus mode with flip-clock timer and Delhi location tag",
    align: "left" as const,
  },
  {
    id: "task-detail",
    overline: "Deep task control",
    title: "Every task, fully detailed",
    description:
      "Notes, checklists, and actions in one place. Complete, skip, or let Plany check back later.",
    image: SCREENSHOTS.taskDetail,
    imageAlt: "Plany task detail with checklist progress and complete actions",
    align: "right" as const,
  },
  {
    id: "live",
    overline: "Real-time progress",
    title: "Know exactly where you are in your day",
    description:
      "Live indicator, time left on what's running, and what's up next. No guessing.",
    image: SCREENSHOTS.timelineLive,
    imageAlt: "Plany live timeline with filming task and Delhi location reminder",
    align: "left" as const,
  },
];
