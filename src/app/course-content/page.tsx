import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { CourseContentRow, COURSES } from "@/components/screens/CourseContentRow";

/*
 * Figma V2 — Course & Content screen, top-level course list (state A). light 1:8349 · dark 1:8443.
 *   header + "Course & Content" title (y74) + fading underline (y100, w211) + 9 course
 *   rows (y121, flex-col gap-12, 80px pitch) + footer (Home active). frame 376×925.
 */
const ROWS = [
  COURSES.hsc,
  COURSES.medical25,
  COURSES.eng25,
  COURSES.vka25,
  COURSES.vkha25,
  COURSES.medical26,
  COURSES.eng26,
  COURSES.vka26,
  COURSES.vkha26,
];

export default function CourseContentPage() {
  return (
    <main className="relative mx-auto min-h-[925px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(68.7218deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Course &amp; Content
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[211px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      <div className="absolute left-1/2 top-[121px] flex -translate-x-1/2 flex-col gap-[12px]">
        {ROWS.map((c) => (
          <CourseContentRow key={c.title} course={c} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
