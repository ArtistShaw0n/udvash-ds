import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Icon } from "./Icon";

type PracticeExamStatus = "default" | "highest" | "lowest";

type PracticeExamCardProps = {
  title: string;
  score?: string;
  questionCount?: number;
  date?: string;
  duration?: string;
  attempts?: number;
  status?: PracticeExamStatus;
  ctaLabel?: string;
  onStart?: () => void;
  bangla?: boolean;
  className?: string;
};

export function PracticeExamCard({
  title,
  score,
  questionCount,
  date,
  duration,
  attempts,
  status = "default",
  ctaLabel = "Start",
  onStart,
  bangla,
  className,
}: PracticeExamCardProps) {
  return (
    <article
      className={cn(
        "w-[336px] md:w-[432px] lg:w-[528px] rounded-md bg-surface shadow-sm border border-line p-4 space-y-3",
        className
      )}
    >
      <header className="flex items-start justify-between gap-2">
        <h3 className={cn("text-lg md:text-xl font-semibold text-ink flex-1", bangla && "font-bangla")}>{title}</h3>
        {status === "highest" && <Badge variant="success">Highest</Badge>}
        {status === "lowest" && <Badge variant="error">Lowest</Badge>}
      </header>

      {(score || questionCount) && (
        <div className="flex items-center gap-3 text-md">
          {score && (
            <span className="text-2xl font-bold text-brand tabular-nums">{score}</span>
          )}
          {typeof questionCount === "number" && (
            <span className="text-muted">across {questionCount} questions</span>
          )}
        </div>
      )}

      <ul className="space-y-1.5 text-md text-muted">
        {date && (<li className="flex items-center gap-2"><Icon name="calendar" size={16} />{date}</li>)}
        {duration && (<li className="flex items-center gap-2"><Icon name="bell" size={16} />{duration}</li>)}
        {typeof attempts === "number" && (<li className="flex items-center gap-2"><Icon name="return-arrow" size={16} />{attempts} attempt{attempts === 1 ? "" : "s"}</li>)}
      </ul>

      <Button variant="primary" size="md" className="w-full" onClick={onStart}>
        {ctaLabel}
      </Button>
    </article>
  );
}
