import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AnalysisBlockCard } from "./AnalysisBlockCard";

const meta: Meta<typeof AnalysisBlockCard> = {
  title: "Cards/AnalysisBlockCard",
  component: AnalysisBlockCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof AnalysisBlockCard>;

export const Default: Story = {
  args: {
    heading: "Exam Analysis",
    subject: "Physics",
    totalScore: 72,
    maxScore: 100,
    stats: [
      { label: "Correct", value: 36, tone: "success" },
      { label: "Wrong", value: 8, tone: "error" },
      { label: "Skipped", value: 6, tone: "neutral" },
      { label: "Accuracy", value: "81%", tone: "brand" },
    ],
    insight: "You're spending too long on Chapter 3. Try the 90-second practice drill.",
  },
};
export const Loading: Story = {
  args: { heading: "", totalScore: 0, stats: [], loading: true },
};
