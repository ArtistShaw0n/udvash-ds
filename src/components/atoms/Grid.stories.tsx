import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Atoms/Grid",
  component: Grid,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Grid>;

const Cell = ({ n }: { n: number }) => (
  <div className="rounded-sm bg-brand-subtle px-3 py-4 text-center text-sm font-medium text-brand">
    {n}
  </div>
);

export const TwoCols: Story = {
  render: () => (
    <Grid cols={2} gap={3} className="w-80">
      {[1, 2, 3, 4].map((n) => <Cell key={n} n={n} />)}
    </Grid>
  ),
};

export const ResponsiveFour: Story = {
  render: () => (
    <Grid cols={4} gap={3} responsive className="w-full max-w-3xl">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <Cell key={n} n={n} />)}
    </Grid>
  ),
};
