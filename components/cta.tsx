"use client";

import { StoreBadges } from "@/components/store-badges";
import { Reveal } from "@/components/reveal";
import { Sticker } from "@/components/sticker";
import { ILLUSTRATIONS } from "@/lib/illustrations";

export function Cta() {
  return (
    <section className="section-gap px-4 md:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-3xl overflow-visible">
          <Sticker
            src={ILLUSTRATIONS.check}
            alt=""
            size={86}
            rotate={-14}
            float
            className="absolute -left-4 -top-8 z-10 hidden sm:block md:-left-10"
          />
          <Sticker
            src={ILLUSTRATIONS.spark}
            alt=""
            size={80}
            rotate={12}
            float
            className="absolute -right-3 -top-6 z-10 hidden sm:block md:-right-8"
          />
          <div className="folk-card px-6 py-14 text-center md:px-12 md:py-16">
            <h2 className="display-section">try it on your next busy day.</h2>
            <p className="mt-4 text-base text-plany-secondary">
              Free to start. No card needed. Android, on Google Play.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
