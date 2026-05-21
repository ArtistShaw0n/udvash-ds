"use client";

import { cn } from "@/lib/cn";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
};

export function Switch({ checked, onChange, label, disabled, className }: SwitchProps) {
  return (
    <label className={cn("inline-flex items-center gap-2 cursor-pointer", disabled && "opacity-60 cursor-not-allowed", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex w-9 h-5 rounded-full transition-colors",
          checked ? "bg-brand" : "bg-disabled"
        )}
      >
        <span
          className={cn(
            "inline-block size-4 rounded-full bg-onbrand shadow-sm transition-transform",
            "absolute top-0.5",
            checked ? "translate-x-[18px]" : "translate-x-0.5"
          )}
        />
      </button>
      {label && <span className="text-md text-ink">{label}</span>}
    </label>
  );
}
