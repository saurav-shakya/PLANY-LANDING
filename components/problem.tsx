"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PROBLEMS } from "@/lib/constants";

export function Problem() {
  return (
    <section className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-overline text-plany-secondary">The problem</p>
          <h2 className="mt-3 text-3xl font-medium md:text-[2.125rem]">
            Planning shouldn&apos;t feel this hard
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="h-full border-plany-border bg-plany-surface/60 transition-colors hover:border-white/10">
                <span className="text-overline text-plany-secondary/70">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-medium">{problem.title}</h3>
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