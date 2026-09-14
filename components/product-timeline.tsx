"use client";

import { ScreenshotPanel } from "@/components/phone-frame";
import { Reveal } from "@/components/reveal";
import { SCREENSHOTS } from "@/lib/screenshots";

const DETAILS = [
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
];

export function ProductTimeline() {
  return (
    <section id="product" className="scroll-mt-24 px-4 pb-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="folk-card overflow-hidden p-5 md:p-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 flex justify-center lg:order-1">
                <ScreenshotPanel
                  src={SCREENSHOTS.timeline}
                  alt="Plany timeline showing Walk, Pan card apply, and daily tasks"
                  className="w-full max-w-[300px]"
                />
              </div>
              <div className="order-1 space-y-6 lg:order-2">
                <div>
                  <p className="text-sm font-medium tracking-tight text-plany-accent/90">
                    the product
                  </p>
                  <h2 className="display-section mt-3">
                    your whole day, one scroll away
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-plany-secondary">
                    A vertical timeline for when things happen: time slot,
                    duration, and color. Not just what&apos;s on your list.
                  </p>
                </div>
                <ul className="space-y-4">
                  {DETAILS.map((item) => (
                    <li
                      key={item.label}
                      className="border-l-2 border-plany-accent/40 pl-4"
                    >
                      <p className="font-medium tracking-tight">{item.label}</p>
                      <p className="mt-1 text-sm text-plany-secondary">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
