import figma from "@figma/code-connect";
import { Chip } from "./Chip";

// TODO: Replace node-id with the real Chip component's ID from Figma
figma.connect(
  Chip,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      selected: figma.boolean("Selected"),
      removable: figma.boolean("Removable"),
      children: figma.string("Label"),
    },
    example: ({ selected, removable, children }) => (
      <Chip selected={selected} removable={removable}>
        {children}
      </Chip>
    ),
  }
);
