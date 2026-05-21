import figma from "@figma/code-connect";
import { Toast } from "./Toast";

// TODO: Replace node-id with the real Toast component's ID from Figma
figma.connect(
  Toast,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      variant: figma.enum("Variant", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Error: "error",
      }),
      children: figma.string("Message"),
    },
    example: ({ variant, children }) => <Toast variant={variant}>{children}</Toast>,
  }
);
