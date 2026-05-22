import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Icon } from "./Icon";

type LiveClassCardProps = {
  title: string;
  subject: string;
  instructor?: string;
  schedule?: string;
  isLive?: boolean;
  ended?: boolean;
  ctaLabel?: string;
  onJoin?: () => void;
  bangla?: boolean;
  className?: string;
};

export function LiveClassCard({
  title,
  subject,
  instructor,
  schedule,
  isLive = false,
  ended = false,
  ctaLabel = "Join",
  onJoin,
  bangla,
  className,
}: LiveClassCardProps) {
  return (
    <article
      className={cn(
        "w-[336px] rounded-md bg-surface shadow-sm border border-line-subtle p-4 space-y-3",
        className
      )}
    >
      <header className="flex items-start justify-between gap-2">
        <h3 className={cn("text-lg font-semibold text-ink flex-1", bangla && "font-bangla")}>
          {title}
        </h3>
        <Badge variant="brand">{subject}</Badge>
      </header>

      {isLive && !ended && (
        <div className="flex items-center gap-1.5 text-error">
          <span className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-error animate-ping opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-error" />
          </span>
          <span className="text-sm font-medium uppercase">Live</span>
        </div>
      )}
      {ended && (
        <Badge variant="neutral">Ended</Badge>
      )}

      {schedule && (
        <div className="flex items-center gap-2 text-md text-muted">
          <Icon name="calendar" size={16} />
          <span>{schedule}</span>
        </div>
      )}
      {instructor && (
        <div className="flex items-center gap-2 text-md text-muted">
          <Icon name="user" size={16} />
          <span>{instructor}</span>
        </div>
      )}

      <Button
        variant={isLive ? "primary" : "secondary"}
        size="md"
        className="w-full"
        disabled={ended}
        onClick={onJoin}
      >
        {ctaLabel}
      </Button>
    </article>
  );
}
