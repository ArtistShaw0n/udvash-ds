/*
 * Figma V2 — Course & Content drill-down rows.
 *   CourseContentRow (1:1568, h68): white rounded-10 row + a tinted circle (color @15%)
 *     with the udvash icon (recoloured per accent) + 14px-medium title + colored chevron.
 *     Used for the course list (state A) and subject list (state B).
 *   CourseChapterRow (h60): white rounded-10 row + 14px title (+ optional blue count) +
 *     grey chevron. Used for the chapter / content lists (states C, D).
 *   The icon is the same udvash glyph recoloured per accent, so it is keyed by colour.
 */
const ICON_BY_COLOR: Record<string, string> = {
  "#00ceb6": "hsc",
  "#1489af": "medical-25",
  "#f90": "eng-25",
  "#9824c1": "vka-25",
  red: "vkha-25",
  "#00ba00": "medical-26",
  "#c1b124": "eng-26",
  "#fc5a5a": "vka-26",
  "#6262d9": "vkha-26",
};

/* the 9-colour accent palette in Figma order (rows cycle through it). */
export const COURSE_COLORS = ["#00ceb6", "#1489af", "#f90", "#9824c1", "red", "#00ba00", "#c1b124", "#fc5a5a", "#6262d9"];

export type Course = { color: string; title: string };

export const COURSES: Record<string, Course> = {
  hsc: { color: "#00ceb6", title: "HSC 2025 Final Revision Course" },
  medical25: { color: "#1489af", title: "Medical Admission Program 2025" },
  eng25: { color: "#f90", title: "Engineering Admission Program 2025" },
  vka25: { color: "#9824c1", title: "Varsity KA Admission Program 2025" },
  vkha25: { color: "red", title: "Varsity KHA Admission Program 2025" },
  medical26: { color: "#00ba00", title: "Medical Admission Program 2026" },
  eng26: { color: "#c1b124", title: "Engineering Admission Program 2026" },
  vka26: { color: "#fc5a5a", title: "Varsity KA Admission Program 2026" },
  vkha26: { color: "#6262d9", title: "Varsity KHA Admission Program 2026" },
};

export function CourseContentRow({ course }: { course: Course }) {
  const icon = `/components/icons/course/${ICON_BY_COLOR[course.color] ?? "vkha-26"}.svg`;
  return (
    <div className="relative h-[68px] w-[336px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
      <span className="absolute left-[12px] top-[16px] size-[36px] rounded-[8px] opacity-15" style={{ backgroundColor: course.color }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" aria-hidden="true" className="absolute left-[18px] top-[22px] size-[24px]" />
      <p className="absolute left-[58px] top-1/2 w-[245px] -translate-y-1/2 font-['Inter',sans-serif] text-[14px] font-medium leading-[20px] text-[#616161] dark:text-[#e8e8e8]">{course.title}</p>
      <svg className="absolute right-[13px] top-1/2 h-[12px] w-[7px] -translate-y-1/2" viewBox="0 0 7 12" fill="none" style={{ color: course.color }} aria-hidden="true">
        <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function CourseChapterRow({ title, count }: { title: string; count?: number }) {
  return (
    <div className="relative h-[60px] w-[336px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
      <p className="absolute left-[20px] top-1/2 w-[280px] -translate-y-1/2 font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]">
        {title}
        {count != null && <span className="text-[#3b88f5]"> ({count})</span>}
      </p>
      <svg className="absolute right-[13px] top-1/2 h-[12px] w-[7px] -translate-y-1/2 text-[#616161] dark:text-[#e8e8e8]" viewBox="0 0 7 12" fill="none" aria-hidden="true">
        <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
