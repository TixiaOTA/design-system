import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PhoneInput } from './PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Atoms/PhoneInput',
  component: PhoneInput,
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
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    label: 'Phone Number',
    onChange: fn(),
    placeholder: 'e.g. 81234567890',
  },
};

export const WithError: Story = {
  args: {
    label: 'Phone Number',
    error: true,
    errorText: 'Please enter a valid phone number',
    onChange: fn(),
  },
};

export const WithHelper: Story = {
  args: {
    label: 'Phone Number',
    helperText: 'Enter your phone number with country code',
    onChange: fn(),
  },
};

export const Required: Story = {
  args: {
    label: 'Phone Number',
    required: true,
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Phone Number',
    disabled: true,
    onChange: fn(),
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Phone Number',
    onChange: fn(),
    placeholder: 'Type your mobile number...',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <PhoneInput label="Small" size="sm" onChange={fn()} />
      <PhoneInput label="Medium" size="md" onChange={fn()} />
      <PhoneInput label="Large" size="lg" onChange={fn()} />
    </div>
  ),
};

export const DifferentVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <PhoneInput label="Default" variant="default" onChange={fn()} />
      <PhoneInput label="Error" variant="error" errorText="Error message" onChange={fn()} />
      <PhoneInput label="Success" variant="success" onChange={fn()} />
      <PhoneInput label="Ghost" variant="ghost" onChange={fn()} />
      <PhoneInput label="Underline" variant="underline" onChange={fn()} />
    </div>
  ),
};

export const DifferentRounded: Story = {
  render: () => (
    <div className="space-y-4">
      <PhoneInput label="None" rounded="none" onChange={fn()} />
      <PhoneInput label="Small" rounded="sm" onChange={fn()} />
      <PhoneInput label="Medium" rounded="md" onChange={fn()} />
      <PhoneInput label="Large" rounded="lg" onChange={fn()} />
      <PhoneInput label="Full" rounded="full" onChange={fn()} />
    </div>
  ),
};
