import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast } from "@/components/Toast";

const meta: Meta<typeof Toast> = {
  title: "Overlays/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["info", "success", "warning", "error"] },
    children: { control: "text" },
  },
  args: { variant: "info", children: "Live class starting soon" },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {};
export const Success: Story = { args: { variant: "success", children: "Downloaded successfully" } };
export const Warning: Story = { args: { variant: "warning", children: "Service Blocked" } };
export const Error: Story = { args: { variant: "error", children: "No internet connection" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Toast variant="info">Live class starting soon</Toast>
      <Toast variant="success">Downloaded successfully</Toast>
      <Toast variant="warning">Service Blocked</Toast>
      <Toast variant="error">No internet connection</Toast>
    </div>
  ),
};
