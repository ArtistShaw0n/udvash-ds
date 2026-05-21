import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "@/components/Header";

const meta: Meta<typeof Header> = {
  title: "Navigation/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = { args: { title: "উদ্ভাস-উন্মেষ", notificationCount: 3 } };
export const NoBadge: Story = { args: { title: "উদ্ভাস-উন্মেষ" } };
export const HighCount: Story = { args: { title: "উদ্ভাস-উন্মেষ", notificationCount: 99 } };
