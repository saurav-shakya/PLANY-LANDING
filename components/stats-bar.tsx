"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "Timeline-first", label: "Not another todo list" },
  { value: "4 tones", label: "AI accountability styles" },
  { value: "Location", label: "Reminders when nearby" },
  { value: "Free", label: "Start planning today" },
];

export function StatsBar() {
  return (
    <section className="border-y border-plany-border bg-plany-surface/30 px-4 py-10 md:px-6">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="text-center md:text-left"
          >
            <p className="text-lg font-medium md:text-xl">{stat.value}</p>
            <p className="mt-1 text-sm text-plany-secondary">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
