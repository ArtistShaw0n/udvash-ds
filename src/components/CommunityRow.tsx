import { cn } from "@/lib/cn";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

type CommunityRowProps = {
  name: string;
  preview?: string;
  date?: string;
  avatarSrc?: string;
  unread?: boolean;
  onMenu?: () => void;
  onClick?: () => void;
  bangla?: boolean;
  className?: string;
};

export function CommunityRow({
  name,
  preview,
  date,
  avatarSrc,
  unread = false,
  onMenu,
  onClick,
  bangla,
  className,
}: CommunityRowProps) {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "flex items-center gap-3 w-[336px] min-h-[62px] px-3 py-1.5 border-b border-line-subtle transition-colors",
        onClick && "cursor-pointer hover:bg-surface-subtle",
        className
      )}
    >
      <Avatar src={avatarSrc} initials={name[0]} size="md" />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <p className={cn("text-md font-medium text-ink truncate", bangla && "font-bangla")}>{name}</p>
          {unread && <span className="size-2 rounded-full bg-error shrink-0" aria-label="Unread" />}
        </div>
        {preview && <p className="text-sm text-muted truncate">{preview}</p>}
      </div>
      {date && <span className="text-xs text-muted shrink-0">{date}</span>}
      {onMenu && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onMenu(); }}
          aria-label="More options"
          className="size-8 inline-flex items-center justify-center text-muted hover:text-ink"
        >
          <Icon name="kebab" size={16} />
        </button>
      )}
    </div>
  );
}
