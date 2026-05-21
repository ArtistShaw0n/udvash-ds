import figma from "@figma/code-connect";
import { Alert } from "./Alert";

// TODO: Replace node-id with the real Alert component's ID from Figma
figma.connect(
  Alert,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      variant: figma.enum("Variant", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Error: "error",
      }),
      title: figma.string("Title"),
      children: figma.string("Body"),
    },
    example: ({ variant, title, children }) => (
      <Alert variant={variant} title={title}>
        {children}
      </Alert>
    ),
  }
);
