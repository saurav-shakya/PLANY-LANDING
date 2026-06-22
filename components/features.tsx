"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Clock,
  LucideIcon,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Bell,
  Sparkles,
  MessageCircle,
};

export function Features() {
  return (
    <section id="features" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-plany-secondary">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-medium md:text-4xl">
            Built for days that actually happen
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full border-plany-border bg-plany-surface/50 transition-colors hover:border-white/10">
                  <div className="mb-4 inline-flex rounded-lg border border-plany-border bg-plany-neutral p-2.5">
                    <Icon className="h-5 w-5 text-plany-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-plany-secondary">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
