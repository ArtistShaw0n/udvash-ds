import { cn } from "@/lib/cn";

export type ProgressVariant = "brand" | "success" | "danger" | "warning" | "info";
export type ProgressSize = "sm" | "md" | "lg";

export type ProgressBarProps = {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  label?: string;
  showValue?: boolean;
  className?: string;
};

/*
 * Figma source: V2 Progress Bar (node 1:32648) — track #E1E3E4 (≈ border),
 * fill #55347B (brand-500 → bg-brand), rounded-full. Default size 264×8.
 */

const variantClass: Record<ProgressVariant, string> = {
  brand:   "bg-brand",
  success: "bg-success",
  danger:  "bg-danger",
  warning: "bg-warning",
  info:    "bg-info",
};

const sizeClass: Record<ProgressSize, string> = {
  sm: "h-1",   // 4px
  md: "h-2",   // 8px Figma source
  lg: "h-3",   // 12px
};

export function ProgressBar({
  value,
  max = 100,
  variant = "brand",
  size = "md",
  label,
  showValue = false,
  className,
}: ProgressBarProps) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="mb-1 flex items-baseline justify-between text-xs text-muted">
          <span>{label}</span>
          {showValue && <span className="tabular-nums text-primary">{Math.round(percent)}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        className={cn("w-full overflow-hidden rounded-full bg-border", sizeClass[size])}
      >
        <div
          className={cn("h-full rounded-full transition-[width]", variantClass[variant])}
          style={{ width: `${percent}%`, transitionDuration: "var(--duration-base)" }}
        />
      </div>
    </div>
  );
}
