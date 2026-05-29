/*
 * Udvash–Unmesh brand logo — Figma V2. Natural 144.0622 × 29.9877.
 *   light: single composite SVG (public/components/logo/logo.svg) — node 1:11908
 *   dark:  white-text variant composed from Figma's dark parts — node 1:12162
 *          (2 white book-page rects + 4 SVG parts at exact Figma positions)
 */
const NW = 144.0622;
const NH = 29.9877;

export function BrandLogo({ height = 30, className }: { height?: number; className?: string }) {
  const s = height / NH;
  return (
    <span className={`relative block ${className ?? ""}`} style={{ width: NW * s, height }}>
      {/* light */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/logo/logo.svg" alt="উদ্ভাস-উন্মেষ" className="absolute inset-0 size-full dark:hidden" />

      {/* dark — composed from Figma dark parts (white book pages + white brand text) */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 hidden origin-top-left dark:block"
        style={{ width: NW, height: NH, transform: `scale(${s})` }}
      >
        <span className="absolute left-0 top-0 h-[29.99px] w-[18px] rounded-[1.3px] bg-white" />
        <span className="absolute left-[21px] top-0 h-[29.99px] w-[17px] rounded-[1.3px] bg-white" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/logo/dark/p2.svg" alt="" className="absolute left-0 top-0 h-[30px] w-[18.08px]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/logo/dark/p1.svg" alt="" className="absolute left-[20.4px] top-0 h-[30px] w-[18.08px]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/logo/dark/p3.svg" alt="" className="absolute left-[4.2px] top-[1.9px] h-[25.5px] w-[9.52px]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/components/logo/dark/p4.svg" alt="" className="absolute left-[42px] top-[4px] h-[22px] w-[102px]" />
      </span>
    </span>
  );
}
