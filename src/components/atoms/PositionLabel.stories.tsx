import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PositionLabel } from "./PositionLabel";

const meta: Meta<typeof PositionLabel> = {
  title: "Atoms/PositionLabel",
  component: PositionLabel,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof PositionLabel>;

export const TopThree: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      <PositionLabel position={1} total={240} />
      <PositionLabel position={2} total={240} />
      <PositionLabel position={3} total={240} />
      <PositionLabel position={12} total={240} />
      <PositionLabel position={99} />
    </div>
  ),
};
