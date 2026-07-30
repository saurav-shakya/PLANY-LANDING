"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SOCIAL_PROOF } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-overline text-plany-secondary">Early users</p>
          <h2 className="mt-3 text-3xl font-medium md:text-[2.125rem]">
            What beta testers notice first
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {SOCIAL_PROOF.map((item, i) => (
            <motion.figure
              key={item.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0d0e10]/80 p-6 md:p-7"
            >
              <div className="mb-4 flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star
                    key={star}
                    className="h-3.5 w-3.5 fill-plany-tertiary text-plany-tertiary"
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-[15px] font-medium leading-relaxed text-plany-primary md:text-base">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/[0.06] pt-4 text-sm text-plany-secondary">
                <span className="font-medium text-plany-primary">
                  {item.author}
                </span>
                <span className="text-plany-secondary/80"> · {item.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
