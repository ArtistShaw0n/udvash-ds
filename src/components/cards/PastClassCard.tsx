"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type PastClassCardProps = {
  subject: string;
  chapter?: string;
  title: string;
  teacher: { name: string; avatar?: string };
  date: string;
  durationMin: number;
  thumbnailSrc?: string;
  downloaded?: boolean;
  loading?: boolean;
  onWatch?: () => void;
  onDownload?: () => void;
  className?: string;
};

/**
 * PastClassCard — Figma `Card/PastClass` (336×402). Shown in the Downloads
 * list and Past Classes tabs. Includes a video-thumbnail slot, watch CTA,
 * and a download toggle that reflects local availability.
 */
export function PastClassCard({
  subject,
  chapter,
  title,
  teacher,
  date,
  durationMin,
  thumbnailSrc,
  downloaded = false,
  loading = false,
  onWatch,
  onDownload,
  className,
}: PastClassCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] overflow-hidden rounded-md border border-line-subtle bg-surface shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="rect" height={160} />
        <div className="p-4">
          <Skeleton width="60%" height={14} className="mb-2" />
          <Skeleton width="90%" height={16} className="mb-3" />
          <Skeleton lines={2} />
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "w-full max-w-[336px] overflow-hidden rounded-md border border-line-subtle bg-surface shadow-sm",
        className,
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full bg-surface-subtle">
        {thumbnailSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailSrc}
            alt={title}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-placeholder">
            <Icon name="Video" size="xl" />
          </div>
        )}
        <span className="absolute right-2 top-2 rounded-xs bg-gray-900/70 px-2 py-0.5 text-xs font-medium text-white">
          {Math.floor(durationMin / 60) > 0
            ? `${Math.floor(durationMin / 60)}h ${durationMin % 60}m`
            : `${durationMin}m`}
        </span>
        <button
          type="button"
          onClick={onWatch}
          aria-label={`Play ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/20"
        >
          <span className="rounded-full bg-white/90 p-3 text-brand shadow-md">
            <Icon name="Play" size="md" />
          </span>
        </button>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <Tag variant="brand" size="sm">{subject}</Tag>
          {chapter && (
            <Text size="xs" color="muted" className="truncate">
              {chapter}
            </Text>
          )}
        </div>

        <Text size="md" weight="semibold" className="mb-3 line-clamp-2">
          {title}
        </Text>

        <div className="mb-3 flex items-center gap-2">
          <Avatar name={teacher.name} src={teacher.avatar} size="xs" />
          <Text size="xs" color="muted">{teacher.name}</Text>
          <Text size="xs" color="muted">·</Text>
          <Text size="xs" color="muted">{date}</Text>
        </div>

        <div className="flex gap-2">
          <Button size="sm" iconLeft={<Icon name="Play" size="xs" />} onClick={onWatch}>
            Watch
          </Button>
          <Button
            variant={downloaded ? "secondary" : "ghost"}
            size="sm"
            iconLeft={
              <Icon name={downloaded ? "CircleCheck" : "Download"} size="xs" />
            }
            onClick={onDownload}
          >
            {downloaded ? "Downloaded" : "Download"}
          </Button>
        </div>
      </div>
    </article>
  );
}
