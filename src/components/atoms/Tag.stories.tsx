import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="neutral">Neutral</Tag>
      <Tag variant="brand">Brand</Tag>
      <Tag variant="info">Physics</Tag>
      <Tag variant="success">Completed</Tag>
      <Tag variant="warning">In progress</Tag>
      <Tag variant="danger">Overdue</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
    </div>
  ),
};
