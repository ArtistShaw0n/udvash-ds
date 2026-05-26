"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
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
  onStart?: () => void;
  onCancel?: () => void;
  className?: string;
};

/*
 * Figma source: V2 LiveExam card (parent 1:8570, instance 1:8574).
 * 328×455 — brand-band header + LIVE chip, multi-line title, 5 meta rows
 * (subject/chapter/duration/marks/questions), CTA footer.
 */
export function LiveExamCard({
  subject,
  title,
  startsAt,
  durationMin,
  totalMarks,
  questions,
  status = "upcoming",
  onStart,
  onCancel,
  className,
}: LiveExamCardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-[328px] overflow-hidden rounded-lg bg-surface shadow-card",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 bg-brand-band px-4 py-2">
        <Tag variant="brand">{subject}</Tag>
        {status === "live" ? (
          <span className="inline-flex items-center gap-1 rounded-sm bg-danger-bg px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-danger">
            <span className="size-1.5 animate-pulse rounded-full bg-danger" />
            Live
          </span>
        ) : status === "upcoming" ? (
          <Tag variant="info" size="sm">Upcoming</Tag>
        ) : (
          <Tag variant="neutral" size="sm">Ended</Tag>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-md font-semibold leading-snug text-primary line-clamp-2">{title}</h3>

        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
          <dt className="text-muted">Starts</dt>
          <dd className="text-right font-medium text-primary">{startsAt}</dd>
          <dt className="text-muted">Duration</dt>
          <dd className="text-right font-medium text-primary">{durationMin} min</dd>
          <dt className="text-muted">Marks</dt>
          <dd className="text-right font-medium text-brand">{totalMarks}</dd>
          {questions != null && (
            <>
              <dt className="text-muted">Questions</dt>
              <dd className="text-right font-medium text-primary">{questions}</dd>
            </>
          )}
        </dl>

        <div className="mt-4 flex flex-col gap-2">
          <Button
            fullWidth
            iconLeft={
              <Icon
                name={status === "live" ? "Play" : status === "ended" ? "ChartColumn" : "Bell"}
                size="xs"
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
            <Button variant="ghost" size="sm" fullWidth onClick={onCancel}>Cancel</Button>
          )}
        </div>
      </div>
    </article>
  );
}
