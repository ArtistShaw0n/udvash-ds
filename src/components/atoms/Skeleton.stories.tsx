import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Variants: Story = {
  render: () => (
    <div className="w-72 space-y-3">
      <Skeleton variant="circle" width={48} height={48} />
      <Skeleton variant="rect" width={280} height={120} />
      <Skeleton lines={3} />
    </div>
  ),
};

export const CardPlaceholder: Story = {
  render: () => (
    <div className="w-[328px] space-y-3 rounded-lg border border-border bg-surface p-3 shadow-card">
      <div className="flex items-center gap-2">
        <Skeleton variant="circle" width={40} height={40} />
        <div className="flex-1 space-y-1">
          <Skeleton width={140} height={12} />
          <Skeleton width={90} height={10} />
        </div>
      </div>
      <Skeleton variant="rect" height={120} />
      <Skeleton lines={2} />
    </div>
  ),
};
