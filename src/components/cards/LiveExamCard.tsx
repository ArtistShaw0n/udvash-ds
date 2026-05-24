"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Stat } from "../atoms/Stat";
import { StatusDot } from "../atoms/StatusDot";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type LiveExamStatus = "live" | "upcoming" | "ended";

export type LiveExamCardProps = {
  subject: string;
  title: string;
  startsAt: string;
  durationMin: number;
  totalMarks: number;
  questions?: number;
  status?: LiveExamStatus;
  loading?: boolean;
  onStart?: () => void;
  onCancel?: () => void;
  className?: string;
};

/**
 * LiveExamCard — Figma `Card/LiveExam` (336×455). Used on Home + Exam list
 * screens. Three primary stats (duration / marks / questions) render via
 * the Stat atom; CTA depends on status.
 */
export function LiveExamCard({
  subject,
  title,
  startsAt,
  durationMin,
  totalMarks,
  questions,
  status = "upcoming",
  loading = false,
  onStart,
  onCancel,
  className,
}: LiveExamCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <div className="mb-3 flex items-center justify-between">
          <Skeleton variant="rect" width={70} height={20} />
          <Skeleton variant="rect" width={50} height={20} />
        </div>
        <Skeleton width="90%" height={18} className="mb-2" />
        <Skeleton width="50%" height={14} className="mb-4" />
        <div className="mb-4 grid grid-cols-3 gap-3">
          <Skeleton variant="rect" height={48} />
          <Skeleton variant="rect" height={48} />
          <Skeleton variant="rect" height={48} />
        </div>
        <Skeleton variant="rect" height={36} />
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
      {/* Header */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <Tag variant="brand">{subject}</Tag>
        {status === "live" ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-error/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-error">
            <StatusDot variant="error" size="sm" pulse />
            Live
          </span>
        ) : status === "upcoming" ? (
          <Tag variant="info" size="sm">Upcoming</Tag>
        ) : (
          <Tag variant="neutral" size="sm">Ended</Tag>
        )}
      </div>

      <Text size="lg" weight="semibold" className="mb-1 line-clamp-2">
        {title}
      </Text>

      <div className="mb-4 inline-flex items-center gap-1 text-xs text-muted">
        <Icon name="Calendar" size="xs" />
        Starts {startsAt}
      </div>

      {/* Stats row */}
      <div className="mb-4 grid grid-cols-3 gap-3 rounded-sm bg-surface-subtle p-3">
        <Stat label="Duration" value={`${durationMin}m`} size="sm" align="center" />
        <Stat label="Marks" value={totalMarks} size="sm" align="center" tone="brand" />
        {questions != null && (
          <Stat label="Qs" value={questions} size="sm" align="center" />
        )}
      </div>

      {/* CTA stack */}
      <div className="flex flex-col gap-2">
        <Button
          variant={status === "ended" ? "secondary" : "primary"}
          fullWidth
          iconLeft={
            <Icon
              name={status === "live" ? "Play" : status === "ended" ? "ChartColumn" : "Bell"}
              size="sm"
            />
          }
          onClick={onStart}
        >
          {status === "live"
            ? "Start Exam"
            : status === "ended"
              ? "View Result"
              : "Set Reminder"}
        </Button>
        {status !== "ended" && onCancel && (
          <Button variant="ghost" size="sm" fullWidth onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </article>
  );
}
