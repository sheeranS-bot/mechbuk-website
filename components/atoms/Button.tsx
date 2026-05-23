import { cn } from "@/lib/cn";

/**
 * Typed wrapper around the .btn CSS classes in globals.css.
 * Variants mirror the draft design system:
 *   solid  → .btn            (ink fill, accent on hover)
 *   alt    → .btn alt        (outline, ink-fill on hover)
 *   ghost  → .btn ghost      (rule outline)
 * Styles are NOT redefined here — this only composes class strings, so
 * call sites (including <a> links) share one variant/size grammar.
 */
export type ButtonVariant = "solid" | "alt" | "ghost";
export type ButtonSize = "md" | "sm";

export function buttonClasses({
  variant = "solid",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "btn",
    variant === "alt" && "alt",
    variant === "ghost" && "ghost",
    size === "sm" && "sm",
    className,
  );
}
