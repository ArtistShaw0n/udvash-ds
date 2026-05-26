"use client";

import { Icon, type IconName } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type CourseContentStatus = "locked" | "available" | "in-progress" | "completed";

export type CourseContentCardProps = {
  index?: number;
  title: string;
  meta?: string;
  icon?: IconName;
  status?: CourseContentStatus;
  progress?: number;
  onClick?: () => void;
  className?: string;
};

/*
 * Figma source: V2 CourseContent row (parent 1:8349, instance 1:8406 / 1:8355).
 * 336×60 (compact) or 336×68 (with meta) — leading 36×36 icon-chip,
 * single-line title + optional meta, trailing chevron/status.
 */

const statusToneClass = {
  locked: "bg-subtle text-muted",
  available: "bg-brand-subtle text-brand",
  "in-progress": "bg-brand text-onbrand",
  completed: "bg-success-bg text-success",
} as const;

export function CourseContentCard({
  index,
  title,
  meta,
  icon = "BookOpen",
  status = "available",
  progress,
  onClick,
  className,
}: CourseContentCardProps) {
  const isInteractive = !!onClick && status !== "locked";

  const Tag1 = isInteractive ? "button" : "div";
  return (
    <Tag1
      type={isInteractive ? "button" : undefined}
      onClick={isInteractive ? onClick : undefined}
      className={cn(
        "flex w-full max-w-[336px] items-center gap-3 rounded-md bg-surface p-3 text-left shadow-card",
        isInteractive && "cursor-pointer transition-colors hover:bg-subtle",
        status === "locked" && "opacity-60",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-9 shrink-0 items-center justify-center rounded-sm",
          statusToneClass[status],
        )}
        aria-hidden="true"
      >
        <Icon name={icon} size="sm" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-medium text-primary">
          {index != null && <span className="mr-1 text-muted">#{index}</span>}
          {title}
        </p>
        {meta && (
          <p className="truncate text-sm text-muted">
            {meta}
            {progress != null && status === "in-progress" && ` · ${Math.round(progress)}%`}
          </p>
        )}
      </div>
      <StatusIndicator status={status} />
    </Tag1>
  );
}

function StatusIndicator({ status }: { status: CourseContentStatus }) {
  if (status === "locked") return <Icon name="Lock" size="sm" className="text-muted" />;
  if (status === "in-progress") return <Tag variant="brand" size="sm">In progress</Tag>;
  if (status === "completed") return <Icon name="CircleCheck" size="md" className="text-success" />;
  return <Icon name="ChevronRight" size="sm" className="text-muted" />;
}
