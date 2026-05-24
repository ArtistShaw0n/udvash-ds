"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Skeleton } from "../atoms/Skeleton";
import { Tag } from "../atoms/Tag";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type QnACardProps = {
  subject?: string;
  question: string;
  author: { name: string; avatar?: string };
  postedAt: string;
  answersCount: number;
  upvotes?: number;
  hasAcceptedAnswer?: boolean;
  loading?: boolean;
  onOpen?: () => void;
  onUpvote?: () => void;
  className?: string;
};

/**
 * QnACard — Figma `Card/QnA` (336×313). Discussion thread preview shown
 * on the Q&A tab. Highlights resolved threads with a green check.
 */
export function QnACard({
  subject,
  question,
  author,
  postedAt,
  answersCount,
  upvotes = 0,
  hasAcceptedAnswer = false,
  loading = false,
  onOpen,
  onUpvote,
  className,
}: QnACardProps) {
  if (loading) {
    return (
      <article
        className={cn(
          "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <div className="mb-3 flex items-center gap-2">
          <Skeleton variant="circle" width={32} height={32} />
          <div className="flex-1 space-y-1">
            <Skeleton width="60%" height={12} />
            <Skeleton width="40%" height={10} />
          </div>
        </div>
        <Skeleton lines={3} className="mb-3" />
        <Skeleton variant="rect" height={28} />
      </article>
    );
  }

  return (
    <article
      className={cn(
        "w-full max-w-[336px] rounded-md border border-line-subtle bg-surface p-4 shadow-sm",
        hasAcceptedAnswer && "ring-1 ring-success/30",
        className,
      )}
    >
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <Avatar src={author.avatar} name={author.name} size="sm" />
        <div className="min-w-0 flex-1">
          <Text size="sm" weight="medium" className="truncate">
            {author.name}
          </Text>
          <Text size="xs" color="muted">{postedAt}</Text>
        </div>
        {subject && <Tag variant="info" size="sm">{subject}</Tag>}
      </div>

      {/* Question */}
      <Text size="md" weight="medium" className="mb-3 line-clamp-3">
        {question}
      </Text>

      {/* Footer: counts + actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted">
          <button
            type="button"
            onClick={onUpvote}
            className="inline-flex items-center gap-1 transition-colors hover:text-brand"
            aria-label="Upvote"
          >
            <Icon name="ThumbsUp" size="xs" />
            <span className="tabular-nums">{upvotes}</span>
          </button>
          <span className="inline-flex items-center gap-1">
            <Icon name="MessageSquare" size="xs" />
            <span className="tabular-nums">{answersCount}</span>
            {hasAcceptedAnswer && <Icon name="CircleCheck" size="xs" className="text-success" />}
          </span>
        </div>
        {onOpen && (
          <Button
            variant="link"
            size="sm"
            iconRight={<Icon name="ArrowRight" size="xs" />}
            onClick={onOpen}
          >
            Open
          </Button>
        )}
      </div>
    </article>
  );
}
