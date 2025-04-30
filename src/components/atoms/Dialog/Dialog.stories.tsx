import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogBody, DialogActions, DialogHeader } from './Dialog';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Atoms/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    backdrop: {
      control: 'select',
      options: ['blur', 'dark', 'transparent'],
    },
    closeOnBackdropClick: { control: 'boolean' },
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
          This dialog has a custom header with a close icon. The backdrop is blurred.
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
      <Button onClick={() => setIsOpen(true)}>Open Dialog with Custom Header</Button>
      <Dialog 
        isOpen={isOpen} 
        onClose={handleClose}
        backdrop="dark"
        header={
          <DialogHeader onClose={handleClose}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎉</span>
              <DialogTitle>Custom Header with Icon</DialogTitle>
            </div>
          </DialogHeader>
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
      <Button onClick={() => setIsOpen(true)}>Open Dialog without Header</Button>
      <Dialog 
        isOpen={isOpen} 
        onClose={handleClose}
        backdrop="dark"
      >
        <DialogBody>
          This dialog has no header and no close icon. It can only be closed by clicking outside or using the action buttons.
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

// Static Examples
const StaticDialogWithBlur = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative h-[400px] w-full">
      <Dialog 
        isOpen={isOpen} 
        onClose={handleClose}
        backdrop="blur"
        header={<DialogTitle>Blur Backdrop</DialogTitle>}
        closeOnBackdropClick={true}
      >
        <DialogBody>
          This dialog has a blurred backdrop effect and can be closed by clicking the backdrop.
        </DialogBody>
        <DialogActions>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const StaticDialogWithDark = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative h-[400px] w-full">
      <Dialog 
        isOpen={isOpen} 
        onClose={handleClose}
        backdrop="dark"
        header={<DialogTitle>Dark Backdrop</DialogTitle>}
        closeOnBackdropClick={true}
      >
        <DialogBody>
          This dialog has a dark backdrop effect and can be closed by clicking the backdrop.
        </DialogBody>
        <DialogActions>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const StaticDialogWithTransparent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative h-[400px] w-full">
      <Dialog 
        isOpen={isOpen} 
        onClose={handleClose}
        backdrop="transparent"
        header={<DialogTitle>Transparent Backdrop</DialogTitle>}
        closeOnBackdropClick={true}
      >
        <DialogBody>
          This dialog has a transparent backdrop and can be closed by clicking the backdrop.
        </DialogBody>
        <DialogActions>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
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
        story: 'Dialog with a custom header including an emoji and close button.',
      },
    },
  },
};

export const WithoutHeader: Story = {
  render: () => <DialogWithoutHeader />,
  parameters: {
    docs: {
      description: {
        story: 'Dialog without a header or close icon.',
      },
    },
  },
};
