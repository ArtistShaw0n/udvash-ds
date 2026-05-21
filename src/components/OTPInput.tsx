"use client";

import { useRef, type ChangeEvent, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";

type OTPInputProps = {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  className?: string;
};

export function OTPInput({
  length = 6,
  value,
  onChange,
  invalid = false,
  className,
}: OTPInputProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (i: number, e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").slice(-1);
    const next = value.split("");
    next[i] = v;
    const joined = next.join("").slice(0, length);
    onChange(joined);
    if (v && i < length - 1) inputsRef.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      inputsRef.current[i - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && i > 0) inputsRef.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < length - 1) inputsRef.current[i + 1]?.focus();
  };

  return (
    <div className={cn("inline-flex gap-2", className)} role="group" aria-label="OTP code">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => { inputsRef.current[i] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[i] ?? ""}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          aria-label={`Digit ${i + 1}`}
          className={cn(
            "size-10 md:size-11 text-center text-lg font-semibold rounded-sm border bg-surface",
            "focus:outline-none focus:border-line-brand focus:ring-2 focus:ring-line-brand/20",
            invalid ? "border-error text-error" : "border-line text-ink"
          )}
        />
      ))}
    </div>
  );
}
