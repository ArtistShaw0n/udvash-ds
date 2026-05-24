import { cn } from "@/lib/cn";

export type ScoreGaugeSize = "sm" | "md" | "lg";

export type ScoreGaugeProps = {
  value: number;
  max?: number;
  label?: string;
  size?: ScoreGaugeSize;
  className?: string;
  ariaLabel?: string;
};

const sizePx: Record<ScoreGaugeSize, { box: number; stroke: number; fontClass: string }> = {
  sm: { box: 56, stroke: 6, fontClass: "text-sm" },
  md: { box: 82, stroke: 8, fontClass: "text-lg" },
  lg: { box: 120, stroke: 10, fontClass: "text-2xl" },
};

/**
 * ScoreGauge — Figma Data/ScoreGauge (82×29 portrait variant) rendered
 * as a circular ring. Variant tones by percentile: ≥80 success, ≥60
 * brand, ≥40 warning, else error.
 */
export function ScoreGauge({
  value,
  max = 100,
  label,
  size = "md",
  className,
  ariaLabel,
}: ScoreGaugeProps) {
  const { box, stroke, fontClass } = sizePx[size];
  const radius = (box - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = Math.max(0, Math.min(100, (value / max) * 100));
  const offset = circumference - (percent / 100) * circumference;

  const tone =
    percent >= 80 ? "stroke-success" :
    percent >= 60 ? "stroke-brand" :
    percent >= 40 ? "stroke-warning" : "stroke-error";

  const textTone =
    percent >= 80 ? "text-success" :
    percent >= 60 ? "text-brand" :
    percent >= 40 ? "text-warning" : "text-error";

  return (
    <div
      role="img"
      aria-label={ariaLabel ?? `${value} out of ${max}`}
      className={cn("inline-flex flex-col items-center", className)}
      style={{ width: box }}
    >
      <div className="relative" style={{ width: box, height: box }}>
        <svg width={box} height={box} viewBox={`0 0 ${box} ${box}`}>
          <circle
            cx={box / 2}
            cy={box / 2}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            className="stroke-surface-subtle"
          />
          <circle
            cx={box / 2}
            cy={box / 2}
            r={radius}
            fill="none"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={cn(tone, "transition-[stroke-dashoffset] duration-500")}
            transform={`rotate(-90 ${box / 2} ${box / 2})`}
          />
        </svg>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center font-bold tabular-nums",
            fontClass,
            textTone,
          )}
        >
          {Math.round(percent)}%
        </span>
      </div>
      {label && (
        <span className="mt-1 text-xs text-muted">{label}</span>
      )}
    </div>
  );
}
