"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StoreBadges } from "@/components/store-badges";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export function DownloadHero() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto flex w-full max-w-[1480px] flex-1 flex-col gap-10 lg:min-h-[calc(100vh-7.5rem)] lg:flex-row lg:items-stretch lg:gap-8 xl:gap-12">
      {/* Left — Claude-style centered stack */}
      <div className="flex w-full flex-col items-center justify-center px-2 py-10 text-center sm:px-4 lg:w-[46%] lg:px-6 lg:py-0 xl:w-[44%]">
        <div className="flex w-full max-w-[360px] flex-col items-center">
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-white md:text-[2.75rem] lg:text-[2.9rem]"
          >
            Start planning
            <br className="hidden sm:block" /> on a timeline
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 max-w-[300px] text-[15px] leading-relaxed text-plany-secondary md:text-base"
          >
            Free to start. No card needed.
            <br />
            Available on Google Play.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-9 w-full rounded-2xl border border-white/[0.1] bg-[#111214]/90 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-6"
          >
            <p className="text-[15px] font-medium tracking-tight text-white">
              Get the app
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-plany-secondary">
              Takes about a minute to set up.
            </p>

            <div className="mt-5">
              <StoreBadges layout="panel" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right — looping hero video */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative hidden min-h-0 flex-1 lg:block"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/loginthem.avif"
            aria-label="Plany planning on a timeline"
          >
            <source src="/login-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
