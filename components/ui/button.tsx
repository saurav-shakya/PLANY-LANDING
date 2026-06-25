import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "link";
  size?: "sm" | "md";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "radius-btn bg-plany-tertiary text-plany-border-strong hover:bg-white",
          variant === "ghost" &&
            "radius-btn border border-plany-border bg-plany-surface/80 text-plany-primary backdrop-blur-md hover:border-white/20",
          variant === "link" &&
            "h-auto bg-transparent p-0 text-plany-secondary hover:text-plany-primary",
          size === "sm" && "h-8 px-3 text-sm",
          size === "md" && "h-9 px-4 text-sm",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };