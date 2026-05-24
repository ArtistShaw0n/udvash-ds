"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type RadioSize = "sm" | "md" | "lg";

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  size?: RadioSize;
  label?: React.ReactNode;
};

/*
 * Radio — single-select control. MUI-style ring + filled dot when selected
 * (matches the V2 Figma pattern; same source family as Checkbox node 1:5011).
 */

const ringSize: Record<RadioSize, string> = {
  sm: "size-4",
  md: "size-6", // 24px Figma source
  lg: "size-7",
};

const dotSize: Record<RadioSize, string> = {
  sm: "size-1.5",
  md: "size-2.5",
  lg: "size-3",
};

const labelSize: Record<RadioSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-md",
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { size = "md", label, className, disabled, ...rest },
  ref,
) {
  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <span className="relative inline-flex">
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          className={cn(
            "peer appearance-none rounded-full border border-border-input bg-surface transition-colors",
            "checked:border-brand",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
            "disabled:cursor-not-allowed",
            ringSize[size],
          )}
          {...rest}
        />
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-0 peer-checked:opacity-100",
            dotSize[size],
          )}
        />
      </span>
      {label && <span className={cn("text-primary", labelSize[size])}>{label}</span>}
    </label>
  );
});
