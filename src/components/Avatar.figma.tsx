import figma from "@figma/code-connect";
import { Avatar } from "./Avatar";

// TODO: Replace node-id with the real Avatar component's ID from Figma
figma.connect(
  Avatar,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      size: figma.enum("Size", {
        Small: "sm",
        Medium: "md",
        Large: "lg",
      }),
      initials: figma.string("Initials"),
    },
    example: ({ size, initials }) => <Avatar size={size} initials={initials} />,
  }
);
