"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { cn } from "@/lib/cn";

export type HomeGridTone = "brand" | "success" | "warning" | "danger" | "info" | "neutral";

export type HomeGridCardProps = {
  icon: IconName;
  title: string;
  meta?: string;
  /** Override the icon-tile colour. */
  tone?: HomeGridTone;
  /** Show a red notification dot. */
  notification?: boolean;
  /** Right-side numeric badge (e.g. unread count). */
  badge?: number;
  onClick?: () => void;
  className?: string;
};

/*
 * Figma source: V2 HomeGrid tile (parent 1:9720, e.g. 1:11095 "Live Class").
 * 176×60 — bg-surface rounded-lg shadow-card with a 36×36 tinted icon
 * chip on the left and label + optional sub-label on the right.
 */

const toneBg: Record<HomeGridTone, string> = {
  brand:   "bg-brand/10 text-brand",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger:  "bg-danger/10 text-danger",
  info:    "bg-info/10 text-info",
  neutral: "bg-subtle text-muted",
};

export function HomeGridCard({
  icon,
  title,
  meta,
  tone = "brand",
  notification = false,
  badge,
  onClick,
  className,
}: HomeGridCardProps) {
  const isInteractive = !!onClick;
  const Tag1 = isInteractive ? "button" : "div";
  return (
    <Tag1
      type={isInteractive ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "relative flex h-[60px] w-full max-w-[176px] items-center gap-3 rounded-lg bg-surface p-3 text-left shadow-card",
        isInteractive && "cursor-pointer transition-colors hover:bg-subtle",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-9 shrink-0 items-center justify-center rounded-sm",
          toneBg[tone],
        )}
        aria-hidden="true"
      >
        <Icon name={icon} size="sm" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-medium text-primary">{title}</p>
        {meta && <p className="truncate text-xs font-medium text-danger">{meta}</p>}
      </div>
      {badge != null && badge > 0 ? (
        <span className="inline-flex min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-semibold text-onbrand">
          {badge > 99 ? "99+" : badge}
        </span>
      ) : notification ? (
        <span className="size-2 shrink-0 rounded-full bg-danger" aria-label="Has updates" />
      ) : null}
    </Tag1>
  );
}
