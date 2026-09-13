"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AwsStartupsBadge } from "@/components/aws-startups-badge";
import { Sticker } from "@/components/sticker";
import { StoreBadges } from "@/components/store-badges";
import { ILLUSTRATIONS } from "@/lib/illustrations";
import { fadeUpProps } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-glow relative overflow-hidden px-4 pb-8 pt-28 md:px-6 md:pb-12 md:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Sticker
          src={ILLUSTRATIONS.spark}
          alt=""
          size={72}
          rotate={-18}
          float
          className="absolute left-[3%] top-24 hidden sm:block md:left-[8%] md:top-36 md:!h-[92px] md:!w-[92px]"
        />
        <Sticker
          src={ILLUSTRATIONS.check}
          alt=""
          size={64}
          rotate={14}
          float
          className="absolute right-[3%] top-28 hidden sm:block md:right-[10%] md:top-40 md:!h-[78px] md:!w-[78px]"
        />
        <Sticker
          src={ILLUSTRATIONS.pin}
          alt=""
          size={56}
          rotate={-8}
          float
          className="absolute bottom-10 left-[6%] hidden lg:block"
        />
        <Sticker
          src={ILLUSTRATIONS.chat}
          alt=""
          size={60}
          rotate={12}
          float
          className="absolute bottom-12 right-[6%] hidden lg:block"
        />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div {...fadeUpProps(reduceMotion)} className="mb-6 flex justify-center">
          <AwsStartupsBadge />
        </motion.div>

        <motion.h1
          {...fadeUpProps(reduceMotion, 0.06)}
          className="display-hero mx-auto max-w-4xl text-balance text-plany-primary"
        >
          your day,{" "}
          <span className="relative inline-flex items-center">
            on a
            <Sticker
              src={ILLUSTRATIONS.timeline}
              alt=""
              size={56}
              rotate={-8}
              float
              priority
              className="mx-1 hidden align-middle sm:inline-flex md:mx-2 md:!h-[88px] md:!w-[88px]"
            />
          </span>{" "}
          timeline.
        </motion.h1>

        <motion.p
          {...fadeUpProps(reduceMotion, 0.14)}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-plany-secondary md:text-lg"
        >
          Not another list. A vertical day: time, duration, color. Then
          reminders that fire, and an AI that asks if you finished.
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
    </section>
  );
}
