"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import { ILLUSTRATIONS } from "@/lib/illustrations";
import { Reveal } from "@/components/reveal";
import { Sticker } from "@/components/sticker";

const STEP_STICKERS = [
  { src: ILLUSTRATIONS.timeline, alt: "Timeline sticker", rotate: -8 },
  { src: ILLUSTRATIONS.pin, alt: "Location pin sticker", rotate: 8 },
  { src: ILLUSTRATIONS.chat, alt: "Check-in sticker", rotate: -6 },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-gap scroll-mt-24 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 text-center md:mb-14">
          <p className="text-sm font-medium tracking-tight text-plany-accent/90">
            how it works
          </p>
          <h2 className="display-section mx-auto mt-3 max-w-2xl">
            three beats. then the day starts.
          </h2>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.06}>
              <article className="folk-card flex h-full flex-col items-start px-5 py-6 md:px-6 md:py-8">
                <Sticker
                  src={STEP_STICKERS[i].src}
                  alt={STEP_STICKERS[i].alt}
                  size={84}
                  rotate={STEP_STICKERS[i].rotate}
                  float
                />
                <span className="mt-5 text-xs font-medium tracking-[0.08em] text-plany-accent">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-medium tracking-tight md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-plany-secondary">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
