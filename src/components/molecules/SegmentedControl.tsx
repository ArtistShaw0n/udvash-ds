"use client";

import { cn } from "@/lib/cn";

export type SegmentedControlVariant = "pill" | "square";
export type SegmentedControlSize = "sm" | "md" | "lg";

export type SegmentedControlOption = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export type SegmentedControlProps = {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  variant?: SegmentedControlVariant;
  size?: SegmentedControlSize;
  fullWidth?: boolean;
  className?: string;
};

const sizeClass: Record<SegmentedControlSize, string> = {
  sm: "h-7 text-xs",
  md: "h-8 text-sm",
  lg: "h-10 text-md",
};

const containerVariantClass: Record<SegmentedControlVariant, string> = {
  pill: "rounded-full bg-surface-subtle p-1",
  square: "rounded-sm bg-surface-subtle p-1",
};

const itemVariantClass: Record<SegmentedControlVariant, string> = {
  pill: "rounded-full",
  square: "rounded-xs",
};

export function SegmentedControl({
  options,
  value,
  onChange,
  variant = "pill",
  size = "md",
  fullWidth = false,
  className,
}: SegmentedControlProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center gap-1",
        containerVariantClass[variant],
        fullWidth && "w-full",
        className,
      )}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={opt.disabled}
            onClick={() => onChange(opt.value)}
            className={cn(
              "px-3 font-medium transition-colors",
              sizeClass[size],
              itemVariantClass[variant],
              fullWidth && "flex-1",
              active
                ? "bg-surface text-ink shadow-xs"
                : "text-muted hover:text-ink",
              opt.disabled && "cursor-not-allowed opacity-50",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
