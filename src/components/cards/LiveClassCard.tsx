"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { StatusDot } from "../atoms/StatusDot";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type LiveClassStatus = "live" | "upcoming" | "ended";

export type LiveClassCardProps = {
  subject: string;
  chapter?: string;
  title: string;
  teacher: { name: string; avatar?: string };
  scheduledAt: string;
  durationMin?: number;
  status?: LiveClassStatus;
  loading?: boolean;
  onJoin?: () => void;
  className?: string;
};

/**
 * LiveClassCard — Figma `Card/LiveClass` (336×340). Shown on Home and
 * Course detail screens. Three states drive the CTA + status indicator:
 *   live     → red pulsing dot, primary "Join Live" CTA
 *   upcoming → brand chip with start time, "Set Reminder" CTA
 *   ended    → muted "Past" tag, "Watch Recording" link CTA
 */
export function LiveClassCard({
  subject,
  chapter,
  title,
  teacher,
  scheduledAt,
  durationMin,
  status = "upcoming",
  loading = false,
  onJoin,
  className,
}: LiveClassCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <div className="mb-3 flex items-center justify-between">
          <Skeleton variant="rect" width={70} height={20} />
          <Skeleton variant="rect" width={50} height={20} />
        </div>
        <Skeleton width="80%" height={16} className="mb-2" />
        <Skeleton width="60%" height={14} className="mb-4" />
        <div className="mb-4 flex items-center gap-2">
          <Skeleton variant="circle" width={32} height={32} />
          <Skeleton width={120} height={12} />
        </div>
        <Skeleton variant="rect" height={36} />
      </article>
    );
  }

  return (
    <article
      className={cn(
        "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
        className,
      )}
    >
      {/* Header — subject tag + status */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <Tag variant="brand">{subject}</Tag>
        <StatusBadge status={status} />
      </div>

      {/* Title + chapter */}
      <Text size="lg" weight="semibold" className="mb-1 line-clamp-2">
        {title}
      </Text>
      {chapter && (
        <Text size="sm" color="muted" className="mb-3">
          {chapter}
        </Text>
      )}

      {/* Teacher */}
      <div className="mb-3 flex items-center gap-2">
        <Avatar name={teacher.name} src={teacher.avatar} size="sm" />
        <Text size="sm" weight="medium">
          {teacher.name}
        </Text>
      </div>

      {/* Schedule */}
      <div className="mb-4 flex items-center gap-3 text-xs text-muted">
        <span className="inline-flex items-center gap-1">
          <Icon name="Calendar" size="xs" />
          {scheduledAt}
        </span>
        {durationMin != null && (
          <span className="inline-flex items-center gap-1">
            <Icon name="Clock" size="xs" />
            {durationMin} min
          </span>
        )}
      </div>

      {/* CTA */}
      <Button
        variant={status === "ended" ? "secondary" : "primary"}
        size="md"
        fullWidth
        iconLeft={
          <Icon
            name={status === "live" ? "Play" : status === "ended" ? "Video" : "Bell"}
            size="sm"
          />
        }
        onClick={onJoin}
      >
        {status === "live"
          ? "Join Live"
          : status === "ended"
            ? "Watch Recording"
            : "Set Reminder"}
      </Button>
    </article>
  );
}

function StatusBadge({ status }: { status: LiveClassStatus }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-error/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-error">
        <StatusDot variant="error" size="sm" pulse />
        Live
      </span>
    );
  }
  if (status === "upcoming") {
    return <Tag variant="info" size="sm">Upcoming</Tag>;
  }
  return <Tag variant="neutral" size="sm">Ended</Tag>;
}
