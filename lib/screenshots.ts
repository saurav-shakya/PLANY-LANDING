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
      "Tasks sit on a vertical timeline with color-coded blocks, durations, and subtasks — not buried in a flat list.",
    image: SCREENSHOTS.timeline,
    imageAlt: "Plany timeline showing Walk, Pan card apply, Checklist App setup, and completed tasks",
    align: "right" as const,
  },
  {
    id: "focus",
    overline: "Stay on track",
    title: "Focus mode with a live countdown",
    description:
      "Enter a distraction-free session for any task. See time remaining, skip, or mark done — with location context when it matters.",
    image: SCREENSHOTS.focusMode,
    imageAlt: "Plany focus mode with flip-clock timer and Delhi location tag",
    align: "left" as const,
  },
  {
    id: "task-detail",
    overline: "Deep task control",
    title: "Every task, fully detailed",
    description:
      "Notes, checklists, and status actions in one sheet. Complete, skip, or let Plany AI follow up when you're done.",
    image: SCREENSHOTS.taskDetail,
    imageAlt: "Plany task detail with checklist progress and complete actions",
    align: "right" as const,
  },
  {
    id: "live",
    overline: "Real-time progress",
    title: "Know exactly where you are in your day",
    description:
      "A live now-indicator, remaining time on active tasks, and what's coming next — so you're never guessing.",
    image: SCREENSHOTS.timelineLive,
    imageAlt: "Plany live timeline with filming task and Delhi location reminder",
    align: "left" as const,
  },
];
