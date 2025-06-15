import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'ghost', 'underline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    labelPlacement: {
      control: 'select',
      options: ['top', 'left'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password...',
    helperText: 'Must be at least 8 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email...',
    error: true,
    errorText: 'Please enter a valid email address',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: 'mdi:magnify',
    rightIcon: 'mdi:close',
  },
};

// Variant Examples
export const VariantExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Default variant" variant="default" />
      <Input placeholder="Error variant" variant="error" />
      <Input placeholder="Success variant" variant="success" />
      <Input placeholder="Ghost variant" variant="ghost" />
      <Input placeholder="Underline variant" variant="underline" />
    </div>
  ),
};

// Size Examples
export const SizeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Small size" size="sm" />
      <Input placeholder="Medium size" size="md" />
      <Input placeholder="Large size" size="lg" />
    </div>
  ),
};

// Rounded Examples
export const RoundedVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="None rounded" rounded="none" />
      <Input placeholder="Small rounded" rounded="sm" />
      <Input placeholder="Medium rounded" rounded="md" />
      <Input placeholder="Large rounded" rounded="lg" />
      <Input placeholder="Full rounded" rounded="full" />
    </div>
  ),
};

// State Examples
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input label="Required Field" placeholder="This field is required..." required />
      <Input label="Disabled Input" placeholder="This input is disabled..." disabled />
      <Input label="Read Only" placeholder="This input is read only..." readOnly />
    </div>
  ),
};

// Layout Examples
export const LayoutExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input label="Full Width Input" placeholder="This input takes full width..." fullWidth />
      <Input label="Left Label" placeholder="Label on the left..." labelPlacement="left" />
    </div>
  ),
}; 