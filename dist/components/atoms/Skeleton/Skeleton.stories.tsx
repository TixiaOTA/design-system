import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'],
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// Basic variants
export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    height: '40px',
    width: '40px',
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    height: '100px',
    width: '200px',
  },
};

// Color variants
export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Skeleton variant="text" color="primary" width="200px" />
        <Skeleton variant="text" color="secondary" width="200px" />
        <Skeleton variant="text" color="neutral" width="200px" />
      </div>
      <div className="flex gap-2">
        <Skeleton variant="text" color="success" width="200px" />
        <Skeleton variant="text" color="warning" width="200px" />
        <Skeleton variant="text" color="error" width="200px" />
      </div>
      <div className="flex gap-2">
        <Skeleton variant="text" color="info" width="200px" />
      </div>
    </div>
  ),
};

// Animation variants
export const PulseAnimation: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
  },
};

export const WaveAnimation: Story = {
  args: {
    variant: 'text',
    animation: 'wave',
  },
};

// Common use cases
export const AvatarWithText: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton variant="circular" height="40px" width="40px" color="neutral" />
      <div className="space-y-2">
        <Skeleton variant="text" width="200px" color="neutral" />
        <Skeleton variant="text" width="150px" color="neutral" />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="p-4 border rounded-lg space-y-4">
      <Skeleton variant="rectangular" height="200px" width="100%" color="neutral" />
      <div className="space-y-2">
        <Skeleton variant="text" width="80%" color="neutral" />
        <Skeleton variant="text" width="60%" color="neutral" />
      </div>
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Skeleton variant="circular" height="40px" width="40px" color="neutral" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="80%" color="neutral" />
            <Skeleton variant="text" width="60%" color="neutral" />
          </div>
        </div>
      ))}
    </div>
  ),
};
