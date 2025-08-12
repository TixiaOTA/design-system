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
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "fullscreen"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
    position: {
      control: "select",
      options: ["center", "top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Interactive Example with Header
const InteractiveDialogWithHeader = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog with Header</Button>
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        backdrop={args.backdrop ?? "blur"}
        header={args.header ?? <DialogTitle>Custom Header</DialogTitle>}
        closeOnBackdropClick={args.closeOnBackdropClick ?? true}
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
const DialogWithCustomHeader = (args: any) => {
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
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        backdrop={args.backdrop ?? "dark"}
        header={
          args.header ?? (
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎉</span>
              Custom Header with Icon
            </div>
          )
        }
        closeOnBackdropClick={args.closeOnBackdropClick ?? false}
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
const DialogWithoutHeader = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dialog without Header
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} backdrop={args.backdrop ?? "dark"}>
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
  render: (args) => <InteractiveDialogWithHeader {...args} />,
};

export const WithCustomHeader: Story = {
  render: (args) => <DialogWithCustomHeader {...args} />,
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
  render: (args) => <DialogWithoutHeader {...args} />,
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

export const TwoXL: Story = {
  render: (args) => <DialogTemplate {...args} size="2xl" />,
};

export const ThreeXL: Story = {
  render: (args) => <DialogTemplate {...args} size="3xl" />,
};

export const FourXL: Story = {
  render: (args) => <DialogTemplate {...args} size="4xl" />,
};

export const FiveXL: Story = {
  render: (args) => <DialogTemplate {...args} size="5xl" />,
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

export const PositionCenter: Story = {
  render: (args) => <DialogTemplate {...args} position="center" />,
};

export const PositionTop: Story = {
  render: (args) => <DialogTemplate {...args} position="top" />,
};

export const PositionBottom: Story = {
  render: (args) => <DialogTemplate {...args} position="bottom" />,
};

export const PositionLeft: Story = {
  render: (args) => <DialogTemplate {...args} position="left" size="md" />,
  parameters: {
    docs: {
      description: {
        story: "Left drawer with slide-in animation and full-height panel.",
      },
    },
  },
};

export const PositionRight: Story = {
  render: (args) => <DialogTemplate {...args} position="right" size="md" />,
  parameters: {
    docs: {
      description: {
        story: "Right drawer with slide-in animation and full-height panel.",
      },
    },
  },
};

// Example allowing custom Tailwind size via `sizeClassName`
export const CustomWidth: Story = {
  render: (args) => (
    <DialogTemplate
      {...args}
      // Demonstrate overriding width with a Tailwind utility
      // Consumers can pass values like `w-full`, `w-[10em]`, or `max-w-7xl`
      sizeClassName="w-[28rem] max-w-none"
      // Keep a preset for rounding/animations but it will not affect width when sizeClassName is set
      size="lg"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates using `sizeClassName` to fully control width (e.g., `w-[28rem]`, `w-full`, `max-w-7xl`).",
      },
    },
  },
};
