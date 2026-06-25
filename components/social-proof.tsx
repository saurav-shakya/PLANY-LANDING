"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SOCIAL_PROOF } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-plany-border bg-plany-surface/50 text-center">
            <div className="mb-5 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-plany-tertiary text-plany-tertiary"
                />
              ))}
            </div>
            <blockquote className="text-lg font-medium leading-relaxed md:text-xl">
              &ldquo;{SOCIAL_PROOF.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm text-plany-secondary">
              — {SOCIAL_PROOF.author}, {SOCIAL_PROOF.role}
            </figcaption>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}