import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spinner } from "@/components/Spinner";
import { ProgressBar } from "@/components/ProgressBar";
import { ScoreLetter } from "@/components/ScoreLetter";

const meta: Meta = {
  title: "Indicators/Overview",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Spinners: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const Progress: Story = {
  render: () => (
    <div className="space-y-4">
      <ProgressBar value={25} max={100} label="25%" />
      <ProgressBar value={4} max={26} label="4/26 Questions Completed" />
      <ProgressBar value={100} max={100} label="Complete" />
    </div>
  ),
};

export const Scores: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <ScoreLetter letter="A" variant="success" />
      <ScoreLetter letter="B" variant="info" />
      <ScoreLetter letter="C" variant="warning" />
      <ScoreLetter letter="F" variant="error" />
      <ScoreLetter letter="N/A" variant="neutral" />
    </div>
  ),
};
