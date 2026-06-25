"use client";

import { motion } from "framer-motion";
import { ScreenshotPanel } from "@/components/phone-frame";
import { SCREENSHOTS } from "@/lib/screenshots";

export function ProductTimeline() {
  return (
    <section id="product" className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="text-overline text-plany-secondary">The product</p>
          <h2 className="mt-3 text-3xl font-medium md:text-[2.125rem]">
            Your whole day, one scroll away
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-plany-secondary">
            A vertical timeline for when things happen, not just what&apos;s on
            your list.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_65%)]" />
          <div className="overflow-hidden rounded-2xl border border-plany-border bg-plany-surface/50 p-4 md:p-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 lg:order-1">
                <ScreenshotPanel
                  src={SCREENSHOTS.timelineLive}
                  alt="Plany live timeline with active tasks and remaining time"
                  className="mx-auto max-w-[300px] lg:max-w-none"
                />
              </div>
              <div className="order-1 space-y-6 lg:order-2">
                <div>
                  <h3 className="text-2xl font-medium">Timeline-first planning</h3>
                  <p className="mt-3 text-base leading-relaxed text-plany-secondary">
                    Every task gets a time slot, duration, and color. Walk through
                    your morning, block out work, track subtasks. All on one
                    timeline.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      label: "Color-coded blocks",
                      detail: "Walk, work, errands. Each gets its own color.",
                    },
                    {
                      label: "Subtasks & notes",
                      detail: "Break big tasks into checklists without losing the timeline view.",
                    },
                    {
                      label: "Tap to expand",
                      detail: "Open any task for details, edit, complete, or skip.",
                    },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="border-l-2 border-plany-border-strong pl-4"
                    >
                      <p className="font-medium">{item.label}</p>
                      <p className="mt-1 text-sm text-plany-secondary">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
