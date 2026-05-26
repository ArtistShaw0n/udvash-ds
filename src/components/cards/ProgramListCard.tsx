"use client";

import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type ProgramListCardProps = {
  programName: string;
  level: string;
  branch?: string;
  durationMonths: number;
  subjects: string[];
  priceTaka?: number;
  enrolled?: boolean;
  startsAt?: string;
  heroSrc?: string;
  onEnroll?: () => void;
  onDetails?: () => void;
  className?: string;
};

/*
 * Figma source: V2 ProgramList card (parent 1:7403, instance 1:7406).
 * 328×348 — hero image header + title + subject chips + price + CTAs.
 */
export function ProgramListCard({
  programName,
  level,
  branch,
  durationMonths,
  subjects,
  priceTaka,
  enrolled = false,
  startsAt,
  heroSrc,
  onEnroll,
  onDetails,
  className,
}: ProgramListCardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-[328px] overflow-hidden rounded-lg bg-surface shadow-card",
        enrolled && "ring-1 ring-success/40",
        className,
      )}
    >
      {/* Hero image */}
      {heroSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={heroSrc} alt={programName} className="aspect-[16/9] w-full object-cover" />
      ) : (
        <div className="flex aspect-[16/9] w-full items-center justify-center bg-brand-band text-brand">
          <Icon name="GraduationCap" size="xl" />
        </div>
      )}

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <Tag variant="brand">{level}</Tag>
          {branch && <Tag variant="info" size="sm">{branch}</Tag>}
          {enrolled && (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-success">
              <Icon name="CircleCheck" size="xs" />
              Enrolled
            </span>
          )}
        </div>

        <h3 className="mb-2 line-clamp-2 text-md font-semibold leading-snug text-primary">{programName}</h3>

        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1">
            <Icon name="Calendar" size="xs" />
            {durationMonths} mo
          </span>
          {startsAt && (
            <span className="inline-flex items-center gap-1">
              <Icon name="Clock" size="xs" />
              Starts {startsAt}
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {subjects.slice(0, 5).map((s) => (
            <Tag key={s} variant="neutral" size="sm">{s}</Tag>
          ))}
          {subjects.length > 5 && <Tag variant="neutral" size="sm">+{subjects.length - 5}</Tag>}
        </div>

        <div className="flex items-end justify-between gap-3">
          {priceTaka != null && !enrolled && (
            <div>
              <p className="text-xs text-muted">Total</p>
              <p className="text-lg font-bold tabular-nums text-brand">৳{priceTaka.toLocaleString("en-IN")}</p>
            </div>
          )}
          <div className="flex flex-1 justify-end gap-2">
            {onDetails && (
              <Button variant="ghost" size="sm" onClick={onDetails}>Details</Button>
            )}
            <Button
              variant={enrolled ? "secondary" : "primary"}
              size="sm"
              iconLeft={<Icon name={enrolled ? "BookOpen" : "Plus"} size="xs" />}
              onClick={onEnroll}
            >
              {enrolled ? "Continue" : "Enroll"}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
