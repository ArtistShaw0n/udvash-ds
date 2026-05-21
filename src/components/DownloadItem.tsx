import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type DownloadItemProps = {
  title: string;
  size?: string;
  thumb?: string;
  downloading?: boolean;
  progress?: number;
  onDelete?: () => void;
  className?: string;
};

export function DownloadItem({
  title,
  size,
  thumb,
  downloading = false,
  progress = 0,
  onDelete,
  className,
}: DownloadItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-2 rounded-sm border border-line-subtle bg-surface",
        className
      )}
    >
      <div className="size-14 shrink-0 rounded-sm bg-disabled overflow-hidden relative">
        {thumb && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumb} alt="" className="size-full object-cover" />
        )}
        {downloading && (
          <div className="absolute inset-0 bg-scrim/50 flex items-center justify-center">
            <Icon name="download" size={20} className="text-onbrand" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-md font-medium text-ink truncate">{title}</p>
        {size && <p className="text-sm text-muted">{size}</p>}
        {downloading && (
          <div className="mt-1 h-1 rounded-full bg-disabled">
            <div className="h-full rounded-full bg-brand" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          aria-label="Delete"
          className="p-1.5 rounded-sm text-muted hover:bg-disabled"
        >
          <Icon name="delete" size={14} />
        </button>
      )}
    </div>
  );
}
