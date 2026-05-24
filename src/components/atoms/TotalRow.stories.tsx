import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TotalRow } from "./TotalRow";

const meta: Meta<typeof TotalRow> = {
  title: "Atoms/TotalRow",
  component: TotalRow,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof TotalRow>;

export const Default: Story = { args: { label: "Total", value: 85 } };

export const ResultSummary: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <TotalRow label="Attempted" value={45} />
      <TotalRow label="Correct" value={38} emphasis="success" />
      <TotalRow label="Wrong" value={5} emphasis="error" />
      <TotalRow label="Skipped" value={2} />
      <TotalRow label="Total" value="85 / 100" emphasis="brand" />
    </div>
  ),
};
