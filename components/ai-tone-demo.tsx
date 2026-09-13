"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Sticker } from "@/components/sticker";
import { AI_TONES, type ToneId } from "@/lib/constants";
import { ILLUSTRATIONS } from "@/lib/illustrations";

export function AiToneDemo() {
  const [activeTone, setActiveTone] = useState<ToneId>("normal");
  const active = AI_TONES.find((tone) => tone.id === activeTone) ?? AI_TONES[1];
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 md:mb-14">
          <p className="text-center text-sm font-medium tracking-tight text-plany-accent/90">
            AI accountability
          </p>
          <h2 className="display-section mx-auto mt-3 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-center">
            an AI that talks like you want
            <Sticker
              src={ILLUSTRATIONS.chat}
              alt=""
              size={64}
              rotate={8}
              float
              className="hidden sm:inline-flex"
            />
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-plany-secondary">
            Pick how Plany follows up — Hard, Normal, Motivated, or
            Professional.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="folk-card p-5 md:p-6">
              <div
                className="flex flex-wrap gap-2"
                role="tablist"
                aria-label="AI accountability tones"
              >
                {AI_TONES.map((tone) => {
                  const selected = activeTone === tone.id;
                  return (
                    <button
                      key={tone.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="tone-panel"
                      id={`tone-tab-${tone.id}`}
                      onClick={() => setActiveTone(tone.id)}
                      className="folk-chip"
                      data-active={selected}
                    >
                      {tone.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTone}
                  id="tone-panel"
                  role="tabpanel"
                  aria-labelledby={`tone-tab-${activeTone}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22 }}
                  className="mt-6 rounded-2xl border border-plany-border bg-plany-neutral p-5"
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
                    <span className="folk-chip text-xs">Yes, done</span>
                    <span className="folk-chip text-xs">
                      Not yet, here&apos;s why
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative flex justify-center">
              <div
                className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.1),transparent_70%)]"
                aria-hidden
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTone}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28 }}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
