"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const contentEase = [0.32, 0.72, 0, 1] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-gap scroll-mt-24 px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-8 text-center md:mb-10">
          <p className="text-sm font-medium tracking-tight text-plany-accent/90">
            FAQ
          </p>
          <h2 className="display-section mt-3">common questions</h2>
        </Reveal>

        <Reveal>
          <div className="folk-card divide-y divide-white/[0.06] overflow-hidden">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.03] md:px-6"
                  >
                    <span className="text-[15px] font-medium tracking-tight md:text-base">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 24 }
                      }
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
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          reduceMotion
                            ? { opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{
                          height: {
                            duration: reduceMotion ? 0 : 0.32,
                            ease: contentEase,
                          },
                          opacity: {
                            duration: reduceMotion ? 0 : 0.22,
                            ease: "easeOut",
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-plany-secondary md:px-6">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
