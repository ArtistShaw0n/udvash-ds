"use client";

import type { ChangeEvent } from "react";
import { cn } from "@/lib/cn";

type PhoneInputProps = {
  countryCode?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
};

export function PhoneInput({
  countryCode = "+880",
  value,
  onChange,
  placeholder = "1XXXXXXXXX",
  disabled,
  invalid,
  className,
}: PhoneInputProps) {
  return (
    <div
      className={cn(
        "flex items-stretch w-full max-w-[336px] h-10 rounded-sm border bg-surface overflow-hidden",
        invalid ? "border-error" : "border-line",
        disabled && "bg-disabled border-line-disabled",
        className
      )}
    >
      <span className="flex items-center px-3 bg-surface-subtle text-md text-ink border-r border-line">
        {countryCode}
      </span>
      <input
        type="tel"
        inputMode="numeric"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid}
        className={cn(
          "flex-1 bg-transparent px-3 text-md text-ink outline-none placeholder:text-placeholder",
          disabled && "text-disabled-text cursor-not-allowed"
        )}
      />
    </div>
  );
}
