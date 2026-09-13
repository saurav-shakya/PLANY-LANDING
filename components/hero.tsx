"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AwsStartupsBadge } from "@/components/aws-startups-badge";
import { Sticker } from "@/components/sticker";
import { StoreBadges } from "@/components/store-badges";
import { PhoneMockup } from "@/components/phone-mockup";
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
          size={92}
          rotate={-18}
          float
          className="absolute left-[4%] top-28 hidden sm:block md:left-[8%] md:top-36"
        />
        <Sticker
          src={ILLUSTRATIONS.check}
          alt=""
          size={78}
          rotate={14}
          float
          className="absolute right-[6%] top-32 hidden sm:block md:right-[10%] md:top-40"
        />
        <Sticker
          src={ILLUSTRATIONS.pin}
          alt=""
          size={70}
          rotate={-8}
          float
          className="absolute bottom-24 left-[8%] hidden lg:block"
        />
        <Sticker
          src={ILLUSTRATIONS.chat}
          alt=""
          size={74}
          rotate={12}
          float
          className="absolute bottom-28 right-[7%] hidden lg:block"
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
              size={72}
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
          Not another list. A vertical day — time, duration, color — then
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

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.28 }}
        className="relative mx-auto mt-10 max-w-4xl md:mt-14"
      >
        <Sticker
          src={ILLUSTRATIONS.focus}
          alt=""
          size={96}
          rotate={-12}
          float
          className="absolute -left-2 top-8 z-20 hidden md:block lg:-left-6"
        />
        <Sticker
          src={ILLUSTRATIONS.timeline}
          alt=""
          size={110}
          rotate={10}
          float
          className="absolute -right-2 top-16 z-20 hidden md:block lg:-right-4"
        />
        <PhoneMockup />
      </motion.div>
    </section>
  );
}
