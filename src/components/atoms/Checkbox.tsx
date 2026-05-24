"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & {
  size?: CheckboxSize;
  label?: React.ReactNode;
  indeterminate?: boolean;
};

/*
 * Figma source: V2 <Checkbox> (node 1:5011) — MUI-derived, primary brand
 * colour (#55347B). Outer 42×42 hit-target with 9px padding, inner 24×24
 * check icon. Our `md` size matches that proportion.
 */

const boxSize: Record<CheckboxSize, string> = {
  sm: "size-4",  // 16px
  md: "size-6",  // 24px Figma source
  lg: "size-7",  // 28px
};

const checkSize: Record<CheckboxSize, string> = {
  sm: "size-3",
  md: "size-4",
  lg: "size-5",
};

const labelSize: Record<CheckboxSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-md",
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { size = "md", label, indeterminate, className, disabled, ...rest },
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
          ref={(node) => {
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
            if (node) node.indeterminate = !!indeterminate;
          }}
          type="checkbox"
          disabled={disabled}
          className={cn(
            "peer appearance-none rounded-xs border border-border-input bg-surface transition-colors",
            "checked:border-brand checked:bg-brand",
            "indeterminate:border-brand indeterminate:bg-brand",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
            "disabled:cursor-not-allowed",
            boxSize[size],
          )}
          {...rest}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-onbrand",
            "opacity-0 peer-checked:opacity-100",
            indeterminate && "!opacity-100",
            checkSize[size],
          )}
        >
          {indeterminate ? (
            <path d="M3 8 L13 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          ) : (
            <path
              d="M3.5 8.5 L6.5 11.5 L12.5 4.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </span>
      {label && <span className={cn("text-primary", labelSize[size])}>{label}</span>}
    </label>
  );
});
