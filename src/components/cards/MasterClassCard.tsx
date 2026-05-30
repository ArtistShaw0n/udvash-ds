import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — Master Class card (light node 1:8518 · dark 1:8546). light + dark.
 *   header band (#e4eaf4 / #2c2c2c): subject (e.g. "Phy-1") + lecture title.
 *   body: 3 topic lines (14px semibold) + buttons all #55347b → dark #9061c8 (white):
 *   2 buttons (Videos + Notes, one row) or 3 (Videos + Notes row, then Quiz centred).
 *   band 70 (1-line title) / 92 (2-line); card height = band + (3 buttons ? 245 : 189).
 */
export type MasterClassCardProps = {
  subject: string;
  title: string;
  title2Lines?: boolean;
  topics: string[];
  buttons: string[];
  className?: string;
};

export function MasterClassCard({ subject, title, title2Lines, topics, buttons, className }: MasterClassCardProps) {
  const band = title2Lines ? 92 : 70;
  const has3 = buttons.length >= 3;
  const btnTop = band + 20 + topics.length * 23 + 34;
  const txt = "font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]";
  const btn = "absolute flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]";
  const btnTxt = "font-['Inter',sans-serif] text-[14px] leading-[12px] text-white";
  return (
    <div
      className={cn(
        "relative w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]",
        className,
      )}
      style={{ height: btnTop + (has3 ? 122 : 66) }}
    >
      <div className="absolute inset-x-0 top-0 rounded-tl-[10px] rounded-tr-[10px] bg-[#e4eaf4] dark:bg-[#2c2c2c]" style={{ height: band }} />

      <span className={cn("absolute left-[20px] top-[7px]", txt)}>{subject}</span>
      <p className="absolute left-[20px] top-[36px] w-[288px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">{title}</p>

      {topics.map((t, i) => (
        <p key={i} className={cn("absolute left-[20px] w-[288px] font-semibold", txt)} style={{ top: band + 20 + i * 23 }}>{t}</p>
      ))}

      <div className={cn(btn, "left-[calc(50%-75px)]")} style={{ top: btnTop }}>
        <span className={btnTxt}>{buttons[0]}</span>
      </div>
      <div className={cn(btn, "left-[calc(50%+75px)]")} style={{ top: btnTop }}>
        <span className={btnTxt}>{buttons[1]}</span>
      </div>
      {has3 && (
        <div className={cn(btn, "left-1/2")} style={{ top: btnTop + 56 }}>
          <span className={btnTxt}>{buttons[2]}</span>
        </div>
      )}
    </div>
  );
}
