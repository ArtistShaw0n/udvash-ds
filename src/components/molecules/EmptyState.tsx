import { Icon, type IconName } from "../atoms/Icon";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type EmptyStateProps = {
  icon?: IconName;
  illustration?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  icon,
  illustration,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12 text-center",
        className,
      )}
    >
      {illustration ? (
        <div className="mb-4">{illustration}</div>
      ) : icon ? (
        <div className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-surface-subtle text-muted">
          <Icon name={icon} size="xl" />
        </div>
      ) : null}
      {title && (
        <Text as="h3" size="lg" weight="semibold" className="mb-1">
          {title}
        </Text>
      )}
      {description && (
        <Text size="sm" color="muted" className="max-w-sm">
          {description}
        </Text>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
