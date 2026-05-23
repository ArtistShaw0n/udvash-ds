import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { SegmentedControl } from "./SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "Molecules/SegmentedControl",
  component: SegmentedControl,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof SegmentedControl>;

const options = [
  { value: "live", label: "Live" },
  { value: "past", label: "Past" },
  { value: "upcoming", label: "Upcoming" },
];

export const Pill: Story = {
  render: () => {
    const [v, setV] = useState("live");
    return <SegmentedControl options={options} value={v} onChange={setV} />;
  },
};

export const Square: Story = {
  render: () => {
    const [v, setV] = useState("live");
    return <SegmentedControl options={options} value={v} onChange={setV} variant="square" />;
  },
};

export const FullWidth: Story = {
  render: () => {
    const [v, setV] = useState("live");
    return (
      <div className="w-80">
        <SegmentedControl options={options} value={v} onChange={setV} fullWidth />
      </div>
    );
  },
};
