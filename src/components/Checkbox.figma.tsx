import figma from "@figma/code-connect";
import { Checkbox } from "./Checkbox";

// TODO: Replace node-id with the real Checkbox component's ID from Figma
figma.connect(
  Checkbox,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      checked: figma.boolean("Checked"),
      disabled: figma.boolean("Disabled"),
      label: figma.string("Label"),
    },
    example: ({ checked, disabled, label }) => (
      <Checkbox checked={checked} disabled={disabled} label={label} onChange={() => {}} />
    ),
  }
);
