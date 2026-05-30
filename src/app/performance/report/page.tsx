import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { ExamResultCard } from "@/components/cards/ExamResultCard";

/*
 * Figma V2 — Performance Report, detailed view (state B). light 1:6645 · dark 1:7015.
 *   header + "Performance Report" (y74) + underline (y100, w183) + subtitle (y111) +
 *   3 filter pills (y176) + "Employee Training Course" heading (y238) + 4 exam-result
 *   cards (y268/665/1062/1459, gap 10) + "Course Total" row (y1862) + "Course Merit
 *   Summary" heading (y1940) + merit summary card (y1970) + "Total Performance" row
 *   (y2409) + footer. frame 376×2578.
 */
const TXT = "text-[#616161] dark:text-[#e8e8e8]";
const I = "/components/icons/perf";

function FilterPill({ label, left, width }: { label: string; left: number; width: number }) {
  return (
    <div className="absolute top-[176px] flex h-[32px] items-center justify-between rounded-[99px] bg-white px-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a]" style={{ left, width }}>
      <span className="font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] text-[#616161] dark:text-[#e8e8e8]">{label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/filter-chevron.svg" alt="" aria-hidden="true" className="h-[4px] w-[8px]" />
    </div>
  );
}

function PillStat({ icon, label, value, top }: { icon: string; label: string; value: string; top: number }) {
  return (
    <div className="absolute left-[12px] flex h-[39px] w-[304px] items-center justify-between rounded-[5px] bg-white px-[12px] shadow-[0px_0px_2.5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)]" style={{ top }}>
      <span className="flex items-center gap-[6px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/${icon}.svg`} alt="" aria-hidden="true" className="size-[18px]" />
        <span className={`font-['Inter',sans-serif] text-[14px] ${TXT}`}>{label}</span>
      </span>
      <span className={`font-['Inter',sans-serif] text-[16px] font-bold ${TXT}`}>{value}</span>
    </div>
  );
}

export default function PerformanceReportPage() {
  return (
    <main className="relative mx-auto min-h-[2578px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(82.0453deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Performance Report</p>
      <div className="absolute left-1/2 top-[100px] h-px w-[183px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className="absolute left-1/2 top-[111px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Employee Training Program 2021</p>

      <FilterPill label="All Course" left={24} width={99} />
      <FilterPill label="All Subject" left={133} width={102} />
      <FilterPill label="All Platform" left={245} width={107} />

      <p className={`absolute left-[24px] top-[238px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Employee Training Course</p>

      <ExamResultCard top={268} status="In Branch" statusColor="#25b7d3" />
      <ExamResultCard top={665} status="Live" statusColor="#ff3a3a" />
      <ExamResultCard top={1062} status="In Branch" statusColor="#25b7d3" />
      <ExamResultCard top={1459} status="In Branch" statusColor="#25b7d3" />

      {/* Course Total row */}
      <div className="absolute left-[24px] top-[1862px] flex h-[62px] w-[328px] items-center justify-between rounded-[10px] bg-white px-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <span className="flex items-center gap-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/badge.svg`} alt="" aria-hidden="true" className="size-[20px]" />
          <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Course Total</span>
        </span>
        <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] ${TXT}`}>-4/1715</span>
      </div>

      <p className={`absolute left-[24px] top-[1940px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Course Merit Summary</p>

      {/* Course Merit Summary card */}
      <div className="absolute left-[24px] top-[1970px] h-[423px] w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <p className={`absolute left-[12px] top-[20px] w-[304px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[20px] ${TXT}`}>1. Engineering Full Course (Offline)</p>
        <p className="absolute left-[12px] top-[48px] font-['Inter',sans-serif] text-[12px] text-[#999999]">Based on In-Branch Exam</p>
        <PillStat icon="mcq" label="MCQ" value="0.00/1000" top={75} />
        <PillStat icon="written" label="Written" value="0.00/1000" top={122} />
        <PillStat icon="obtained" label="Total Obtained" value="0.00/1000" top={169} />
        <PillStat icon="total" label="Highest" value="0.00/1000" top={216} />
        <div className="absolute left-[12px] top-[271px] flex items-center gap-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/merit.svg`} alt="" aria-hidden="true" className="h-[14px] w-[16px]" />
          <span className={`font-['Inter',sans-serif] text-[14px] font-semibold ${TXT}`}>Merit Rankings</span>
        </div>
        <span className={`absolute left-[12px] top-[301px] font-['Inter',sans-serif] text-[12px] ${TXT}`}>Central - 49 </span>
        <span className={`absolute right-[12px] top-[301px] font-['Inter',sans-serif] text-[12px] ${TXT}`}>Branch - 15 </span>
        <div className="absolute left-[89px] top-[367px] flex h-[36px] w-[150px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">View Result</span>
        </div>
      </div>

      {/* Total Performance row */}
      <div className="absolute left-[24px] top-[2409px] flex h-[73px] w-[328px] items-center justify-between rounded-[10px] bg-white px-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <span className="flex items-center gap-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/badge.svg`} alt="" aria-hidden="true" className="size-[20px]" />
          <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Total Performance</span>
        </span>
        <span className="flex flex-col items-end">
          <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] ${TXT}`}>0.00/1000</span>
          <span className="font-['Inter',sans-serif] text-[12px] text-[#616161] dark:text-[#e8e8e8]">Total Marks Obtained</span>
        </span>
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
