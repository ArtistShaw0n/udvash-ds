import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

/*
 * Home screen background (Figma V2 node 1:9720 / 1:10034) — reused by
 * /home, /profile (popup overlay) and /loading.
 *   header (50) + 2-col tile grid (cards 176×60) + footer.
 *   tile: icon 36×36 + label Inter Medium 14px #616161/#e8e8e8.
 *   `overlay` renders absolutely above the grid (e.g. the profile popup).
 */
type Tile = {
  label: string;
  icon: string;
  kind: "plain" | "tinted" | "tinted-full";
  tint?: string;
  subtitle?: string;
  notif?: boolean;
  tight?: boolean;
};

const LEFT: Tile[] = [
  { label: "Live Class", icon: "home-live-class", kind: "tinted", tint: "#fc5a5a", subtitle: "1 Live, 2 Upcoming" },
  { label: "Past Classe", icon: "home-past-class", kind: "plain" },
  { label: "Practice Exam", icon: "home-practice-exam", kind: "plain" },
  { label: "Course & Content", icon: "home-course-content", kind: "tinted", tint: "#fc5a5a", tight: true },
  { label: "Q&A Service", icon: "home-qa-service", kind: "tinted", tint: "#25b7d3" },
  { label: "Performance", icon: "home-performance", kind: "plain" },
  { label: "Add Course", icon: "home-add-course", kind: "tinted-full", tint: "#8a5ba4" },
  { label: "OMR Scan", icon: "home-omr-scan", kind: "plain" },
  { label: "Monthly Affairs", icon: "home-monthly-affairs", kind: "tinted", tint: "#6262d9" },
];

const RIGHT: Tile[] = [
  { label: "Live Exam", icon: "home-live-exam", kind: "tinted-full", tint: "#24c182", subtitle: "1 Live, 2 Upcoming", notif: true },
  { label: "Past Exam", icon: "home-past-exam", kind: "tinted", tint: "#c1b124" },
  { label: "Solve Sheet", icon: "home-solve-sheet", kind: "plain" },
  { label: "Master Class", icon: "home-master-class", kind: "tinted-full", tint: "#2496c1" },
  { label: "Community", icon: "home-community", kind: "tinted", tint: "#2496c1" },
  { label: "Discussion Group", icon: "home-discussion-group", kind: "tinted-full", tint: "#82c124", tight: true },
  { label: "Due Payment", icon: "home-due-payment", kind: "plain" },
  { label: "Downloads", icon: "home-downloads", kind: "plain" },
  { label: "Exam Center", icon: "home-exam-center", kind: "tinted", tint: "#d9000d" },
  { label: "Feedback", icon: "home-feedback", kind: "tinted", tint: "#f27c57" },
];

function HomeTile({ t }: { t: Tile }) {
  return (
    <div className="relative h-[60px] w-[176px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)]">
      {t.notif && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/components/icons/home-live-exam-notif.svg" alt="" aria-hidden="true" className="absolute right-[4px] top-[3px] size-[13px]" />
      )}

      {t.kind === "plain" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/components/icons/${t.icon}.svg`} alt="" aria-hidden="true" className="absolute left-[8px] top-[12px] size-[36px]" />
      ) : (
        <span
          className="absolute left-[8px] top-[12px] flex size-[36px] items-center justify-center rounded-[5px]"
          style={{ backgroundColor: `${t.tint}1a` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/components/icons/${t.icon}.svg`} alt="" aria-hidden="true" className={t.kind === "tinted-full" ? "size-[36px]" : "size-[22px]"} />
        </span>
      )}

      <div className="absolute left-[52px] top-0 flex h-full flex-col justify-center">
        <span className={`font-['Inter',sans-serif] text-[14px] font-medium whitespace-nowrap text-[#616161] dark:text-[#e8e8e8] ${t.tight ? "tracking-[-0.28px]" : ""}`}>
          {t.label}
        </span>
        {t.subtitle && (
          <span className="font-['Inter',sans-serif] text-[10px] font-medium text-[#fc5a5a]">{t.subtitle}</span>
        )}
      </div>
    </div>
  );
}

export function HomeScreen({ overlay }: { overlay?: React.ReactNode }) {
  return (
    <main className="relative mx-auto w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <div className="relative flex justify-center gap-[8px] px-[8px] pt-[20px] pb-[20px]">
        <div className="flex flex-col gap-[12px]">
          {LEFT.map((t) => (
            <HomeTile key={t.label} t={t} />
          ))}
        </div>
        <div className="flex flex-col gap-[12px]">
          {RIGHT.map((t) => (
            <HomeTile key={t.label} t={t} />
          ))}
        </div>
      </div>

      <AppFooter />

      {overlay}
    </main>
  );
}
