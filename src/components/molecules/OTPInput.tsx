"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type OTPInputProps = {
  /** Number of digit boxes. Defaults to 4. */
  length?: number;
  /** Controlled value (digits only, length<=length). */
  value?: string;
  /** Initial value for uncontrolled mode. */
  defaultValue?: string;
  /** Fires on every change with the current full string. */
  onChange?: (value: string) => void;
  /** Fires when the user fills the last box. */
  onComplete?: (value: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

const sizeClass: Record<"sm" | "md" | "lg", string> = {
  sm: "size-9 text-md",
  md: "size-11 text-lg",
  lg: "size-12 text-xl",
};

/**
 * OTPInput — Figma Input/OTP. N separate digit boxes with auto-focus
 * advance, backspace retreat, and paste-fill across all boxes.
 */
export function OTPInput({
  length = 4,
  value: controlled,
  defaultValue = "",
  onChange,
  onComplete,
  autoFocus = false,
  disabled = false,
  invalid = false,
  size = "md",
  className,
  ariaLabel = "Verification code",
}: OTPInputProps) {
  const groupId = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultValue.slice(0, length));
  const value = (controlled ?? uncontrolled).slice(0, length);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (autoFocus) refs.current[0]?.focus();
  }, [autoFocus]);

  function commit(next: string) {
    if (controlled === undefined) setUncontrolled(next);
    onChange?.(next);
    if (next.length === length) onComplete?.(next);
  }

  function handleChange(i: number, raw: string) {
    const digits = raw.replace(/\D/g, "");
    if (!digits) {
      // Cleared box
      const next = value.slice(0, i) + value.slice(i + 1);
      commit(next);
      return;
    }
    // If multiple digits arrived (paste / autofill), distribute from i
    const chars = digits.split("");
    const arr = value.split("");
    for (const c of chars) {
      if (i >= length) break;
      arr[i++] = c;
    }
    const next = arr.join("").slice(0, length);
    commit(next);
    const focusIndex = Math.min(i, length - 1);
    refs.current[focusIndex]?.focus();
  }

  function handleKey(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowLeft" && i > 0) {
      e.preventDefault();
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < length - 1) {
      e.preventDefault();
      refs.current[i + 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!text) return;
    commit(text);
    refs.current[Math.min(text.length, length - 1)]?.focus();
  }

  return (
    <fieldset
      aria-label={ariaLabel}
      className={cn("inline-flex items-center gap-2", disabled && "opacity-60", className)}
    >
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          id={`${groupId}-${i}`}
          type="text"
          inputMode="numeric"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          maxLength={1}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          value={value[i] ?? ""}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKey(i, e)}
          onPaste={handlePaste}
          className={cn(
            "rounded-sm border border-line bg-surface text-center font-semibold tabular-nums text-ink",
            "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
            "aria-[invalid=true]:border-error",
            "disabled:cursor-not-allowed",
            sizeClass[size],
          )}
        />
      ))}
    </fieldset>
  );
}
