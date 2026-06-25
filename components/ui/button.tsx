import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost" | "link";
type ButtonSize = "sm" | "md";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  children?: React.ReactNode;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

function buttonStyles(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
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
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    if ("href" in props && props.href) {
      const { href, children } = props;
      return (
        <Link href={href} className={buttonStyles(variant, size, className)}>
          {children}
        </Link>
      );
    }

    const { href: _href, ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        ref={ref}
        className={buttonStyles(variant, size, className)}
        {...buttonProps}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };