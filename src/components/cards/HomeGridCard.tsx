"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:11095 ("Card" home tile — "Live Class")
 * Raw values, no semantic tokens:
 *   tile:  w-[176px] h-[60px] bg #ffffff rounded-[10px] shadow 0 0 5px rgba(0,0,0,0.1)
 *   icon:  36px box · bg #fc5a5a at 10% (node 1:11100, opacity-10) · rounded-[5px]
 *   title: Inter Medium 14px #616161
 *   meta:  Inter Medium 10px #fc5a5a
 * (Other home tiles use different accents — separate Figma nodes, deferred.)
 */

export type HomeGridCardProps = {
  /** Icon glyph is a Figma asset — optional; tinted box renders without it in Phase 1. */
  icon?: React.ReactNode;
  title: string;
  meta?: string;
  onClick?: () => void;
  className?: string;
};

export function HomeGridCard({ icon, title, meta, onClick, className }: HomeGridCardProps) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "flex h-[60px] w-[176px] items-center gap-[8px] rounded-[10px] bg-white px-[12px] text-left shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <span
        className="flex size-[36px] shrink-0 items-center justify-center rounded-[5px] bg-[#fc5a5a1a] text-[#fc5a5a]"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block truncate font-['Inter',sans-serif] text-[14px] font-medium text-[#616161]">
          {title}
        </span>
        {meta && (
          <span className="block truncate font-['Inter',sans-serif] text-[10px] font-medium text-[#fc5a5a]">
            {meta}
          </span>
        )}
      </span>
    </Tag>
  );
}
