"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:11095 ("Card" home tile)
 * Raw values, no semantic tokens:
 *   tile:  w-[176px] h-[60px] bg #ffffff rounded-[10px] shadow 0 0 5px rgba(0,0,0,0.1)
 *   icon:  36px box, bg <accent> at 10% opacity, rounded-[5px]
 *   title: Inter Medium 14px #616161
 *   sub:   Inter Medium 10px <accent>  (e.g. #fc5a5a)
 */

export type HomeGridCardProps = {
  icon: React.ReactNode;
  title: string;
  meta?: string;
  /** Accent hex used for the icon tint + meta text. Default Figma #fc5a5a. */
  accent?: string;
  onClick?: () => void;
  className?: string;
};

export function HomeGridCard({
  icon,
  title,
  meta,
  accent = "#fc5a5a",
  onClick,
  className,
}: HomeGridCardProps) {
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
        className="flex size-[36px] shrink-0 items-center justify-center rounded-[5px]"
        style={{ backgroundColor: `${accent}1a`, color: accent }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block truncate font-['Inter',sans-serif] text-[14px] font-medium text-[#616161]">
          {title}
        </span>
        {meta && (
          <span className="block truncate font-['Inter',sans-serif] text-[10px] font-medium" style={{ color: accent }}>
            {meta}
          </span>
        )}
      </span>
    </Tag>
  );
}
