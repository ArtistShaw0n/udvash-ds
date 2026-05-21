import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AlertProps = {
  variant?: "info" | "success" | "warning" | "error";
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
};

const variantClasses = {
  info: "bg-info-subtle border-info text-info",
  success: "bg-success-subtle border-success text-success",
  warning: "bg-warning-subtle border-warning text-warning",
  error: "bg-error-subtle border-error text-error",
};

export function Alert({ variant = "info", title, children, icon, className }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn("border-l-4 rounded-sm p-4 flex gap-3", variantClasses[variant], className)}
    >
      {icon && <span className="shrink-0 mt-0.5">{icon}</span>}
      <div className="flex-1">
        {title && <p className="font-medium text-md mb-1">{title}</p>}
        {children && <div className="text-md text-ink">{children}</div>}
      </div>
    </div>
  );
}
