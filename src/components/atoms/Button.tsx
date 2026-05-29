import { forwardRef } from "react";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:4433 ("Button")
 * Raw values, no semantic tokens:
 *   bg:        #55347b
 *   padding:   px-[20px]  (frame height 36px → h-[36px], content centered)
 *   radius:    rounded-[5px]
 *   text:      Inter, 14px, leading-[12px], #ffffff, centered
 */

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, type = "button", fullWidth = false, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex h-[36px] items-center justify-center gap-[8px] rounded-[5px] bg-[#55347b] px-[20px]",
        "font-['Inter',sans-serif] text-[14px] leading-[12px] text-white",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
