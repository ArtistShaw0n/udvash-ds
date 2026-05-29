"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:22623 (Community list row)
 * Raw values, no semantic tokens:
 *   avatar: 50px circle — fill + initials are a Figma SVG asset (node 1:22635), skipped in Phase 1
 *   name:   Inter/Noto SemiBold 14px #616161 leading-[22px]
 *   last:   Inter Regular 12px rgba(97,97,97,0.8) leading-[20px], truncated
 *   badge:  bg #00a511 · rounded-[18px] · Inter Medium 12px #ffffff
 *   time:   Inter Regular 10px rgba(97,97,97,0.5)
 *   bottom divider #e5e7eb
 */

export type CommunityRowCardProps = {
  groupName: string;
  lastMessage: string;
  time: string;
  unread?: string;
  onClick?: () => void;
  className?: string;
};

export function CommunityRowCard({
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
      {/* avatar (Oval) is a Figma asset — skipped in Phase 1 */}
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
