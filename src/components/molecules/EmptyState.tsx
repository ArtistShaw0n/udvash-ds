import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type EmptyStateProps = {
  icon?: IconName;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

/*
 * EmptyState — full-card empty / no-data placeholder. Used inside lists
 * and search results when there's nothing to show. Optional CTA slot.
 */
export function EmptyState({
  icon = "Inbox",
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 rounded-md p-6 text-center",
        className,
      )}
    >
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-subtle text-muted">
        <Icon name={icon} size="lg" />
      </span>
      <p className="text-md font-semibold text-primary">{title}</p>
      {description && (
        <p className="max-w-xs text-sm text-muted">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
