"use client";

import { PROBLEMS } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

export function Problem() {
  return (
    <section className="section-gap px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 md:mb-12">
          <p className="text-center text-sm font-medium tracking-tight text-plany-accent/90">
            what&apos;s in the way
          </p>
          <h2 className="display-section mx-auto mt-3 max-w-2xl text-center">
            planning shouldn&apos;t feel this hard
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="folk-card grid divide-y divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
            {PROBLEMS.map((problem, i) => (
              <div key={problem.title} className="px-6 py-7 md:px-7 md:py-8">
                <span className="text-xs font-medium tracking-[0.08em] text-plany-secondary/70">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-lg font-medium tracking-tight">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-plany-secondary">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
