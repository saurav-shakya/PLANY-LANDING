"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { StoreBadges } from "@/components/store-badges";
import { HERO_CHIPS } from "@/lib/constants";
import { PhoneMockup } from "@/components/phone-mockup";

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

const chipPositions = [
  "left-0 top-[12%] md:left-[2%] animate-float",
  "right-0 top-[22%] md:right-[2%] animate-float-delayed",
  "left-2 bottom-[28%] md:left-[4%] animate-float-delayed",
  "right-0 bottom-[16%] md:right-[2%] animate-float",
];

export function Hero() {
  return (
    <section className="hero-glow relative overflow-visible px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36">
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-overline mb-4 text-plany-secondary"
        >
          Timeline planning · Smart reminders · AI accountability
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto max-w-4xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight md:text-[4rem] md:leading-[1.05]"
        >
          Your day, on a timeline.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-plany-secondary md:text-lg"
        >
          Plany turns tasks into a visual day plan — with reminders, location
          nudges, and an AI that actually follows up.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-8 flex justify-center"
        >
          <StoreBadges />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="relative mx-auto mt-14 max-w-4xl md:mt-20"
      >
        {HERO_CHIPS.map((chip, i) => (
          <Chip
            key={chip}
            className={`absolute z-20 hidden border-white/10 bg-plany-surface/95 text-plany-primary shadow-lg shadow-black/30 backdrop-blur md:inline-flex ${chipPositions[i]}`}
          >
            {chip}
          </Chip>
        ))}
        <PhoneMockup />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-10 flex justify-center md:mt-14"
      >
        <a
          href="#product"
          className="flex flex-col items-center gap-2 text-plany-secondary transition-colors hover:text-plany-primary"
          aria-label="Scroll to product section"
        >
          <span className="text-overline">See how it works</span>
          <ArrowDown className="h-5 w-5 animate-pulse-soft" />
        </a>
      </motion.div>
    </section>
  );
}
