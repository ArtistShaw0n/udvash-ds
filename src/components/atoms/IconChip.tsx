import { Icon, type IconName } from "./Icon";
import { cn } from "@/lib/cn";

export type IconChipTone =
  | "brand"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "neutral";
export type IconChipSize = "sm" | "md" | "lg";

export type IconChipProps = {
  name: IconName;
  tone?: IconChipTone;
  size?: IconChipSize;
  className?: string;
};

const toneClass: Record<IconChipTone, string> = {
  brand: "bg-brand/10 text-brand",
  success: "bg-success/10 text-success",
  error: "bg-error/10 text-error",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
  neutral: "bg-surface-subtle text-muted",
};

const sizeClass: Record<IconChipSize, string> = {
  sm: "size-7 rounded-sm",
  md: "size-9 rounded-sm",
  lg: "size-12 rounded-md",
};

const iconSizeMap: Record<IconChipSize, "sm" | "md" | "lg"> = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

export function IconChip({
  name,
  tone = "brand",
  size = "md",
  className,
}: IconChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        toneClass[tone],
        sizeClass[size],
        className,
      )}
      aria-hidden="true"
    >
      <Icon name={name} size={iconSizeMap[size]} />
    </span>
  );
}
