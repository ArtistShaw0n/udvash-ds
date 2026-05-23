import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmptyState } from "./EmptyState";
import { Button } from "../atoms/Button";

const meta: Meta<typeof EmptyState> = {
  title: "Molecules/EmptyState",
  component: EmptyState,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: "Inbox",
    title: "No items yet",
    description: "When you have content, it'll appear here.",
  },
};

export const WithAction: Story = {
  args: {
    icon: "WifiOff",
    title: "No Internet Connection",
    description: "Check your network or view offline videos in Downloads.",
    action: <Button>View Offline Videos</Button>,
  },
};
