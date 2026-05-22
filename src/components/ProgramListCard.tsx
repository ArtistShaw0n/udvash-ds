import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Badge } from "./Badge";

type ProgramListCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  coverImage?: string;
  enrolled?: boolean;
  ctaLabel?: string;
  onEnroll?: () => void;
  bangla?: boolean;
  className?: string;
};

export function ProgramListCard({
  title,
  subtitle,
  description,
  coverImage,
  enrolled = false,
  ctaLabel,
  onEnroll,
  bangla,
  className,
}: ProgramListCardProps) {
  const cta = ctaLabel ?? (enrolled ? "Open" : "Enroll");
  return (
    <article
      className={cn(
        "w-[336px] rounded-md bg-surface shadow-sm border border-line overflow-hidden flex flex-col",
        className
      )}
    >
      <div className="h-[180px] w-full bg-brand-subtle relative overflow-hidden">
        {coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={coverImage} alt="" className="size-full object-cover" />
        ) : (
          <div className="size-full flex items-center justify-center text-brand text-4xl">📚</div>
        )}
        {enrolled && (
          <div className="absolute top-2 right-2">
            <Badge variant="success">Enrolled</Badge>
          </div>
        )}
      </div>
      <div className="p-4 space-y-2 flex-1 flex flex-col">
        <h3 className={cn("text-lg font-semibold text-ink", bangla && "font-bangla")}>{title}</h3>
        {subtitle && <p className={cn("text-sm text-muted", bangla && "font-bangla")}>{subtitle}</p>}
        {description && <p className="text-md text-muted flex-1">{description}</p>}
        <Button variant={enrolled ? "secondary" : "primary"} size="md" className="w-full mt-2" onClick={onEnroll}>
          {cta}
        </Button>
      </div>
    </article>
  );
}
