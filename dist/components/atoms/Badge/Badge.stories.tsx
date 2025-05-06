import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Basic variants
export const Primary: Story = {
  args: {
    children: 'Primary Badge',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Badge',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Badge',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Badge',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Error Badge',
    variant: 'error',
  },
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge size="small">Small Badge</Badge>
      <Badge size="medium">Medium Badge</Badge>
      <Badge size="large">Large Badge</Badge>
    </div>
  ),
};

// Semantic variants
export const SemanticVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </div>
    </div>
  ),
};
