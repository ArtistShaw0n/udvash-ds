import { cn } from "@/lib/cn";

type SkeletonProps = {
  className?: string;
  /** Tailwind shape utility (defaults to rounded-sm) */
  shape?: "rounded-none" | "rounded-xs" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
};

export function Skeleton({ className, shape = "rounded-sm" }: SkeletonProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "block bg-disabled animate-pulse",
        shape,
        className
      )}
    />
  );
}
