import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type AnalysisSolutionCardProps = {
  solutionText: string;
  bangla?: boolean;
  className?: string;
};

export function AnalysisSolutionCard({ solutionText, bangla, className }: AnalysisSolutionCardProps) {
  return (
    <div className={cn("w-[336px] md:w-[432px] lg:w-[528px] rounded-sm bg-surface-subtle p-3 flex gap-2", className)}>
      <Icon name="check" size={16} className="text-success shrink-0 mt-0.5" />
      <p className={cn("text-md text-ink leading-5", bangla && "font-bangla")}>
        {solutionText}
      </p>
    </div>
  );
}
