"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-gap scroll-mt-24 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 md:mb-14">
          <p className="text-center text-sm font-medium tracking-tight text-plany-accent/90">
            how it works
          </p>
          <h2 className="display-section mx-auto mt-3 max-w-2xl text-center">
            three steps. then the day starts.
          </h2>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.06}>
              <article className="folk-card h-full px-5 py-6 md:px-6 md:py-7">
                <span className="text-xs font-medium tracking-[0.08em] text-plany-accent">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-medium tracking-tight md:text-xl">
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
