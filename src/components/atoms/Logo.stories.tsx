import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Atoms/Logo",
  component: Logo,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
      <Logo size="xl" />
    </div>
  ),
};

export const Mark: Story = { args: { variant: "mark" } };
export const WithBeta: Story = { args: { showBeta: true, size: "lg" } };
