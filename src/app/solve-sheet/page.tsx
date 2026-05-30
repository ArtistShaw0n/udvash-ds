import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { PastClassFilterPill, PAST_CLASS_FILTERS } from "@/components/screens/PastClassList";
import { SolveSheetCard } from "@/components/cards/SolveSheetCard";

/*
 * Figma V2 — Solve Sheet screen (list state). light node 1:7463 · dark 1:7507.
 *   header + "Solve Sheet" title (y74) + underline (y100) + 3 filter pills (y141) +
 *   2 solve-sheet cards (y203, gap-20) + footer (Home active). frame 376×859.
 */
const COURSE: [string, string] = ["Varsity 'KA' Online Exam Service", "Varsity 'KA' Admission Program 2025"];

export default function SolveSheetPage() {
  return (
    <main className="relative mx-auto min-h-[859px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(73.6634deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Solve Sheet
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {PAST_CLASS_FILTERS.map((f) => (
        <PastClassFilterPill key={f.label} label={f.label} left={f.left} />
      ))}

      <div className="absolute left-[24px] top-[203px] flex flex-col gap-[20px]">
        <SolveSheetCard title="VAP Daily MCQ and Written Live Exam Bio-03 Part-01and 02" title2Lines status="Live" courseLines={COURSE} buttonLabel="View Solve Sheet" />
        <SolveSheetCard title="VAP Daily MCQ and Written Live" status="Live" courseLines={COURSE} buttonLabel="View Solve Sheet" />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
