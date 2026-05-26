"use client";

import { Avatar } from "../atoms/Avatar";
import { cn } from "@/lib/cn";

export type CommunityRowCardProps = {
  groupName: string;
  lastMessage: string;
  lastSender: string;
  time: string;
  unreadCount?: number;
  avatarSrc?: string;
  onClick?: () => void;
  className?: string;
};

/*
 * Figma source: V2 CommunityRow (Community screen 1:22616, instance 1:22623).
 * 352×62 row: 50×50 avatar + name (16 medium) + last message (14 muted) +
 * timestamp + optional unread badge. WhatsApp-style.
 */
export function CommunityRowCard({
  groupName,
  lastMessage,
  lastSender,
  time,
  unreadCount,
  avatarSrc,
  onClick,
  className,
}: CommunityRowCardProps) {
  const isInteractive = !!onClick;
  const Tag1 = isInteractive ? "button" : "div";
  return (
    <Tag1
      type={isInteractive ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "flex w-full max-w-[352px] items-center gap-3 rounded-md bg-surface p-3 text-left shadow-card",
        isInteractive && "transition-colors hover:bg-subtle",
        className,
      )}
    >
      <Avatar src={avatarSrc} name={groupName} size="md" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-md font-medium text-primary">{groupName}</p>
        <p className="truncate text-base text-muted">
          <span className="font-medium text-primary">{lastSender}:</span> {lastMessage}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-sm text-muted">{time}</span>
        {unreadCount != null && unreadCount > 0 && (
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-[10px] font-bold leading-none text-onbrand">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </div>
    </Tag1>
  );
}
