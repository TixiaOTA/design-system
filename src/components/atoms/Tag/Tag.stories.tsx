import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Solid: Story = {
  args: {
    children: 'Solid Tag',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Tag',
    variant: 'outline',
  },
};

export const Soft: Story = {
  args: {
    children: 'Soft Tag',
    variant: 'soft',
  },
};

// Colors
export const Primary: Story = {
  args: {
    children: 'Primary Tag',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Tag',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Tag',
    color: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Tag',
    color: 'danger',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Tag',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Tag',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Tag',
    size: 'lg',
  },
};

// With Icon
export const WithIcon: Story = {
  args: {
    children: 'Tag with Icon',
    icon: 'mdi:star',
  },
};

// With Close Button
export const WithCloseButton: Story = {
  args: {
    children: 'Closeable Tag',
    onClose: () => alert('Close clicked'),
  },
};

// With Icon and Close Button
export const WithIconAndClose: Story = {
  args: {
    children: 'Complete Tag',
    icon: 'mdi:star',
    onClose: () => alert('Close clicked'),
  },
};

// All Variants
export const AllVariants: Story = {
  args: {
    children: 'Tag',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Tag {...args} variant="solid">Solid</Tag>
      <Tag {...args} variant="outline">Outline</Tag>
      <Tag {...args} variant="soft">Soft</Tag>
    </div>
  ),
};

// All Colors
export const AllColors: Story = {
  args: {
    children: 'Tag',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Tag {...args} color="primary">Primary</Tag>
      <Tag {...args} color="success">Success</Tag>
      <Tag {...args} color="warning">Warning</Tag>
      <Tag {...args} color="danger">Danger</Tag>
      <Tag {...args} color="default">Default</Tag>
    </div>
  ),
}; 