"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { ProgressBar } from "../atoms/ProgressBar";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type PerformanceTrend = "up" | "down" | "flat";

export type PerformanceCardProps = {
  title: string;
  score: number;
  maxScore?: number;
  rank?: { value: number; total: number };
  trend?: PerformanceTrend;
  stats?: Array<{ label: string; value: React.ReactNode; tone?: "neutral" | "success" | "danger" | "warning" | "brand" }>;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
};

/*
 * Figma source: V2 Performance card (parent 1:6583, instance 1:6586).
 * 328×348 — hero score + rank + trend chip + 2-3 stat row + "View Result"
 * CTA. Uses brand → success → warning → danger tone ramp by percentile.
 */

const toneText = {
  neutral: "text-primary",
  success: "text-success",
  danger: "text-danger",
  warning: "text-warning",
  brand: "text-brand",
} as const;

const trendConfig = {
  up:   { icon: "TrendingUp" as const,   color: "text-success", label: "Improving" },
  down: { icon: "TrendingDown" as const, color: "text-danger",  label: "Declining" },
  flat: { icon: "Minus" as const,        color: "text-muted",   label: "Stable" },
};

export function PerformanceCard({
  title,
  score,
  maxScore = 100,
  rank,
  trend,
  stats = [],
  ctaLabel = "View Result",
  onCta,
  className,
}: PerformanceCardProps) {
  const percent = Math.max(0, Math.min(100, (score / maxScore) * 100));
  const tone: keyof typeof toneText =
    percent >= 80 ? "success" : percent >= 60 ? "brand" : percent >= 40 ? "warning" : "danger";

  return (
    <article
      className={cn(
        "w-full max-w-[328px] rounded-lg bg-surface p-4 shadow-card",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-md font-semibold text-primary">{title}</h3>
        {rank && (
          <Tag variant="brand" size="sm">
            Rank #{rank.value} / {rank.total}
          </Tag>
        )}
      </div>

      <div className="mb-2 flex items-baseline gap-2">
        <span className={cn("text-display font-bold tabular-nums leading-none", toneText[tone])}>{score}</span>
        <span className="text-md text-muted">/ {maxScore}</span>
        {trend && (
          <span className={cn("ml-auto inline-flex items-center gap-1 text-xs font-medium", trendConfig[trend].color)}>
            <Icon name={trendConfig[trend].icon} size="xs" />
            {trendConfig[trend].label}
          </span>
        )}
      </div>
      <p className="mb-3 text-xs uppercase tracking-widest text-muted">Score</p>

      <ProgressBar value={score} max={maxScore} variant={tone === "brand" ? "brand" : tone === "danger" ? "danger" : tone === "warning" ? "warning" : "success"} className="mb-4" />

      {stats.length > 0 && (
        <div
          className={cn(
            "mb-4 grid gap-3 rounded-md bg-subtle p-3 text-center",
            stats.length === 2 ? "grid-cols-2" : stats.length >= 4 ? "grid-cols-4" : "grid-cols-3",
          )}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <p className={cn("text-md font-semibold tabular-nums", toneText[s.tone ?? "neutral"])}>{s.value}</p>
              <p className="text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {onCta && (
        <Button fullWidth size="sm" iconLeft={<Icon name="ChartColumn" size="xs" />} onClick={onCta}>
          {ctaLabel}
        </Button>
      )}
    </article>
  );
}
