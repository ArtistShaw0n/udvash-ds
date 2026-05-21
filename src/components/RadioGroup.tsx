"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Option<T extends string> = { value: T; label: ReactNode };

type RadioGroupProps<T extends string> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  name: string;
  disabled?: boolean;
  className?: string;
};

export function RadioGroup<T extends string>({
  options,
  value,
  onChange,
  name,
  disabled,
  className,
}: RadioGroupProps<T>) {
  return (
    <div role="radiogroup" className={cn("inline-flex flex-col gap-2", className)}>
      {options.map((opt) => {
        const selected = opt.value === value;
        return (
          <label key={opt.value} className={cn("inline-flex items-center gap-2 cursor-pointer", disabled && "opacity-60 cursor-not-allowed")}>
            <span
              className={cn(
                "inline-flex size-[18px] items-center justify-center rounded-full border-[1.5px] transition-colors",
                selected ? "border-brand" : "border-line"
              )}
            >
              {selected && <span className="size-[8px] rounded-full bg-brand" />}
            </span>
            <input
              type="radio"
              name={name}
              checked={selected}
              disabled={disabled}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <span className="text-md text-ink">{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}
