"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PROBLEMS } from "@/lib/constants";

export function Problem() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-plany-secondary">
            The problem
          </p>
          <h2 className="mt-3 text-3xl font-medium md:text-4xl">
            Planning shouldn&apos;t feel this hard
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-plany-border bg-plany-surface/50">
                <h3 className="text-lg font-medium">{problem.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-plany-secondary">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
