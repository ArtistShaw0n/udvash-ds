"use client";

import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type AddCourseVariant = "standard" | "with-price" | "total";

export type AddCourseCardProps = {
  variant?: AddCourseVariant;
  title: string;
  meta?: string;
  priceTaka?: number;
  selected?: boolean;
  loading?: boolean;
  onToggle?: (next: boolean) => void;
  className?: string;
};

/**
 * AddCourseCard — Figma `Card/AddCourse-Standard` (336×54),
 * `Card/AddCourse-Withprice` (336×72), `Card/AddCourse-Total` (336×54).
 * Used in the checkout/Add-Course flow. One component, three layouts
 * driven by the `variant` prop.
 */
export function AddCourseCard({
  variant = "standard",
  title,
  meta,
  priceTaka,
  selected = false,
  loading = false,
  onToggle,
  className,
}: AddCourseCardProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "flex w-full max-w-[336px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="rect" width={24} height={24} />
        <div className="flex-1 space-y-2">
          <Skeleton width="70%" height={12} />
          {variant === "with-price" && <Skeleton width="40%" height={10} />}
        </div>
        <Skeleton width={60} height={14} />
      </div>
    );
  }

  const isTotal = variant === "total";
  const isInteractive = !isTotal && !!onToggle;
  const Tag = isInteractive ? "button" : "div";

  return (
    <Tag
      type={isInteractive ? "button" : undefined}
      onClick={isInteractive ? () => onToggle?.(!selected) : undefined}
      aria-pressed={isInteractive ? selected : undefined}
      className={cn(
        "flex w-full max-w-[336px] items-center gap-3 rounded-md border bg-surface p-3 text-left shadow-sm",
        isTotal
          ? "border-brand bg-brand-subtle"
          : selected
            ? "border-brand bg-brand-subtle"
            : "border-line-subtle",
        isInteractive && "transition-colors hover:bg-surface-subtle",
        className,
      )}
    >
      {!isTotal && (
        <span
          className={cn(
            "inline-flex size-5 shrink-0 items-center justify-center rounded-xs border transition-colors",
            selected ? "border-brand bg-brand text-onbrand" : "border-line bg-surface",
          )}
          aria-hidden="true"
        >
          {selected && <Icon name="Check" size="xs" />}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <Text
          size={isTotal ? "md" : "sm"}
          weight={isTotal ? "semibold" : "medium"}
          className="truncate"
        >
          {title}
        </Text>
        {meta && variant === "with-price" && (
          <Text size="xs" color="muted" className="truncate">
            {meta}
          </Text>
        )}
      </div>
      {priceTaka != null && (
        <Text
          size={isTotal ? "lg" : "sm"}
          weight={isTotal ? "bold" : "semibold"}
          className={cn("tabular-nums shrink-0", isTotal || selected ? "text-brand" : "text-ink")}
        >
          ৳{priceTaka.toLocaleString("en-IN")}
        </Text>
      )}
    </Tag>
  );
}
