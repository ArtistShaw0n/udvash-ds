import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast } from "./Toast";
import { Button } from "../atoms/Button";

const meta: Meta<typeof Toast> = {
  title: "Molecules/Toast",
  component: Toast,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: { variant: "success", title: "Saved", children: "Profile updated." },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <Toast variant="info" title="Class starting">Live Class begins in 2 minutes.</Toast>
      <Toast variant="success" title="Submitted">Your answer was recorded.</Toast>
      <Toast variant="warning" title="Slow connection">Some content may be delayed.</Toast>
      <Toast variant="error" title="Failed to upload">Try again with a smaller image.</Toast>
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    variant: "error",
    title: "Connection lost",
    children: "Reconnect to continue.",
    action: <Button size="sm" variant="link">Retry</Button>,
    onClose: () => {},
  },
};
