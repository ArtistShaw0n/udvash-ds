"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:22623 (Community list row)
 * Raw values, no semantic tokens:
 *   avatar: 50px #25b7d3 circle (node 1:22635) + initials Inter Regular 20px #ffffff → community-avatar.svg
 *   name:   Inter/Noto SemiBold 14px #616161 leading-[22px]
 *   last:   Inter Regular 12px rgba(97,97,97,0.8) leading-[20px], truncated
 *   badge:  bg #00a511 · rounded-[18px] · Inter Medium 12px #ffffff
 *   time:   Inter Regular 10px rgba(97,97,97,0.5)
 *   bottom divider #e5e7eb
 */

export type CommunityRowCardProps = {
  initials?: string;
  groupName: string;
  lastMessage: string;
  time: string;
  unread?: string;
  onClick?: () => void;
  className?: string;
};

export function CommunityRowCard({
  initials,
  groupName,
  lastMessage,
  time,
  unread,
  onClick,
  className,
}: CommunityRowCardProps) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "flex w-[352px] items-center gap-[12px] border-b border-[#e5e7eb] py-[12px] text-left",
        className,
      )}
    >
      <span className="relative inline-flex size-[50px] shrink-0 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/icons/community-avatar.svg" alt="" aria-hidden="true" className="absolute inset-0 size-full" />
        <span className="relative font-['Inter',sans-serif] text-[20px] text-white">{initials}</span>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-['Inter',sans-serif] text-[14px] font-semibold leading-[22px] text-[#616161]">
          {groupName}
        </span>
        <span className="block truncate font-['Inter',sans-serif] text-[12px] leading-[20px] text-[rgba(97,97,97,0.8)]">
          {lastMessage}
        </span>
      </span>
      <span className="flex flex-col items-end gap-[4px]">
        <span className="font-['Inter',sans-serif] text-[10px] text-[rgba(97,97,97,0.5)]">{time}</span>
        {unread && (
          <span className="flex h-[18px] items-center justify-center rounded-[18px] bg-[#00a511] px-[6px] font-['Inter',sans-serif] text-[12px] font-medium text-white">
            {unread}
          </span>
        )}
      </span>
    </Tag>
  );
}
