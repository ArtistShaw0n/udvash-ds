"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { ProgressBar } from "../atoms/ProgressBar";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type PracticeExamCardProps = {
  subject: string;
  title: string;
  totalQuestions: number;
  attemptedQuestions?: number;
  durationMin: number;
  passingMarks?: number;
  attempts?: number;
  bestScore?: number;
  onStart?: () => void;
  onReview?: () => void;
  className?: string;
};

/*
 * Figma source: V2 PracticeExam card (parent 1:7596, instance 1:7599).
 * 328×455 — practice quiz card with self-paced progress + retake.
 */
export function PracticeExamCard({
  subject,
  title,
  totalQuestions,
  attemptedQuestions,
  durationMin,
  passingMarks,
  attempts = 0,
  bestScore,
  onStart,
  onReview,
  className,
}: PracticeExamCardProps) {
  const inProgress =
    attemptedQuestions != null && attemptedQuestions > 0 && attemptedQuestions < totalQuestions;
  const completed = attempts > 0;

  return (
    <article
      className={cn(
        "w-full max-w-[328px] rounded-lg bg-surface p-4 shadow-card",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <Tag variant="brand">{subject}</Tag>
        <Tag variant={completed ? "success" : "info"} size="sm">
          {completed ? `${attempts} attempt${attempts > 1 ? "s" : ""}` : "Practice"}
        </Tag>
      </div>

      <h3 className="mb-3 line-clamp-2 text-md font-semibold leading-snug text-primary">{title}</h3>

      <dl className="mb-4 grid grid-cols-3 gap-3 rounded-md bg-subtle p-3 text-center text-sm">
        <div>
          <dt className="text-xs text-muted">Questions</dt>
          <dd className="font-semibold tabular-nums text-primary">{totalQuestions}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Duration</dt>
          <dd className="font-semibold tabular-nums text-brand">{durationMin}m</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">{passingMarks ? "Pass" : "Best"}</dt>
          <dd
            className={cn(
              "font-semibold tabular-nums",
              bestScore != null && passingMarks != null && bestScore >= passingMarks
                ? "text-success"
                : "text-primary",
            )}
          >
            {passingMarks ?? bestScore ?? "—"}
          </dd>
        </div>
      </dl>

      {inProgress && (
        <div className="mb-4">
          <ProgressBar
            value={attemptedQuestions}
            max={totalQuestions}
            variant="warning"
            label={`${attemptedQuestions} / ${totalQuestions} answered`}
            showValue
          />
        </div>
      )}

      <div className="flex gap-2">
        <Button
          fullWidth
          iconLeft={<Icon name={inProgress ? "Play" : "Pencil"} size="xs" />}
          onClick={onStart}
        >
          {inProgress ? "Resume" : completed ? "Retake" : "Start"}
        </Button>
        {completed && onReview && (
          <Button variant="ghost" iconLeft={<Icon name="Eye" size="xs" />} onClick={onReview}>
            Review
          </Button>
        )}
      </div>
    </article>
  );
}
