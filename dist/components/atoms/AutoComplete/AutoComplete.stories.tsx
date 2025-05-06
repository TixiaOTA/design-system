import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from './AutoComplete';

const meta: Meta<typeof AutoComplete> = {
  title: 'Atoms/AutoComplete',
  component: AutoComplete,
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
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

const options = [
  { value: '1', label: 'Apple' },
  { value: '2', label: 'Banana' },
  { value: '3', label: 'Orange' },
  { value: '4', label: 'Grapes' },
  { value: '5', label: 'Mango' },
  { value: '6', label: 'Pineapple' },
  { value: '7', label: 'Strawberry' },
  { value: '8', label: 'Watermelon' },
];

export const Default: Story = {
  args: {
    options,
    placeholder: 'Search fruits...',
  },
};

export const WithLabel: Story = {
  args: {
    options,
    label: 'Fruit Search',
    placeholder: 'Search fruits...',
  },
};

export const WithLeftIcon: Story = {
  args: {
    options,
    leftIcon: 'mdi:magnify',
    placeholder: 'Search fruits...',
  },
};

export const WithError: Story = {
  args: {
    options,
    error: true,
    errorText: 'Please select a valid fruit',
    placeholder: 'Search fruits...',
  },
};

export const WithHelperText: Story = {
  args: {
    options,
    helperText: 'Select your favorite fruit from the list',
    placeholder: 'Search fruits...',
  },
};

export const Loading: Story = {
  args: {
    options,
    loading: true,
    placeholder: 'Search fruits...',
  },
};

export const CustomOptionRender: Story = {
  args: {
    options,
    renderOption: (option) => (
      <div className="flex items-center gap-2">
        <span className="font-medium">{option.label}</span>
        <span className="text-xs text-neutral-500">ID: {option.value}</span>
      </div>
    ),
    placeholder: 'Search fruits...',
  },
};

export const TopPosition: Story = {
  args: {
    options,
    dropdownPosition: 'top',
    placeholder: 'Search fruits...',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <AutoComplete
        options={options}
        size="sm"
        placeholder="Small size"
      />
      <AutoComplete
        options={options}
        size="md"
        placeholder="Medium size"
      />
      <AutoComplete
        options={options}
        size="lg"
        placeholder="Large size"
      />
    </div>
  ),
};
