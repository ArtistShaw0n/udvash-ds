import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconChip } from "./IconChip";

const meta: Meta<typeof IconChip> = {
  title: "Atoms/IconChip",
  component: IconChip,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof IconChip>;

export const Default: Story = { args: { name: "Play" } };

export const Tones: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconChip name="Play" tone="brand" />
      <IconChip name="CircleCheck" tone="success" />
      <IconChip name="CircleX" tone="error" />
      <IconChip name="TriangleAlert" tone="warning" />
      <IconChip name="Info" tone="info" />
      <IconChip name="Settings" tone="neutral" />
    </div>
  ),
};
