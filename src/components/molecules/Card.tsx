import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:9722 / 1:9723 ("Card" / "Card Background")
 * Raw values, no semantic tokens:
 *   bg #ffffff · rounded-[10px] · shadow 0px 0px 5px 0px rgba(0,0,0,0.1)
 */

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
