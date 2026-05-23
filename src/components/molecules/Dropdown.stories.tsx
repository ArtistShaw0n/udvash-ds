import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

const subjects = [
  { value: "math", label: "Mathematics" },
  { value: "physics", label: "Physics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "biology", label: "Biology", disabled: true },
];

export const Default: Story = {
  render: () => (
    <div className="max-w-xs">
      <Dropdown options={subjects} placeholder="Choose subject" />
    </div>
  ),
};

export const Selected: Story = {
  render: () => (
    <div className="max-w-xs">
      <Dropdown options={subjects} defaultValue="physics" />
    </div>
  ),
};
