import { cn } from "@/lib/utils";

const PLANY_MARK_PATH =
  "M14,0h19v1h-19z M11,1h24v1h-24z M8,2h15v1h-15z M32,2h4v1h-4z M7,3h14v1h-14z M25,3h5v1h-5z M33,3h3v1h-3z M6,4h24v1h-24z M34,4h3v1h-3z M5,5h26v1h-26z M34,5h3v1h-3z M4,6h26v1h-26z M34,6h3v1h-3z M4,7h26v1h-26z M33,7h4v1h-4z M3,8h26v1h-26z M33,8h3v1h-3z M2,9h25v1h-25z M32,9h4v1h-4z M2,10h19v1h-19z M31,10h5v1h-5z M1,11h16v1h-16z M29,11h7v1h-7z M1,12h15v1h-15z M22,12h13v1h-13z M0,13h16v1h-16z M21,13h14v1h-14z M0,14h15v1h-15z M20,14h14v1h-14z M0,15h15v1h-15z M20,15h13v1h-13z M0,16h14v1h-14z M19,16h14v1h-14z M0,17h14v1h-14z M19,17h13v1h-13z M0,18h13v1h-13z M18,18h12v1h-12z M1,19h13v1h-13z M17,19h12v1h-12z M1,20h27v1h-27z M2,21h24v1h-24z M9,22h12v1h-12z M22,22h1v1h-1z";

const MARK_WIDTH = 37;
const MARK_HEIGHT = 23;

type PlanyMarkProps = {
  size?: number;
  className?: string;
};

export function PlanyMark({ size = 32, className }: PlanyMarkProps) {
  const height = Math.round((size * MARK_HEIGHT) / MARK_WIDTH);

  return (
    <svg
      viewBox={`0 0 ${MARK_WIDTH} ${MARK_HEIGHT}`}
      width={size}
      height={height}
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path fill="currentColor" d={PLANY_MARK_PATH} />
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
        plany
      </span>
    </span>
  );
}