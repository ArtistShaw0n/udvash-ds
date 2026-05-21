import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TextStyle =
  | "display-lg"        // semibold, xl/24
  | "heading-md"        // semibold, lg/24
  | "heading-md-small"  // semibold, lg/20
  | "body-lg"           // semibold, md/20
  | "body-lg-regular"   // regular, md/20
  | "body-md"           // regular, md/auto
  | "body-md-strong"    // semibold, md/auto
  | "body-sm"           // regular, sm/auto
  | "body-sm-medium"    // medium, sm/12
  | "body-xs"           // regular, xs/auto
  | "data-md"           // bold, lg/auto
  | "data-sm"           // bold, md/auto
  | "button-md"         // regular, md/12
  | "button-sm";        // medium, sm/12

const styleClass: Record<TextStyle, string> = {
  "display-lg":       "text-xl font-semibold leading-6",
  "heading-md":       "text-lg font-semibold leading-6",
  "heading-md-small": "text-lg font-semibold leading-5",
  "body-lg":          "text-md font-semibold leading-5",
  "body-lg-regular":  "text-md font-normal leading-5",
  "body-md":          "text-md font-normal",
  "body-md-strong":   "text-md font-semibold",
  "body-sm":          "text-sm font-normal",
  "body-sm-medium":   "text-sm font-medium leading-3",
  "body-xs":          "text-xs font-normal",
  "data-md":          "text-lg font-bold",
  "data-sm":          "text-md font-bold",
  "button-md":        "text-md font-normal leading-3",
  "button-sm":        "text-sm font-medium leading-3",
};

type TextProps = HTMLAttributes<HTMLElement> & {
  variant?: TextStyle;
  as?: ElementType;
  bangla?: boolean;
  muted?: boolean;
  children: ReactNode;
};

export function Text({
  variant = "body-md",
  as: Tag = "span",
  bangla,
  muted,
  className,
  children,
  ...rest
}: TextProps) {
  return (
    <Tag
      className={cn(styleClass[variant], bangla && "font-bangla", muted ? "text-muted" : "text-ink", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
