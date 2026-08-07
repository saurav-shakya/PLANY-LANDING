"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { StoreBadges } from "@/components/store-badges";
import { Button } from "@/components/ui/button";
import {
  FREE_PLAN,
  LIFETIME_PERK,
  PRO_BILLING_OPTIONS,
  PRO_PLAN,
  PRICING_BY_REGION,
  PRICING_COMPARISON,
  regionFromTimezone,
  type ComparisonValue,
  type PricingRegion,
  type ProBillingInterval,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const BILLING_THEME: Record<
  ProBillingInterval,
  {
    glow: string;
    proBorder: string;
    proBg: string;
    accent: string;
    accentSoft: string;
    pill: string;
  }
> = {
  monthly: {
    glow: "radial-gradient(ellipse 70% 50% at 70% 40%, rgba(148,163,184,0.12), transparent 65%)",
    proBorder: "border-white/18",
    proBg: "bg-white/[0.05]",
    accent: "text-slate-300",
    accentSoft: "bg-slate-400/15 text-slate-300",
    pill: "bg-slate-400/20",
  },
  yearly: {
    glow: "radial-gradient(ellipse 70% 55% at 72% 38%, rgba(22,163,74,0.22), transparent 65%)",
    proBorder: "border-plany-accent/35",
    proBg: "bg-plany-accent/[0.06]",
    accent: "text-plany-accent",
    accentSoft: "bg-plany-accent/15 text-plany-accent",
    pill: "bg-plany-accent/25",
  },
  lifetime: {
    glow: "radial-gradient(ellipse 75% 55% at 72% 36%, rgba(217,169,74,0.2), transparent 65%)",
    proBorder: "border-amber-400/30",
    proBg: "bg-amber-400/[0.06]",
    accent: "text-amber-300",
    accentSoft: "bg-amber-400/15 text-amber-300",
    pill: "bg-amber-400/25",
  },
};

/** Shorter card bullets — full matrix is below. */
const FREE_CARD_FEATURES = FREE_PLAN.features;
const PRO_CARD_FEATURES = [
  "Everything in Free",
  "20 chats / day",
  "Task-related follow-up notifications",
  "Notification customization",
  "Memory",
  "Notes & Analytics (soon)",
  "Location-based reminders (soon)",
] as const;

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <Check
        className="mx-auto h-4 w-4 text-plany-accent"
        aria-label="Included"
      />
    );
  }
  if (value === false) {
    return (
      <Minus
        className="mx-auto h-4 w-4 text-plany-secondary/50"
        aria-label="Not included"
      />
    );
  }
  if (value === "soon") {
    return (
      <span className="text-xs font-medium text-plany-secondary">
        Coming soon
      </span>
    );
  }
  return (
    <span className="text-sm font-medium text-plany-primary">{value}</span>
  );
}

export function PricingContent({
  region: initialRegion = "US",
  allowClientFallback = false,
}: {
  region?: PricingRegion;
  /** When true (no Vercel geo), refine with timezone on the client. */
  allowClientFallback?: boolean;
}) {
  const [region, setRegion] = useState(initialRegion);
  const [billing, setBilling] = useState<ProBillingInterval>("yearly");

  useEffect(() => {
    setRegion(initialRegion);
  }, [initialRegion]);

  useEffect(() => {
    if (!allowClientFallback) return;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const fromTz = regionFromTimezone(timeZone);
    if (fromTz) setRegion(fromTz);
  }, [allowClientFallback]);

  const prices = PRICING_BY_REGION[region];
  const proPrice = prices[billing];
  const proPeriod = prices.periodLabels[billing];
  const theme = BILLING_THEME[billing];

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-8 -top-10 bottom-1/3 -z-10 md:-inset-x-20"
      >
        {(Object.keys(BILLING_THEME) as ProBillingInterval[]).map((id) => (
          <motion.div
            key={id}
            className="absolute inset-0 blur-2xl"
            style={{ backgroundImage: BILLING_THEME[id].glow }}
            initial={false}
            animate={{ opacity: billing === id ? 0.95 : 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="text-overline text-plany-secondary">Pricing</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Free for 14 days.{" "}
          <span className="text-plany-secondary">Pro when you want more.</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-plany-secondary md:text-base">
          Start planning today. Upgrade monthly, yearly, or lifetime.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-3 md:grid-cols-2 md:items-stretch">
        {/* Free */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex flex-col rounded-xl border border-white/[0.08] bg-[#0d0e10]/85 p-4 md:p-5"
        >
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-medium">{FREE_PLAN.name}</h2>
            <span className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-plany-secondary">
              {FREE_PLAN.badge}
            </span>
          </div>

          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-3xl font-semibold tracking-tight">
              {prices.free}
            </span>
            <span className="text-xs text-plany-secondary">
              / {FREE_PLAN.period}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-plany-secondary md:text-sm">
            {FREE_PLAN.description}
          </p>

          <ul className="mt-4 flex-1 space-y-2">
            {FREE_CARD_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs text-plany-secondary md:text-sm"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-plany-accent" />
                {feature}
              </li>
            ))}
          </ul>

          <Button
            href={FREE_PLAN.href}
            variant="ghost"
            size="md"
            className="mt-5 h-10 w-full text-sm"
          >
            {FREE_PLAN.cta}
          </Button>
        </motion.div>

        {/* Pro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className={cn(
            "relative flex flex-col overflow-hidden rounded-xl border p-4 shadow-[0_0_40px_rgba(255,255,255,0.03)] transition-[border-color,background-color,box-shadow] duration-500 md:p-5",
            theme.proBorder,
            theme.proBg
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-medium">{PRO_PLAN.name}</h2>
            <span
              className={cn(
                "rounded-md px-1.5 py-0.5 text-[10px] font-medium tracking-wide transition-colors duration-500",
                theme.accentSoft
              )}
            >
              {PRO_PLAN.badge}
            </span>
          </div>

          <div
            className="relative mt-3 grid grid-cols-3 gap-0.5 rounded-lg border border-white/[0.08] bg-black/35 p-0.5"
            role="tablist"
            aria-label="Billing interval"
          >
            {PRO_BILLING_OPTIONS.map((option) => {
              const active = billing === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setBilling(option.id)}
                  className={cn(
                    "relative z-10 rounded-md px-1.5 py-1.5 text-[11px] font-medium transition-colors duration-300 sm:text-xs",
                    active
                      ? "text-plany-primary"
                      : "text-plany-secondary hover:text-plany-primary"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="billing-pill"
                      className={cn(
                        "absolute inset-0 -z-10 rounded-md transition-colors duration-500",
                        theme.pill
                      )}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex min-h-[2.75rem] flex-wrap items-baseline gap-x-2 gap-y-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={`${region}-${billing}`}
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
              >
                <span className="text-3xl font-semibold tracking-tight">
                  {proPrice}
                </span>
                <span className="text-xs text-plany-secondary">{proPeriod}</span>
                {billing === "yearly" && (
                  <span
                    className={cn(
                      "rounded-md px-1.5 py-0.5 text-[10px] font-medium",
                      theme.accentSoft
                    )}
                  >
                    Save {prices.yearlySavePercent}%
                  </span>
                )}
                {billing === "lifetime" && (
                  <span
                    className={cn(
                      "rounded-md px-1.5 py-0.5 text-[10px] font-medium",
                      theme.accentSoft
                    )}
                  >
                    Pay once
                  </span>
                )}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-plany-secondary md:text-sm">
            {PRO_PLAN.description}
          </p>

          <ul className="mt-4 flex-1 space-y-2">
            {PRO_CARD_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs text-plany-secondary md:text-sm"
              >
                <Check
                  className={cn(
                    "mt-0.5 h-3.5 w-3.5 shrink-0 transition-colors duration-500",
                    theme.accent
                  )}
                />
                {feature}
              </li>
            ))}
            <AnimatePresence initial={false}>
              {billing === "lifetime" && (
                <motion.li
                  key="lifetime-perk"
                  initial={{ opacity: 0, height: 0, y: -4 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -4 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "flex items-start gap-2 overflow-hidden text-xs font-medium md:text-sm",
                    theme.accent
                  )}
                >
                  <Check
                    className={cn(
                      "mt-0.5 h-3.5 w-3.5 shrink-0",
                      theme.accent
                    )}
                  />
                  {LIFETIME_PERK}
                </motion.li>
              )}
            </AnimatePresence>
          </ul>

          <Button
            href={PRO_PLAN.href}
            variant="primary"
            size="md"
            className="mt-5 h-10 w-full text-sm"
          >
            {PRO_PLAN.cta}
          </Button>
        </motion.div>
      </div>

      {/* Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="mt-12"
      >
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Compare plans
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-plany-secondary">
            See what&apos;s included in Free and Pro side by side.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full min-w-[28rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                <th className="px-4 py-3 text-sm font-medium text-plany-secondary md:px-5">
                  Feature
                </th>
                <th className="w-24 px-3 py-3 text-center text-sm font-medium text-plany-primary md:w-32 md:px-5">
                  Free
                </th>
                <th className="w-24 px-3 py-3 text-center text-sm font-medium text-plany-primary md:w-32 md:px-5">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING_COMPARISON.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-white/[0.06] last:border-b-0"
                >
                  <td className="px-4 py-3 text-sm text-plany-secondary md:px-5">
                    {row.feature}
                  </td>
                  <td className="px-3 py-3 text-center md:px-5">
                    <ComparisonCell value={row.free} />
                  </td>
                  <td className="px-3 py-3 text-center md:px-5">
                    <ComparisonCell value={row.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.32 }}
        className="mt-12 flex flex-col items-center gap-4 text-center"
      >
        <p className="max-w-md text-sm leading-relaxed text-plany-secondary">
          Free is live on Google Play. No card needed to start planning.
        </p>
        <StoreBadges />
      </motion.div>
    </div>
  );
}
