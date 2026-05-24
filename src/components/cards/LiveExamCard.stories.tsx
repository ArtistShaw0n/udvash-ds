import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LiveExamCard } from "./LiveExamCard";

const meta: Meta<typeof LiveExamCard> = {
  title: "Cards/LiveExamCard",
  component: LiveExamCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof LiveExamCard>;

const base = {
  subject: "Chemistry",
  title: "HSC Mock Exam — Organic Chemistry",
  startsAt: "Today, 8:00 PM",
  durationMin: 60,
  totalMarks: 50,
  questions: 25,
};

export const Upcoming: Story = { args: { ...base, status: "upcoming", onCancel: () => {} } };
export const Live: Story = { args: { ...base, status: "live" } };
export const Ended: Story = { args: { ...base, status: "ended" } };
export const Loading: Story = { args: { ...base, loading: true } };
