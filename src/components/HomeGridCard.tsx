import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HomeGridCardProps = {
  icon?: ReactNode;
  label: string;
  status?: string;
  hasNotification?: boolean;
  bangla?: boolean;
  onClick?: () => void;
  className?: string;
};

export function HomeGridCard({
  icon,
  label,
  status,
  hasNotification = false,
  bangla,
  onClick,
  className,
}: HomeGridCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-2 w-[176px] md:w-[224px] lg:w-[272px] h-[60px] px-2 py-2 rounded-sm bg-surface border border-line-subtle shadow-xs text-left transition-colors hover:bg-surface-subtle",
        className
      )}
    >
      {icon && (
        <span className="shrink-0 size-9 inline-flex items-center justify-center text-brand">
          {icon}
        </span>
      )}
      <span className="flex-1 min-w-0">
        <span className={cn("block text-sm font-medium text-ink truncate", bangla && "font-bangla")}>
          {label}
        </span>
        {status && (
          <span className="block text-xs text-muted truncate">{status}</span>
        )}
      </span>
      {hasNotification && (
        <span
          className="absolute top-2 right-2 size-2 rounded-full bg-error"
          aria-label="New notification"
        />
      )}
    </button>
  );
}
