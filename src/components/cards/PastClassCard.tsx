"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
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
  onWatch?: () => void;
  onDownload?: () => void;
  className?: string;
};

/*
 * Figma source: V2 PastClass card (parent 1:7816, instance 1:7819).
 * 328×402 — thumbnail/header, 4 meta rows + tags row, two CTAs (Watch + Solve).
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
  onWatch,
  onDownload,
  className,
}: PastClassCardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-[328px] overflow-hidden rounded-lg bg-surface shadow-card",
        className,
      )}
    >
      {/* Thumbnail (video) */}
      <div className="relative aspect-video w-full bg-subtle">
        {thumbnailSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbnailSrc} alt={title} className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center text-muted">
            <Icon name="Video" size="xl" />
          </div>
        )}
        <span className="absolute right-2 top-2 rounded-xs bg-canvas/80 px-2 py-0.5 text-xs font-medium text-onbrand">
          {Math.floor(durationMin / 60) > 0
            ? `${Math.floor(durationMin / 60)}h ${durationMin % 60}m`
            : `${durationMin}m`}
        </span>
        <button
          type="button"
          onClick={onWatch}
          aria-label={`Play ${title}`}
          className="absolute inset-0 flex items-center justify-center transition-colors hover:bg-canvas/20"
        >
          <span className="rounded-full bg-surface/95 p-3 text-brand shadow-card">
            <Icon name="Play" size="md" />
          </span>
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <Tag variant="brand" size="sm">{subject}</Tag>
          {chapter && <span className="truncate text-sm text-muted">{chapter}</span>}
        </div>

        <h3 className="mb-3 line-clamp-2 text-md font-semibold leading-snug text-primary">{title}</h3>

        <div className="mb-3 flex items-center gap-2 text-sm text-muted">
          <Avatar src={teacher.avatar} name={teacher.name} size="xs" />
          <span>{teacher.name}</span>
          <span>·</span>
          <span>{date}</span>
        </div>

        <div className="flex gap-2">
          <Button size="sm" iconLeft={<Icon name="Play" size="xs" />} onClick={onWatch}>Watch</Button>
          <Button
            variant={downloaded ? "secondary" : "ghost"}
            size="sm"
            iconLeft={<Icon name={downloaded ? "CircleCheck" : "Download"} size="xs" />}
            onClick={onDownload}
          >
            {downloaded ? "Downloaded" : "Download"}
          </Button>
        </div>
      </div>
    </article>
  );
}
