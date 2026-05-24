import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4 text-brand">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner tone="brand" />
      <Spinner tone="muted" />
      <span className="text-success"><Spinner tone="current" /></span>
      <span className="bg-brand p-2 rounded-sm"><Spinner tone="onbrand" /></span>
    </div>
  ),
};
