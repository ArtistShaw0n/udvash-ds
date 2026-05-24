import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScoreLetter } from "./ScoreLetter";

const meta: Meta<typeof ScoreLetter> = {
  title: "Atoms/ScoreLetter",
  component: ScoreLetter,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof ScoreLetter>;

export const Default: Story = { args: { grade: "A+" } };
export const AllGrades: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      {(["A+", "A", "A-", "B", "C", "D", "F"] as const).map((g) => (
        <ScoreLetter key={g} grade={g} />
      ))}
    </div>
  ),
};
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <ScoreLetter grade="A+" size="sm" />
      <ScoreLetter grade="A+" size="md" />
      <ScoreLetter grade="A+" size="lg" />
    </div>
  ),
};
