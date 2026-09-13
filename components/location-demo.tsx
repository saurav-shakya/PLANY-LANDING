"use client";

import { useReducedMotion } from "framer-motion";

export function LocationDemo() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="folk-card overflow-hidden p-0">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#101214] sm:aspect-[4/5] md:aspect-[5/6]">
        <svg
          viewBox="0 0 320 400"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <rect width="320" height="400" fill="#101214" />
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="10" fill="none">
            <path d="M0 120 H320" />
            <path d="M0 220 H320" />
            <path d="M0 310 H320" />
            <path d="M70 0 V400" />
            <path d="M200 0 V400" />
          </g>
          <g stroke="rgba(255,255,255,0.04)" strokeWidth="2" fill="none">
            <path d="M0 70 H320" />
            <path d="M0 170 H320" />
            <path d="M0 270 H320" />
            <path d="M130 0 V400" />
            <path d="M260 0 V400" />
          </g>
          <path
            d="M60 300 C90 250, 140 210, 210 160"
            fill="none"
            stroke="rgba(22,163,74,0.45)"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
        </svg>

        <div className="absolute right-[18%] top-[28%] flex flex-col items-center">
          <span
            className={
              reduceMotion
                ? "absolute h-16 w-16 rounded-full bg-plany-accent/15"
                : "geo-ring absolute h-24 w-24 rounded-full border border-plany-accent/40"
            }
          />
          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-plany-accent text-plany-neutral shadow-[0_8px_24px_rgba(22,163,74,0.35)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M12 2c-3.3 0-6 2.6-6 6.1 0 4.5 6 13.4 6 13.4s6-8.9 6-13.4C18 4.6 15.3 2 12 2zm0 8.3A2.3 2.3 0 1 1 12 5.7a2.3 2.3 0 0 1 0 4.6z" />
            </svg>
          </span>
          <span className="relative z-10 mt-2 rounded-full bg-plany-surface/90 px-2.5 py-1 text-[11px] font-medium tracking-tight text-plany-primary">
            grocery store
          </span>
        </div>

        <div
          className={
            reduceMotion
              ? "absolute left-[62%] top-[38%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              : "you-dot absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          }
        >
          <span className="h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.15)]" />
          <span className="mt-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white">
            you
          </span>
        </div>

        <div
          className={
            reduceMotion
              ? "absolute inset-x-3 bottom-3 z-20 rounded-2xl border border-white/10 bg-[#16181c]/95 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur sm:inset-x-4 sm:bottom-4 sm:p-4"
              : "nudge-card absolute inset-x-3 bottom-3 z-20 rounded-2xl border border-white/10 bg-[#16181c]/95 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur sm:inset-x-4 sm:bottom-4 sm:p-4"
          }
          role="status"
          aria-live="polite"
        >
          <p className="text-[11px] font-medium tracking-tight text-plany-accent">
            location nudge
          </p>
          <p className="mt-1 text-sm font-medium text-plany-primary">
            Groceries. You&apos;re already here
          </p>
          <p className="mt-1 text-xs leading-relaxed text-plany-secondary">
            Add a place to a task. Plany waits until you&apos;re nearby, then
            pings. Not an hour after you left.
          </p>
        </div>
      </div>
    </div>
  );
}
