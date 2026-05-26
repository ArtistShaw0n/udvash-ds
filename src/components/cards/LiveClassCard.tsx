"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type LiveClassStatus = "live" | "upcoming" | "ended";

export type LiveClassCardProps = {
  subject: string;
  title: string;
  teacher: { name: string; avatar?: string };
  scheduledAt: string;
  durationMin?: number;
  chapter?: string;
  status?: LiveClassStatus;
  onJoin?: () => void;
  className?: string;
};

/*
 * Figma source: V2 LiveClass card (parent node 1:9598, instance 1:9602).
 * 328×340 — brand-band header (E4EAF4) with subject tag + LIVE chip,
 * body with title (16/22 semibold) + chapter sub-line + teacher row +
 * schedule meta, footer with 130×36 primary CTA.
 */
export function LiveClassCard({
  subject,
  title,
  teacher,
  scheduledAt,
  durationMin,
  chapter,
  status = "upcoming",
  onJoin,
  className,
}: LiveClassCardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-[328px] overflow-hidden rounded-lg bg-surface shadow-card",
        className,
      )}
    >
      {/* Header band — E4EAF4 lavender band per Figma */}
      <div className="flex items-center justify-between gap-2 bg-brand-band px-4 py-2">
        <Tag variant="brand">{subject}</Tag>
        {status === "live" ? (
          <span className="inline-flex items-center gap-1 rounded-sm bg-danger-bg px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-danger">
            <span className="size-1.5 animate-pulse rounded-full bg-danger" />
            Live
          </span>
        ) : status === "upcoming" ? (
          <Tag variant="info" size="sm">Upcoming</Tag>
        ) : (
          <Tag variant="neutral" size="sm">Ended</Tag>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-md font-semibold leading-snug text-primary line-clamp-2">{title}</h3>
        {chapter && (
          <p className="mt-1 text-sm text-muted">{chapter}</p>
        )}

        <div className="mt-3 flex items-center gap-2">
          <Avatar src={teacher.avatar} name={teacher.name} size="xs" />
          <span className="text-sm font-medium text-primary">{teacher.name}</span>
        </div>

        <div className="mt-3 flex items-center gap-3 text-sm text-muted">
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

        <div className="mt-4">
          <Button
            fullWidth
            iconLeft={
              <Icon
                name={status === "live" ? "Play" : status === "ended" ? "Video" : "Bell"}
                size="xs"
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
        </div>
      </div>
    </article>
  );
}
