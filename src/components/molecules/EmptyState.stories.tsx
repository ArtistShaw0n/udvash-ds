import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmptyState } from "./EmptyState";
import { Button } from "../atoms/Button";

const meta: Meta<typeof EmptyState> = {
  title: "Molecules/EmptyState",
  component: EmptyState,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  render: () => (
    <div className="w-80 rounded-md border border-border bg-surface">
      <EmptyState
        icon="Inbox"
        title="No items yet"
        description="When you have content, it'll appear here."
      />
    </div>
  ),
};

export const NoConnection: Story = {
  render: () => (
    <div className="w-80 rounded-md border border-border bg-surface">
      <EmptyState
        icon="WifiOff"
        title="No internet connection"
        description="Check your network or view offline content from Downloads."
        action={<Button size="sm">View offline</Button>}
      />
    </div>
  ),
};
