"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const contentEase = [0.32, 0.72, 0, 1] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-overline text-plany-secondary">FAQ</p>
          <h2 className="mt-3 text-3xl font-medium md:text-[2.125rem]">
            Common questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <Card className="overflow-hidden border-plany-border p-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-plany-surface/40"
                  >
                    <span className="font-medium">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 24,
                      }}
                      className="inline-flex shrink-0"
                    >
                      <Plus
                        className={cn(
                          "h-5 w-5 text-plany-secondary transition-colors duration-200",
                          isOpen && "text-plany-primary"
                        )}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.32, ease: contentEase },
                          opacity: { duration: 0.22, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -6 }}
                          animate={{ y: 0 }}
                          exit={{ y: -4 }}
                          transition={{ duration: 0.28, ease: contentEase }}
                          className="border-t border-plany-border px-5 pb-5"
                        >
                          <p className="pt-3 text-sm leading-relaxed text-plany-tertiary">
                            {item.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
