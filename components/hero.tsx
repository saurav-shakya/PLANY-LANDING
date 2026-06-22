"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { StoreBadges } from "@/components/store-badges";
import { HERO_CHIPS } from "@/lib/constants";
import { PhoneMockup } from "@/components/phone-mockup";

const chipPositions = [
  "left-[4%] top-[18%] animate-float",
  "right-[6%] top-[28%] animate-float-delayed",
  "left-[8%] bottom-[32%] animate-float-delayed",
  "right-[4%] bottom-[22%] animate-float",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.08em] text-plany-secondary"
        >
          Timeline planning · Smart reminders · AI accountability
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl md:leading-[1.05]"
        >
          Your day, on a timeline.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-plany-secondary md:text-lg"
        >
          Plany turns tasks into a visual day plan — with reminders, location
          nudges, and an AI that actually follows up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <StoreBadges />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mx-auto mt-16 max-w-3xl"
      >
        {HERO_CHIPS.map((chip, i) => (
          <Chip
            key={chip}
            className={`absolute hidden border-white/10 bg-plany-surface/90 text-plany-primary shadow-lg backdrop-blur md:inline-flex ${chipPositions[i]}`}
          >
            {chip}
          </Chip>
        ))}
        <PhoneMockup />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#product"
          className="flex flex-col items-center gap-2 text-plany-secondary transition-colors hover:text-plany-primary"
          aria-label="Scroll to product section"
        >
          <span className="text-xs uppercase tracking-wider">See how it works</span>
          <ArrowDown className="h-5 w-5 animate-pulse-soft" />
        </a>
      </motion.div>
    </section>
  );
}
