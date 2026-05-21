import figma from "@figma/code-connect";
import { Button } from "./Button";

// TODO: Replace `node-id=0:0` with the real Button component's node ID from Figma
// (right-click the component in Figma → "Copy link to selection")
figma.connect(
  Button,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Ghost: "ghost",
        Destructive: "destructive",
      }),
      size: figma.enum("Size", {
        Small: "sm",
        Medium: "md",
        Large: "lg",
      }),
      loading: figma.boolean("Loading"),
      disabled: figma.boolean("Disabled"),
      children: figma.string("Label"),
    },
    example: ({ variant, size, loading, disabled, children }) => (
      <Button variant={variant} size={size} loading={loading} disabled={disabled}>
        {children}
      </Button>
    ),
  }
);
