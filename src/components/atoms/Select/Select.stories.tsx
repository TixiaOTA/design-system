import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a flavor...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Ice Cream Flavor',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
  },
};

export const Required: Story = {
  args: {
    label: 'Ice Cream Flavor',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Ice Cream Flavor',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    helperText: 'Choose your favorite flavor',
  },
};

export const WithError: Story = {
  args: {
    label: 'Ice Cream Flavor',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    error: 'Please select a flavor',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Ice Cream Flavor',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    variant: 'success',
    value: 'chocolate',
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Ice Cream Flavor',
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry', disabled: true },
      { value: 'vanilla', label: 'Vanilla' },
    ],
    placeholder: 'Select a flavor...',
  },
};

export const Small: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Ice Cream Flavor',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    disabled: true,
  },
}; 