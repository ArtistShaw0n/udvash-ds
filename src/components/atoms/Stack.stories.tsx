import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Atoms/Stack",
  component: Stack,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Stack>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-sm bg-brand px-3 py-2 text-onbrand">{children}</div>
);

export const Column: Story = {
  render: () => (
    <Stack gap={3}>
      <Box>A</Box><Box>B</Box><Box>C</Box>
    </Stack>
  ),
};
export const Row: Story = {
  render: () => (
    <Stack direction="row" gap={3}>
      <Box>A</Box><Box>B</Box><Box>C</Box>
    </Stack>
  ),
};
export const JustifyBetween: Story = {
  render: () => (
    <Stack direction="row" justify="between" className="w-80">
      <Box>Left</Box><Box>Right</Box>
    </Stack>
  ),
};
