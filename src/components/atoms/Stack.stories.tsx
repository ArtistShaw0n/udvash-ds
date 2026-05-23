import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Atoms/Stack",
  component: Stack,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Stack>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-sm bg-brand-subtle px-3 py-2 text-sm text-brand">{children}</div>
);

export const Column: Story = {
  render: () => (
    <Stack gap={2}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Stack>
  ),
};

export const Row: Story = {
  render: () => (
    <Stack direction="row" gap={3}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Stack>
  ),
};

export const Justify: Story = {
  render: () => (
    <Stack direction="row" justify="between" className="w-96 bg-surface-subtle p-2">
      <Box>Start</Box>
      <Box>Middle</Box>
      <Box>End</Box>
    </Stack>
  ),
};
