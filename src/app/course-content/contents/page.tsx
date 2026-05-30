import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { CourseChapterRow } from "@/components/screens/CourseContentRow";

/*
 * Figma V2 — Course & Content, chapter contents (state D). light 1:8428 · dark 1:8436.
 *   header + "Physics 1st Paper" breadcrumb (y74) + underline (y93, w171) + 2-line
 *   "Chapter-1 : Physical World and Measurement" current title (y104) + 1 content row
 *   ("ওয়ান শট ক্লাস (2)", y168, h60) + footer. frame 376×812.
 */
export default function CourseContentsPage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(68.7218deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Physics 1st Paper
      </p>
      <div className="absolute left-1/2 top-[93px] h-px w-[171px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className="absolute left-1/2 top-[104px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">
        Chapter-1 :<br />Physical World and Measurement
      </p>

      <div className="absolute left-1/2 top-[168px] flex -translate-x-1/2 flex-col gap-[12px]">
        <CourseChapterRow title="ওয়ান শট ক্লাস" count={2} />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
