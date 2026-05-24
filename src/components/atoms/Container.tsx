import { cn } from "@/lib/cn";

export type ContainerSize = "app" | "sm" | "md" | "lg" | "xl" | "full";

export type ContainerProps = {
  size?: ContainerSize;
  padded?: boolean;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/*
 * Container — max-width wrapper. `app` matches the Figma mobile viewport
 * (376px — the V2 source canvas). sm/md/lg/xl match our breakpoint scale.
 * When `padded`, applies horizontal padding sized to the breakpoint.
 */

const sizeClass: Record<ContainerSize, string> = {
  app:  "max-w-[376px]",  // Figma viewport
  sm:   "max-w-[376px]",
  md:   "max-w-[768px]",
  lg:   "max-w-[1024px]",
  xl:   "max-w-[1440px]",
  full: "max-w-none",
};

export function Container({
  size = "app",
  padded = false,
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        sizeClass[size],
        padded && "px-3 md:px-5 lg:px-8",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
