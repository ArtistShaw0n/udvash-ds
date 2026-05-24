import { cn } from "@/lib/cn";

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12;
export type GridGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;

export type GridProps = {
  cols?: GridCols;
  gap?: GridGap;
  responsive?: boolean;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/*
 * Grid — CSS Grid wrapper. Cols always responsive when `responsive` is true:
 *   mobile: 1 col, tablet (md): cols/2, desktop (lg): cols.
 */

const colsClass: Record<GridCols, string> = {
  1:  "grid-cols-1",
  2:  "grid-cols-2",
  3:  "grid-cols-3",
  4:  "grid-cols-4",
  5:  "grid-cols-5",
  6:  "grid-cols-6",
  8:  "grid-cols-8",
  12: "grid-cols-12",
};

const responsiveClass: Record<GridCols, string> = {
  1:  "grid-cols-1",
  2:  "grid-cols-1 md:grid-cols-2",
  3:  "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4:  "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  5:  "grid-cols-2 md:grid-cols-4 lg:grid-cols-5",
  6:  "grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
  8:  "grid-cols-2 md:grid-cols-4 lg:grid-cols-8",
  12: "grid-cols-2 md:grid-cols-6 lg:grid-cols-12",
};

const gapClass: Record<GridGap, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-[10px]",
  4: "gap-3",
  5: "gap-4",
  6: "gap-5",
  8: "gap-[30px]",
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
        responsive ? responsiveClass[cols] : colsClass[cols],
        gapClass[gap],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
