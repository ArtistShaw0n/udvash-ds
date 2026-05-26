"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type MasterClassCardProps = {
  title: string;
  description?: string;
  tutor: { name: string; avatar?: string; credential?: string };
  scheduledAt: string;
  durationMin?: number;
  seatsLeft?: number;
  enrolled?: boolean;
  onEnroll?: () => void;
  className?: string;
};

/*
 * Figma source: V2 MasterClass card (parent 1:8512, instance 1:8518).
 * 328×315 — premium course card with prominent tutor row, schedule meta,
 * brand accent stripe.
 */
export function MasterClassCard({
  title,
  description,
  tutor,
  scheduledAt,
  durationMin,
  seatsLeft,
  enrolled = false,
  onEnroll,
  className,
}: MasterClassCardProps) {
  return (
    <article
      className={cn(
        "relative w-full max-w-[328px] overflow-hidden rounded-lg bg-surface p-4 shadow-card ring-1 ring-brand/20",
        "before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-brand",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 rounded-sm bg-brand px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-onbrand">
          <Icon name="Crown" size="xs" />
          Master Class
        </span>
        {seatsLeft != null && seatsLeft <= 10 && (
          <Tag variant="warning" size="sm">{seatsLeft} seats left</Tag>
        )}
      </div>

      <h3 className="mb-1 line-clamp-2 text-md font-semibold leading-snug text-primary">{title}</h3>
      {description && (
        <p className="mb-3 line-clamp-2 text-sm text-muted">{description}</p>
      )}

      <div className="mb-3 flex items-center gap-2 rounded-sm bg-subtle p-2">
        <Avatar name={tutor.name} src={tutor.avatar} size="sm" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-primary">{tutor.name}</p>
          {tutor.credential && (
            <p className="truncate text-xs text-muted">{tutor.credential}</p>
          )}
        </div>
      </div>

      <div className="mb-4 flex items-center gap-3 text-sm text-muted">
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

      <Button
        variant={enrolled ? "secondary" : "primary"}
        fullWidth
        iconLeft={<Icon name={enrolled ? "CircleCheck" : "Sparkles"} size="xs" />}
        onClick={onEnroll}
      >
        {enrolled ? "Enrolled" : "Enroll Now"}
      </Button>
    </article>
  );
}
