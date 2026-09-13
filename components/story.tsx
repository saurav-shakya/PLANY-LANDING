"use client";

import Image from "next/image";
import { STORY_BEATS, ILLUSTRATIONS } from "@/lib/illustrations";
import { Reveal } from "@/components/reveal";
import { Sticker } from "@/components/sticker";
import { cn } from "@/lib/utils";

export function Story() {
  return (
    <section id="product" className="section-gap scroll-mt-24 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center md:mb-14">
          <p className="text-sm font-medium tracking-tight text-plany-accent/90">
            the story
          </p>
          <h2 className="display-section mx-auto mt-3 max-w-3xl">
            a tuesday, told as a timeline
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-plany-secondary">
            Lists hide time. Dumb reminders miss the place. Nobody asks if you
            finished. Plany is the other version of that day.
          </p>
        </Reveal>

        <Reveal>
          <figure className="relative overflow-hidden rounded-[28px] border border-white/10 bg-plany-surface shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <Image
              src={ILLUSTRATIONS.dayStory}
              alt="Illustrated day floating as a glowing vertical timeline with walk, work, a grocery pin, and a check-in"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
        </Reveal>

        <div className="mt-16 grid items-center gap-8 md:mt-20 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <figure className="overflow-hidden rounded-[28px] border border-white/10 bg-plany-surface">
              <Image
                src={ILLUSTRATIONS.listVsTime}
                alt="Illustration of a crumpled todo list falling apart next to a glowing green timeline"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm font-medium tracking-tight text-plany-accent/90">
              what&apos;s in the way
            </p>
            <h3 className="display-section mt-3">
              lists don&apos;t show time. reminders feel dumb. nobody asks.
            </h3>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-plany-secondary">
              <li>Your todo app is a pile. You still don&apos;t know when anything happens.</li>
              <li>Pings hit at the wrong time, or never when you&apos;re finally there.</li>
              <li>You mark it done — or you don&apos;t. Nobody asks why.</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          {STORY_BEATS.map((beat, i) => {
            const imageFirst = i % 2 === 1;
            return (
              <Reveal key={beat.id}>
                <article
                  id={beat.id === "timeline" ? undefined : beat.id}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={cn(imageFirst ? "lg:order-2" : "lg:order-1")}>
                    <Sticker
                      src={beat.sticker}
                      alt={beat.stickerAlt}
                      size={108}
                      rotate={i % 2 === 0 ? -8 : 10}
                      float
                    />
                    <p className="mt-5 text-sm font-medium tracking-tight text-plany-accent/90">
                      {beat.overline}
                    </p>
                    <h3 className="display-section mt-3 max-w-md">{beat.title}</h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-plany-secondary">
                      {beat.story}
                    </p>
                  </div>

                  <div className={cn("relative", imageFirst ? "lg:order-1" : "lg:order-2")}>
                    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
                      <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[280px] sm:max-w-[300px]">
                        <Image
                          src={beat.image}
                          alt={beat.imageAlt}
                          fill
                          className="object-cover object-top"
                          sizes="300px"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
