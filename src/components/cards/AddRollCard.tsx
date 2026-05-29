"use client";

import { Input } from "../atoms/Input";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:12549 ("Forgot-registration-number" form card)
 * Raw values, no semantic tokens:
 *   card:   bg #ffffff · rounded-[20px] · shadow 0 0 5px rgba(0,0,0,0.1)
 *   title:  Inter Medium 26px #616161, centered
 *   fields: label Inter Regular 14px #616161 + input (320×40 border #b9b9b9 rounded-5)
 *   cta:    "Next" #c6c6c6 (disabled) w-[150px] px-[30px] rounded-[5px]
 */

export type AddRollField = { label: string; placeholder: string };

export type AddRollCardProps = {
  title?: string;
  fields?: AddRollField[];
  ctaLabel?: string;
  ctaDisabled?: boolean;
  onCta?: () => void;
  className?: string;
};

export function AddRollCard({
  title = "Forgot Password",
  fields = [
    { label: "Registration Number", placeholder: "Enter Your Registration Number" },
    { label: "Mobile Number", placeholder: "Enter Your Mobile Number" },
  ],
  ctaLabel = "Next",
  ctaDisabled = true,
  onCta,
  className,
}: AddRollCardProps) {
  return (
    <div
      className={cn(
        "flex w-[360px] flex-col items-center gap-[16px] rounded-[20px] bg-white px-[20px] py-[24px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <p className="text-center font-['Inter',sans-serif] text-[26px] font-medium text-[#616161]">{title}</p>
      {fields.map((f) => (
        <Input key={f.label} label={f.label} placeholder={f.placeholder} />
      ))}
      <button
        type="button"
        onClick={onCta}
        disabled={ctaDisabled}
        className={cn(
          "mt-[8px] flex h-[36px] w-[150px] items-center justify-center rounded-[5px] px-[30px]",
          "font-['Inter',sans-serif] text-[14px] text-white",
          ctaDisabled ? "bg-[#c6c6c6]" : "bg-[#55347b]",
        )}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
