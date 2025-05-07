import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from './AutoComplete';
import { Icon } from '@iconify/react';

const meta = {
  title: 'Atoms/AutoComplete',
  component: AutoComplete,
  parameters: {
    layout: 'centered',
  },
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
    dropdownPosition: {
      control: 'select',
      options: ['top', 'bottom'],
    },
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'mango', label: 'Mango' },
  { value: 'strawberry', label: 'Strawberry' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Search fruits...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    helperText: 'Type to search for fruits',
  },
};

export const WithError: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    error: true,
    errorText: 'Please select a valid fruit',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    variant: 'success',
    value: 'apple',
  },
};

export const WithGhost: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    variant: 'ghost',
  },
};

export const WithUnderline: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    variant: 'underline',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    leftIcon: 'mdi:magnify',
  },
};

export const WithClearButton: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    showClear: true,
  },
};

export const WithCustomOption: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    renderOption: (option) => (
      <div className="flex items-center gap-2">
        <Icon icon="mdi:fruit-watermelon" className="h-4 w-4" />
        <span>{option.label}</span>
      </div>
    ),
  },
};

export const Loading: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    loading: true,
  },
};

export const Small: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Search fruits...',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Search fruits...',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Search fruits...',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    required: true,
  },
};

export const WithTopDropdown: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    dropdownPosition: 'top',
  },
};

export const FormExample: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Search fruits...',
  },
  render: () => (
    <div className="space-y-4 w-[400px]">
      <AutoComplete
        label="Fruit Search"
        options={defaultOptions}
        placeholder="Search fruits..."
        variant="underline"
        showClear
      />
      <AutoComplete
        label="Vegetable Search"
        options={[
          { value: 'carrot', label: 'Carrot' },
          { value: 'broccoli', label: 'Broccoli' },
          { value: 'spinach', label: 'Spinach' },
        ]}
        placeholder="Search vegetables..."
        variant="underline"
        showClear
      />
    </div>
  ),
};
