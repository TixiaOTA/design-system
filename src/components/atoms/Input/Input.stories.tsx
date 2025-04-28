import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Icon } from '../../Icons';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Password must be at least 8 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Invalid email address',
    value: 'invalid-email',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    variant: 'success',
    value: 'valid@email.com',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <Icon icon="mdi:search" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    rightIcon: <Icon icon="mdi:eye" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <Icon icon="mdi:search" />,
    rightIcon: <Icon icon="mdi:close" />,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    placeholder: 'You cannot edit this',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-only input',
    value: 'You cannot edit this',
    readOnly: true,
  },
}; 