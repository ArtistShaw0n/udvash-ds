import { cn } from "@/lib/cn";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
  padded?: boolean;
};

const sizeClass: Record<ContainerSize, string> = {
  sm: "max-w-md",       // 28rem  ~ mobile
  md: "max-w-2xl",      // 42rem
  lg: "max-w-4xl",      // 56rem  ~ tablet
  xl: "max-w-7xl",      // 80rem  ~ desktop
  full: "max-w-none",
};

export function Container({
  size = "lg",
  padded = true,
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        sizeClass[size],
        padded && "px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
