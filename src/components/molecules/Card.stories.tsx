import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { Avatar } from "../atoms/Avatar";
import { Badge } from "../atoms/Badge";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { children: <Text>Default card content</Text> },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <Card variant="elevated"><Text>Elevated (shadow)</Text></Card>
      <Card variant="outlined"><Text>Outlined (border)</Text></Card>
      <Card variant="filled"><Text>Filled (subtle bg)</Text></Card>
    </div>
  ),
};

export const Composed: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar name="Shawon Ahmed" size="sm" />
          <Text weight="medium">Shawon Ahmed</Text>
        </div>
        <Badge variant="success">Active</Badge>
      </CardHeader>
      <CardBody>
        <Text size="sm" color="muted">
          Composed card with header, body, footer slots. Each card subcomponent
          handles its own layout and spacing.
        </Text>
      </CardBody>
      <CardFooter>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  ),
};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: <Text>Hover over me</Text>,
  },
};
