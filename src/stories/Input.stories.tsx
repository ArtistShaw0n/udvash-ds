import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/Input";

const meta: Meta<typeof Input> = {
  title: "Foundation/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Enter value" },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Filled: Story = { args: { defaultValue: "1819361" } };
export const Invalid: Story = { args: { invalid: true, placeholder: "Invalid input" } };
export const Disabled: Story = { args: { disabled: true, placeholder: "Disabled field" } };

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-fit">
      <Input placeholder="Default state" />
      <Input defaultValue="Filled value" />
      <Input invalid placeholder="Invalid state" />
      <Input disabled placeholder="Disabled state" />
    </div>
  ),
};
