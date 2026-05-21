import figma from "@figma/code-connect";
import { Modal } from "./Modal";

// TODO: Replace node-id with the real Modal component's ID from Figma
figma.connect(
  Modal,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=0:0",
  {
    props: {
      title: figma.string("Title"),
      description: figma.string("Description"),
    },
    example: ({ title, description }) => (
      <Modal
        open
        onClose={() => {}}
        title={title}
        description={description}
        primaryAction={{ label: "Confirm", onClick: () => {} }}
        secondaryAction={{ label: "Cancel", onClick: () => {} }}
      />
    ),
  }
);
