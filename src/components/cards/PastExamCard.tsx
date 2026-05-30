import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — Past Exam card (light node 1:7708 · dark 1:7781). light + dark.
 *   header band (#e4eaf4 / #2c2c2c): 2-line title + a red-outline status chip ("Live").
 *   body: Date & Time, Duration, Course (line1 semibold + line2 regular), a red status
 *   note (#f95959) and 1 or 2 buttons (e.g. "Absent" disabled + "View Question", or a
 *   single centred "Take Exam"). enabled #55347b→#9061c8 · disabled #c6c6c6→#2c2c2c.
 *   band 70 (1-line title) / 92 (2-line); card height = band + 363 (card-relative px).
 */
export type PastExamButton = { label: string; enabled?: boolean };

export type PastExamCardProps = {
  title: string;
  title2Lines?: boolean;
  status: string;
  statusColor?: string;
  dateTimeValue: string;
  duration: string;
  courseLines: [string, string];
  statusMessage?: string;
  buttons: PastExamButton[];
  className?: string;
};

function Btn({ button, left }: { button: PastExamButton; left: string }) {
  return (
    <div
      className={cn(
        "absolute flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px]",
        button.enabled ? "bg-[#55347b] dark:bg-[#9061c8]" : "bg-[#c6c6c6] dark:bg-[#2c2c2c]",
      )}
      style={{ left, top: "var(--btn-top)" }}
    >
      <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">{button.label}</span>
    </div>
  );
}

export function PastExamCard({
  title,
  title2Lines,
  status,
  statusColor = "red",
  dateTimeValue,
  duration,
  courseLines,
  statusMessage,
  buttons,
  className,
}: PastExamCardProps) {
  const band = title2Lines ? 92 : 70;
  const txt = "font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]";
  return (
    <div
      className={cn(
        "relative w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]",
        className,
      )}
      style={{ height: band + 363, ["--btn-top" as string]: `${band + 297}px` }}
    >
      <div className="absolute inset-x-0 top-0 rounded-tl-[10px] rounded-tr-[10px] bg-[#e4eaf4] dark:bg-[#2c2c2c]" style={{ height: band }} />

      <p className="absolute left-[20px] top-[36px] w-[288px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">{title}</p>
      <span className="absolute right-[6px] top-[6px] flex h-[20px] items-center rounded-[10px] border px-[10px] font-['Inter',sans-serif] text-[12px] font-medium leading-[12px]" style={{ borderColor: statusColor, color: statusColor }}>{status}</span>

      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 20 }}>Date &amp; Time</p>
      <p className={cn("absolute left-[20px] w-[288px] font-semibold leading-[20px]", txt)} style={{ top: band + 43 }}>{dateTimeValue}</p>
      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 95 }}>Duration</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 118 }}>{duration}</p>
      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 147 }}>Course</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 170 }}>{courseLines[0]}</p>
      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 193 }}>{courseLines[1]}</p>

      {statusMessage && (
        <p className="absolute inset-x-0 text-center font-['Inter',sans-serif] text-[14px] font-medium leading-[normal] text-[#f95959]" style={{ top: band + 240 }}>{statusMessage}</p>
      )}

      {buttons.length === 1 ? (
        <Btn button={buttons[0]} left="50%" />
      ) : (
        <>
          <Btn button={buttons[0]} left="calc(50% - 75px)" />
          <Btn button={buttons[1]} left="calc(50% + 75px)" />
        </>
      )}
    </div>
  );
}
