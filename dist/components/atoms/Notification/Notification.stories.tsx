import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Atoms/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    duration: { control: 'number' },
    showClose: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'This is an information notification.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please review your changes before proceeding.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
  },
};

export const WithActions: Story = {
  args: {
    type: 'info',
    title: 'Update Available',
    message: 'A new version of the application is available.',
    actions: [
      {
        label: 'Update Now',
        onClick: () => alert('Updating...'),
      },
      {
        label: 'Later',
        onClick: () => alert('Remind me later'),
      },
    ],
  },
};

export const CustomIcon: Story = {
  args: {
    type: 'info',
    title: 'Custom Icon',
    message: 'This notification uses a custom icon.',
    icon: 'mdi:bell',
  },
};

export const NoCloseButton: Story = {
  args: {
    type: 'info',
    title: 'No Close Button',
    message: 'This notification cannot be closed manually.',
    showClose: false,
  },
};

export const NoAutoClose: Story = {
  args: {
    type: 'info',
    title: 'No Auto Close',
    message: 'This notification will stay visible until manually closed.',
    duration: 0,
  },
};

export const CustomStyling: Story = {
  args: {
    type: 'info',
    title: 'Custom Styling',
    message: 'This notification has custom styling.',
    className: 'max-w-md mx-auto',
    actions: [
      {
        label: 'Custom Action',
        onClick: () => alert('Custom action clicked'),
        className: 'bg-primary text-white hover:bg-primary/90',
      },
    ],
  },
}; 