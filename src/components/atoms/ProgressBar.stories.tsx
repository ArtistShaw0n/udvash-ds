import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Atoms/ProgressBar",
  component: ProgressBar,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <ProgressBar value={5} label="Loading" showValue />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="w-72 space-y-3">
      <ProgressBar value={70} variant="brand" label="Brand" showValue />
      <ProgressBar value={88} variant="success" label="Success" showValue />
      <ProgressBar value={45} variant="warning" label="Warning" showValue />
      <ProgressBar value={20} variant="danger" label="Danger" showValue />
      <ProgressBar value={55} variant="info" label="Info" showValue />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <ProgressBar value={60} size="sm" />
      <ProgressBar value={60} size="md" />
      <ProgressBar value={60} size="lg" />
    </div>
  ),
};
