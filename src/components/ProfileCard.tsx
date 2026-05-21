import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Avatar } from "./Avatar";

type ProfileCardRow = {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
};

type ProfileCardProps = {
  name: string;
  avatarSrc?: string;
  avatarInitials?: string;
  rows?: ProfileCardRow[];
  footer?: ReactNode;
  bangla?: boolean;
  className?: string;
};

export function ProfileCard({
  name,
  avatarSrc,
  avatarInitials,
  rows,
  footer,
  bangla,
  className,
}: ProfileCardProps) {
  return (
    <article
      className={cn(
        "w-[267px] bg-surface rounded-md border border-line p-4 flex flex-col items-center text-center space-y-3",
        className
      )}
    >
      <Avatar src={avatarSrc} initials={avatarInitials ?? name[0]} size="lg" />
      <h3 className={cn("text-lg font-semibold text-ink", bangla && "font-bangla")}>{name}</h3>
      {rows && rows.length > 0 && (
        <ul className="w-full space-y-2 text-left">
          {rows.map((row) => (
            <li
              key={row.label}
              className="flex items-center gap-2 px-2 py-1.5 rounded-sm bg-surface-subtle text-md"
            >
              {row.icon && <span className="text-muted shrink-0">{row.icon}</span>}
              <span className="text-muted flex-1">{row.label}</span>
              <span className="font-medium text-ink">{row.value}</span>
            </li>
          ))}
        </ul>
      )}
      {footer && <div className="w-full pt-2 border-t border-line-subtle">{footer}</div>}
    </article>
  );
}
