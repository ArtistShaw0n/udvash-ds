import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";

const meta: Meta<typeof Modal> = {
  title: "Organisms/Modal",
  component: Modal,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm logout"
          description="You will be returned to the login screen."
        >
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>Logout</Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<"sm" | "md" | "lg" | null>(null);
    return (
      <div className="flex gap-3">
        <Button onClick={() => setSize("sm")}>Small</Button>
        <Button onClick={() => setSize("md")}>Medium</Button>
        <Button onClick={() => setSize("lg")}>Large</Button>
        <Modal
          open={size !== null}
          onClose={() => setSize(null)}
          size={size ?? "md"}
          title={`Modal size: ${size}`}
        >
          <Text size="sm" color="muted">Width adjusts with the size prop.</Text>
        </Modal>
      </div>
    );
  },
};
