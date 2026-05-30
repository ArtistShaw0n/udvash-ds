import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { CourseChapterRow } from "@/components/screens/CourseContentRow";

/*
 * Figma V2 — Course & Content, chapter list (state C). light 1:8399 · dark 1:8414.
 *   header + "HSC 2025 Final Revision Course" breadcrumb (y74) + underline (y93, w294)
 *   + "Physics 1st Paper" current title (y104) + 8 chapter rows (y146, h60, flex-col
 *   gap-12, no icon, grey chevron) + footer. frame 376×812.
 */
const CHAPTERS = [
  "অধ্যায়-১ : ভৌতজগৎ ও পরিমাপ",
  "অধ্যায়-২ : ভেক্টর",
  "অধ্যায়-৪ : নিউটনিয়ান বলবিদ্যা",
  "অধ্যায়-৫ : কাজ, শক্তি ও ক্ষমতা",
  "অধ্যায়-৬ : মহাকর্ষ ও অভিকর্ষ",
  "অধ্যায়-৭ : পদার্থের গাঠনিক ধর্ম",
  "অধ্যায়-৮ : পর্যাবৃত্ত গতি",
  "অধ্যায়-১০ : আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব গ্যাসের গতিতত্ত্ব",
];

export default function CourseChaptersPage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(68.7218deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        HSC 2025 Final Revision Course
      </p>
      <div className="absolute left-1/2 top-[93px] h-px w-[294px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className="absolute left-1/2 top-[104px] -translate-x-1/2 font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">
        Physics 1st Paper
      </p>

      <div className="absolute left-1/2 top-[146px] flex -translate-x-1/2 flex-col gap-[12px]">
        {CHAPTERS.map((ch) => (
          <CourseChapterRow key={ch} title={ch} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
