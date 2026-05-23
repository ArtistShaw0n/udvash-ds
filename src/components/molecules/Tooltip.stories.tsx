import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../atoms/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Molecules/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Save your answer",
    children: <Button>Hover me</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-12">
      <Tooltip content="Top" placement="top"><Button>Top</Button></Tooltip>
      <Tooltip content="Bottom" placement="bottom"><Button>Bottom</Button></Tooltip>
      <Tooltip content="Left" placement="left"><Button>Left</Button></Tooltip>
      <Tooltip content="Right" placement="right"><Button>Right</Button></Tooltip>
    </div>
  ),
};
