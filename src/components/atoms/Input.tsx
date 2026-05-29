import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:4360 / 1:4358 ("Input Field")
 * Raw values, no semantic tokens:
 *   field:       bg #ffffff, border 1px #b9b9b9, h-[40px], rounded-[5px], w-[320px]
 *   text:        Inter 14px #616161
 *   placeholder: #dcdcdc
 *   label:       Inter 14px #616161, required asterisk #ff0000 (red)
 */

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  required?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, required, className, id, ...props },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className="flex w-[320px] flex-col gap-[8px]">
      {label && (
        <label htmlFor={inputId} className="font-['Inter',sans-serif] text-[14px] text-[#616161]">
          {label}
          {required && <span className="text-[red]"> *</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          "h-[40px] w-[320px] rounded-[5px] border border-[#b9b9b9] bg-white px-[10px]",
          "font-['Inter',sans-serif] text-[14px] text-[#616161] placeholder:text-[#dcdcdc]",
          "outline-none",
          className,
        )}
        {...props}
      />
    </div>
  );
});
