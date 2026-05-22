import { cn } from "@/lib/cn";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";
import { StarRating } from "./StarRating";

type QnACardProps = {
  name: string;
  avatarSrc?: string;
  date?: string;
  questionText: string;
  rating?: number;
  onRate?: (value: number) => void;
  onSatisfied?: () => void;
  onUnsatisfied?: () => void;
  bangla?: boolean;
  className?: string;
};

export function QnACard({
  name,
  avatarSrc,
  date,
  questionText,
  rating = 0,
  onRate,
  onSatisfied,
  onUnsatisfied,
  bangla,
  className,
}: QnACardProps) {
  return (
    <article
      className={cn(
        "w-[336px] md:w-[432px] lg:w-[528px] rounded-md bg-surface shadow-sm border border-line p-4 space-y-3",
        className
      )}
    >
      <header className="flex items-center gap-3">
        <Avatar src={avatarSrc} initials={name[0]} size="sm" />
        <div className="flex-1 min-w-0">
          <p className={cn("text-md font-medium text-ink truncate", bangla && "font-bangla")}>{name}</p>
          {date && <p className="text-sm text-muted">{date}</p>}
        </div>
      </header>
      <p className={cn("text-md text-ink leading-5", bangla && "font-bangla")}>{questionText}</p>
      <div className="flex items-center justify-between pt-2 border-t border-line-subtle">
        <StarRating value={rating} size={20} onChange={onRate} />
        <div className="flex gap-1">
          <button
            type="button"
            onClick={onSatisfied}
            aria-label="Satisfied"
            className="size-9 inline-flex items-center justify-center rounded-sm text-success hover:bg-success-subtle"
          >
            <Icon name="thumb-up" size={18} />
          </button>
          <button
            type="button"
            onClick={onUnsatisfied}
            aria-label="Not satisfied"
            className="size-9 inline-flex items-center justify-center rounded-sm text-error hover:bg-error-subtle"
          >
            <Icon name="thumb-down" size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
