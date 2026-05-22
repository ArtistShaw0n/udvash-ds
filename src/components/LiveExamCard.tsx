import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Icon } from "./Icon";

type LiveExamCardProps = {
  title: string;
  description?: string;
  date?: string;
  duration?: string;
  questionCount?: number;
  isLive?: boolean;
  ended?: boolean;
  ctaLabel?: string;
  onStart?: () => void;
  bangla?: boolean;
  className?: string;
};

export function LiveExamCard({
  title,
  description,
  date,
  duration,
  questionCount,
  isLive = false,
  ended = false,
  ctaLabel,
  onStart,
  bangla,
  className,
}: LiveExamCardProps) {
  const cta = ctaLabel ?? (ended ? "View Result" : isLive ? "Start" : "Remind Me");
  return (
    <article
      className={cn(
        "w-[336px] md:w-[432px] lg:w-[528px] rounded-md bg-surface shadow-sm border border-line p-4 space-y-3",
        className
      )}
    >
      <header className="flex items-start justify-between gap-2">
        <h3 className={cn("text-lg md:text-xl font-semibold text-ink flex-1", bangla && "font-bangla")}>
          {title}
        </h3>
        {isLive && !ended && <Badge variant="info">Live</Badge>}
        {ended && <Badge variant="neutral">Ended</Badge>}
      </header>

      <ul className="space-y-1.5 text-md text-muted">
        {date && (
          <li className="flex items-center gap-2"><Icon name="calendar" size={16} /><span>{date}</span></li>
        )}
        {duration && (
          <li className="flex items-center gap-2"><Icon name="bell" size={16} /><span>{duration}</span></li>
        )}
        {typeof questionCount === "number" && (
          <li className="flex items-center gap-2"><Icon name="check" size={16} /><span>{questionCount} questions</span></li>
        )}
      </ul>

      {description && <p className="text-md text-muted">{description}</p>}

      <Button
        size="md"
        variant={isLive ? "primary" : "secondary"}
        className="w-full"
        disabled={!isLive && !ended ? false : ended}
        onClick={onStart}
      >
        {cta}
      </Button>
    </article>
  );
}
