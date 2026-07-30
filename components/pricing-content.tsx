"use client";

import { motion } from "framer-motion";
import { StoreBadges } from "@/components/store-badges";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingContent() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-overline text-plany-secondary">Pricing</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Free to start.
          <br className="hidden sm:block" />
          <span className="text-plany-secondary">Pro when you want more.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-plany-secondary md:text-lg">
          Start on Free today. Pro and Team are on the roadmap — join from the
          app and we&apos;ll let early users in first.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 md:grid-cols-3 md:items-stretch">
        {PRICING_TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 + i * 0.07 }}
            className={cn(
              "flex flex-col rounded-2xl border p-6 md:p-8",
              tier.highlighted
                ? "border-white/20 bg-white/[0.06] shadow-[0_0_60px_rgba(255,255,255,0.04)]"
                : "border-white/[0.08] bg-[#0d0e10]/80"
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-medium">{tier.name}</h2>
              <span
                className={cn(
                  "rounded-md px-2 py-0.5 text-[11px] font-medium tracking-wide",
                  tier.highlighted
                    ? "bg-plany-accent/15 text-plany-accent"
                    : "bg-white/[0.06] text-plany-secondary"
                )}
              >
                {tier.badge}
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">
                {tier.price}
              </span>
              <span className="text-sm text-plany-secondary">{tier.period}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-plany-secondary">
              {tier.description}
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-plany-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-plany-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href={tier.href}
              variant={tier.highlighted ? "primary" : "ghost"}
              size="md"
              className="mt-8 h-11 w-full"
            >
              {tier.cta}
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-16 flex flex-col items-center gap-5 text-center"
      >
        <p className="max-w-md text-sm leading-relaxed text-plany-secondary">
          Free is live on Google Play. No card needed to start planning.
        </p>
        <StoreBadges />
      </motion.div>
    </div>
  );
}
