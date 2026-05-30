import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { PastClassFilterPill, PAST_CLASS_FILTERS } from "@/components/screens/PastClassList";

/*
 * Figma V2 — Solve Sheet screen, EMPTY state. light node 1:7550 · dark 1:7573.
 *   header + "Solve Sheet" title (y74) + underline (y100) + 3 filter pills (y141) +
 *   "No match found" (y260, centred) + footer. frame 376×812.
 */
export default function SolveSheetEmptyPage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
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

      <p className="absolute left-1/2 top-[260px] -translate-x-1/2 font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        No match found
      </p>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
