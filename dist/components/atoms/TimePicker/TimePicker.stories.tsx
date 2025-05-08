import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';

const meta = {
  title: 'Atoms/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: true,
        height: 'auto',
        iframeHeight: 400,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '100%',
        maxWidth: '300px',
        margin: '0 auto',
        padding: '20px',
      }}>
        <Story />
      </div>
    ),
  ],
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
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    use24Hour: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TimePicker>;

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

export const WithError: Story = {
  args: {
    label: 'Time',
    placeholder: 'Select time',
    errorText: 'Please select a valid time',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Time',
    placeholder: 'Select time',
    helperText: 'Select your preferred time',
  },
};

export const Required: Story = {
  args: {
    label: 'Time',
    placeholder: 'Select time',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Time',
    placeholder: 'Select time',
    disabled: true,
  },
};

export const TwentyFourHour: Story = {
  args: {
    label: 'Time (24h)',
    placeholder: 'Select time',
    use24Hour: true,
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <TimePicker size="sm" placeholder="Small" />
      <TimePicker size="md" placeholder="Medium" />
      <TimePicker size="lg" placeholder="Large" />
    </div>
  ),
};

export const RoundedVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <TimePicker rounded="none" placeholder="No rounded" />
      <TimePicker rounded="sm" placeholder="Small rounded" />
      <TimePicker rounded="md" placeholder="Medium rounded" />
      <TimePicker rounded="lg" placeholder="Large rounded" />
      <TimePicker rounded="full" placeholder="Full rounded" />
    </div>
  ),
}; 