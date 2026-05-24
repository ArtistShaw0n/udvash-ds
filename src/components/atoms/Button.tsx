"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
};

/*
 * Figma source: V2 Button (node 1:4433)
 *   bg #55347B (brand-500 → bg-brand)
 *   text #FFFFFF (grey-0 → text-onbrand)
 *   font Inter Regular 14px, leading 12px
 *   px 20 py 4, rounded 5px (sm)
 *   default size 130×36
 *
 * Secondary / ghost / destructive variants extrapolate the same shape onto
 * other semantic colour tokens; they don't have explicit Figma renderings in
 * V2 yet, so we mark them subordinate.
 */

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-onbrand hover:bg-brand-hover focus-visible:bg-brand-hover disabled:bg-disabled disabled:text-onbrand",
  secondary:
    "bg-brand-subtle text-brand hover:bg-brand-subtle/70 disabled:bg-disabled disabled:text-onbrand",
  ghost:
    "bg-transparent text-primary hover:bg-subtle disabled:text-placeholder",
  destructive:
    "bg-danger text-onbrand hover:opacity-90 disabled:bg-disabled disabled:text-onbrand",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-sm gap-1.5",
  md: "h-9 px-5 py-1 text-base rounded-sm gap-2", // Figma source = 36×130 px-20 py-4
  lg: "h-11 px-6 text-base rounded-md gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth = false,
    iconLeft,
    iconRight,
    loading = false,
    disabled,
    type = "button",
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-sans font-normal leading-tight transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link focus:outline-none",
        "disabled:cursor-not-allowed",
        variantClass[variant],
        sizeClass[size],
        fullWidth && "w-full",
        className,
      )}
      {...rest}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      ) : (
        iconLeft
      )}
      <span>{children}</span>
      {!loading && iconRight}
    </button>
  );
});
