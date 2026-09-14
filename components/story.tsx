"use client";

import { STORY_BEATS } from "@/lib/illustrations";
import { AppScreenshot } from "@/components/phone-frame";
import { ListVsTime } from "@/components/list-vs-time";
import { LocationDemo } from "@/components/location-demo";
import { Reveal } from "@/components/reveal";
import { Sticker } from "@/components/sticker";
import { TimelineArt } from "@/components/timeline-art";
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
          <TimelineArt />
        </Reveal>

        <div className="mt-16 grid items-center gap-8 md:mt-20 lg:grid-cols-2 lg:gap-14">
          <ListVsTime />
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
              <li>You mark it done, or you don&apos;t. Nobody asks why.</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          {STORY_BEATS.map((beat, i) => {
            const imageFirst = i % 2 === 1;
            const isLocation = beat.id === "location";

            return (
              <Reveal key={beat.id}>
                <article
                  id={beat.id}
                  className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16"
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
                    {isLocation ? (
                      <ol className="mt-6 max-w-md space-y-3 text-sm text-plany-secondary">
                        <li>
                          <span className="font-medium text-plany-primary">1. Pin a place.</span>{" "}
                          Drop the store, campus, or home on the task.
                        </li>
                        <li>
                          <span className="font-medium text-plany-primary">2. Keep walking.</span>{" "}
                          Plany doesn&apos;t nag from the other side of town.
                        </li>
                        <li>
                          <span className="font-medium text-plany-primary">3. Arrive, then it fires.</span>{" "}
                          The nudge hits when you&apos;re actually there.
                        </li>
                      </ol>
                    ) : null}
                  </div>

                  <div className={cn("relative", imageFirst ? "lg:order-1" : "lg:order-2")}>
                    {isLocation ? (
                      <LocationDemo />
                    ) : (
                      <AppScreenshot src={beat.image} alt={beat.imageAlt} />
                    )}
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
