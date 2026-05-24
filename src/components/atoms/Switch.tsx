"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type SwitchSize = "sm" | "md" | "lg";

export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  size?: SwitchSize;
  label?: React.ReactNode;
};

/*
 * Switch — toggle slider. No formalised Figma master in V2 (settings rows
 * use MUI Switch). Sized off our token scale; brand colour when on.
 */

const trackSize: Record<SwitchSize, string> = {
  sm: "h-4 w-7",   // 16×28
  md: "h-5 w-9",   // 20×36
  lg: "h-6 w-11",  // 24×44
};

const thumbSize: Record<SwitchSize, string> = {
  sm: "size-3 peer-checked:translate-x-3",
  md: "size-4 peer-checked:translate-x-4",
  lg: "size-5 peer-checked:translate-x-5",
};

const labelSize: Record<SwitchSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-md",
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
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
          type="checkbox"
          role="switch"
          disabled={disabled}
          className={cn(
            "peer appearance-none rounded-full bg-border transition-colors",
            "checked:bg-brand",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
            "disabled:cursor-not-allowed",
            trackSize[size],
          )}
          {...rest}
        />
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-surface shadow-card transition-transform",
            thumbSize[size],
          )}
        />
      </span>
      {label && <span className={cn("text-primary", labelSize[size])}>{label}</span>}
    </label>
  );
});
