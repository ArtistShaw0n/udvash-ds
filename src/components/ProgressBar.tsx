import { cn } from "@/lib/cn";

type ProgressBarProps = {
  value: number; // 0-100
  max?: number;
  className?: string;
  label?: string;
};

export function ProgressBar({ value, max = 100, className, label }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn("w-full max-w-[336px]", className)}>
      {label && (
        <div className="flex justify-between text-sm text-muted mb-1.5">
          <span>{label}</span>
          <span>{Math.round(pct)}%</span>
        </div>
      )}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-disabled"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className="h-full bg-brand-accent transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
