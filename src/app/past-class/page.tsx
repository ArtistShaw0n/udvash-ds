import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { PastClassCard } from "@/components/cards/PastClassCard";

/*
 * Figma V2 — Past Class screen (list state). light node 1:7816 · dark 1:8084.
 *   header + "Past Class" title (y74) + fading underline (y100) + 3 filter pills
 *   (All Course / All Subject / All Platform, y141) + 2 past-class cards (y203,
 *   flex-col gap-20) + footer (Home active). frame 376×1123.
 */
const CHAPTER = "মৌলের পর্যায়বৃত্ত ধর্ম (পর্যায়বৃত্ত ধর্ম পর্যন্ত) [d-ব্লক মৌল এবং জটিল যৌগের সংকরায়ন]";
const COURSE: [string, string] = ["Engineering Full Course 2025 [Online]", "Engineering Admission Program (Online) 2025"];
const DATETIME = "20 Sep, 2025 07:30 PM to 11:00 PM";
const TITLE = "Engineering Daily MCQ Practice Exam Engineering Daily MCQ Practi...";

function FilterPill({ label, left }: { label: string; left: number }) {
  return (
    <div className="absolute top-[141px] flex h-[32px] w-[103px] items-center justify-center gap-[8px] rounded-[99px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a]" style={{ left }}>
      <span className="font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] text-[#616161] dark:text-[#e8e8e8]">{label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/filter-chevron.svg" alt="" aria-hidden="true" className="h-[4px] w-[8px]" />
    </div>
  );
}

export default function PastClassPage() {
  return (
    <main className="relative mx-auto min-h-[1123px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(72.1999deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Past Class
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      <FilterPill label="All Course" left={24} />
      <FilterPill label="All Subject" left={136.5} />
      <FilterPill label="All Platform" left={249} />

      <div className="absolute left-[24px] top-[203px] flex flex-col gap-[20px]">
        <PastClassCard title={TITLE} title2Lines status="Online" chapter={CHAPTER} dateTimeValue={DATETIME} courseLines={COURSE} buttons={["Video", "Notes"]} />
        <PastClassCard title={TITLE} title2Lines status="Online" chapter={CHAPTER} dateTimeValue={DATETIME} courseLines={COURSE} buttons={["Video", "Notes"]} />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
