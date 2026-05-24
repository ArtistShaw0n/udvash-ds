"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type MasterClassCardProps = {
  title: string;
  description?: string;
  tutor: { name: string; avatar?: string; credential?: string };
  scheduledAt: string;
  durationMin?: number;
  seatsLeft?: number;
  enrolled?: boolean;
  loading?: boolean;
  onEnroll?: () => void;
  className?: string;
};

/**
 * MasterClassCard — Figma `Card/MasterClass` (336×315). Premium offering
 * shown on the Home grid + dedicated MasterClass tab. Highlights tutor
 * credential, schedule, and seat scarcity.
 */
export function MasterClassCard({
  title,
  description,
  tutor,
  scheduledAt,
  durationMin,
  seatsLeft,
  enrolled = false,
  loading = false,
  onEnroll,
  className,
}: MasterClassCardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] rounded-md border border-brand/40 bg-surface p-4 shadow-sm",
          "ring-1 ring-brand/20",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="rect" width={90} height={20} className="mb-3" />
        <Skeleton width="90%" height={18} className="mb-2" />
        <Skeleton lines={2} className="mb-4" />
        <div className="mb-3 flex items-center gap-2">
          <Skeleton variant="circle" width={40} height={40} />
          <div className="flex-1 space-y-1">
            <Skeleton width={120} height={12} />
            <Skeleton width={160} height={10} />
          </div>
        </div>
        <Skeleton variant="rect" height={36} />
      </article>
    );
  }

  return (
    <article
      className={cn(
        "relative w-full max-w-[336px] overflow-hidden rounded-md border border-brand/40 bg-surface p-4 shadow-sm",
        "ring-1 ring-brand/20",
        // Brand accent stripe on the left edge — theme-safe
        "before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-brand",
        className,
      )}
    >
      {/* Premium ribbon */}
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 rounded-sm bg-brand px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-onbrand">
          <Icon name="Crown" size="xs" />
          Master Class
        </span>
        {seatsLeft != null && seatsLeft <= 10 && (
          <Tag variant="warning" size="sm">
            {seatsLeft} seats left
          </Tag>
        )}
      </div>

      {/* Title + description */}
      <Text size="lg" weight="semibold" className="mb-1 line-clamp-2">
        {title}
      </Text>
      {description && (
        <Text size="sm" color="muted" className="mb-4 line-clamp-2">
          {description}
        </Text>
      )}

      {/* Tutor */}
      <div className="mb-4 flex items-center gap-2 rounded-sm bg-surface-subtle p-2">
        <Avatar name={tutor.name} src={tutor.avatar} size="md" />
        <div className="min-w-0 flex-1">
          <Text size="sm" weight="medium" className="truncate">
            {tutor.name}
          </Text>
          {tutor.credential && (
            <Text size="xs" color="muted" className="truncate">
              {tutor.credential}
            </Text>
          )}
        </div>
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
        variant={enrolled ? "secondary" : "primary"}
        fullWidth
        iconLeft={
          <Icon name={enrolled ? "CircleCheck" : "Sparkles"} size="sm" />
        }
        onClick={onEnroll}
      >
        {enrolled ? "Enrolled" : "Enroll Now"}
      </Button>
    </article>
  );
}
