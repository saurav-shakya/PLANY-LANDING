"use client";

import { SOCIAL_PROOF } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

export function SocialProof() {
  return (
    <section className="px-4 pb-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-8 text-center md:mb-10">
          <p className="text-sm font-medium tracking-tight text-plany-accent/90">
            early testers
          </p>
          <h2 className="display-section mt-3">what they notice first</h2>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-3">
          {SOCIAL_PROOF.map((item, i) => (
            <Reveal key={item.author} delay={i * 0.05}>
              <figure className="folk-card flex h-full flex-col p-6">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-plany-primary md:text-base">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-plany-secondary">
                  <span className="font-medium text-plany-primary">
                    {item.author}
                  </span>
                  <span> · {item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
