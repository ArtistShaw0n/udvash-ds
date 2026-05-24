import { cn } from "@/lib/cn";

export type TagVariant = "neutral" | "brand" | "info" | "success" | "warning" | "danger";
export type TagSize = "sm" | "md";

export type TagProps = {
  variant?: TagVariant;
  size?: TagSize;
  iconLeft?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

/*
 * Tag — small display-only pill. Maps to the "Language Tag" / "Subject Tag"
 * usage in V2 (53×26 chip with rounded corners). Uses our subtle status
 * background + matching text colour so it reads in both light + dark themes.
 *
 * For interactive selectable pills, use the future Chip component instead.
 */

const variantClass: Record<TagVariant, string> = {
  neutral: "bg-subtle text-primary border border-border",
  brand:   "bg-brand-subtle text-brand",
  info:    "bg-success-bg text-success",   // V2 commonly tags subjects in green
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
  danger:  "bg-danger-bg text-onbrand",
};

const sizeClass: Record<TagSize, string> = {
  sm: "h-5 px-1.5 text-xs gap-1",
  md: "h-6 px-2 text-sm gap-1.5",
};

export function Tag({
  variant = "neutral",
  size = "sm",
  iconLeft,
  className,
  children,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-sm font-sans font-medium leading-tight",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
    >
      {iconLeft}
      <span>{children}</span>
    </span>
  );
}
