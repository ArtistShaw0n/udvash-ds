"use client";

import { Avatar } from "../atoms/Avatar";
import { Skeleton } from "../atoms/Skeleton";
import { Text } from "../atoms/Text";
import { cn } from "@/lib/cn";

export type CommunityRowCardProps = {
  groupName: string;
  lastMessage: string;
  lastSender: string;
  time: string;
  unreadCount?: number;
  avatarSrc?: string;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
};

/**
 * CommunityRowCard — Figma `Card/CommunityRow` (336×62). One row in
 * the Community / Latest Discussions list. WhatsApp-style avatar +
 * group + last message + unread badge.
 */
export function CommunityRowCard({
  groupName,
  lastMessage,
  lastSender,
  time,
  unreadCount,
  avatarSrc,
  loading = false,
  onClick,
  className,
}: CommunityRowCardProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "flex w-full max-w-[336px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 shadow-sm",
          className,
        )}
        aria-busy="true"
      >
        <Skeleton variant="circle" width={40} height={40} />
        <div className="flex-1 space-y-1.5">
          <Skeleton width="60%" height={12} />
          <Skeleton width="90%" height={10} />
        </div>
        <Skeleton width={40} height={10} />
      </div>
    );
  }

  const isInteractive = !!onClick;
  const Tag = isInteractive ? "button" : "div";

  return (
    <Tag
      type={isInteractive ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "flex w-full max-w-[336px] items-center gap-3 rounded-md border border-line-subtle bg-surface p-3 text-left shadow-sm",
        isInteractive && "transition-colors hover:bg-surface-subtle",
        className,
      )}
    >
      <Avatar src={avatarSrc} name={groupName} size="md" />
      <div className="min-w-0 flex-1">
        <Text size="sm" weight="semibold" className="truncate">
          {groupName}
        </Text>
        <Text size="xs" color="muted" className="truncate">
          <span className="font-medium text-ink">{lastSender}:</span> {lastMessage}
        </Text>
      </div>
      <div className="flex flex-col items-end gap-1">
        <Text size="xs" color="muted">{time}</Text>
        {unreadCount != null && unreadCount > 0 && (
          <span className="inline-flex min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold leading-4 text-onbrand">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </div>
    </Tag>
  );
}
