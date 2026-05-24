"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type InputSize = "sm" | "md" | "lg";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: InputSize;
  invalid?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

/*
 * Figma source: V2 Input Field (node 1:4360)
 *   bg #FFFFFF (grey-0 → bg-surface)
 *   border 1px #B9B9B9 (grey-500 → border-input)
 *   rounded 5px (sm)
 *   default size 320×40
 *   placeholder #DCDCDC (grey-200 → text-placeholder)
 *   text Inter Regular 14px
 */

const sizeClass: Record<InputSize, string> = {
  sm: "h-8  px-2.5 text-sm  rounded-sm",
  md: "h-10 px-3   text-base rounded-sm", // Figma source
  lg: "h-12 px-3.5 text-md  rounded-md",
};

const iconPad: Record<InputSize, { left: string; right: string; pos: string }> = {
  sm: { left: "pl-8",  right: "pr-8",  pos: "left-2.5 right-2.5" },
  md: { left: "pl-10", right: "pr-10", pos: "left-3 right-3" },
  lg: { left: "pl-11", right: "pr-11", pos: "left-3.5 right-3.5" },
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", invalid, iconLeft, iconRight, className, disabled, ...rest },
  ref,
) {
  const baseInput = cn(
    "block w-full border border-border-input bg-surface text-primary placeholder:text-placeholder font-sans",
    "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
    "disabled:cursor-not-allowed disabled:bg-subtle",
    "aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger/20",
    sizeClass[size],
    iconLeft ? iconPad[size].left : undefined,
    iconRight ? iconPad[size].right : undefined,
    className,
  );

  if (!iconLeft && !iconRight) {
    return (
      <input
        ref={ref}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={baseInput}
        {...rest}
      />
    );
  }

  return (
    <div className="relative inline-flex w-full">
      {iconLeft && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 flex items-center text-muted",
            iconPad[size].pos.split(" ")[0],
          )}
        >
          {iconLeft}
        </span>
      )}
      <input
        ref={ref}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={baseInput}
        {...rest}
      />
      {iconRight && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 flex items-center text-muted",
            iconPad[size].pos.split(" ")[1],
          )}
        >
          {iconRight}
        </span>
      )}
    </div>
  );
});
