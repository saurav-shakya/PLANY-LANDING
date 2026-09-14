"use client";

import { Reveal } from "@/components/reveal";

const LIST = ["Walk", "Pan card", "Checklist app", "Fix timeline", "Groceries"];
const LINE = [
  { label: "Walk", when: "4:51 · 19m", color: "#22c55e" },
  { label: "Pan card", when: "10:30 · 45m", color: "#fb7185" },
  { label: "Checklist", when: "12:00 · 1h", color: "#fbbf24" },
];

export function ListVsTime() {
  return (
    <Reveal>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-[#121316] p-5">
          <p className="text-xs font-medium tracking-[0.08em] text-plany-secondary">
            A LIST
          </p>
          <ul className="mt-4 space-y-2.5">
            {LIST.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-sm text-plany-secondary"
              >
                ☐ {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-plany-secondary">
            Five things. No when. No how long.
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[#0c0d10] p-5">
          <p className="text-xs font-medium tracking-[0.08em] text-plany-accent">
            A TIMELINE
          </p>
          <ul className="mt-4 space-y-2.5">
            {LINE.map((item) => (
              <li
                key={item.label}
                className="rounded-xl px-3 py-2.5"
                style={{
                  background: `${item.color}22`,
                  boxShadow: `inset 3px 0 0 ${item.color}`,
                }}
              >
                <p className="text-sm font-medium text-plany-primary">{item.label}</p>
                <p className="text-xs text-plany-secondary">{item.when}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-plany-secondary">
            Same day. You can see the hours.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
