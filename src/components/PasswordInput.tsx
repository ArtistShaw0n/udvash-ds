"use client";

import { useState, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  invalid?: boolean;
};

export function PasswordInput({
  invalid = false,
  className,
  disabled,
  ...rest
}: PasswordInputProps) {
  const [reveal, setReveal] = useState(false);
  return (
    <div
      className={cn(
        "flex items-center w-full max-w-[336px] md:w-[432px] lg:w-[528px] h-10 px-3 rounded-sm border bg-surface transition-colors",
        invalid ? "border-error" : "border-line",
        disabled ? "bg-disabled border-line-disabled" : "focus-within:border-line-brand focus-within:ring-2 focus-within:ring-line-brand/20",
        className
      )}
    >
      <input
        type={reveal ? "text" : "password"}
        className={cn(
          "flex-1 bg-transparent text-md text-ink outline-none placeholder:text-placeholder tracking-wider",
          disabled && "text-disabled-text cursor-not-allowed"
        )}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        {...rest}
      />
      <button
        type="button"
        onClick={() => setReveal(!reveal)}
        aria-label={reveal ? "Hide password" : "Show password"}
        className="ml-2 inline-flex items-center justify-center size-6 text-muted hover:text-ink"
      >
        <Icon name={reveal ? "eye-off" : "eye-on"} size={18} />
      </button>
    </div>
  );
}
