import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: "info",
    title: "Heads up",
    children: "Your next live class starts at 6 PM.",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <Alert variant="info" title="Info">A new chapter has been added.</Alert>
      <Alert variant="success" title="Submitted">Your answer was recorded.</Alert>
      <Alert variant="warning" title="Pending payment">Renew your enrollment by tomorrow.</Alert>
      <Alert variant="error" title="Login failed">Invalid registration number or password.</Alert>
      <Alert variant="neutral">A plain note without icon emphasis.</Alert>
    </div>
  ),
};

export const Dismissable: Story = {
  args: {
    variant: "warning",
    title: "Pending payment",
    children: "Renew your enrollment by tomorrow.",
    onClose: () => {},
  },
};
