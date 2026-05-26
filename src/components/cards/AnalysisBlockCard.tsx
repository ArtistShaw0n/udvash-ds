"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type AnalysisStatTone = "neutral" | "success" | "danger" | "warning" | "info" | "brand";

export type AnalysisStat = {
  label: string;
  value: React.ReactNode;
  icon?: IconName;
  tone?: AnalysisStatTone;
};

export type AnalysisBlockCardProps = {
  /** Optional headline above the stat grid. */
  heading?: string;
  /** Optional subject chip (Physics, etc.). */
  subject?: string;
  /** Hero score above grid. */
  totalScore?: number;
  maxScore?: number;
  position?: { value: number; total?: number };
  /** 2-4 stat tiles. */
  stats: AnalysisStat[];
  insight?: string;
  className?: string;
};

/*
 * Figma source: V2 AnalysisBlock (parent 1:4807, stat tiles 1:5045+).
 * 304 inner area, 2×2 grid of 146×72 stat tiles. Tile = 46×46 tinted icon
 * + label + 24px value. Hero score block above grid.
 */

const toneCfg: Record<
  AnalysisStatTone,
  { bg: string; text: string; iconBg: string }
> = {
  neutral: { bg: "bg-surface", text: "text-primary", iconBg: "bg-subtle text-primary" },
  success: { bg: "bg-surface", text: "text-success", iconBg: "bg-success/10 text-success" },
  danger:  { bg: "bg-surface", text: "text-danger",  iconBg: "bg-danger/10 text-danger" },
  warning: { bg: "bg-surface", text: "text-warning", iconBg: "bg-warning/10 text-warning" },
  info:    { bg: "bg-surface", text: "text-info",    iconBg: "bg-info/10 text-info" },
  brand:   { bg: "bg-surface", text: "text-brand",   iconBg: "bg-brand/10 text-brand" },
};

export function AnalysisBlockCard({
  heading,
  subject,
  totalScore,
  maxScore = 100,
  position,
  stats,
  insight,
  className,
}: AnalysisBlockCardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-[328px] rounded-lg bg-surface p-4 shadow-card",
        className,
      )}
    >
      {(heading || subject) && (
        <div className="mb-3 flex items-center justify-between gap-2">
          {heading && <h3 className="text-md font-semibold text-primary">{heading}</h3>}
          {subject && (
            <span className="rounded-md border border-info px-2 py-0.5 text-xs font-medium text-info">
              {subject}
            </span>
          )}
        </div>
      )}

      {totalScore != null && (
        <div className="mb-4 rounded-md bg-brand-subtle p-3 text-center">
          <p className="mb-0.5 text-xs uppercase tracking-widest text-muted">Total score</p>
          <p>
            <span className="text-xl font-bold tabular-nums text-brand">{totalScore}</span>
            <span className="text-md text-muted"> / {maxScore}</span>
          </p>
          {position && (
            <p className="mt-1 text-sm font-medium text-success">
              Position #{position.value}{position.total ? ` / ${position.total}` : ""}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => {
          const cfg = toneCfg[s.tone ?? "neutral"];
          return (
            <div
              key={i}
              className={cn("flex items-center gap-2 rounded-md p-3 shadow-card", cfg.bg)}
            >
              {s.icon && (
                <span className={cn("inline-flex size-9 items-center justify-center rounded-md", cfg.iconBg)}>
                  <Icon name={s.icon} size="sm" />
                </span>
              )}
              <div className="min-w-0">
                <p className="truncate text-xs text-muted">{s.label}</p>
                <p className={cn("text-lg font-medium tabular-nums", cfg.text)}>{s.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {insight && (
        <div className="mt-4 flex items-start gap-2 rounded-md border border-brand/20 bg-brand/5 p-3">
          <Icon name="Lightbulb" size="sm" className="mt-0.5 shrink-0 text-brand" />
          <p className="text-sm text-primary">{insight}</p>
        </div>
      )}
    </article>
  );
}
