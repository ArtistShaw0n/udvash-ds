import { cn } from "@/lib/cn";

type TextElement = "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextColor =
  | "ink"
  | "muted"
  | "placeholder"
  | "link"
  | "brand"
  | "onbrand"
  | "error"
  | "success"
  | "warning"
  | "info"
  | "inherit";

export type TextProps = Omit<React.HTMLAttributes<HTMLElement>, "color"> & {
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: "left" | "center" | "right";
  bangla?: boolean;
  truncate?: boolean;
};

const sizeClass: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

const weightClass: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClass: Record<TextColor, string> = {
  ink: "text-ink",
  muted: "text-muted",
  placeholder: "text-placeholder",
  link: "text-link",
  brand: "text-brand",
  onbrand: "text-onbrand",
  error: "text-error",
  success: "text-success",
  warning: "text-warning",
  info: "text-info",
  inherit: "",
};

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

export function Text({
  as: Tag = "p",
  size = "md",
  weight = "regular",
  color = "ink",
  align,
  bangla = false,
  truncate = false,
  className,
  children,
  ...rest
}: TextProps) {
  return (
    <Tag
      className={cn(
        sizeClass[size],
        weightClass[weight],
        colorClass[color],
        align && alignClass[align],
        bangla && "font-bangla",
        truncate && "truncate",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
