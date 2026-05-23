import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BackLink } from "./BackLink";

const meta: Meta<typeof BackLink> = {
  title: "Atoms/BackLink",
  component: BackLink,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof BackLink>;

export const Default: Story = {};
export const CustomLabel: Story = { args: { label: "Back to Home" } };
