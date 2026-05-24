import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MCQRow } from "./MCQRow";

const meta: Meta<typeof MCQRow> = {
  title: "Atoms/MCQRow",
  component: MCQRow,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof MCQRow>;

export const Correct: Story = { args: { questionNo: 12, yourAnswer: "B", correctAnswer: "B", verdict: "correct" } };
export const Wrong: Story = { args: { questionNo: 13, yourAnswer: "A", correctAnswer: "C", verdict: "wrong" } };
export const Skipped: Story = { args: { questionNo: 14, correctAnswer: "D", verdict: "skipped" } };

export const Sheet: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      {Array.from({ length: 8 }).map((_, i) => {
        const v = i % 3 === 0 ? "correct" : i % 3 === 1 ? "wrong" : "skipped";
        return (
          <MCQRow
            key={i}
            questionNo={i + 1}
            yourAnswer={v === "skipped" ? undefined : "B"}
            correctAnswer="C"
            verdict={v as "correct" | "wrong" | "skipped"}
          />
        );
      })}
    </div>
  ),
};
