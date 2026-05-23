import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type InputSize = "sm" | "md" | "lg";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: InputSize;
  invalid?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

const sizeClass: Record<InputSize, string> = {
  sm: "h-8 text-sm px-2.5 rounded-sm",
  md: "h-10 text-md px-2.5 rounded-sm",
  lg: "h-12 text-md px-3 rounded-md",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", invalid, iconLeft, iconRight, className, disabled, ...rest },
  ref,
) {
  const wrapperPad = size === "sm" ? "pl-8" : size === "lg" ? "pl-11" : "pl-9";
  const wrapperPadRight = size === "sm" ? "pr-8" : size === "lg" ? "pr-11" : "pr-9";

  if (iconLeft || iconRight) {
    return (
      <div className="relative inline-flex w-full">
        {iconLeft && (
          <span
            className={cn(
              "pointer-events-none absolute inset-y-0 flex items-center text-muted",
              size === "sm" ? "left-2" : size === "lg" ? "left-3" : "left-2.5",
            )}
            aria-hidden="true"
          >
            {iconLeft}
          </span>
        )}
        <input
          ref={ref}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          className={cn(
            "w-full bg-surface text-ink placeholder:text-placeholder",
            "border border-line",
            "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
            "disabled:bg-surface-subtle disabled:cursor-not-allowed",
            "aria-[invalid=true]:border-error",
            sizeClass[size],
            iconLeft ? wrapperPad : undefined,
            iconRight ? wrapperPadRight : undefined,
            className,
          )}
          {...rest}
        />
        {iconRight && (
          <span
            className={cn(
              "pointer-events-none absolute inset-y-0 flex items-center text-muted",
              size === "sm" ? "right-2" : size === "lg" ? "right-3" : "right-2.5",
            )}
            aria-hidden="true"
          >
            {iconRight}
          </span>
        )}
      </div>
    );
  }

  return (
    <input
      ref={ref}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      className={cn(
        "w-full bg-surface text-ink placeholder:text-placeholder",
        "border border-line",
        "focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
        "disabled:bg-surface-subtle disabled:cursor-not-allowed",
        "aria-[invalid=true]:border-error",
        sizeClass[size],
        className,
      )}
      {...rest}
    />
  );
});
