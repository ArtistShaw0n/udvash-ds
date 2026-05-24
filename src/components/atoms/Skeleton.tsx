import { cn } from "@/lib/cn";

export type SkeletonVariant = "text" | "circle" | "rect";

export type SkeletonProps = {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  lines?: number;
  className?: string;
};

/*
 * Skeleton — animated loading placeholder. No Figma source — built against
 * our subtle background colour with a pulse animation. Used while data
 * loads (cards, lists, profile blocks).
 */

const variantBase: Record<SkeletonVariant, string> = {
  text:   "h-3 rounded-xs",
  circle: "rounded-full",
  rect:   "rounded-md",
};

export function Skeleton({
  variant = "text",
  width,
  height,
  lines = 1,
  className,
}: SkeletonProps) {
  if (variant === "text" && lines > 1) {
    return (
      <div
        className={cn("flex w-full flex-col gap-2", className)}
        role="status"
        aria-label="Loading"
      >
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "block animate-pulse bg-subtle",
              variantBase.text,
              i === lines - 1 ? "w-3/4" : "w-full",
            )}
          />
        ))}
      </div>
    );
  }
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        "block animate-pulse bg-subtle",
        variantBase[variant],
        variant === "text" && !width ? "w-full" : undefined,
        className,
      )}
      style={{ width, height }}
    />
  );
}
