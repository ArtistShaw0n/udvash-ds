import { icons, type LucideProps } from "lucide-react";
import { cn } from "@/lib/cn";

export type IconName = keyof typeof icons;
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export type IconProps = Omit<LucideProps, "size" | "ref"> & {
  name: IconName;
  size?: IconSize | number;
  className?: string;
};

const sizePx: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export function Icon({ name, size = "md", className, ...rest }: IconProps) {
  const LucideIcon = icons[name];
  const px = typeof size === "number" ? size : sizePx[size];
  return (
    <LucideIcon
      size={px}
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...rest}
    />
  );
}
