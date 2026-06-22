import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Chip({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-plany-border bg-plany-surface px-3 py-1.5 text-sm text-plany-secondary",
        className
      )}
      {...props}
    />
  );
}
