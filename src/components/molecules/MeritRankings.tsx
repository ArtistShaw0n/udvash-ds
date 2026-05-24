"use client";

import { Avatar } from "../atoms/Avatar";
import { PositionLabel } from "../atoms/PositionLabel";
import { Skeleton } from "../atoms/Skeleton";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type MeritRow = {
  position: number;
  name: string;
  score: number;
  registrationNo?: string | number;
  avatarSrc?: string;
  isCurrentUser?: boolean;
};

export type MeritRankingsProps = {
  title?: string;
  rows: MeritRow[];
  maxScore?: number;
  loading?: boolean;
  className?: string;
};

/**
 * MeritRankings — Figma Data/MeritRankings (280×88). Leaderboard table
 * of top scorers. The current user's row is highlighted with a brand
 * tint regardless of their position so they can find themselves.
 */
export function MeritRankings({
  title = "Top Scorers",
  rows,
  maxScore = 100,
  loading = false,
  className,
}: MeritRankingsProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "w-full max-w-[280px] rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton width="40%" height={12} className="mb-3" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="mb-2 flex items-center gap-2">
            <Skeleton variant="circle" width={28} height={28} />
            <Skeleton width="60%" height={12} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full max-w-[280px] rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
        className,
      )}
    >
      {title && (
        <Text size="xs" weight="semibold" color="muted" className="mb-2 uppercase tracking-widest">
          {title}
        </Text>
      )}
      <ol className="space-y-1.5">
        {rows.map((row) => (
          <li
            key={`${row.position}-${row.name}`}
            className={cn(
              "flex items-center gap-2 rounded-sm px-1.5 py-1",
              row.isCurrentUser && "bg-brand-subtle",
            )}
          >
            <PositionLabel position={row.position} />
            <Avatar src={row.avatarSrc} name={row.name} size="xs" />
            <Text size="sm" weight={row.isCurrentUser ? "semibold" : "medium"} className="min-w-0 flex-1 truncate">
              {row.name}
            </Text>
            <Text size="sm" weight="bold" className="tabular-nums text-brand">
              {row.score}
              <span className="text-xs text-muted">/{maxScore}</span>
            </Text>
          </li>
        ))}
      </ol>
    </div>
  );
}
