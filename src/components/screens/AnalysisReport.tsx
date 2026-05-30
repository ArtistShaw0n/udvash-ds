import { cn } from "@/lib/cn";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Analysis Report (exam-analysis screen). 3 states × light/dark:
 *   A pending   1:5094 / 1:5662  (h2280) — Position/Highest = "Will be published…"
 *   B published 1:4807 / 1:5377  (h2254) — Position 5 / Highest 14 (green bold inline)
 *   C +accuracy 1:5948 / 1:6267  (h2342) — adds a 5th "Accuracy 00" stat tile
 * Shared: marks card (11.5/15) · stat panel (Analysis Report + 4|5 tiles) · filter
 * checkboxes · 3 question-analysis cards (options + distribution bar + solution) ·
 * "Past Exam" button. Vertical flow stack (validated: Q1@714/Q2@1194/Q3@1674).
 * Raw Figma values; dark = established mapping (greens/reds/cyan/bar stay both themes).
 */

const CHAPTER = "অধ্যায়-১০: আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব";
const SUBTITLE = "কুইজ : লেকচার - ১.১";
const SOLUTION =
  "ত্বরণ ধ্রুব বলে, s = ut+1/2 at^2 সমীকরণটি y = ax + bx^2 সমীকরণের অনুরূপ y = ax + bx^2 পরাবৃত্তের সমীকরণ যার অক্ষরেখা y অক্ষ";
const SUBPOINTS = [
  "(i) কি.গ্রা., মিটার ও সেকেন্ড",
  "(ii) সেকেন্ড ও ভোল্ট",
  "(iii) কেলভিন, ক্যান্ডেলা ও নিউটন",
];

const I = "/components/icons/analysis";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";
const BIG_CARD =
  "rounded-[5px] bg-white shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]";

/* ---------- Marks card ---------- */
function MarksCard({ published }: { published: boolean }) {
  return (
    <div className={cn("relative w-[360px]", BIG_CARD)} style={{ height: published ? 208 : 234 }}>
      <p className="absolute left-1/2 top-[20px] -translate-x-1/2 font-['Inter',sans-serif] text-[24px] font-bold leading-[normal] text-[#00ba00]">
        11.5/15
      </p>
      <p className={`absolute left-1/2 top-[55px] -translate-x-1/2 font-['Inter',sans-serif] text-[10px] leading-[normal] ${TXT}`}>
        MARKS OBTAINED
      </p>
      <div className="absolute left-[20px] top-[87px] h-px w-[320px] bg-[#cacaca]" />

      {published ? (
        <>
          <div className="absolute left-[41px] top-[101px] flex items-center gap-[4px]">
            <span className={`font-['Inter',sans-serif] text-[14px] ${TXT}`}>Your Position:</span>
            <span className="font-['Inter',sans-serif] text-[21px] font-bold text-[#00ba00]">5</span>
          </div>
          <div className="absolute left-[190px] top-[101px] flex items-center gap-[4px]">
            <span className={`font-['Inter',sans-serif] text-[14px] ${TXT}`}>Highest Marks:</span>
            <span className="font-['Inter',sans-serif] text-[21px] font-bold text-[#00ba00]">14</span>
          </div>
          <Leaderboard top={152} />
        </>
      ) : (
        <>
          <span className={`absolute left-[41px] top-[105px] font-['Inter',sans-serif] text-[14px] ${TXT}`}>Your Position:</span>
          <p className={`absolute left-[33px] top-[126px] w-[127px] text-center font-['Inter',sans-serif] text-[12px] leading-[16px] ${TXT}`}>
            Will be published after 11:10 PM Today.
          </p>
          <span className={`absolute left-[213px] top-[105px] font-['Inter',sans-serif] text-[14px] ${TXT}`}>Highest Marks:</span>
          <p className={`absolute left-[200px] top-[126px] w-[127px] text-center font-['Inter',sans-serif] text-[12px] leading-[16px] ${TXT}`}>
            Will be published after 11:10 PM Today.
          </p>
          <Leaderboard top={178} />
        </>
      )}
    </div>
  );
}

function Leaderboard({ top }: { top: number }) {
  return (
    <div
      className="absolute left-1/2 flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#00ba00]"
      style={{ top }}
    >
      <span className="font-['Inter',sans-serif] text-[14px] text-white">Leaderboard</span>
    </div>
  );
}

/* ---------- Stat panel ---------- */
function Tile({ accent, icon, label, value, left, top }: { accent: string; icon: string; label: string; value: string; left: number; top: number }) {
  return (
    <div
      className="absolute h-[74px] w-[156px] rounded-[5px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)]"
      style={{ left, top }}
    >
      <div className="absolute left-[12px] top-[14px] size-[46px] rounded-[10px]">
        <div className="absolute inset-0 rounded-[10px] opacity-10" style={{ backgroundColor: accent }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/${icon}.svg`} alt="" aria-hidden="true" className="absolute left-1/2 top-1/2 size-[30px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute left-[70px] top-[15px] flex flex-col gap-px">
        <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>{label}</span>
        <span className={`font-['Inter',sans-serif] text-[24px] font-medium leading-[normal] ${TXT}`}>{value}</span>
      </div>
    </div>
  );
}

function StatPanel({ showAccuracy, className }: { showAccuracy?: boolean; className?: string }) {
  return (
    <div className={cn("relative w-[360px]", BIG_CARD, className)} style={{ height: showAccuracy ? 337 : 249 }}>
      <p className="absolute left-1/2 top-[20px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-bold leading-[normal] text-[#00ba00]">
        Analysis Report
      </p>
      <Tile accent="#00ba00" icon="stat-correct" label="Correct" value="12" left={16} top={67} />
      <Tile accent="#f95959" icon="stat-incorrect" label="Incorrect" value="02" left={188} top={67} />
      <Tile accent="#25b7d3" icon="stat-skipped" label="Skipped" value="01" left={16} top={155} />
      <Tile accent="#f59e0b" icon="stat-negmark" label="Neg. Mark" value="0.5" left={188} top={155} />
      {showAccuracy && <Tile accent="#4bcc7b" icon="stat-accuracy" label="Accuracy" value="00" left={102} top={243} />}
    </div>
  );
}

/* ---------- Filter checkboxes ---------- */
function FilterRow({ className }: { className?: string }) {
  const items = [
    { label: "Correct", checked: true, left: 31 },
    { label: "Incorrect", checked: false, left: 127 },
    { label: "Skipped", checked: false, left: 233 },
  ];
  return (
    <div className={cn("relative h-[42px] w-[360px]", className)}>
      {items.map((it) => (
        <div key={it.label} className="absolute top-0 flex h-[42px] items-center gap-[8px]" style={{ left: it.left }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${I}/checkbox-${it.checked ? "checked" : "unchecked"}.svg`}
            alt=""
            aria-hidden="true"
            className={cn("size-[18px]", !it.checked && "dark:invert")}
          />
          <span className="font-['Inter',sans-serif] text-[14px] leading-[30px] text-[#70757a] dark:text-[#e8e8e8]">{it.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Question-analysis card ---------- */
type Opt = { letter: string; text: string; faded?: boolean; tick?: boolean };
type QData = {
  n: number;
  status: "Correct" | "Incorrect" | "Skipped";
  stem: string;
  subpoints?: string[];
  options: Opt[];
  dist: string[];
  solution: string;
};
const STATUS_COLOR: Record<QData["status"], string> = {
  Correct: "#00ba00",
  Incorrect: "#f95959",
  Skipped: "#c6c6c6",
};
const DIST_X = [52, 119, 186, 251];

function QuestionCard({ n, status, stem, subpoints, options, dist, solution, className }: QData & { className?: string }) {
  const optY = subpoints && subpoints.length ? 161 : 123;
  const height = optY + 311;
  return (
    <div className={cn("relative w-[360px]", BIG_CARD, className)} style={{ height }}>
      <span className="absolute left-[14px] top-[14px] rounded-[5px] bg-[#f6f6f6] px-[6px] py-[2px] font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#616161] shadow-[0px_0px_2px_0px_rgba(255,255,255,0.25)] dark:bg-[#2c2c2c] dark:text-[#e8e8e8]">
        Question {n}
      </span>
      <span className="absolute right-[10px] top-[16px] font-['Inter',sans-serif] text-[12px] leading-[normal]" style={{ color: STATUS_COLOR[status] }}>
        {status}
      </span>

      <p className={`absolute left-[20px] top-[43px] w-[320px] font-['Inter',sans-serif] text-[14px] leading-[20px] ${TXT}`}>{stem}</p>
      {subpoints?.map((s, i) => (
        <p key={i} className={`absolute left-[20px] w-[320px] font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`} style={{ top: 70 + i * 27 }}>
          {s}
        </p>
      ))}

      {options.map((o, i) => (
        <div key={i} className="absolute left-[20px] w-[320px] border-t border-[#cacaca]" style={{ top: optY + i * 40 }}>
          <div className="flex items-center gap-[8px] pt-[10px]">
            <span
              className={cn(
                "flex size-[20px] shrink-0 items-center justify-center rounded-full font-['Inter',sans-serif] text-[14px] leading-[normal]",
                o.faded
                  ? "bg-[#616161] text-[#e8e8e8]"
                  : "border border-[#616161] text-[#616161] dark:border-[#e8e8e8] dark:text-[#e8e8e8]",
              )}
            >
              {o.letter}
            </span>
            <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>{o.text}</span>
            {o.tick && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`${I}/tick-correct.svg`} alt="" aria-hidden="true" className="h-[14.143px] w-[14.504px]" />
            )}
          </div>
        </div>
      ))}

      <div className="absolute left-0 flex h-[32px] w-[360px] items-center bg-[#616161]" style={{ top: optY + 160 }}>
        {dist.map((p, i) => (
          <div key={i} className="absolute flex items-center gap-[8px]" style={{ left: DIST_X[i] }}>
            <span className="flex size-[20px] items-center justify-center rounded-full bg-white font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161]">
              {["A", "B", "C", "D"][i]}
            </span>
            <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">{p}</span>
          </div>
        ))}
      </div>

      <div className="absolute left-0 w-[360px] rounded-bl-[5px] rounded-br-[5px] border border-[#009819] bg-[#d7f7d4]" style={{ top: optY + 192, height: 119 }}>
        <p className="absolute left-[20px] top-[16px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] text-[#616161]">Solution:</p>
        <p className="absolute left-[20px] top-[43px] w-[320px] font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#616161]">{solution}</p>
      </div>
    </div>
  );
}

const QUESTIONS: QData[] = [
  {
    n: 1,
    status: "Correct",
    stem: "মৌলিক একক হলো- [RU'18-19]",
    subpoints: SUBPOINTS,
    options: [
      { letter: "A", text: "i, iii" },
      { letter: "B", text: "ii", faded: true, tick: true },
      { letter: "C", text: "i, ii, iii" },
      { letter: "D", text: "i" },
    ],
    dist: ["48%", "24%", "14%", "20%"],
    solution: SOLUTION,
  },
  {
    n: 2,
    status: "Incorrect",
    stem: "মৌলিক একক হলো- [RU'18-19]",
    subpoints: SUBPOINTS,
    options: [
      { letter: "A", text: "i, iii" },
      { letter: "B", text: "ii", faded: true, tick: true },
      { letter: "C", text: "i, ii, iii", faded: true },
      { letter: "D", text: "i" },
    ],
    dist: ["48%", "24%", "14%", "20%"],
    solution: SOLUTION,
  },
  {
    n: 3,
    status: "Skipped",
    stem: "একটি গোলকের পরিমাপ্য ব্যাসার্ধ (2.5 0.2) cm হলে এর আয়তন পরিমাপের শতকরা ত্রুটি কত? [JU'19-20, KU'19-20, RU'17-18]",
    options: [
      { letter: "A", text: "24%", tick: true },
      { letter: "B", text: "0.08%" },
      { letter: "C", text: "0.24%" },
      { letter: "D", text: "8%" },
    ],
    dist: ["48%", "24%", "14%", "20%"],
    solution: SOLUTION,
  },
];

/* ---------- Screen ---------- */
export function AnalysisReport({ published, showAccuracy, minHeight }: { published?: boolean; showAccuracy?: boolean; minHeight: number }) {
  return (
    <main className="relative mx-auto w-[376px] overflow-hidden bg-white dark:bg-[#111111]" style={{ minHeight }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(81.2555deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className={`absolute left-1/2 top-[70px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] ${TXT}`}>
        {CHAPTER}
      </p>
      <p className={`absolute left-1/2 top-[128px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>
        {SUBTITLE}
      </p>

      <div className="absolute left-1/2 top-[165px] flex w-[360px] -translate-x-1/2 flex-col items-center">
        <MarksCard published={!!published} />
        <StatPanel showAccuracy={showAccuracy} className="mt-[8px]" />
        <FilterRow className="mt-[8px]" />
        {QUESTIONS.map((q) => (
          <QuestionCard key={q.n} {...q} className="mt-[8px]" />
        ))}
        <div className="mt-[40px] flex h-[36px] w-[150px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
          <span className="font-['Inter',sans-serif] text-[14px] text-white">Past Exam</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
