import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PasswordInput } from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Molecules/PasswordInput",
  component: PasswordInput,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = { args: { placeholder: "Enter password" } };
export const PreFilled: Story = { args: { defaultValue: "supersecret" } };
export const StartVisible: Story = { args: { defaultValue: "shown123", defaultVisible: true } };
export const Disabled: Story = { args: { defaultValue: "blocked", disabled: true } };
