"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type SolutionVerdict = "correct" | "wrong" | "skipped";

export type AnalysisSolutionCardProps = {
  questionNo: number;
  question: string;
  yourAnswer?: string;
  correctAnswer: string;
  verdict: SolutionVerdict;
  marksAwarded?: number;
  marksAvailable?: number;
  loading?: boolean;
  onExplain?: () => void;
  className?: string;
};

/**
 * AnalysisSolutionCard — Figma `Card/AnalysisSolution` (336×119). One
 * row in the per-question solution review list. Shows verdict colour,
 * your-vs-correct answer side-by-side, optional View Explanation CTA.
 */
export function AnalysisSolutionCard({
  questionNo,
  question,
  yourAnswer,
  correctAnswer,
  verdict,
  marksAwarded,
  marksAvailable,
  loading = false,
  onExplain,
  className,
}: AnalysisSolutionCardProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <div className="mb-2 flex items-center gap-2">
          <Skeleton variant="circle" width={24} height={24} />
          <Skeleton width="70%" height={12} />
        </div>
        <Skeleton lines={2} />
      </div>
    );
  }

  const verdictConfig = {
    correct: { label: "Correct", color: "text-success", bg: "bg-success-subtle", border: "border-success/40", icon: "CircleCheck" as const },
    wrong: { label: "Wrong", color: "text-error", bg: "bg-error-subtle", border: "border-error/40", icon: "CircleX" as const },
    skipped: { label: "Skipped", color: "text-muted", bg: "bg-surface-subtle", border: "border-line-subtle", icon: "CircleDashed" as const },
  }[verdict];

  return (
    <article
      className={cn(
        "w-full max-w-[336px] overflow-hidden rounded-md border bg-surface shadow-sm",
        verdictConfig.border,
        className,
      )}
    >
      {/* Verdict header */}
      <div
        className={cn(
          "flex items-center justify-between gap-2 px-3 py-1.5 text-xs font-semibold",
          verdictConfig.bg,
          verdictConfig.color,
        )}
      >
        <span className="inline-flex items-center gap-1.5">
          <Icon name={verdictConfig.icon} size="xs" />
          Q{questionNo} · {verdictConfig.label}
        </span>
        {marksAvailable != null && (
          <span className="tabular-nums">
            {marksAwarded ?? 0}/{marksAvailable} marks
          </span>
        )}
      </div>

      <div className="p-3">
        <Text size="sm" className="mb-2 line-clamp-2">
          {question}
        </Text>

        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
          {yourAnswer != null && (
            <>
              <span className="text-muted">Your answer:</span>
              <span className={cn("font-medium", verdict === "correct" ? "text-success" : "text-error")}>
                {yourAnswer}
              </span>
            </>
          )}
          <span className="text-muted">Correct answer:</span>
          <span className="font-medium text-success">{correctAnswer}</span>
        </div>

        {onExplain && (
          <div className="mt-2">
            <Button
              variant="link"
              size="sm"
              iconLeft={<Icon name="Lightbulb" size="xs" />}
              onClick={onExplain}
            >
              View explanation
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}
