"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { Badge } from "../atoms/Badge";
import { Avatar } from "../atoms/Avatar";
import { cn } from "@/lib/cn";

export type HeaderAction = {
  icon: IconName;
  label: string;
  badge?: React.ReactNode;
  onClick?: () => void;
};

export type HeaderProps = {
  logo?: React.ReactNode;
  title?: React.ReactNode;
  actions?: HeaderAction[];
  avatar?: { name?: string; src?: string; onClick?: () => void };
  className?: string;
};

export function Header({ logo, title, actions, avatar, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-[50px] w-full items-center justify-between bg-surface px-3 shadow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {logo}
        {title && (
          <span className="text-md font-medium text-ink">{title}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {actions?.map((action) => (
          <button
            key={action.label}
            type="button"
            aria-label={action.label}
            onClick={action.onClick}
            className="relative flex size-7 items-center justify-center rounded-sm text-ink hover:bg-surface-subtle"
          >
            <Icon name={action.icon} size="md" />
            {action.badge && (
              <span className="absolute -right-0.5 -top-0.5">
                {typeof action.badge === "number" || typeof action.badge === "string" ? (
                  <Badge variant="error" size="sm">{action.badge}</Badge>
                ) : (
                  action.badge
                )}
              </span>
            )}
          </button>
        ))}
        {avatar && (
          <button
            type="button"
            onClick={avatar.onClick}
            aria-label={avatar.name ?? "Profile"}
            className="inline-flex items-center justify-center rounded-full bg-brand/10 p-1"
          >
            <Avatar name={avatar.name} src={avatar.src} size="sm" />
          </button>
        )}
      </div>
    </header>
  );
}
