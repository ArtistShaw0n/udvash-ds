"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

export type StarRatingSize = "sm" | "md" | "lg";

export type StarRatingProps = {
  value?: number;
  defaultValue?: number;
  max?: number;
  size?: StarRatingSize;
  readOnly?: boolean;
  onChange?: (value: number) => void;
  className?: string;
  ariaLabel?: string;
};

const iconSizeMap: Record<StarRatingSize, "xs" | "sm" | "md" | "lg" | "xl"> = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

/**
 * StarRating — Figma Icon/Star + Icon/Star-Row. Read-only or interactive
 * 1–5 (default) star control. Hovering previews; click commits.
 */
export function StarRating({
  value: controlled,
  defaultValue = 0,
  max = 5,
  size = "md",
  readOnly = false,
  onChange,
  className,
  ariaLabel = "Rating",
}: StarRatingProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [hover, setHover] = useState<number | null>(null);
  const value = controlled ?? uncontrolled;
  const shown = hover ?? value;

  function commit(next: number) {
    if (readOnly) return;
    if (controlled === undefined) setUncontrolled(next);
    onChange?.(next);
  }

  return (
    <span
      role={readOnly ? "img" : "radiogroup"}
      aria-label={`${ariaLabel}: ${value} of ${max}`}
      onMouseLeave={() => setHover(null)}
      className={cn("inline-flex items-center gap-0.5", className)}
    >
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < shown;
        return (
          <button
            key={i}
            type="button"
            disabled={readOnly}
            onClick={() => commit(i + 1)}
            onMouseEnter={() => !readOnly && setHover(i + 1)}
            aria-label={`${i + 1} star${i ? "s" : ""}`}
            className={cn(
              "transition-colors",
              filled ? "text-warning" : "text-line",
              !readOnly && "cursor-pointer hover:text-warning",
              readOnly && "cursor-default",
            )}
          >
            <Icon name="Star" size={iconSizeMap[size]} className={filled ? "fill-current" : undefined} />
          </button>
        );
      })}
    </span>
  );
}
