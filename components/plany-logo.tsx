import { useId } from "react";
import { cn } from "@/lib/utils";

// Clean vector recreation of the Plany "P" mark: a slanted rounded
// parallelogram with a bold italic P cut out of it.
//
// The artwork is drawn upright, then skewed -20° about the centre so the
// italic slant matches the official logo. The P is punched out with a mask,
// so the SVG is transparent everywhere except the mark itself — no white box
// on any background — and it tints via currentColor like before.
// viewBox is cropped tight to the skewed artwork (no dead padding).
const MARK_WIDTH = 132;
const MARK_HEIGHT = 80;

// Italic slant applied to the whole mark (matches official logo ≈20°).
const SKEW = "translate(66 40) skewX(-20) translate(-66 -40)";

// Outer slanted tile.
const OUTER = { x: 32, y: 11, width: 68, height: 58, rx: 14 };
// Bold P: bowl + stem (punched out of the tile).
const BOWL_PATH = "M52 21 H80 C90 21 95 26 95 32 C95 38 90 43 80 43 H52 Z";
const STEM = { x: 52, y: 30, width: 14, height: 28, rx: 7 };
// Bowl counter (punched back in, so the P reads correctly).
const COUNTER = { x: 64, y: 28, width: 15, height: 10, rx: 4.5 };

type PlanyMarkProps = {
  size?: number;
  className?: string;
};

export function PlanyMark({ size = 32, className }: PlanyMarkProps) {
  // useId contains ":" which breaks url(#…) references — strip them.
  const maskId = `plany-mark-${useId().replace(/:/g, "")}`;
  const height = Math.round((size * MARK_HEIGHT) / MARK_WIDTH);

  return (
    <svg
      viewBox={`0 0 ${MARK_WIDTH} ${MARK_HEIGHT}`}
      width={size}
      height={height}
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={MARK_WIDTH}
          height={MARK_HEIGHT}
        >
          <rect width={MARK_WIDTH} height={MARK_HEIGHT} fill="black" />
          <g transform={SKEW}>
            <rect
              x={OUTER.x}
              y={OUTER.y}
              width={OUTER.width}
              height={OUTER.height}
              rx={OUTER.rx}
              fill="white"
            />
            <path d={BOWL_PATH} fill="black" />
            <rect
              x={STEM.x}
              y={STEM.y}
              width={STEM.width}
              height={STEM.height}
              rx={STEM.rx}
              fill="black"
            />
            <rect
              x={COUNTER.x}
              y={COUNTER.y}
              width={COUNTER.width}
              height={COUNTER.height}
              rx={COUNTER.rx}
              fill="white"
            />
          </g>
        </mask>
      </defs>
      <rect
        width={MARK_WIDTH}
        height={MARK_HEIGHT}
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}

type PlanyBrandProps = {
  markSize?: number;
  textClassName?: string;
  className?: string;
};

export function PlanyBrand({
  markSize = 32,
  textClassName,
  className,
}: PlanyBrandProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <PlanyMark size={markSize} className="text-plany-primary" />
      <span
        className={cn(
          "text-base font-semibold tracking-tight text-plany-primary",
          textClassName
        )}
      >
        Plany
      </span>
    </span>
  );
}
