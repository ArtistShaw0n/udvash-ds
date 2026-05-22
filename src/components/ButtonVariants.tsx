import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Btn = ButtonHTMLAttributes<HTMLButtonElement>;

const base = "inline-flex items-center justify-center font-medium transition-colors disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-line-brand";

export function ButtonNextMedium({ className, children = "Next", ...rest }: Btn) {
  return (
    <button
      type="button"
      className={cn(base, "h-[29px] w-[90px] rounded-sm bg-brand text-onbrand text-sm hover:bg-brand-accent gap-1", className)}
      {...rest}
    >
      {children}
      <Icon name="chevron-right" size={12} />
    </button>
  );
}

export function ButtonNextMini({ className, children = "Next", ...rest }: Btn) {
  return (
    <button
      type="button"
      className={cn(base, "h-[24px] w-[82px] rounded-xs bg-brand text-onbrand text-xs hover:bg-brand-accent gap-1", className)}
      {...rest}
    >
      {children}
      <Icon name="chevron-right" size={10} />
    </button>
  );
}

export function ButtonPlayOffline({ className, children = "Play Offline", ...rest }: Btn) {
  return (
    <button
      type="button"
      className={cn(base, "h-[30px] w-[123px] rounded-sm bg-brand text-onbrand text-sm hover:bg-brand-accent gap-1.5", className)}
      {...rest}
    >
      <Icon name="play" size={12} />
      {children}
    </button>
  );
}

export function ButtonWidePrimary({ className, children = "Confirm", ...rest }: Btn) {
  return (
    <button
      type="button"
      className={cn(base, "h-[36px] w-[150px] rounded-sm bg-brand text-onbrand text-md hover:bg-brand-accent", className)}
      {...rest}
    >
      {children}
    </button>
  );
}
