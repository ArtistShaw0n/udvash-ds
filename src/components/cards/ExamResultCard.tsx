/*
 * 1:1 from Figma V2 — Performance Report exam-result card (node 1:6663, light frame
 * 1:6645 · dark 1:7015). w328 × h387, card-relative absolute layout.
 *   status chip (In Branch #25b7d3 / Live #ff3a3a) · numbered title · date · a 2×2 stat
 *   grid (MCQ/Written/Deduction/Total, icon + label + bold value) · Merit Rankings
 *   (Highest / Branch Merit / dashed Central Merit) · "View Result" (#55347b→#9061c8).
 */
const TXT = "text-[#616161] dark:text-[#e8e8e8]";
const I = "/components/icons/perf";

function StatCell({ icon, label, value, left, top }: { icon: string; label: string; value: string; left: number; top: number }) {
  return (
    <div className="absolute flex w-[122px] items-center justify-between" style={{ left, top }}>
      <span className="flex items-center gap-[6px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/${icon}.svg`} alt="" aria-hidden="true" className="size-[18px]" />
        <span className={`font-['Inter',sans-serif] text-[14px] ${TXT}`}>{label}</span>
      </span>
      <span className={`font-['Inter',sans-serif] text-[16px] font-bold ${TXT}`}>{value}</span>
    </div>
  );
}

export function ExamResultCard({ top, status, statusColor }: { top: number; status: string; statusColor: string }) {
  return (
    <div className="absolute left-[24px] h-[387px] w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ top }}>
      <span className="absolute right-[12px] top-[10px] flex h-[20px] items-center rounded-[10px] border px-[10px] font-['Inter',sans-serif] text-[12px] font-medium leading-[12px]" style={{ borderColor: statusColor, color: statusColor }}>{status}</span>
      <p className={`absolute left-[12px] top-[46px] w-[304px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[20px] ${TXT}`}>1. MAP Practice Exam OMR Scan</p>
      <div className="absolute left-[12px] top-[72px] flex items-center gap-[4px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/calendar.svg`} alt="" aria-hidden="true" className="size-[14px]" />
        <span className="font-['Inter',sans-serif] text-[12px] text-[#999999] dark:text-[#999999]">Mar 1, 2025</span>
      </div>

      <StatCell icon="mcq" label="MCQ" value="A" left={24} top={111} />
      <StatCell icon="written" label="Written" value="N/A" left={182} top={111} />
      <StatCell icon="deduction" label="Deduction" value="0" left={24} top={158} />
      <StatCell icon="total" label="Total" value="0/50" left={182} top={158} />

      <div className="absolute left-[24px] top-[209px] flex items-center gap-[8px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/merit.svg`} alt="" aria-hidden="true" className="h-[14px] w-[16px]" />
        <span className={`font-['Inter',sans-serif] text-[14px] font-semibold ${TXT}`}>Merit Rankings</span>
      </div>
      <span className={`absolute left-[24px] top-[239px] font-['Inter',sans-serif] text-[12px] ${TXT}`}>Highest - 49 </span>
      <span className={`absolute left-[162px] top-[239px] font-['Inter',sans-serif] text-[12px] ${TXT}`}>Branch Merit - 15 </span>
      <div className={`absolute left-[24px] top-[270px] w-[280px] border-t border-dashed border-[#c7c7c7] pt-[10px] text-center font-['Inter',sans-serif] text-[12px] dark:border-[#444444] ${TXT}`}>Central Merit - 1234</div>

      <div className="absolute left-[89px] top-[331px] flex h-[36px] w-[150px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">View Result</span>
      </div>
    </div>
  );
}
