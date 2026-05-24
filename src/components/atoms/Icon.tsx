import { icons, type LucideProps } from "lucide-react";
import { cn } from "@/lib/cn";

export type IconName = keyof typeof icons;
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export type IconProps = Omit<LucideProps, "size" | "ref"> & {
  name: IconName;
  size?: IconSize | number;
  className?: string;
};

/*
 * Icon atom — thin wrapper around lucide-react. The Figma file uses raster /
 * vector icons that don't have direct Lucide equivalents in every case; we
 * pick semantically-closest Lucide names per component as we encounter them.
 *
 * Size scale matches the Figma sizing tokens:
 *   xs 14 (small inline icon, 54 hits)
 *   sm 20 (inline icon, 26 hits)
 *   md 24 (course content icon, 4 hits)
 *   lg 28 (header avatar, 7 hits)
 *   xl 36 (home tile container, 54 hits)
 */

const sizePx: Record<IconSize, number> = {
  xs: 14,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 36,
};

export function Icon({ name, size = "sm", className, ...rest }: IconProps) {
  const LucideIcon = icons[name];
  const px = typeof size === "number" ? size : sizePx[size];
  if (!LucideIcon) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[Icon] Unknown lucide-react icon name: "${name}"`);
    }
    return null;
  }
  return (
    <LucideIcon
      size={px}
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...rest}
    />
  );
}
