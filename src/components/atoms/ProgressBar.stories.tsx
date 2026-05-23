import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Atoms/ProgressBar",
  component: ProgressBar,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = { args: { value: 60 } };

export const Variants: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <ProgressBar value={30} variant="brand" label="Brand 30%" showLabel />
      <ProgressBar value={70} variant="success" label="Success 70%" showLabel />
      <ProgressBar value={45} variant="warning" label="Warning 45%" showLabel />
      <ProgressBar value={20} variant="error" label="Error 20%" showLabel />
      <ProgressBar value={55} variant="info" label="Info 55%" showLabel />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <ProgressBar value={60} size="sm" />
      <ProgressBar value={60} size="md" />
      <ProgressBar value={60} size="lg" />
    </div>
  ),
};
