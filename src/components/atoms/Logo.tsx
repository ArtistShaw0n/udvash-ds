import Image from "next/image";
import { cn } from "@/lib/cn";

export type LogoSize = "sm" | "md" | "lg" | "xl";

export type LogoProps = {
  size?: LogoSize;
  showBeta?: boolean;
  className?: string;
};

// Source: Figma V2 file EM0QU7aqBCCK95WvV8Qwt5, node 1:11908 — exported
// 144×30 PNG, saved verbatim to public/logo-udvash-unmesh.png.
const ASSET_WIDTH = 144;
const ASSET_HEIGHT = 30;
const ASPECT = ASSET_WIDTH / ASSET_HEIGHT;

const heightPx: Record<LogoSize, number> = {
  sm: 20,
  md: 24,
  lg: 30,
  xl: 40,
};

export function Logo({ size = "md", showBeta = false, className }: LogoProps) {
  const h = heightPx[size];
  const w = Math.round(h * ASPECT);

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/logo-udvash-unmesh.png"
        alt="উদ্ভাস-উন্মেষ"
        width={w}
        height={h}
        priority
        className="block h-auto w-auto"
        style={{ height: `${h}px`, width: `${w}px` }}
      />
      {showBeta && (
        <span className="rounded-xs bg-brand-subtle px-1 py-0.5 text-xs font-medium uppercase tracking-widest text-brand">
          Beta
        </span>
      )}
    </span>
  );
}
