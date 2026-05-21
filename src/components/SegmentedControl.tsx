"use client";

import { cn } from "@/lib/cn";

type Segment = { label: string; value: string };

type SegmentedControlProps = {
  segments: Segment[];
  value: string;
  onChange: (value: string) => void;
  size?: "sm" | "md";
  className?: string;
};

export function SegmentedControl({
  segments,
  value,
  onChange,
  size = "md",
  className,
}: SegmentedControlProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex p-1 rounded-lg bg-surface-subtle",
        size === "sm" ? "h-8 text-sm" : "h-9 text-md",
        className
      )}
    >
      {segments.map((s) => {
        const active = s.value === value;
        return (
          <button
            key={s.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(s.value)}
            className={cn(
              "px-4 rounded-md font-medium transition-colors",
              active ? "bg-brand text-onbrand" : "text-muted hover:text-ink"
            )}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
