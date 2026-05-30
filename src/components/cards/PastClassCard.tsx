import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — Past Class card (light node 1:7819 · dark 1:8084). light + dark.
 *   header band (#e4eaf4 / #2c2c2c): 2-line title + an outline status chip (red border
 *   + red text, e.g. "Online", both themes).
 *   body: chapter (2-line semibold) · Date & Time · Course (line1 semibold + line2
 *   regular) · two buttons (e.g. Video / Notes, #55347b → dark #9061c8, text #e8e8e8).
 *   band 70 (1-line title) / 92 (2-line); card height = band + 310 (card-relative px).
 */
export type PastClassCardProps = {
  title: string;
  title2Lines?: boolean;
  status: string;
  chapter: string;
  dateTimeValue: string;
  courseLines: [string, string];
  buttons: [string, string];
  className?: string;
};

export function PastClassCard({
  title,
  title2Lines,
  status,
  chapter,
  dateTimeValue,
  courseLines,
  buttons,
  className,
}: PastClassCardProps) {
  const band = title2Lines ? 92 : 70;
  const txt = "font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]";
  return (
    <div
      className={cn(
        "relative w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]",
        className,
      )}
      style={{ height: band + 310 }}
    >
      <div className="absolute inset-x-0 top-0 rounded-tl-[10px] rounded-tr-[10px] bg-[#e4eaf4] dark:bg-[#2c2c2c]" style={{ height: band }} />

      <p className="absolute left-[20px] top-[36px] w-[288px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">{title}</p>
      <span className="absolute right-[6px] top-[6px] flex h-[20px] items-center rounded-[10px] border border-[red] px-[10px] font-['Inter',sans-serif] text-[12px] font-medium leading-[12px] text-[red]">{status}</span>

      <p className={cn("absolute left-[20px] w-[288px] font-semibold leading-[20px]", txt)} style={{ top: band + 20 }}>{chapter}</p>
      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 72 }}>Date &amp; Time</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 95 }}>{dateTimeValue}</p>
      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 124 }}>Course</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 147 }}>{courseLines[0]}</p>
      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 170 }}>{courseLines[1]}</p>

      <div className="absolute left-[calc(50%-75px)] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]" style={{ top: band + 244 }}>
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-[#e8e8e8]">{buttons[0]}</span>
      </div>
      <div className="absolute left-[calc(50%+75px)] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]" style={{ top: band + 244 }}>
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-[#e8e8e8]">{buttons[1]}</span>
      </div>
    </div>
  );
}
