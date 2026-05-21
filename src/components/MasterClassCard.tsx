import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Icon } from "./Icon";

type MasterClassAction = { label: string; onClick?: () => void };

type MasterClassCardProps = {
  title: string;
  date?: string;
  duration?: string;
  actions?: MasterClassAction[];
  bangla?: boolean;
  className?: string;
};

export function MasterClassCard({
  title,
  date,
  duration,
  actions = [
    { label: "Notes" },
    { label: "Quiz" },
    { label: "Video" },
  ],
  bangla,
  className,
}: MasterClassCardProps) {
  return (
    <article
      className={cn(
        "w-[328px] rounded-md bg-surface shadow-sm border border-line p-4 space-y-3",
        className
      )}
    >
      <h3 className={cn("text-lg font-semibold text-ink", bangla && "font-bangla")}>{title}</h3>
      {(date || duration) && (
        <div className="flex items-center gap-4 text-md text-muted">
          {date && (
            <span className="inline-flex items-center gap-1.5">
              <Icon name="calendar" size={16} />
              {date}
            </span>
          )}
          {duration && (
            <span className="inline-flex items-center gap-1.5">
              <Icon name="bell" size={16} />
              {duration}
            </span>
          )}
        </div>
      )}
      {actions.length > 0 && (
        <div className="grid grid-cols-3 gap-2 pt-2">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="secondary"
              size="sm"
              onClick={action.onClick}
              className="!min-w-0"
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </article>
  );
}
