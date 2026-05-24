import { cn } from "@/lib/cn";

export type ScoreGrade = "A+" | "A" | "A-" | "B" | "C" | "D" | "F";
export type ScoreLetterSize = "sm" | "md" | "lg";

export type ScoreLetterProps = {
  grade: ScoreGrade;
  size?: ScoreLetterSize;
  className?: string;
};

const sizeClass: Record<ScoreLetterSize, string> = {
  sm: "size-5 text-xs",
  md: "size-7 text-sm",
  lg: "size-10 text-md",
};

// Grade → tone mapping. Top grades are success, middle is brand, low is warning/error.
const gradeClass: Record<ScoreGrade, string> = {
  "A+": "bg-success text-onbrand",
  A: "bg-success text-onbrand",
  "A-": "bg-brand text-onbrand",
  B: "bg-brand text-onbrand",
  C: "bg-warning text-onbrand",
  D: "bg-warning text-onbrand",
  F: "bg-error text-onbrand",
};

/**
 * ScoreLetter — Figma Indicator/ScoreLetter (20×20). Single letter
 * grade in a coloured square. Used in result rows + analysis tables.
 */
export function ScoreLetter({ grade, size = "md", className }: ScoreLetterProps) {
  return (
    <span
      role="status"
      aria-label={`Grade ${grade}`}
      className={cn(
        "inline-flex items-center justify-center rounded-xs font-bold tabular-nums",
        sizeClass[size],
        gradeClass[grade],
        className,
      )}
    >
      {grade}
    </span>
  );
}
