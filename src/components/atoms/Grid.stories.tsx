import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Atoms/Grid",
  component: Grid,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Grid>;

const Box = ({ n }: { n: number }) => (
  <div className="rounded-sm bg-brand-subtle px-3 py-2 text-center text-sm text-brand">{n}</div>
);

export const TwoColumn: Story = {
  render: () => (
    <Grid cols={2} gap={3}>
      {[1, 2, 3, 4].map((n) => <Box key={n} n={n} />)}
    </Grid>
  ),
};

export const Responsive3: Story = {
  render: () => (
    <Grid cols={3} responsive gap={3}>
      {[1, 2, 3, 4, 5, 6].map((n) => <Box key={n} n={n} />)}
    </Grid>
  ),
};
