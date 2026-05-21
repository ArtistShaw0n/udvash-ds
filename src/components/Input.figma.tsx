import figma from "@figma/code-connect";
import { Input } from "./Input";

// TODO: Replace node-id with the real Input component's ID from Figma
figma.connect(
  Input,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      placeholder: figma.string("Placeholder"),
      invalid: figma.boolean("Invalid"),
      disabled: figma.boolean("Disabled"),
    },
    example: ({ placeholder, invalid, disabled }) => (
      <Input placeholder={placeholder} invalid={invalid} disabled={disabled} />
    ),
  }
);
