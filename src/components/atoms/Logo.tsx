import { cn } from "@/lib/cn";

export type LogoSize = "sm" | "md" | "lg" | "xl";
export type LogoVariant = "full" | "mark";

export type LogoProps = {
  size?: LogoSize;
  variant?: LogoVariant;
  showBeta?: boolean;
  className?: string;
};

const wordmarkSize: Record<LogoSize, string> = {
  sm: "text-md",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
};

const markSize: Record<LogoSize, string> = {
  sm: "size-5",
  md: "size-6",
  lg: "size-8",
  xl: "size-10",
};

function LogoMark({ size = "md", className }: { size?: LogoSize; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(markSize[size], className)}
      aria-hidden="true"
    >
      <path
        d="M12 2 C 9 6, 5 8, 5 13 a7 7 0 0 0 14 0 c0 -5 -4 -7 -7 -11 Z"
        fill="var(--color-red-400, #FC5A5A)"
      />
      <path
        d="M12 6 C 10 9, 8 10.5, 8 13.5 a4 4 0 0 0 8 0 c0 -3 -2 -4.5 -4 -7.5 Z"
        fill="var(--color-amber-500, #FE9A00)"
      />
      <path
        d="M12 11 c -1 1.5, -2 2, -2 3.5 a2 2 0 0 0 4 0 c0 -1.5 -1 -2 -2 -3.5 Z"
        fill="var(--color-amber-50, #FFFBEB)"
      />
    </svg>
  );
}

export function Logo({
  size = "md",
  variant = "full",
  showBeta = false,
  className,
}: LogoProps) {
  if (variant === "mark") {
    return <LogoMark size={size} className={className} />;
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <LogoMark size={size} />
      <span
        className={cn(
          "font-bangla font-semibold text-ink",
          wordmarkSize[size],
        )}
      >
        উদ্ভাস-উন্মেষ
      </span>
      {showBeta && (
        <span
          className="rounded-xs bg-brand-subtle px-1 py-0.5 text-xs font-medium uppercase tracking-widest text-brand"
        >
          Beta
        </span>
      )}
    </span>
  );
}
