import { cn } from "@/lib/cn";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  className?: string;
};

const sizeClass = {
  sm: "h-6",
  md: "h-8",
  lg: "h-12",
};

export function Logo({ size = "md", variant = "full", className }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 40 40"
        className={cn(sizeClass[size], "aspect-square", className)}
        aria-label="Udvash-Unmesh"
      >
        <circle cx="20" cy="20" r="20" fill="var(--color-brand-logo-magenta)" />
        <path d="M12 10 L20 30 L28 10" stroke="var(--color-onbrand)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 140 40"
      className={cn(sizeClass[size], className)}
      aria-label="Udvash-Unmesh"
    >
      <circle cx="20" cy="20" r="18" fill="var(--color-brand-logo-magenta)" />
      <path d="M12 10 L20 30 L28 10" stroke="var(--color-onbrand)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="46" y="20" fontFamily="var(--font-sans)" fontSize="14" fontWeight="700" fill="var(--color-brand-logo-magenta)">Udvash</text>
      <text x="46" y="35" fontFamily="var(--font-sans)" fontSize="11" fontWeight="500" fill="var(--color-brand-logo-red)">Unmesh</text>
    </svg>
  );
}
