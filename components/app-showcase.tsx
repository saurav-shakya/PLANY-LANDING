"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SHOWCASE_ITEMS } from "@/lib/screenshots";
import { cn } from "@/lib/utils";

function ShowcasePhone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-[300px]">
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)]"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-plany-border bg-[#f8f8f8] shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]">
        <div className="relative aspect-[9/19.5] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 90vw, 300px"
          />
        </div>
      </div>
    </div>
  );
}

export function AppShowcase() {
  return (
    <section className="px-4 pb-8 md:px-6 md:pb-16">
      <div className="mx-auto max-w-5xl space-y-20 md:space-y-24">
        {SHOWCASE_ITEMS.slice(1).map((item, i) => {
          const imageFirst = item.align === "left";

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={cn(
                  "relative flex justify-center",
                  imageFirst ? "lg:order-1" : "lg:order-2"
                )}
              >
                <ShowcasePhone src={item.image} alt={item.imageAlt} />
              </div>

              <div
                className={cn(
                  "space-y-4",
                  imageFirst ? "lg:order-2" : "lg:order-1"
                )}
              >
                <p className="text-overline text-plany-secondary">{item.overline}</p>
                <h3 className="text-2xl font-medium md:text-3xl">{item.title}</h3>
                <p className="max-w-md text-base leading-relaxed text-plany-secondary">
                  {item.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
