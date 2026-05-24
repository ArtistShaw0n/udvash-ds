import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { OTPInput } from "./OTPInput";

const meta: Meta<typeof OTPInput> = {
  title: "Molecules/OTPInput",
  component: OTPInput,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof OTPInput>;

export const FourDigit: Story = { args: { length: 4 } };
export const SixDigit: Story = { args: { length: 6 } };
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <OTPInput length={4} size="sm" />
      <OTPInput length={4} size="md" />
      <OTPInput length={4} size="lg" />
    </div>
  ),
};
export const Invalid: Story = { args: { length: 4, defaultValue: "1234", invalid: true } };
export const Controlled: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState("");
      return (
        <div className="flex flex-col items-center gap-3">
          <OTPInput length={6} value={v} onChange={setV} onComplete={(c) => alert(`Completed: ${c}`)} />
          <span className="text-sm text-muted">Value: {v || "—"}</span>
        </div>
      );
    };
    return <Demo />;
  },
};
