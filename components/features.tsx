"use client";

import Image from "next/image";
import { USE_CASES } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

export function Features() {
  return (
    <section id="features" className="section-gap scroll-mt-24 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 md:mb-14">
          <p className="text-center text-sm font-medium tracking-tight text-plany-accent/90">
            what it does
          </p>
          <h2 className="display-section mx-auto mt-3 max-w-2xl text-center">
            the day, then the follow-through
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-plany-secondary">
            Timeline-first planning, a live focus countdown, location nudges,
            and AI check-ins in four tones.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {USE_CASES.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <article className="folk-card group h-full overflow-hidden transition-colors hover:border-white/14">
                <div className="relative aspect-[16/11] overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="px-5 py-5 md:px-6 md:py-6">
                  <h3 className="text-xl font-medium tracking-tight md:text-[1.35rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-plany-secondary">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
