import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta = {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
    },
    duration: {
      control: 'number',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Toast Title',
    description: 'This is a default toast message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    description: 'Your changes have been saved successfully.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'An error occurred while saving your changes.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'Your session will expire in 5 minutes.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    description: 'A new version is available.',
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    description: 'This is a toast message without a title.',
  },
};

export const WithoutClose: Story = {
  args: {
    title: 'No Close Button',
    description: 'This toast does not have a close button.',
    showClose: false,
  },
};

export const LongContent: Story = {
  args: {
    title: 'Long Content',
    description:
      'This is a toast message with a very long description that should wrap to multiple lines. It demonstrates how the toast handles longer content while maintaining its layout and readability.',
  },
};

export const AutoDismiss: Story = {
  args: {
    title: 'Auto Dismiss',
    description: 'This toast will automatically dismiss after 3 seconds.',
    duration: 3000,
  },
}; 