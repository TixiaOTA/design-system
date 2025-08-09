import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogBody,
  DialogActions,
  // DialogHeader
} from "./Dialog";
import { Button } from "../Button/Button";

const meta: Meta<typeof Dialog> = {
  title: "Atoms/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
    backdrop: {
      control: "select",
      options: ["blur", "dark", "transparent"],
    },
    closeOnBackdropClick: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "fullscreen"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Interactive Example with Header
const InteractiveDialogWithHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog with Header</Button>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        backdrop="blur"
        header={<DialogTitle>Custom Header</DialogTitle>}
        closeOnBackdropClick={true}
      >
        <DialogBody>
          This dialog has a custom header with a close icon. The backdrop is
          blurred.
        </DialogBody>
        <DialogActions>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Example with Custom Header
const DialogWithCustomHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dialog with Custom Header
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        backdrop="dark"
        header={
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            Custom Header with Icon
          </div>
        }
        closeOnBackdropClick={false}
      >
        <DialogBody>
          This dialog has a custom header with an emoji and close button.
        </DialogBody>
        <DialogActions>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Example without Header
const DialogWithoutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dialog without Header
      </Button>
      <Dialog isOpen={isOpen} onClose={handleClose} backdrop="dark">
        <DialogBody>
          This dialog has no header and no close icon. It can only be closed by
          clicking outside or using the action buttons.
        </DialogBody>
        <DialogActions>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const WithHeader: Story = {
  render: () => <InteractiveDialogWithHeader />,
};

export const WithCustomHeader: Story = {
  render: () => <DialogWithCustomHeader />,
  parameters: {
    docs: {
      description: {
        story:
          "Dialog with a custom header including an emoji and close button.",
      },
    },
  },
};

export const WithoutHeader: Story = {
  render: () => <DialogWithoutHeader />,
  parameters: {
    docs: {
      description: {
        story: "Dialog without a header or close icon.",
      },
    },
  },
};

const DialogTemplate = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={<DialogTitle>Dialog Title</DialogTitle>}
      >
        <DialogBody>
          This is the dialog content. You can put any content here.
        </DialogBody>
        <DialogActions>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Small: Story = {
  render: (args) => <DialogTemplate {...args} size="sm" />,
};

export const Medium: Story = {
  render: (args) => <DialogTemplate {...args} size="md" />,
};

export const Large: Story = {
  render: (args) => <DialogTemplate {...args} size="lg" />,
};

export const ExtraLarge: Story = {
  render: (args) => <DialogTemplate {...args} size="xl" />,
};

export const Fullscreen: Story = {
  render: (args) => <DialogTemplate {...args} size="fullscreen" />,
};

export const WithBlurBackdrop: Story = {
  render: (args) => <DialogTemplate {...args} backdrop="blur" />,
};

export const WithTransparentBackdrop: Story = {
  render: (args) => <DialogTemplate {...args} backdrop="transparent" />,
};
