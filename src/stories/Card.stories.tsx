import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "@/components/Card";

const meta: Meta<typeof Card> = {
  title: "Display/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Card>;

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
    <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Default: Story = {
  args: { title: "Course chapter title", trailing: <Chevron /> },
};

export const Bangla: Story = {
  args: { title: "অধ্যায়-১ : ভৌতজগৎ ও পরিমাপ", bangla: true, trailing: <Chevron /> },
};

export const Stack: Story = {
  render: () => (
    <div className="space-y-3">
      <Card title="অধ্যায়-১ : ভৌতজগৎ ও পরিমাপ" bangla trailing={<Chevron />} />
      <Card title="অধ্যায়-২ : ভেক্টর" bangla trailing={<Chevron />} />
      <Card title="অধ্যায়-৩ : গতিবিদ্যা" bangla trailing={<Chevron />} />
    </div>
  ),
};
