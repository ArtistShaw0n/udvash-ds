import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Popover } from "./Popover";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

const meta: Meta<typeof Popover> = {
  title: "Molecules/Popover",
  component: Popover,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover
      trigger={<Button variant="secondary">Open Popover</Button>}
    >
      <div className="p-2">
        <Text weight="medium">Popover content</Text>
        <Text size="sm" color="muted">Click outside or press Esc to close.</Text>
      </div>
    </Popover>
  ),
};
