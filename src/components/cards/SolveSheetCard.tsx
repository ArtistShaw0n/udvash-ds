import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — Solve Sheet card (light node 1:7466 · dark 1:7528). light + dark.
 *   header band (#e4eaf4 / #2c2c2c): 2-line title + an outline status chip (e.g. red
 *   "Live").  body: just Course (label + line1 semibold + line2 regular) and one
 *   "View Solve Sheet" button (w150, #55347b → dark #9061c8).
 *   band 70 (1-line title) / 92 (2-line); card height = band + 189 (card-relative px).
 */
export type SolveSheetCardProps = {
  title: string;
  title2Lines?: boolean;
  status: string;
  statusColor?: string;
  courseLines: [string, string];
  buttonLabel: string;
  className?: string;
};

export function SolveSheetCard({
  title,
  title2Lines,
  status,
  statusColor = "red",
  courseLines,
  buttonLabel,
  className,
}: SolveSheetCardProps) {
  const band = title2Lines ? 92 : 70;
  const txt = "font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]";
  return (
    <div
      className={cn(
        "relative w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]",
        className,
      )}
      style={{ height: band + 189 }}
    >
      <div className="absolute inset-x-0 top-0 rounded-tl-[10px] rounded-tr-[10px] bg-[#e4eaf4] dark:bg-[#2c2c2c]" style={{ height: band }} />

      <p className="absolute left-[20px] top-[36px] w-[288px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">{title}</p>
      <span className="absolute right-[6px] top-[6px] flex h-[20px] items-center rounded-[10px] border px-[10px] font-['Inter',sans-serif] text-[12px] font-medium leading-[12px]" style={{ borderColor: statusColor, color: statusColor }}>{status}</span>

      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 20 }}>Course</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 43 }}>{courseLines[0]}</p>
      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 66 }}>{courseLines[1]}</p>

      <div className="absolute left-1/2 flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]" style={{ top: band + 123 }}>
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">{buttonLabel}</span>
      </div>
    </div>
  );
}
