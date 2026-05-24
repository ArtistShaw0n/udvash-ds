"use client";

import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Stat } from "../atoms/Stat";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type AnalysisStat = { label: string; value: React.ReactNode; tone?: "neutral" | "success" | "error" | "warning" | "brand" };

export type AnalysisBlockCardProps = {
  heading: string;
  subject?: string;
  totalScore: number;
  maxScore?: number;
  stats: AnalysisStat[];
  insight?: string;
  loading?: boolean;
  className?: string;
};

/**
 * AnalysisBlockCard — Figma `Card/AnalysisBlock` (336×472). Post-exam
 * analytical breakdown shown on Analysis screens. Combines a hero
 * score with a 2x2 stat grid and a coaching insight line.
 */
export function AnalysisBlockCard({
  heading,
  subject,
  totalScore,
  maxScore = 100,
  stats,
  insight,
  loading = false,
  className,
}: AnalysisBlockCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton width="60%" height={16} className="mb-3" />
        <Skeleton variant="rect" height={56} className="mb-4" />
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Skeleton variant="rect" height={48} />
          <Skeleton variant="rect" height={48} />
          <Skeleton variant="rect" height={48} />
          <Skeleton variant="rect" height={48} />
        </div>
        <Skeleton lines={2} />
      </article>
    );
  }

  return (
    <article
      className={cn(
        "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <Text size="md" weight="semibold">{heading}</Text>
        {subject && <Tag variant="info" size="sm">{subject}</Tag>}
      </div>

      {/* Hero score */}
      <div className="mb-4 rounded-sm bg-brand-subtle p-3 text-center">
        <Text size="xs" color="muted" className="mb-0.5 uppercase tracking-widest">
          Total score
        </Text>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-bold text-brand tabular-nums">{totalScore}</span>
          <span className="text-md text-muted">/ {maxScore}</span>
        </div>
      </div>

      {/* Stat grid */}
      <div className="mb-4 grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <Stat key={i} label={s.label} value={s.value} tone={s.tone ?? "neutral"} size="sm" />
        ))}
      </div>

      {/* Coaching insight — uses brand tint instead of info-subtle so the
          text contrasts in both light and dark themes (info-subtle stays
          light in both, which collides with light text in dark mode). */}
      {insight && (
        <div className="flex items-start gap-2 rounded-sm border border-brand/20 bg-brand/5 p-3">
          <Icon name="Lightbulb" size="sm" className="mt-0.5 shrink-0 text-brand" />
          <Text size="sm">{insight}</Text>
        </div>
      )}
    </article>
  );
}
