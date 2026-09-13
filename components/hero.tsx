"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AwsStartupsBadge } from "@/components/aws-startups-badge";
import { Chip } from "@/components/ui/chip";
import { StoreBadges } from "@/components/store-badges";
import { HERO_CHIPS } from "@/lib/constants";
import { fadeUpProps } from "@/lib/motion";
import { PhoneMockup } from "@/components/phone-mockup";

const chipPositions = [
  "left-0 top-[12%] md:left-[2%] animate-float",
  "right-0 top-[22%] md:right-[2%] animate-float-delayed",
  "left-2 bottom-[28%] md:left-[4%] animate-float-delayed",
  "right-0 bottom-[16%] md:right-[2%] animate-float",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-glow relative overflow-visible px-4 pb-10 pt-28 md:px-6 md:pb-16 md:pt-36">
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          {...fadeUpProps(reduceMotion)}
          className="mb-7 flex justify-center"
        >
          <AwsStartupsBadge />
        </motion.div>

        <motion.h1
          {...fadeUpProps(reduceMotion, 0.06)}
          className="display-hero mx-auto max-w-4xl text-plany-primary"
        >
          your day, on a timeline.
        </motion.h1>

        <motion.p
          {...fadeUpProps(reduceMotion, 0.14)}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-plany-secondary md:text-lg"
        >
          Time slots, duration, color. Reminders that fire at the right time
          and place. An AI that asks if you finished.
        </motion.p>

        <motion.div
          {...fadeUpProps(reduceMotion, 0.22)}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <StoreBadges />
          <Link
            href="/pricing"
            className="text-[15px] text-plany-secondary underline decoration-white/15 underline-offset-4 transition-colors hover:text-plany-primary hover:decoration-white/40"
          >
            see pricing
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.28 }}
        className="relative mx-auto mt-12 max-w-4xl md:mt-16"
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
    </section>
  );
}
