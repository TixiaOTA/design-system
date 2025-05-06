import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta = {
  title: 'Atoms/DatePicker',
  component: DatePicker,
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
    labelPlacement: {
      control: 'select',
      options: ['top', 'left'],
    },
    isRangeSelection: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select date',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Date',
    placeholder: 'Select date',
  },
};

export const Required: Story = {
  args: {
    label: 'Date',
    required: true,
    placeholder: 'Select date',
  },
};

export const Error: Story = {
  args: {
    label: 'Date',
    variant: 'error',
    errorText: 'Please select a valid date',
    placeholder: 'Select date',
  },
};

export const Success: Story = {
  args: {
    label: 'Date',
    variant: 'success',
    helperText: 'Date selected successfully',
    placeholder: 'Select date',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Date',
    disabled: true,
    placeholder: 'Select date',
  },
};

export const RangeSelection: Story = {
  args: {
    label: 'Date Range',
    isRangeSelection: true,
    placeholder: 'Select date range',
  },
};

export const WithMinMaxDates: Story = {
  args: {
    label: 'Date',
    minDate: new Date(2024, 0, 1), // Jan 1, 2024
    maxDate: new Date(2024, 11, 31), // Dec 31, 2024
    placeholder: 'Select date',
  },
};

export const Small: Story = {
  args: {
    label: 'Date',
    size: 'sm',
    placeholder: 'Select date',
  },
};

export const Large: Story = {
  args: {
    label: 'Date',
    size: 'lg',
    placeholder: 'Select date',
  },
};

export const LeftLabel: Story = {
  args: {
    label: 'Date',
    labelPlacement: 'left',
    placeholder: 'Select date',
  },
}; 