import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AnalysisSolutionCard } from "./AnalysisSolutionCard";

const meta: Meta<typeof AnalysisSolutionCard> = {
  title: "Cards/AnalysisSolutionCard",
  component: AnalysisSolutionCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof AnalysisSolutionCard>;

const base = {
  questionNo: 3,
  question: "A 2 kg block slides on a frictionless surface at 5 m/s. What is its kinetic energy?",
  correctAnswer: "25 J",
  marksAvailable: 2,
  onExplain: () => {},
};

export const Correct: Story = {
  args: { ...base, yourAnswer: "25 J", verdict: "correct", marksAwarded: 2 },
};
export const Wrong: Story = {
  args: { ...base, yourAnswer: "50 J", verdict: "wrong", marksAwarded: 0 },
};
export const Skipped: Story = {
  args: { ...base, verdict: "skipped", marksAwarded: 0 },
};
export const Loading: Story = {
  args: { questionNo: 0, question: "", correctAnswer: "", verdict: "correct", loading: true },
};
