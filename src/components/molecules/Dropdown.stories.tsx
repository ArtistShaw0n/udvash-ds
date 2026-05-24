import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

const subjects = [
  { value: "math", label: "Mathematics" },
  { value: "physics", label: "Physics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "biology", label: "Biology" },
  { value: "english", label: "English", disabled: true },
];

export const Default: Story = {
  render: () => (
    <Dropdown options={subjects} placeholder="Select a subject" />
  ),
};

export const Controlled: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState("physics");
      return (
        <div className="space-y-2">
          <Dropdown options={subjects} value={v} onChange={setV} />
          <p className="text-sm text-muted">Selected: {v}</p>
        </div>
      );
    };
    return <Demo />;
  },
};

export const Invalid: Story = {
  render: () => <Dropdown options={subjects} invalid placeholder="Pick one" />,
};
