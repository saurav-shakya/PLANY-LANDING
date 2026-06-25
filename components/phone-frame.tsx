import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "w-[240px] md:w-[260px]",
  md: "w-[280px] md:w-[300px]",
  lg: "w-[300px] md:w-[360px]",
};

export function PhoneFrame({
  src,
  alt,
  priority = false,
  className,
  size = "md",
}: PhoneFrameProps) {
  return (
    <div className={cn("mx-auto", sizes[size], className)}>
      <div className="rounded-[2.75rem] border border-plany-border-strong bg-[#1a1b1e] p-[11px] shadow-[0_24px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.08]">
        <div className="overflow-hidden rounded-[2.15rem] bg-[#f8f8f8]">
          <div className="relative aspect-[9/19.5] w-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 300px, 360px"
              priority={priority}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type ScreenshotPanelProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ScreenshotPanel({ src, alt, className }: ScreenshotPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-plany-border bg-[#f8f8f8] shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.06]",
        className
      )}
    >
      <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[300px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 90vw, 300px"
        />
      </div>
    </div>
  );
}
