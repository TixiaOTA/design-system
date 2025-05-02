import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Atoms/TimePicker',
  component: TimePicker,
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
    format: {
      control: 'select',
      options: ['12h', '24h'],
    },
    labelPlacement: {
      control: 'select',
      options: ['top', 'left'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {
    placeholder: 'Select time',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Time',
    placeholder: 'Select time',
  },
};

export const Required: Story = {
  args: {
    label: 'Time',
    required: true,
    placeholder: 'Select time',
  },
};

export const Error: Story = {
  args: {
    label: 'Time',
    variant: 'error',
    errorText: 'Please select a valid time',
    placeholder: 'Select time',
  },
};

export const Success: Story = {
  args: {
    label: 'Time',
    variant: 'success',
    helperText: 'Time selected successfully',
    placeholder: 'Select time',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Time',
    disabled: true,
    placeholder: 'Select time',
  },
};

export const TwentyFourHour: Story = {
  args: {
    label: 'Time (24h)',
    format: '24h',
    placeholder: 'Select time',
  },
};

export const Small: Story = {
  args: {
    label: 'Time',
    size: 'sm',
    placeholder: 'Select time',
  },
};

export const Large: Story = {
  args: {
    label: 'Time',
    size: 'lg',
    placeholder: 'Select time',
  },
};

export const LeftLabel: Story = {
  args: {
    label: 'Time',
    labelPlacement: 'left',
    placeholder: 'Select time',
  },
}; 