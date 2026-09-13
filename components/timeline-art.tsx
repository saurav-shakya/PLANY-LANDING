"use client";

import { motion, useReducedMotion } from "framer-motion";

const BLOCKS = [
  {
    time: "4:51",
    end: "5:10",
    label: "Walk",
    meta: "19 min",
    color: "#22c55e",
    soft: "rgba(34,197,94,0.18)",
    height: 72,
  },
  {
    time: "10:30",
    end: "11:15",
    label: "Pan card apply",
    meta: "45 min",
    color: "#fb7185",
    soft: "rgba(251,113,133,0.16)",
    height: 88,
  },
  {
    time: "12:00",
    end: "13:15",
    label: "Checklist setup",
    meta: "1h 15m",
    color: "#fbbf24",
    soft: "rgba(251,191,36,0.16)",
    height: 110,
  },
  {
    time: "13:55",
    end: "14:55",
    label: "Timeline bugs",
    meta: "1h · 2/2 subtasks",
    color: "#f87171",
    soft: "rgba(248,113,113,0.16)",
    height: 96,
  },
] as const;

export function TimelineArt() {
  const reduceMotion = useReducedMotion();

  return (
    <figure className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0b0d] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 20%, rgba(22,163,74,0.12), transparent 55%)",
        }}
      />
      <div className="relative grid gap-8 px-5 py-8 md:grid-cols-[1fr_1.15fr] md:gap-12 md:px-10 md:py-12">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium tracking-tight text-plany-accent">
              today, drawn as a line
            </p>
            <h3 className="mt-3 max-w-sm text-3xl font-medium tracking-tight md:text-4xl">
              every block has a time, a length, and a color
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-plany-secondary">
              Walk in the morning. Paperwork at 10:30. Deep work at noon. You
              see the day before it runs you over.
            </p>
          </div>
          <p className="mt-8 hidden text-xs tracking-tight text-plany-secondary/80 md:block">
            same tasks as the app — just drawn, not generated
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-2 top-2 left-[4.35rem] w-px bg-white/10 md:left-[4.85rem]" />
          <motion.div
            aria-hidden
            className="absolute left-[4.2rem] z-10 h-3 w-3 rounded-full bg-plany-accent shadow-[0_0_0_6px_rgba(22,163,74,0.2)] md:left-[4.7rem]"
            initial={{ top: "12%" }}
            animate={reduceMotion ? { top: "42%" } : { top: ["12%", "78%", "12%"] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }
          />

          <ol className="relative space-y-3">
            {BLOCKS.map((block, i) => (
              <motion.li
                key={block.label}
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : i * 0.08,
                }}
                className="grid grid-cols-[4rem_1fr] items-stretch gap-3 md:grid-cols-[4.5rem_1fr]"
              >
                <div className="pt-3 text-right">
                  <p className="text-xs font-medium tabular-nums text-plany-primary">
                    {block.time}
                  </p>
                  <p className="text-[11px] tabular-nums text-plany-secondary">
                    {block.end}
                  </p>
                </div>
                <div
                  className="rounded-2xl border border-white/[0.06] px-4 py-3"
                  style={{
                    minHeight: block.height,
                    background: block.soft,
                    boxShadow: `inset 3px 0 0 ${block.color}`,
                  }}
                >
                  <p className="text-[15px] font-medium tracking-tight text-plany-primary">
                    {block.label}
                  </p>
                  <p className="mt-1 text-xs text-plany-secondary">{block.meta}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="sr-only">
        Illustrated Plany day: Walk 19 minutes, Pan card apply, Checklist setup,
        and Timeline bugs on a vertical timeline.
      </figcaption>
    </figure>
  );
}
