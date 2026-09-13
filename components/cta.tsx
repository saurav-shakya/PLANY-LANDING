"use client";

import { StoreBadges } from "@/components/store-badges";
import { Reveal } from "@/components/reveal";

export function Cta() {
  return (
    <section className="section-gap px-4 md:px-6">
      <Reveal>
        <div className="folk-card mx-auto max-w-3xl px-6 py-14 text-center md:px-12 md:py-16">
          <h2 className="display-section">try it on your next busy day.</h2>
          <p className="mt-4 text-base text-plany-secondary">
            Free to start. No card needed. Android, on Google Play.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreBadges />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
