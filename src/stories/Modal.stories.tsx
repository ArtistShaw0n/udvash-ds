import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";

const meta: Meta<typeof Modal> = {
  title: "Overlays/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete from downloads?"
          description="This video won't be available to watch offline."
          primaryAction={{ label: "Delete", onClick: () => setOpen(false), destructive: true }}
          secondaryAction={{ label: "Cancel", onClick: () => setOpen(false) }}
        />
      </div>
    );
  },
};
