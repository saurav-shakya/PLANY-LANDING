"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Clock,
  LucideIcon,
  MapPin,
  MessageCircle,
  Settings2,
  Sparkles,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Bell,
  MapPin,
  Sparkles,
  Settings2,
  MessageCircle,
};

export function Features() {
  return (
    <section id="features" className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-overline text-plany-secondary">Features</p>
          <h2 className="mt-3 text-3xl font-medium md:text-[2.125rem]">
            Built for real days
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-plany-secondary">
            Plan it, do it, own it. No extra noise.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-xl border border-plany-border bg-plany-surface/40 p-6 transition-colors hover:border-white/15 hover:bg-plany-surface/70"
              >
                <div className="mb-4 inline-flex rounded-lg border border-plany-border bg-plany-neutral p-3 transition-colors group-hover:border-white/10">
                  <Icon className="h-5 w-5 text-plany-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-medium md:text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plany-secondary">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
