import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

const sizeClass = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-none",
};

export function Container({
  size = "lg",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div className={cn("w-full mx-auto px-4 md:px-6 lg:px-8", sizeClass[size], className)} {...rest}>
      {children}
    </div>
  );
}
