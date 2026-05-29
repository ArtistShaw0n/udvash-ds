import { cn } from "@/lib/cn";

/*
 * 1:1 import from Figma V2 — node 1:7745 (Past Exam / filter dropdown pill).
 * Verbatim Figma values:
 *   pill:  bg-white · h-[32px] · w-[103px] · rounded-[99px] · shadow 0px 0px 5px rgba(0,0,0,0.1)
 *   label: Inter Regular 14px #616161 · leading-[20px] · tracking-[0.1px]
 *   chevron-down (right) is a Figma SVG asset — skipped in Phase 1
 */

export type FilterPillProps = {
  children: React.ReactNode;
  className?: string;
};

export function FilterPill({ children, className }: FilterPillProps) {
  return (
    <div
      className={cn(
        "inline-flex h-[32px] w-[103px] items-center justify-between rounded-[99px] bg-white px-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <span className="truncate font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] text-[#616161]">
        {children}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/filter-chevron.svg" alt="" aria-hidden="true" className="ml-[8px] h-[4px] w-[8px] shrink-0" />
    </div>
  );
}
