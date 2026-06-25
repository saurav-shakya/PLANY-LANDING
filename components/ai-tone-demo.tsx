"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AI_TONES, type ToneId } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function AiToneDemo() {
  const [activeTone, setActiveTone] = useState<ToneId>("normal");
  const active = AI_TONES.find((tone) => tone.id === activeTone) ?? AI_TONES[1];

  return (
    <section className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="text-overline text-plany-secondary">AI accountability</p>
          <h2 className="mt-3 text-3xl font-medium md:text-[2.125rem]">
            An AI that talks like you want
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-plany-secondary">
            Pick how Plany follows up — from gentle nudges to no-nonsense
            check-ins.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
        >
          <Card className="border-plany-border bg-plany-surface/80">
            <div className="flex flex-wrap gap-2">
              {AI_TONES.map((tone) => (
                <button
                  key={tone.id}
                  type="button"
                  onClick={() => setActiveTone(tone.id)}
                  className={cn(
                    "radius-btn px-3 py-1.5 text-sm font-medium transition-all",
                    activeTone === tone.id
                      ? "bg-plany-tertiary text-plany-border-strong"
                      : "border border-plany-border text-plany-secondary hover:border-white/15 hover:text-plany-primary"
                  )}
                >
                  {tone.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTone}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
                className="radius-card mt-6 border border-plany-border bg-plany-neutral p-5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-plany-accent/15">
                    <span className="h-2 w-2 rounded-full bg-plany-accent" />
                  </div>
                  <span className="text-xs font-medium text-plany-secondary">
                    Plany AI
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-plany-accent">
                  Task: {active.task}
                </p>
                <p className="text-base leading-relaxed md:text-lg">
                  {active.message}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="radius-btn border border-plany-border px-3 py-1.5 text-xs text-plany-secondary">
                    Yes, done
                  </span>
                  <span className="radius-btn border border-plany-border px-3 py-1.5 text-xs text-plany-secondary">
                    Not yet — here&apos;s why
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </Card>

          <div className="relative flex justify-center">
            <div
              className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.1),transparent_70%)]"
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTone}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28 }}
                className="relative w-full max-w-[280px] sm:max-w-[300px]"
              >
                <div className="overflow-hidden rounded-[1.75rem] border border-plany-border bg-black shadow-[0_20px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06]">
                  <div className="relative aspect-[9/19.5] w-full">
                    <Image
                      src={active.screenshot}
                      alt={active.screenshotAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 280px, 300px"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}