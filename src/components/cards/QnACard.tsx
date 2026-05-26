"use client";

import { Avatar } from "../atoms/Avatar";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Tag } from "../atoms/Tag";
import { cn } from "@/lib/cn";

export type QnACardProps = {
  subject?: string;
  question: string;
  author: { name: string; avatar?: string };
  postedAt: string;
  answersCount: number;
  upvotes?: number;
  hasAcceptedAnswer?: boolean;
  attachmentSrc?: string;
  onOpen?: () => void;
  onUpvote?: () => void;
  className?: string;
};

/*
 * Figma source: V2 QnA thread card (Q&A Services screen, instance 1:27678).
 * 352-wide thread card with author meta row, body, optional attachment,
 * footer with upvote/answers/open.
 */
export function QnACard({
  subject,
  question,
  author,
  postedAt,
  answersCount,
  upvotes = 0,
  hasAcceptedAnswer = false,
  attachmentSrc,
  onOpen,
  onUpvote,
  className,
}: QnACardProps) {
  return (
    <article
      className={cn(
        "w-full max-w-[352px] rounded-md bg-surface p-3 shadow-card",
        hasAcceptedAnswer && "ring-1 ring-success/30",
        className,
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        <Avatar src={author.avatar} name={author.name} size="sm" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-primary">{author.name}</p>
          <p className="text-xs text-muted">{postedAt}</p>
        </div>
        {subject && <Tag variant="info" size="sm">{subject}</Tag>}
      </div>

      <p className="mb-3 line-clamp-3 text-base text-primary">{question}</p>

      {attachmentSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={attachmentSrc} alt="Attachment" className="mb-3 max-h-48 w-full rounded-sm object-cover" />
      )}

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
          <Button variant="ghost" size="sm" iconRight={<Icon name="ArrowRight" size="xs" />} onClick={onOpen}>
            Open
          </Button>
        )}
      </div>
    </article>
  );
}
