import { forwardRef } from "react";
import { cn } from "@/lib/cn";

/*
 * 1:1 import from Figma V2 — node 1:4433 ("Button") via get_design_context + get_metadata.
 * Verbatim Figma values (nothing added):
 *   box:   bg-[#55347b] · rounded-[5px] · h-[36px] (frame) · px-[20px] · flex items-center justify-center
 *   label: node 1:4434 — Inter Regular 14px · leading-[12px] · text-white · text-center · whitespace-nowrap
 */

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex h-[36px] items-center justify-center rounded-[5px] bg-[#55347b] px-[20px]",
        "whitespace-nowrap text-center font-['Inter',sans-serif] text-[14px] font-normal leading-[12px] text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
