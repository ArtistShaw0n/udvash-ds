import { cn } from "@/lib/cn";

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: GridCols;
  gap?: GridGap;
  responsive?: boolean;
};

const colsClass: Record<GridCols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const gapClass: Record<GridGap, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
};

const responsiveCols: Partial<Record<GridCols, string>> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12",
};

export function Grid({
  cols = 2,
  gap = 3,
  responsive = false,
  className,
  children,
  ...rest
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        responsive && responsiveCols[cols] ? responsiveCols[cols] : colsClass[cols],
        gapClass[gap],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
