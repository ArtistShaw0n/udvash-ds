import figma from "@figma/code-connect";
import { Badge } from "./Badge";

// TODO: Replace node-id with the real Badge component's ID from Figma
figma.connect(
  Badge,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      variant: figma.enum("Variant", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Error: "error",
        Brand: "brand",
        Neutral: "neutral",
      }),
      children: figma.string("Label"),
    },
    example: ({ variant, children }) => <Badge variant={variant}>{children}</Badge>,
  }
);
