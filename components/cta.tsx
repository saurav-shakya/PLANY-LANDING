"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="section-gap px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl glass-card px-6 py-14 text-center md:px-12 md:py-16"
      >
        <h2 className="text-3xl font-medium md:text-[2.125rem]">
          Plan your first day in under a minute.
        </h2>
        <p className="mt-4 text-plany-secondary">Free to start. No credit card.</p>
        <div className="mt-8 flex justify-center">
          <Button href="/download" variant="primary" size="md">
            Download Plany
          </Button>
        </div>
      </motion.div>
    </section>
  );
}