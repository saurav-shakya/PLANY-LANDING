"use client";

import { motion } from "framer-motion";
import { StoreBadges } from "@/components/store-badges";

export function Cta() {
  return (
    <section id="download" className="px-4 py-16 md:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl rounded-2xl border border-plany-border bg-plany-surface/60 px-6 py-14 text-center md:px-12 md:py-16"
      >
        <h2 className="text-3xl font-medium md:text-4xl">
          Plan your first day in under a minute.
        </h2>
        <p className="mt-4 text-plany-secondary">Free to start. No credit card.</p>
        <div className="mt-8 flex justify-center">
          <StoreBadges />
        </div>
      </motion.div>
    </section>
  );
}
