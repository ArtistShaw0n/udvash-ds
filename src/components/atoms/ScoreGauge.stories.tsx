import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScoreGauge } from "./ScoreGauge";

const meta: Meta<typeof ScoreGauge> = {
  title: "Atoms/ScoreGauge",
  component: ScoreGauge,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof ScoreGauge>;

export const Default: Story = { args: { value: 85, label: "Physics" } };

export const Tones: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <ScoreGauge value={92} label="Success" />
      <ScoreGauge value={68} label="Brand" />
      <ScoreGauge value={48} label="Warning" />
      <ScoreGauge value={22} label="Error" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6">
      <ScoreGauge value={75} size="sm" label="sm" />
      <ScoreGauge value={75} size="md" label="md" />
      <ScoreGauge value={75} size="lg" label="lg" />
    </div>
  ),
};
