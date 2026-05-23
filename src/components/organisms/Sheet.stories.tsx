import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Sheet } from "./Sheet";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

const meta: Meta<typeof Sheet> = {
  title: "Organisms/Sheet",
  component: Sheet,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Sheet</Button>
        <Sheet open={open} onClose={() => setOpen(false)} title="Filter">
          <div className="space-y-3">
            <Text>Subject</Text>
            <Text size="sm" color="muted">Mathematics, Physics, Chemistry, Biology</Text>
            <div className="flex justify-end gap-2 pt-3">
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Clear</Button>
              <Button size="sm" onClick={() => setOpen(false)}>Apply</Button>
            </div>
          </div>
        </Sheet>
      </>
    );
  },
};
