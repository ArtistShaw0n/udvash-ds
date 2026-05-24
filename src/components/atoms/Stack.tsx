import { cn } from "@/lib/cn";

export type StackDirection = "row" | "column";
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type StackGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 16;

export type StackProps = {
  as?: keyof React.JSX.IntrinsicElements;
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "children">;

/*
 * Stack — flex layout primitive. Direction + gap + align + justify props
 * compile to Tailwind utilities. Gap values map 1:1 to our spacing scale
 * (1=4px, 2=8px, 3=10px, 4=12px, 5=16px, 6=20px, 7=22px, 8=30px, 9=34px).
 */

const gapClass: Record<StackGap, string> = {
  0:  "gap-0",
  1:  "gap-1",
  2:  "gap-2",
  3:  "gap-[10px]",
  4:  "gap-3",
  5:  "gap-4",
  6:  "gap-5",
  7:  "gap-[22px]",
  8:  "gap-[30px]",
  9:  "gap-[34px]",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
};

const alignClass: Record<StackAlign, string> = {
  start:    "items-start",
  center:   "items-center",
  end:      "items-end",
  stretch:  "items-stretch",
  baseline: "items-baseline",
};

const justifyClass: Record<StackJustify, string> = {
  start:   "justify-start",
  center:  "justify-center",
  end:     "justify-end",
  between: "justify-between",
  around:  "justify-around",
  evenly:  "justify-evenly",
};

export function Stack({
  as: Tag = "div",
  direction = "column",
  gap = 2,
  align,
  justify,
  wrap = false,
  className,
  children,
  ...rest
}: StackProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gapClass[gap],
        align && alignClass[align],
        justify && justifyClass[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
