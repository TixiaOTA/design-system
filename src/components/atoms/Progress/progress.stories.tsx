import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bar', 'circular'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    isIndeterminate: {
      control: 'boolean',
    },
    showValue: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

// Bar Progress Stories
export const Default: Story = {
  args: {
    value: 50,
    label: 'Progress',
    showValue: true,
  },
};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
    label: 'Loading...',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={75} color="primary" label="Primary" showValue />
      <Progress value={75} color="secondary" label="Secondary" showValue />
      <Progress value={75} color="success" label="Success" showValue />
      <Progress value={75} color="warning" label="Warning" showValue />
      <Progress value={75} color="danger" label="Danger" showValue />
      <Progress value={75} color="info" label="Info" showValue />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={75} size="sm" label="Small" showValue />
      <Progress value={75} size="md" label="Medium" showValue />
      <Progress value={75} size="lg" label="Large" showValue />
    </div>
  ),
};

// Circular Progress Stories
export const CircularDefault: Story = {
  args: {
    variant: 'circular',
    value: 50,
    label: 'Circular Progress',
    showValue: true,
  },
};

export const CircularIndeterminate: Story = {
  args: {
    variant: 'circular',
    isIndeterminate: true,
    label: 'Loading...',
  },
};

export const CircularColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <Progress variant="circular" value={75} color="primary" label="Primary" showValue />
      <Progress variant="circular" value={75} color="secondary" label="Secondary" showValue />
      <Progress variant="circular" value={75} color="success" label="Success" showValue />
      <Progress variant="circular" value={75} color="warning" label="Warning" showValue />
      <Progress variant="circular" value={75} color="danger" label="Danger" showValue />
      <Progress variant="circular" value={75} color="info" label="Info" showValue />
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <Progress variant="circular" value={75} size="sm" label="Small" showValue />
      <Progress variant="circular" value={75} size="md" label="Medium" showValue />
      <Progress variant="circular" value={75} size="lg" label="Large" showValue />
    </div>
  ),
};