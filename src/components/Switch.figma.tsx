import figma from "@figma/code-connect";
import { Switch } from "./Switch";

// TODO: Replace node-id with the real Switch component's ID from Figma
figma.connect(
  Switch,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      checked: figma.boolean("Checked"),
      disabled: figma.boolean("Disabled"),
      label: figma.string("Label"),
    },
    example: ({ checked, disabled, label }) => (
      <Switch checked={checked} disabled={disabled} label={label} onChange={() => {}} />
    ),
  }
);
