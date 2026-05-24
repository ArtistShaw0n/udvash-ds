import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Atoms/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Container>;

export const AppViewport: Story = {
  render: () => (
    <Container size="app" padded>
      <div className="rounded-sm bg-brand-subtle p-4 text-brand">
        376px — Figma source viewport
      </div>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3 p-4">
      {(["app", "md", "lg", "xl", "full"] as const).map((s) => (
        <Container key={s} size={s}>
          <div className="rounded-sm bg-brand-subtle px-3 py-2 text-sm text-brand">
            size = {s}
          </div>
        </Container>
      ))}
    </div>
  ),
};
