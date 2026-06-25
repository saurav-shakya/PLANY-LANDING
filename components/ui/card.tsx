import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "radius-card border border-plany-border bg-plany-surface p-6",
        className
      )}
      {...props}
    />
  );
}