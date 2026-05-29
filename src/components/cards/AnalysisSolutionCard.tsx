/*
 * 1:1 from Figma V2 — node 1:4811 (Analysis per-question solution)
 * Raw values, no semantic tokens:
 *   card:    bg #ffffff · rounded-[5px] · shadow 0 0 4px rgba(255,255,255,0.25) · w-[360px]
 *   chip:    "Question N" bg #f6f6f6 rounded-[5px] px-[6px] py-[2px] · 12px #616161
 *   verdict: "Correct" 12px #00ba00, right
 *   q text:  Inter/Noto Regular 14px #616161
 *   choices: 20px radio + letter + text · correct green #00ba00 · wrong #e8e8e8
 *   solution band: bg #d7f7d4 · border #009819 · rounded-b-[5px] · "Solution:" 14 semibold
 *   distribution: bg #616161 · A/B/C/D percents · white 14px
 */

export type SolutionChoice = { key: string; text: string; state?: "correct" | "wrong" | "normal" };
export type SolutionDist = { key: string; percent: string };

export type AnalysisSolutionCardProps = {
  questionNo: number;
  verdict?: string;
  question: string;
  optionLines?: string[];
  choices: SolutionChoice[];
  solution?: string;
  distribution?: SolutionDist[];
  className?: string;
};

export function AnalysisSolutionCard({
  questionNo,
  verdict = "Correct",
  question,
  optionLines = [],
  choices,
  solution,
  distribution = [],
  className,
}: AnalysisSolutionCardProps) {
  return (
    <div
      className={`w-[360px] overflow-hidden rounded-[5px] bg-white shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] ${className ?? ""}`}
    >
      <div className="p-[16px]">
        <div className="mb-[8px] flex items-center justify-between">
          <span className="rounded-[5px] bg-[#f6f6f6] px-[6px] py-[2px] font-['Inter',sans-serif] text-[12px] text-[#616161]">
            Question {questionNo}
          </span>
          <span className="font-['Inter',sans-serif] text-[12px] text-[#00ba00]">{verdict}</span>
        </div>

        <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{question}</p>
        {optionLines.map((line, i) => (
          <p key={i} className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{line}</p>
        ))}

        <div className="mt-[10px] flex flex-col gap-[10px]">
          {/* radio glyphs are Figma SVG assets — skipped in Phase 1; choice state
              is still conveyed by the letter colour (wrong = #e8e8e8) per Figma */}
          {choices.map((c) => {
            const wrong = c.state === "wrong";
            return (
              <div key={c.key} className="flex items-center gap-[8px] border-t border-[#e5e7eb] pt-[10px]">
                <span className={`font-['Inter',sans-serif] text-[14px] ${wrong ? "text-[#e8e8e8]" : "text-[#616161]"}`}>{c.key}</span>
                <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{c.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {solution && (
        <div className="border-t border-[#009819] bg-[#d7f7d4] p-[16px]">
          <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">Solution:</p>
          <p className="mt-[4px] font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#616161]">{solution}</p>
        </div>
      )}

      {distribution.length > 0 && (
        <div className="flex bg-[#616161]">
          {distribution.map((d) => (
            <div key={d.key} className="flex flex-1 items-center justify-center gap-[8px] py-[8px]">
              <span className="font-['Inter',sans-serif] text-[14px] text-white">{d.key}</span>
              <span className="font-['Inter',sans-serif] text-[14px] text-white">{d.percent}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
