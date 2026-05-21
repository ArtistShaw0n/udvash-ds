import figma from "@figma/code-connect";
import { Card } from "./Card";

// TODO: Replace node-id with the real Card component's ID from Figma
figma.connect(
  Card,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      title: figma.string("Title"),
      bangla: figma.boolean("Bangla"),
    },
    example: ({ title, bangla }) => <Card title={title} bangla={bangla} />,
  }
);
