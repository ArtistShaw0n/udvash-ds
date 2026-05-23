import { cn } from "@/lib/cn";

export type ProgressVariant = "brand" | "success" | "error" | "warning" | "info";
export type ProgressSize = "sm" | "md" | "lg";

export type ProgressBarProps = {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  showLabel?: boolean;
  label?: string;
  className?: string;
};

const variantClass: Record<ProgressVariant, string> = {
  brand: "bg-brand",
  success: "bg-success",
  error: "bg-error",
  warning: "bg-warning",
  info: "bg-info",
};

const sizeClass: Record<ProgressSize, string> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

export function ProgressBar({
  value,
  max = 100,
  variant = "brand",
  size = "md",
  showLabel = false,
  label,
  className,
}: ProgressBarProps) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn("w-full", className)}>
      {(showLabel || label) && (
        <div className="mb-1 flex items-center justify-between text-xs text-muted">
          <span>{label}</span>
          {showLabel && <span>{Math.round(percent)}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          "w-full overflow-hidden rounded-full bg-surface-subtle",
          sizeClass[size],
        )}
      >
        <div
          className={cn("h-full rounded-full transition-all", variantClass[variant])}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
