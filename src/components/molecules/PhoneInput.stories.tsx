import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PhoneInput } from "./PhoneInput";

const meta: Meta<typeof PhoneInput> = {
  title: "Molecules/PhoneInput",
  component: PhoneInput,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <PhoneInput defaultValue="1713787805" />
    </div>
  ),
};

export const IndiaPreset: Story = {
  render: () => (
    <div className="w-80">
      <PhoneInput defaultCountry="+91" defaultValue="9876543210" />
    </div>
  ),
};
