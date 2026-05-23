import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Drawer } from "./Drawer";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

const meta: Meta<typeof Drawer> = {
  title: "Organisms/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Settings">
          <Text size="sm" color="muted">Drawer content slides from the right.</Text>
        </Drawer>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="left" title="Menu">
          <Text size="sm" color="muted">Drawer content slides from the left.</Text>
        </Drawer>
      </>
    );
  },
};
