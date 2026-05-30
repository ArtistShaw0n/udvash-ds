import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { PastClassFilterPill, PAST_CLASS_FILTERS } from "@/components/screens/PastClassList";
import { PastExamCard } from "@/components/cards/PastExamCard";

/*
 * Figma V2 — Past Exam screen (list state). light node 1:7704 · dark 1:7760.
 *   header + "Past Exam" title (y74) + fading underline (y100) + 3 filter pills
 *   (All Course / All Subject / All Platform, y141) + 2 past-exam cards (y203,
 *   flex-col gap-20) + footer (Home active). frame 376×1229.
 *   Card 1: Absent (disabled) + View Question. Card 2: single Take Exam.
 */
const DATETIME = "20 Sep, 2025 11:00 PM to 21 Sep, 2025 11:00 PM";
const COURSE: [string, string] = ["Varsity 'KA' Online Exam Service", "Varsity 'KA' Admission Program 2025"];
const TITLE = "VAP Daily MCQ and Written Live Exam Bio-03 Part-01and 02";

export default function PastExamPage() {
  return (
    <main className="relative mx-auto min-h-[1229px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(73.6634deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Past Exam
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {PAST_CLASS_FILTERS.map((f) => (
        <PastClassFilterPill key={f.label} label={f.label} left={f.left} />
      ))}

      <div className="absolute left-[24px] top-[203px] flex flex-col gap-[20px]">
        <PastExamCard
          title={TITLE}
          title2Lines
          status="Live"
          dateTimeValue={DATETIME}
          duration="30 min"
          courseLines={COURSE}
          statusMessage="You haven't taken the exam yet"
          buttons={[{ label: "Absent" }, { label: "View Question", enabled: true }]}
        />
        <PastExamCard
          title={TITLE}
          title2Lines
          status="Live"
          dateTimeValue={DATETIME}
          duration="30 min"
          courseLines={COURSE}
          statusMessage="You haven't taken the exam yet"
          buttons={[{ label: "Take Exam", enabled: true }]}
        />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
