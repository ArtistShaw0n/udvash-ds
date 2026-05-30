/*
 * Figma V2 — Course & Content list row ("course-&-content" component 1:1568, h68).
 *   white rounded-10 row + a per-course tinted circle (color @15% opacity, 36px) with
 *   the course icon (24px) + 14px-medium title + a matching colored chevron.
 *   Shared by the Course & Content drill-down states (1:8349 / 8364 / 8399 / 8428).
 */
export type Course = { color: string; icon: string; title: string };

/* The course palette + icons used across the Course & Content states (extracted 1:1). */
export const COURSES: Record<string, Course> = {
  hsc: { color: "#00ceb6", icon: "/components/icons/course/hsc.svg", title: "HSC 2025 Final Revision Course" },
  medical25: { color: "#1489af", icon: "/components/icons/course/medical-25.svg", title: "Medical Admission Program 2025" },
  eng25: { color: "#f90", icon: "/components/icons/course/eng-25.svg", title: "Engineering Admission Program 2025" },
  vka25: { color: "#9824c1", icon: "/components/icons/course/vka-25.svg", title: "Varsity KA Admission Program 2025" },
  vkha25: { color: "red", icon: "/components/icons/course/vkha-25.svg", title: "Varsity KHA Admission Program 2025" },
  medical26: { color: "#00ba00", icon: "/components/icons/course/medical-26.svg", title: "Medical Admission Program 2026" },
  eng26: { color: "#c1b124", icon: "/components/icons/course/eng-26.svg", title: "Engineering Admission Program 2026" },
  vka26: { color: "#fc5a5a", icon: "/components/icons/course/vka-26.svg", title: "Varsity KA Admission Program 2026" },
  vkha26: { color: "#6262d9", icon: "/components/icons/course/vkha-26.svg", title: "Varsity KHA Admission Program 2026" },
};

export function CourseContentRow({ course }: { course: Course }) {
  return (
    <div className="relative h-[68px] w-[336px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
      <span className="absolute left-[12px] top-[16px] size-[36px] rounded-[8px] opacity-15" style={{ backgroundColor: course.color }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={course.icon} alt="" aria-hidden="true" className="absolute left-[18px] top-[22px] size-[24px]" />
      <p className="absolute left-[58px] top-1/2 w-[245px] -translate-y-1/2 font-['Inter',sans-serif] text-[14px] font-medium leading-[20px] text-[#616161] dark:text-[#e8e8e8]">{course.title}</p>
      <svg className="absolute right-[13px] top-1/2 h-[12px] w-[7px] -translate-y-1/2" viewBox="0 0 7 12" fill="none" style={{ color: course.color }} aria-hidden="true">
        <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
