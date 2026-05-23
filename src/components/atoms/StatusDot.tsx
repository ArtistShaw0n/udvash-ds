import { cn } from "@/lib/cn";

export type StatusDotVariant = "live" | "success" | "warning" | "error" | "info" | "neutral";
export type StatusDotSize = "sm" | "md" | "lg";

export type StatusDotProps = {
  variant?: StatusDotVariant;
  size?: StatusDotSize;
  pulse?: boolean;
  label?: string;
  className?: string;
};

const variantClass: Record<StatusDotVariant, string> = {
  live: "bg-error",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  neutral: "bg-line-strong",
};

const sizeClass: Record<StatusDotSize, string> = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-3",
};

export function StatusDot({
  variant = "live",
  size = "md",
  pulse = false,
  label,
  className,
}: StatusDotProps) {
  return (
    <span
      role={label ? "status" : undefined}
      aria-label={label}
      className={cn("relative inline-flex shrink-0", sizeClass[size], className)}
    >
      {pulse && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 animate-ping rounded-full opacity-75",
            variantClass[variant],
          )}
        />
      )}
      <span
        className={cn(
          "relative inline-flex size-full rounded-full",
          variantClass[variant],
        )}
      />
    </span>
  );
}
