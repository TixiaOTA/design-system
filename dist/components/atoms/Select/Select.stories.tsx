import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { SelectItem } from '../SelectItem';
import { Icon } from '../../atoms/Icons/Icons';

const meta = {
  title: 'Atoms/Select',
  component: Select,
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
    position: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
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

const optionsWithIcons = [
  {
    value: 'email',
    label: 'Email',
    icon: <Icon icon="mdi:email" className="h-4 w-4" />,
  },
  {
    value: 'phone',
    label: 'Phone',
    icon: <Icon icon="mdi:phone" className="h-4 w-4" />,
  },
  {
    value: 'message',
    label: 'Message',
    icon: <Icon icon="mdi:message" className="h-4 w-4" />,
  },
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

export const WithIcons: Story = {
  args: {
    label: 'Contact Method',
    options: optionsWithIcons,
    placeholder: 'Select a contact method...',
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

export const WithChildren: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3" disabled>
        Option 3 (Disabled)
      </SelectItem>
      <SelectItem value="option4">
        <div className="flex items-center gap-2">
          <Icon icon="mdi:star" className="h-4 w-4" />
          <span>Option with Icon</span>
        </div>
      </SelectItem>
    </Select>
  ),
  args: {
    label: 'Custom Options',
    placeholder: 'Select an option...',
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

export const WithLongPlaceholder: Story = {
  args: {
    label: 'Long Placeholder Example',
    options: defaultOptions,
    placeholder: 'This is a very long placeholder text that should be truncated when it exceeds the available space in the select component...',
    className: 'max-w-[300px]', // Constrain width to demonstrate truncation
  },
};

export const WithLongOptions: Story = {
  args: {
    label: 'Long Options Example',
    options: [
      { value: 'option1', label: 'This is a very long option text that demonstrates how the component handles overflow...' },
      { value: 'option2', label: 'Another extremely long option text that should be truncated when necessary...' },
      { value: 'option3', label: 'Short option' },
    ],
    placeholder: 'Select an option...',
    className: 'max-w-[300px]', // Constrain width to demonstrate truncation
  },
};

export const PositionTop: Story = {
  args: {
    label: 'Dropdown Position Top',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    position: 'top',
    className: 'mt-32', // Add margin to show dropdown above
  },
};

export const PositionLeft: Story = {
  args: {
    label: 'Dropdown Position Left',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    position: 'left',
    className: 'ml-32', // Add margin to show dropdown on the left
  },
};

export const PositionRight: Story = {
  args: {
    label: 'Dropdown Position Right',
    options: defaultOptions,
    placeholder: 'Select a flavor...',
    position: 'right',
  },
}; 