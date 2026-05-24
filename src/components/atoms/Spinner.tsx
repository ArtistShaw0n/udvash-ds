import { cn } from "@/lib/cn";

export type SpinnerSize = "sm" | "md" | "lg" | "xl";
export type SpinnerTone = "brand" | "current" | "muted" | "onbrand";

export type SpinnerProps = {
  size?: SpinnerSize;
  tone?: SpinnerTone;
  label?: string;
  className?: string;
};

/*
 * Figma source: V2 Circular Spinner (node 1:10369) — 24×24 prerendered
 * spinning ring. We use a pure CSS border-spin for accessibility and to
 * avoid shipping the raster image. `tone="current"` matches inherited
 * text colour (useful inside Buttons).
 */

const sizeClass: Record<SpinnerSize, string> = {
  sm: "size-4 border-2",
  md: "size-6 border-2", // 24px Figma source
  lg: "size-8 border-[3px]",
  xl: "size-12 border-4",
};

const toneClass: Record<SpinnerTone, string> = {
  brand:   "text-brand",
  current: "text-current",
  muted:   "text-muted",
  onbrand: "text-onbrand",
};

export function Spinner({
  size = "md",
  tone = "brand",
  label = "Loading",
  className,
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        "inline-block animate-spin rounded-full border-current border-t-transparent",
        toneClass[tone],
        sizeClass[size],
        className,
      )}
    />
  );
}
