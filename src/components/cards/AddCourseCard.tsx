"use client";

import { Checkbox } from "../atoms/Checkbox";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type AddCourseVariant = "standard" | "with-price" | "total";

export type AddCourseCardProps = {
  variant?: AddCourseVariant;
  title: string;
  meta?: string;
  priceTaka?: number;
  selected?: boolean;
  onToggle?: (next: boolean) => void;
  className?: string;
};

/*
 * Figma source: V2 AddCourse row (Course & Content checklist 1:16802,
 * instance 1:16812). 360-wide row: Checkbox + title (+ meta) + optional
 * price. `total` variant locks the row to a brand-tinted final-amount style.
 */
export function AddCourseCard({
  variant = "standard",
  title,
  meta,
  priceTaka,
  selected = false,
  onToggle,
  className,
}: AddCourseCardProps) {
  const isTotal = variant === "total";

  return (
    <div
      className={cn(
        "flex w-full max-w-[336px] items-center gap-3 rounded-md p-3 shadow-card",
        isTotal
          ? "border border-brand bg-brand-subtle"
          : selected
            ? "border border-brand bg-brand-subtle"
            : "bg-surface",
        className,
      )}
    >
      {!isTotal && (
        <Checkbox
          size="sm"
          checked={selected}
          onChange={(e) => onToggle?.((e.target as HTMLInputElement).checked)}
        />
      )}
      <div className="min-w-0 flex-1">
        <Text
          size={isTotal ? "md" : "base"}
          weight={isTotal ? "semibold" : "medium"}
          className="truncate"
        >
          {title}
        </Text>
        {meta && variant === "with-price" && (
          <Text size="sm" color="muted" className="truncate">{meta}</Text>
        )}
      </div>
      {priceTaka != null && (
        <Text
          size={isTotal ? "lg" : "base"}
          weight={isTotal ? "bold" : "semibold"}
          color={isTotal || selected ? "primary" : "primary"}
          className={cn("shrink-0 tabular-nums", (isTotal || selected) && "text-brand")}
        >
          ৳{priceTaka.toLocaleString("en-IN")}
        </Text>
      )}
    </div>
  );
}
