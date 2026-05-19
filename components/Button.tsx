import { forwardRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Typed wrapper around the .btn / .btn-* CSS classes defined in
 * globals.css. Renders <button> by default; pass `as="a"` (with `href`)
 * for link-styled buttons.
 *
 * Styles are NOT redefined here — this is purely a class composition
 * helper so call sites stop hand-rolling `className="btn btn-primary btn-sm"`.
 */
export type ButtonVariant = "primary" | "accent" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Composes the button CSS class string. Exported so call sites that
 * can't render a real `<button>` or `<a>` — most commonly `<Link>` from
 * Next.js, which must remain a `<Link>` to preserve client-side routing
 * and prefetching — can still adopt the same variant/size grammar via
 *   <Link className={buttonClasses({ variant: "primary", size: "sm" })}>
 */
export function buttonClasses({
  variant = "secondary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "accent" && "btn-accent",
    variant === "secondary" && "btn-secondary",
    variant === "ghost" && "btn-ghost",
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
    size === "icon" && "btn-icon",
    className,
  );
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = "secondary", size = "md", className, children } = props;
    if (props.as === "a") {
      const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={buttonClasses({ variant, size, className })}
          {...rest}
        >
          {children}
        </a>
      );
    }
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={buttonClasses({ variant, size, className })}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
