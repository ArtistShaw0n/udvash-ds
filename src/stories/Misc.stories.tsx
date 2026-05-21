import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Divider } from "@/components/Divider";
import { Skeleton } from "@/components/Skeleton";

const meta: Meta = {
  title: "Utilities/Overview",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const DividerHorizontal: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <p className="text-md">Above</p>
      <Divider />
      <p className="text-md">Below</p>
    </div>
  ),
};

export const DividerWithLabel: Story = {
  render: () => (
    <div className="max-w-md">
      <Divider label="OR" />
    </div>
  ),
};

export const SkeletonText: Story = {
  render: () => (
    <div className="space-y-2 max-w-md">
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  ),
};

export const SkeletonCard: Story = {
  render: () => (
    <div className="flex items-center gap-3 max-w-md">
      <Skeleton shape="rounded-full" className="size-12" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-3 w-1/4" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  ),
};
