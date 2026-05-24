import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Radio name="g" value="a" defaultChecked label="Option A" />
      <Radio name="g" value="b" label="Option B" />
      <Radio name="g" value="c" label="Option C" />
      <Radio name="g" value="d" label="Disabled" disabled />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Radio size="sm" defaultChecked name="s" value="s" label="sm" />
      <Radio size="md" defaultChecked name="s" value="m" label="md · Figma" />
      <Radio size="lg" defaultChecked name="s" value="l" label="lg" />
    </div>
  ),
};
