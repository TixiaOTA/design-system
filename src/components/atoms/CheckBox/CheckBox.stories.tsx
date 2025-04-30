import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variantSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Basic variants
export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const WithoutLabel: Story = {
  args: {},
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Small" variantSize="sm" />
      <Checkbox label="Medium" variantSize="md" />
      <Checkbox label="Large" variantSize="lg" />
    </div>
  ),
};

// Color variants
export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Primary" color="primary" />
      <Checkbox label="Secondary" color="secondary" />
      <Checkbox label="Success" color="success" />
      <Checkbox label="Warning" color="warning" />
      <Checkbox label="Error" color="error" />
    </div>
  ),
};

// State variants
export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    indeterminate: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Checkbox with Error',
    error: 'This field is required',
  },
};

// Group of checkboxes
export const CheckboxGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" />
    </div>
  ),
};

// Complex example
export const ComplexExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Select Options</h3>
        <Checkbox label="Enable feature" color="primary" />
        <Checkbox label="Show notifications" color="success" />
        <Checkbox label="Auto-save" color="warning" />
        <Checkbox label="Require confirmation" color="error" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Disabled Options</h3>
        <Checkbox label="Premium feature" disabled />
        <Checkbox label="Coming soon" disabled />
      </div>
    </div>
  ),
};
