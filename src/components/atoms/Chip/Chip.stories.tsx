import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Solid: Story = {
  args: {
    children: 'Solid Chip',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Chip',
    variant: 'outline',
  },
};

export const Soft: Story = {
  args: {
    children: 'Soft Chip',
    variant: 'soft',
  },
};

// Colors
export const Primary: Story = {
  args: {
    children: 'Primary Chip',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Chip',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Chip',
    color: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Chip',
    color: 'danger',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Chip',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Chip',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Chip',
    size: 'lg',
  },
};

// With Icon
export const WithIcon: Story = {
  args: {
    children: 'Chip with Icon',
    icon: 'mdi:star',
  },
};

// With Close Button
export const WithCloseButton: Story = {
  args: {
    children: 'Closeable Chip',
    onClose: () => alert('Close clicked'),
  },
};

// With Icon and Close Button
export const WithIconAndClose: Story = {
  args: {
    children: 'Complete Chip',
    icon: 'mdi:star',
    onClose: () => alert('Close clicked'),
  },
};

// All Variants
export const AllVariants: Story = {
  args: {
    children: 'Chip',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Chip {...args} variant="solid">Solid</Chip>
      <Chip {...args} variant="outline">Outline</Chip>
      <Chip {...args} variant="soft">Soft</Chip>
    </div>
  ),
};

// All Colors
export const AllColors: Story = {
  args: {
    children: 'Chip',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Chip {...args} color="primary">Primary</Chip>
      <Chip {...args} color="success">Success</Chip>
      <Chip {...args} color="warning">Warning</Chip>
      <Chip {...args} color="danger">Danger</Chip>
      <Chip {...args} color="default">Default</Chip>
    </div>
  ),
}; 