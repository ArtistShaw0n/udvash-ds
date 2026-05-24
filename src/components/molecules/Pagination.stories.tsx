import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Molecules/Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [page, setPage] = useState(3);
      return <Pagination page={page} pageCount={10} onChange={setPage} />;
    };
    return <Demo />;
  },
};

export const Many: Story = {
  render: () => {
    const Demo = () => {
      const [page, setPage] = useState(7);
      return <Pagination page={page} pageCount={42} onChange={setPage} />;
    };
    return <Demo />;
  },
};
