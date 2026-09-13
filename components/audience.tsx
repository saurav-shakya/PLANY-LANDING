"use client";

import { useState } from "react";
import { AUDIENCES } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

export function Audience() {
  const [activeId, setActiveId] = useState<(typeof AUDIENCES)[number]["id"]>(
    AUDIENCES[0].id
  );
  const active = AUDIENCES.find((item) => item.id === activeId) ?? AUDIENCES[0];

  return (
    <section id="for" className="scroll-mt-24 px-4 pb-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-sm font-medium tracking-tight text-plany-accent/90">
            made for real days
          </p>
          <div
            className="mt-5 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Who Plany is for"
          >
            {AUDIENCES.map((audience) => {
              const selected = audience.id === activeId;
              return (
                <button
                  key={audience.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="audience-panel"
                  id={`audience-tab-${audience.id}`}
                  onClick={() => setActiveId(audience.id)}
                  className="folk-chip"
                  data-active={selected}
                >
                  {audience.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <div
            id="audience-panel"
            role="tabpanel"
            aria-labelledby={`audience-tab-${active.id}`}
            className="folk-card mx-auto max-w-2xl px-5 py-6 text-center md:px-8 md:py-7"
          >
            <h3 className="text-xl font-medium tracking-tight md:text-2xl">
              {active.title}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-plany-secondary">
              {active.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
