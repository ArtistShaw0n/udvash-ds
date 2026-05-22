import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  iconRight?: ReactNode;
};

export function Input({
  invalid = false,
  iconRight,
  className,
  disabled,
  ...rest
}: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center w-full max-w-[336px] h-10 px-3 rounded-sm border bg-surface transition-colors",
        invalid ? "border-error" : "border-line",
        disabled ? "bg-disabled border-line-disabled" : "focus-within:border-line-brand focus-within:ring-2 focus-within:ring-line-brand/20",
        className
      )}
    >
      <input
        className={cn(
          "flex-1 bg-transparent text-md text-ink outline-none placeholder:text-placeholder",
          disabled && "text-disabled-text cursor-not-allowed"
        )}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        {...rest}
      />
      {iconRight && <span className="ml-2 inline-flex text-muted">{iconRight}</span>}
    </div>
  );
}
