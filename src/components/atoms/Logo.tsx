/*
 * Udvash–Unmesh logo — Figma V2 asset (node 1:11908 / "Logo (Beta)" 1:28863).
 * Renders the extracted composite SVG at public/components/logo/logo.svg.
 * Natural size 144.0622 × 29.9877 (verbatim from Figma).
 */

const NATURAL_W = 144.0622;
const NATURAL_H = 29.9877;

export type LogoProps = {
  /** Rendered height in px; width scales to the Figma aspect ratio. */
  height?: number;
  className?: string;
};

export function Logo({ height = 30, className }: LogoProps) {
  const width = (height / NATURAL_H) * NATURAL_W;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/components/logo/logo.svg"
      alt="উদ্ভাস-উন্মেষ"
      width={width}
      height={height}
      style={{ width, height }}
      className={className}
    />
  );
}
