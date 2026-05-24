import { cn } from "@/lib/cn";

export type BadgeVariant = "brand" | "danger" | "success" | "warning" | "info" | "neutral";
export type BadgeSize = "sm" | "md";

export type BadgeProps = {
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Render as a small dot indicator (no text). */
  dot?: boolean;
  /** Max number — values above this render as `{max}+`. */
  max?: number;
  className?: string;
  children?: React.ReactNode;
};

/*
 * Badge — small numeric counter or status dot. Common use in V2:
 *   - Notification count on the bell icon in the header
 *   - "100+" unread count on the Community group rows
 *
 * Defaults to the brand colour; `danger` is the typical notification red.
 */

const variantClass: Record<BadgeVariant, string> = {
  brand:   "bg-brand text-onbrand",
  danger:  "bg-danger text-onbrand",
  success: "bg-success text-onbrand",
  warning: "bg-warning text-onbrand",
  info:    "bg-info text-onbrand",
  neutral: "bg-subtle text-primary",
};

const sizeClass: Record<BadgeSize, string> = {
  sm: "h-4 min-w-4 px-1 text-[10px]",
  md: "h-5 min-w-5 px-1.5 text-xs",
};

const dotSize: Record<BadgeSize, string> = {
  sm: "size-2",
  md: "size-2.5",
};

export function Badge({
  variant = "danger",
  size = "sm",
  dot = false,
  max = 99,
  className,
  children,
}: BadgeProps) {
  if (dot) {
    return (
      <span
        role="status"
        aria-label="indicator"
        className={cn(
          "inline-block shrink-0 rounded-full",
          variantClass[variant],
          dotSize[size],
          className,
        )}
      />
    );
  }

  let label = children;
  if (typeof children === "number" && children > max) {
    label = `${max}+`;
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full font-sans font-semibold tabular-nums leading-none",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
    >
      {label}
    </span>
  );
}
