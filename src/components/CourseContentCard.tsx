import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type CourseContentCardProps = {
  title: string;
  index?: string;
  expanded?: boolean;
  disabled?: boolean;
  bangla?: boolean;
  onClick?: () => void;
  className?: string;
};

export function CourseContentCard({
  title,
  index,
  expanded = false,
  disabled = false,
  bangla = true,
  onClick,
  className,
}: CourseContentCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-expanded={expanded}
      className={cn(
        "flex items-center gap-3 w-[336px] h-[60px] px-3 py-3 rounded-sm border bg-surface shadow-xs text-left transition-colors",
        disabled
          ? "bg-disabled border-line-disabled text-disabled-text cursor-not-allowed"
          : "border-line-subtle hover:bg-surface-subtle",
        className
      )}
    >
      {index && (
        <span className="inline-flex items-center justify-center size-6 rounded-sm bg-brand-subtle text-brand text-sm font-bold shrink-0">
          {index}
        </span>
      )}
      <span className={cn("flex-1 text-md font-semibold text-ink truncate", bangla && "font-bangla")}>
        {title}
      </span>
      <Icon name={expanded ? "chevron-up" : "chevron-down"} size={14} className="text-muted shrink-0" />
    </button>
  );
}
