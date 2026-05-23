import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-onbrand hover:opacity-90 active:opacity-95 disabled:bg-disabled disabled:text-onbrand",
  secondary:
    "bg-brand-subtle text-brand hover:bg-brand-subtle/80 disabled:bg-disabled disabled:text-onbrand",
  ghost:
    "bg-transparent text-ink hover:bg-surface-subtle disabled:text-placeholder",
  destructive:
    "bg-error text-onbrand hover:opacity-90 disabled:bg-disabled disabled:text-onbrand",
  link:
    "bg-transparent text-link underline-offset-4 hover:underline disabled:text-placeholder",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-sm gap-1.5",
  md: "h-9 px-[30px] text-md rounded-sm gap-2",
  lg: "h-11 px-6 text-md rounded-md gap-2",
  xl: "h-12 px-8 text-lg rounded-md gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth = false,
    iconLeft,
    iconRight,
    loading = false,
    disabled,
    className,
    children,
    type = "button",
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center font-medium",
        "transition-opacity transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link",
        "disabled:cursor-not-allowed",
        sizeClass[size],
        variantClass[variant],
        fullWidth && "w-full",
        className,
      )}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <Spinner /> : iconLeft}
      <span className={cn(loading && "opacity-70")}>{children}</span>
      {!loading && iconRight}
    </button>
  );
});

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
