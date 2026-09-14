import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Chip({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-plany-border bg-plany-surface px-3.5 py-1.5 text-sm tracking-tight text-plany-secondary",
        className
      )}
      {...props}
    />
  );
}
