import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { CourseContentRow, COURSE_COLORS } from "@/components/screens/CourseContentRow";

/*
 * Figma V2 — Course & Content, subject list (state B). light 1:8364 · dark 1:8382.
 *   header + "Course & Content" breadcrumb (y74) + underline (y93, w211) + 2-line
 *   "HSC 2025 Final Revision Course" current title (y104) + 11 subject rows (y168,
 *   flex-col gap-12, accent palette cycling) + footer. frame 376×1132.
 */
const C = COURSE_COLORS;
const SUBJECTS: { color: string; title: string }[] = [
  { color: C[0], title: "Physics 1st Paper" },
  { color: C[1], title: "Physics 2nd Paper" },
  { color: C[2], title: "Chemistry 1st Paper" },
  { color: C[3], title: "Chemistry 2nd Paper" },
  { color: C[4], title: "Higher Mathematics 1st Paper" },
  { color: C[5], title: "Higher Mathematics 2nd Paper" },
  { color: C[6], title: "Biology 1st Paper" },
  { color: C[7], title: "Biology 2nd Paper" },
  { color: C[8], title: "Bangla" },
  { color: C[8], title: "English" },
  { color: C[8], title: "ICT" },
];

export default function CourseSubjectsPage() {
  return (
    <main className="relative mx-auto min-h-[1132px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(68.7218deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Course &amp; Content
      </p>
      <div className="absolute left-1/2 top-[93px] h-px w-[211px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className="absolute left-1/2 top-[104px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">
        HSC 2025<br />Final Revision Course
      </p>

      <div className="absolute left-1/2 top-[168px] flex -translate-x-1/2 flex-col gap-[12px]">
        {SUBJECTS.map((s) => (
          <CourseContentRow key={s.title} course={s} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
