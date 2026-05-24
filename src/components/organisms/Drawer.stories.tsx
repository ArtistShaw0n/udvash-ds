import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Drawer } from "./Drawer";
import { Button } from "../atoms/Button";
import { Switch } from "../atoms/Switch";

const meta: Meta<typeof Drawer> = {
  title: "Organisms/Drawer",
  component: Drawer,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Drawer>;

export const RightSide: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open right drawer</Button>
          <Drawer open={open} onClose={() => setOpen(false)} title="Settings">
            <div className="space-y-3">
              <Switch label="Notifications" defaultChecked />
              <Switch label="Auto-download" />
              <Switch label="Dark mode" />
            </div>
          </Drawer>
        </>
      );
    };
    return <Demo />;
  },
};

export const LeftSide: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button variant="secondary" onClick={() => setOpen(true)}>Open left drawer</Button>
          <Drawer open={open} onClose={() => setOpen(false)} side="left" title="Menu">
            <ul className="space-y-2 text-sm text-primary">
              <li>Home</li>
              <li>Courses</li>
              <li>Live Classes</li>
              <li>Past Classes</li>
              <li>Profile</li>
            </ul>
          </Drawer>
        </>
      );
    };
    return <Demo />;
  },
};
