import { cn } from "@/lib/cn";

export type DividerOrientation = "horizontal" | "vertical";

export type DividerProps = {
  orientation?: DividerOrientation;
  className?: string;
  /** Use the stronger #C7C7C7 border instead of default #E5E7EB */
  strong?: boolean;
};

/*
 * Divider — semantic horizontal or vertical line. Defaults to the dominant
 * #E5E7EB divider (26 hits across V2). `strong` switches to #C7C7C7
 * (report borders). Renders as <hr> for horizontal so screen-readers
 * announce it correctly.
 */
export function Divider({
  orientation = "horizontal",
  strong = false,
  className,
}: DividerProps) {
  const borderColor = strong ? "bg-border-strong" : "bg-border";
  if (orientation === "vertical") {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={cn("inline-block w-px self-stretch", borderColor, className)}
      />
    );
  }
  return (
    <hr
      className={cn("h-px w-full border-0", borderColor, className)}
    />
  );
}
