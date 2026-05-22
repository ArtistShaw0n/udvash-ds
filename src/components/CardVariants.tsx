import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Avatar } from "./Avatar";
import { Tag } from "./Tag";
import { Icon } from "./Icon";

/* ============================================================
   Card/Tag-* — content cards organised by tag list
   ============================================================ */

type TagCardItem = { label: string; selected?: boolean };

type TagCardProps = {
  title: string;
  tags: TagCardItem[];
  description?: string;
  onTagClick?: (label: string) => void;
  bangla?: boolean;
  className?: string;
};

/** Card/Tag-Short — 336×187 short card with header + tag row */
export function CardTagShort({ title, tags, onTagClick, bangla, className }: TagCardProps) {
  return (
    <article className={cn("w-[336px] min-h-[187px] rounded-md bg-surface border border-line p-4 space-y-3", className)}>
      <h3 className={cn("text-lg font-semibold text-ink", bangla && "font-bangla")}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag
            key={t.label}
            selected={t.selected}
            onClick={() => onTagClick?.(t.label)}
            className="cursor-pointer"
          >
            {t.label}
          </Tag>
        ))}
      </div>
    </article>
  );
}

/** Card/Tag-Single — 336×333 single-tag-section card with description */
export function CardTagSingle({ title, tags, description, onTagClick, bangla, className }: TagCardProps) {
  return (
    <article className={cn("w-[336px] min-h-[333px] rounded-md bg-surface border border-line p-4 space-y-3", className)}>
      <h3 className={cn("text-lg font-semibold text-ink", bangla && "font-bangla")}>{title}</h3>
      {description && <p className={cn("text-md text-muted", bangla && "font-bangla")}>{description}</p>}
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((t) => (
          <Tag key={t.label} selected={t.selected} onClick={() => onTagClick?.(t.label)} className="cursor-pointer">
            {t.label}
          </Tag>
        ))}
      </div>
    </article>
  );
}

type TagDoubleProps = {
  title: string;
  sectionA: { heading: string; tags: TagCardItem[] };
  sectionB: { heading: string; tags: TagCardItem[] };
  onTagClick?: (section: "a" | "b", label: string) => void;
  bangla?: boolean;
  className?: string;
};

/** Card/Tag-Double — 336×540 two-section tag card */
export function CardTagDouble({ title, sectionA, sectionB, onTagClick, bangla, className }: TagDoubleProps) {
  return (
    <article className={cn("w-[336px] min-h-[540px] rounded-md bg-surface border border-line p-4 space-y-4", className)}>
      <h3 className={cn("text-lg font-semibold text-ink", bangla && "font-bangla")}>{title}</h3>
      {[{ key: "a" as const, ...sectionA }, { key: "b" as const, ...sectionB }].map((s) => (
        <div key={s.key} className="space-y-2">
          <p className={cn("text-sm font-medium text-muted", bangla && "font-bangla")}>{s.heading}</p>
          <div className="flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <Tag
                key={t.label}
                selected={t.selected}
                onClick={() => onTagClick?.(s.key, t.label)}
                className="cursor-pointer"
              >
                {t.label}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

/* ============================================================
   Card/ViewProfile — 336×605 the large profile-detail card
   ============================================================ */

type ViewProfileRow = { label: string; value: ReactNode; icon?: ReactNode };

type CardViewProfileProps = {
  name: string;
  avatarSrc?: string;
  avatarInitials?: string;
  rows?: ViewProfileRow[];
  footer?: ReactNode;
  bangla?: boolean;
  className?: string;
};

export function CardViewProfile({
  name,
  avatarSrc,
  avatarInitials,
  rows = [],
  footer,
  bangla,
  className,
}: CardViewProfileProps) {
  return (
    <article
      className={cn(
        "w-[336px] min-h-[605px] rounded-md bg-surface border border-line p-5 flex flex-col items-center text-center space-y-4",
        className
      )}
    >
      <Avatar src={avatarSrc} initials={avatarInitials ?? name[0]} size="lg" />
      <h3 className={cn("text-xl font-semibold text-ink", bangla && "font-bangla")}>{name}</h3>
      <ul className="w-full space-y-2 text-left">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center gap-3 px-3 py-2 rounded-sm bg-surface-subtle text-md"
          >
            {row.icon && <span className="text-muted shrink-0">{row.icon}</span>}
            <span className="text-muted flex-1">{row.label}</span>
            <span className="font-medium text-ink truncate">{row.value}</span>
          </li>
        ))}
      </ul>
      {footer && <div className="w-full pt-3 border-t border-line-subtle">{footer}</div>}
    </article>
  );
}

/* ============================================================
   Card/ProfileSubcard-Row1 / Row2 — small inline rows in profile
   ============================================================ */

type ProfileSubcardProps = {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
  className?: string;
};

/** Card/ProfileSubcard-Row1 — 336×34 medium row */
export function CardProfileSubcardRow1({ label, value, icon, className }: ProfileSubcardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 w-[336px] h-[34px] px-3 rounded-sm bg-surface-subtle text-sm",
        className
      )}
    >
      {icon && <span className="text-muted shrink-0">{icon}</span>}
      <span className="text-muted flex-1">{label}</span>
      <span className="font-medium text-ink truncate">{value}</span>
    </div>
  );
}

/** Card/ProfileSubcard-Row2 — 336×28 compact row */
export function CardProfileSubcardRow2({ label, value, icon, className }: ProfileSubcardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 w-[336px] h-[28px] px-2.5 rounded-xs text-xs",
        className
      )}
    >
      {icon && <span className="text-muted shrink-0">{icon}</span>}
      <span className="text-muted flex-1">{label}</span>
      <span className="font-medium text-ink truncate">{value}</span>
    </div>
  );
}

/* ============================================================
   Card/Community-SearchAvatar — 336×42 community search result row
   ============================================================ */

type CommunitySearchAvatarProps = {
  name: string;
  meta?: string;
  avatarSrc?: string;
  avatarInitials?: string;
  onClick?: () => void;
  bangla?: boolean;
  className?: string;
};

export function CardCommunitySearchAvatar({
  name,
  meta,
  avatarSrc,
  avatarInitials,
  onClick,
  bangla,
  className,
}: CommunitySearchAvatarProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 w-[336px] h-[42px] px-2 rounded-sm bg-surface hover:bg-surface-subtle text-left transition-colors",
        className
      )}
    >
      <Avatar src={avatarSrc} initials={avatarInitials ?? name[0]} size="sm" />
      <div className="flex-1 min-w-0">
        <span className={cn("block text-sm font-medium text-ink truncate", bangla && "font-bangla")}>{name}</span>
        {meta && <span className="block text-xs text-muted truncate">{meta}</span>}
      </div>
      <Icon name="chevron-right" size={12} className="text-muted shrink-0" />
    </button>
  );
}

/* ============================================================
   Card/CourseContent-Variant19 / Variant20 — expanded chapter row (336×91)
   ============================================================ */

type CourseContentExpandedProps = {
  title: string;
  index?: string;
  meta?: string;
  progress?: number; // 0-100
  bangla?: boolean;
  onClick?: () => void;
  className?: string;
};

/** Card/CourseContent-Variant19 — 336×91 expanded chapter row with meta + progress */
export function CardCourseContentVariant19({
  title,
  index,
  meta,
  progress = 0,
  bangla = true,
  onClick,
  className,
}: CourseContentExpandedProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-stretch gap-3 w-[336px] h-[91px] px-3 py-3 rounded-sm border border-line-subtle bg-surface shadow-xs text-left",
        className
      )}
    >
      {index && (
        <span className="inline-flex items-center justify-center size-7 rounded-sm bg-brand-subtle text-brand text-sm font-bold shrink-0">
          {index}
        </span>
      )}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <span className={cn("text-md font-semibold text-ink truncate", bangla && "font-bangla")}>{title}</span>
        {meta && <span className="text-sm text-muted truncate">{meta}</span>}
        <div className="h-1.5 rounded-full bg-disabled">
          <div className="h-full rounded-full bg-brand" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <Icon name="chevron-right" size={14} className="text-muted shrink-0 self-center" />
    </button>
  );
}

/** Card/CourseContent-Variant20 — 336×91 alt expanded variant (with score/tag) */
export function CardCourseContentVariant20({
  title,
  index,
  meta,
  progress = 0,
  bangla = true,
  onClick,
  className,
}: CourseContentExpandedProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-stretch gap-3 w-[336px] h-[91px] px-3 py-3 rounded-sm border border-line-subtle bg-surface-subtle text-left",
        className
      )}
    >
      {index && (
        <span className="inline-flex items-center justify-center size-7 rounded-sm bg-brand text-onbrand text-sm font-bold shrink-0">
          {index}
        </span>
      )}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <span className={cn("text-md font-semibold text-ink truncate", bangla && "font-bangla")}>{title}</span>
        {meta && <span className="text-sm text-muted truncate">{meta}</span>}
        <div className="h-1.5 rounded-full bg-disabled">
          <div className="h-full rounded-full bg-success" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <Icon name="check" size={14} className="text-success shrink-0 self-center" />
    </button>
  );
}
