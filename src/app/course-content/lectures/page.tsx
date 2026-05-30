import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { MasterClassCard } from "@/components/cards/MasterClassCard";

/*
 * Figma V2 — Course & Content, lecture cards (state E). light 1:8457 · dark 1:8484.
 *   header + "ওয়ান শট ক্লাস" title (y74) + underline (y100, w214) + "Physics 1st Paper"
 *   (y121) + 2-line "Chapter-1 : Physical World and Measurement" (y143) + 2 lecture
 *   cards (Master Class style, y203) + footer. frame 376×920.
 *   Card 1: 3 buttons (3 topics). Card 2: 2 buttons (2 topics).
 */
export default function CourseLecturesPage() {
  return (
    <main className="relative mx-auto min-h-[920px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(68.7218deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        ওয়ান শট ক্লাস
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[214px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className="absolute left-1/2 top-[121px] -translate-x-1/2 font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Physics 1st Paper
      </p>
      <p className="absolute left-1/2 top-[143px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] font-semibold leading-[20px] text-[#616161] dark:text-[#e8e8e8]">
        Chapter-1 :<br />Physical World and Measurement
      </p>

      <div className="absolute left-[24px] top-[203px] flex flex-col gap-[20px]">
        <MasterClassCard
          subject="Phy-1"
          title="One Shot MCQ (Physics 1st Paper"
          topics={["মাত্রা সমীকরণ দ্বারা সমীকরণের শুদ্ধতা যাচাই।", "পরিমাপের ত্রুটি", "স্ক্রু গজ, ভার্নিয়ার স্কেল, স্ফেরোমিটার ও নিক্তি"]}
          buttons={["Videos", "Notes", "Quiz"]}
        />
        <MasterClassCard
          subject="Phy-1"
          title="One Shot MCQ (Physics 1st Paper Chapter-01)"
          title2Lines
          topics={["মাত্রা সমীকরণ দ্বারা সমীকরণের শুদ্ধতা যাচাই।", "পরিমাপের ত্রুটি"]}
          buttons={["Videos", "Notes"]}
        />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
