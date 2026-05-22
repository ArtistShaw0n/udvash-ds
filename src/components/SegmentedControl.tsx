"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Segment = { label: string; value: string; icon?: ReactNode };

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
            aria-selected={active ? "true" : "false"}
            onClick={() => onChange(s.value)}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 rounded-md font-medium transition-colors",
              active ? "bg-brand text-onbrand" : "text-muted hover:text-ink"
            )}
          >
            {s.icon && <span className="shrink-0">{s.icon}</span>}
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
