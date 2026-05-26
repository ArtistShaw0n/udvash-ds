"use client";

import { ProgressBar } from "../atoms/ProgressBar";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type SubjectRow = {
  subject: string;
  attempted: number;
  total: number;
  correct: number;
};

export type SubjectWiseSummaryCardProps = {
  title?: string;
  subjects: SubjectRow[];
  className?: string;
};

/*
 * Figma source: V2 SubjectWise summary card (Report screen 1:6645, instance
 * 1:6664). 328-wide card with per-subject correct/total + percent bar.
 */
export function SubjectWiseSummaryCard({
  title = "Subject-wise summary",
  subjects,
  className,
}: SubjectWiseSummaryCardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-[328px] rounded-lg bg-surface p-4 shadow-card",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold text-primary">{title}</h3>
        <Tag variant="info" size="sm">{subjects.length} subjects</Tag>
      </div>

      <div className="space-y-3">
        {subjects.map((row) => {
          const acc = row.attempted ? (row.correct / row.attempted) * 100 : 0;
          const variant =
            acc >= 80 ? "success" : acc >= 60 ? "brand" : acc >= 40 ? "warning" : "danger";
          return (
            <div key={row.subject}>
              <div className="mb-1 flex items-baseline justify-between text-sm">
                <span className="font-medium text-primary">{row.subject}</span>
                <span className="tabular-nums text-muted">
                  {row.correct}/{row.attempted}
                  <span className="ml-1 text-xs">({Math.round(acc)}%)</span>
                </span>
              </div>
              <ProgressBar value={row.correct} max={row.total} variant={variant} size="sm" />
            </div>
          );
        })}
      </div>
    </article>
  );
}
