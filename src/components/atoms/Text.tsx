import { cn } from "@/lib/cn";

export type TextSize = "xs" | "sm" | "base" | "md" | "lg" | "xl" | "display";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextColor =
  | "primary"
  | "secondary"
  | "muted"
  | "onbrand"
  | "link"
  | "danger"
  | "success"
  | "warning"
  | "info";
export type TextAlign = "left" | "center" | "right";
export type TextAs = "p" | "span" | "div" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextProps = {
  as?: TextAs;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  truncate?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "color">;

/*
 * Typography atom backed by the type tokens in tokens.json.
 * Figma source: Inter Regular 14px is the dominant body style (194 hits across
 * V2). Noto Sans Bengali is wired into the same font-sans stack via the layout
 * for Bangla characters — no separate prop needed.
 */

const sizeClass: Record<TextSize, string> = {
  xs:      "text-xs",
  sm:      "text-sm",
  base:    "text-base",
  md:      "text-md",
  lg:      "text-lg",
  xl:      "text-xl",
  display: "text-display",
};

const weightClass: Record<TextWeight, string> = {
  regular:  "font-normal",
  medium:   "font-medium",
  semibold: "font-semibold",
  bold:     "font-bold",
};

const colorClass: Record<TextColor, string> = {
  primary:   "text-primary",
  secondary: "text-secondary",
  muted:     "text-muted",
  onbrand:   "text-onbrand",
  link:      "text-link",
  danger:    "text-danger",
  success:   "text-success",
  warning:   "text-warning",
  info:      "text-info",
};

const alignClass: Record<TextAlign, string> = {
  left:   "text-left",
  center: "text-center",
  right:  "text-right",
};

export function Text({
  as: Tag = "p",
  size = "base",
  weight = "regular",
  color = "primary",
  align,
  truncate = false,
  className,
  children,
  ...rest
}: TextProps) {
  return (
    <Tag
      className={cn(
        "font-sans",
        sizeClass[size],
        weightClass[weight],
        colorClass[color],
        align && alignClass[align],
        truncate && "truncate",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
