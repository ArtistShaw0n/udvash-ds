import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { PastClassFilterPill } from "@/components/screens/PastClassList";
import { PastExamCard } from "@/components/cards/PastExamCard";

/*
 * Figma V2 — Practice Exam screen (list state). light node 1:7596 · dark 1:7650.
 *   header + "Practic Exam" title (y74) + fading underline (y100) + 3 filter pills
 *   (All Course / All Subject / All Exam, y141) + 2 cards (y203, gap-20) + footer.
 *   Same card layout as Past Exam, but with a green "Practice" chip (#24c182).
 *   Card 1: Take Exam disabled + "Exam not started yet". Card 2: Take Exam enabled.
 *   frame 376×1229.
 */
const FILTERS = [
  { label: "All Course", left: 24 },
  { label: "All Subject", left: 136.5 },
  { label: "All Exam", left: 249 },
];
const DATETIME = "20 Sep, 2025 11:00 PM to 21 Sep, 2025 11:00 PM";
const COURSE: [string, string] = ["Varsity 'KA' Online Exam Service", "Varsity 'KA' Admission Program 2025"];
const TITLE = "Engineering Daily MCQ Practice Exam Engineering Daily MCQ Practi...";

export default function PracticeExamPage() {
  return (
    <main className="relative mx-auto min-h-[1229px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(73.6634deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Practic Exam
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {FILTERS.map((f) => (
        <PastClassFilterPill key={f.label} label={f.label} left={f.left} />
      ))}

      <div className="absolute left-[24px] top-[203px] flex flex-col gap-[20px]">
        <PastExamCard
          title={TITLE}
          title2Lines
          status="Practice"
          statusColor="#24c182"
          dateTimeValue={DATETIME}
          duration="30 min"
          courseLines={COURSE}
          statusMessage="Exam not started yet"
          buttons={[{ label: "Take Exam" }]}
        />
        <PastExamCard
          title={TITLE}
          title2Lines
          status="Practice"
          statusColor="#24c182"
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
