import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Atoms/Slider",
  component: Slider,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Slider defaultValue={40} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-80">
      <Slider defaultValue={1.25} min={0.5} max={2} step={0.25} showValue label="Playback speed" formatValue={(v) => `${v.toFixed(2)}x`} />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState(70);
      return (
        <div className="w-80 space-y-3">
          <Slider value={v} onChange={setV} showValue label="Volume" formatValue={(n) => `${n}%`} />
          <p className="text-sm text-muted">Bound value: {v}</p>
        </div>
      );
    };
    return <Demo />;
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <Slider defaultValue={50} disabled showValue label="Disabled" />
    </div>
  ),
};
