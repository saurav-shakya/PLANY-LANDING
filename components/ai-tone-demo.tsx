"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AI_TONES, type ToneId } from "@/lib/constants";
import { getToneMessage } from "@/lib/tone";
import { cn } from "@/lib/utils";

export function AiToneDemo() {
  const [activeTone, setActiveTone] = useState<ToneId>("normal");
  const activeMessage = getToneMessage(activeTone);

  return (
    <section className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-overline text-plany-secondary">AI accountability</p>
          <h2 className="mt-3 text-3xl font-medium md:text-[2.125rem]">
            An AI that talks like you want
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-plany-secondary">
            Pick how Plany follows up — from gentle nudges to no-nonsense check-ins.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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

            <motion.div
              key={activeTone}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
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
              <p className="text-base leading-relaxed md:text-lg">{activeMessage}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="radius-btn border border-plany-border px-3 py-1.5 text-xs text-plany-secondary">
                  Yes, done
                </span>
                <span className="radius-btn border border-plany-border px-3 py-1.5 text-xs text-plany-secondary">
                  Not yet — here&apos;s why
                </span>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}