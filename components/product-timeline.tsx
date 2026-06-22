"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TIMELINE_TASKS } from "@/lib/constants";

function timeToMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function ProductTimeline() {
  const dayStart = 7 * 60;
  const dayEnd = 22 * 60;
  const nowMinutes = 12 * 60 + 30;

  return (
    <section id="product" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-plany-secondary">
            The product
          </p>
          <h2 className="mt-3 text-3xl font-medium md:text-4xl">
            Your whole day, one scroll away
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-plany-secondary">
            A vertical timeline that shows when things happen — not just what&apos;s
            on your list.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-plany-border p-0">
            <div className="grid md:grid-cols-[1fr_1.2fr]">
              <div className="border-b border-plany-border p-6 md:border-b-0 md:border-r md:p-8">
                <h3 className="text-xl font-medium">Timeline-first planning</h3>
                <p className="mt-3 text-sm leading-relaxed text-plany-secondary">
                  Drag tasks through your day. See gaps, overlaps, and what&apos;s
                  coming next — like Structured, but built for how you actually live.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Color-coded tasks by type",
                    "Live 'now' indicator",
                    "Location pins on errands",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-plany-secondary"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-plany-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative bg-[#0a0b0d] p-6 md:p-8">
                <div className="relative min-h-[360px]">
                  <div className="absolute bottom-0 left-6 top-0 w-px bg-plany-border" />

                  <div
                    className="absolute left-4 right-0 z-10 flex items-center gap-2"
                    style={{
                      top: `${((nowMinutes - dayStart) / (dayEnd - dayStart)) * 100}%`,
                    }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <div className="h-px flex-1 bg-red-500/50" />
                  </div>

                  {TIMELINE_TASKS.map((task, i) => {
                    const start = timeToMinutes(task.start);
                    const end = timeToMinutes(task.end);
                    const top = ((start - dayStart) / (dayEnd - dayStart)) * 100;
                    const height = Math.max(
                      ((end - start) / (dayEnd - dayStart)) * 100,
                      8
                    );

                    return (
                      <motion.div
                        key={task.title}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className="absolute left-10 right-2 rounded-lg border border-white/5 px-3 py-2"
                        style={{
                          top: `${top}%`,
                          height: `${height}%`,
                          backgroundColor: `${task.color}18`,
                          borderLeftColor: task.color,
                          borderLeftWidth: 3,
                        }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium">{task.title}</p>
                            <p className="text-xs text-plany-secondary">
                              {task.start} – {task.end}
                            </p>
                          </div>
                          {task.title === "Buy groceries" && (
                            <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
