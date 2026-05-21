import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  /** mobile-first; sm+ scales up */
  smCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  /** md+ scales up */
  mdCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  /** lg+ scales up */
  lgCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;
};

const colsClass: Record<number, string> = {
  1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4",
  5: "grid-cols-5", 6: "grid-cols-6", 12: "grid-cols-12",
};
const smColsClass: Record<number, string> = {
  1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4",
  5: "sm:grid-cols-5", 6: "sm:grid-cols-6", 12: "sm:grid-cols-12",
};
const mdColsClass: Record<number, string> = {
  1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4",
  5: "md:grid-cols-5", 6: "md:grid-cols-6", 12: "md:grid-cols-12",
};
const lgColsClass: Record<number, string> = {
  1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4",
  5: "lg:grid-cols-5", 6: "lg:grid-cols-6", 12: "lg:grid-cols-12",
};
const gapClass: Record<number, string> = {
  0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 5: "gap-5", 6: "gap-6", 8: "gap-8",
};

export function Grid({
  cols = 1,
  smCols,
  mdCols,
  lgCols,
  gap = 4,
  className,
  children,
  ...rest
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        colsClass[cols],
        smCols && smColsClass[smCols],
        mdCols && mdColsClass[mdCols],
        lgCols && lgColsClass[lgCols],
        gapClass[gap],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
