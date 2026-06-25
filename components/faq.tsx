"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
            Questions, answered
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
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
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-medium">{item.question}</span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-plany-secondary transition-transform duration-200",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-plany-border px-5 pb-5 pt-0">
                      <p className="pt-3 text-sm leading-relaxed text-plany-secondary">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}