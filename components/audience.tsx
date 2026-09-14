"use client";

import Image from "next/image";
import { useState } from "react";
import { AUDIENCES } from "@/lib/constants";
import { Reveal } from "@/components/reveal";
import { Sticker } from "@/components/sticker";

export function Audience() {
  const [activeId, setActiveId] = useState<(typeof AUDIENCES)[number]["id"]>(
    AUDIENCES[0].id
  );
  const active = AUDIENCES.find((item) => item.id === activeId) ?? AUDIENCES[0];

  return (
    <section id="for" className="scroll-mt-24 px-4 pb-2 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-sm font-medium tracking-tight text-plany-accent/90">
            who it&apos;s for
          </p>
          <div
            className="mt-6 flex flex-wrap justify-center gap-2"
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
                  className="folk-chip gap-2 !pl-1.5"
                  data-active={selected}
                >
                  <span className="relative inline-flex h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src={audience.sticker}
                      alt=""
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  {audience.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-7">
          <div
            id="audience-panel"
            role="tabpanel"
            aria-labelledby={`audience-tab-${active.id}`}
            className="folk-card mx-auto flex max-w-2xl flex-col items-center px-5 py-7 text-center md:px-8 md:py-8"
          >
            <Sticker
              src={active.sticker}
              alt={active.stickerAlt}
              size={96}
              rotate={-6}
              float
            />
            <h3 className="mt-5 text-xl font-medium tracking-tight md:text-2xl">
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
