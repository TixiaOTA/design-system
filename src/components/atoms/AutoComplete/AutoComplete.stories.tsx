import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from './AutoComplete';
import { Icon } from '../../atoms/Icons/Icons';

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
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    dropdownPosition: {
      control: 'select',
      options: ['top', 'bottom'],
    },
    searchType: {
      control: 'select',
      options: ['include', 'startsWith'],
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

const countryOptions = [
  { value: 'india', label: 'India' },
  { value: 'indonesia', label: 'Indonesia' },
  { value: 'iran', label: 'Iran' },
  { value: 'iraq', label: 'Iraq' },
  { value: 'ireland', label: 'Ireland' },
  { value: 'israel', label: 'Israel' },
  { value: 'italy', label: 'Italy' },
  { value: 'ivory-coast', label: 'Ivory Coast' },
  { value: 'china', label: 'China' },
  { value: 'chile', label: 'Chile' },
  { value: 'canada', label: 'Canada' },
  { value: 'cambodia', label: 'Cambodia' },
  { value: 'brazil', label: 'Brazil' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'australia', label: 'Australia' },
  { value: 'austria', label: 'Austria' },
  { value: 'argentina', label: 'Argentina' },
];

// Basic Examples
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

// Variant Examples
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

// Rounded Examples
export const RoundedVariants: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Search fruits...',
  },
  render: (args) => (
    <div className="space-y-4">
      <AutoComplete
        {...args}
        label="No Rounded"
        rounded="none"
      />
      <AutoComplete
        {...args}
        label="Small Rounded"
        rounded="sm"
      />
      <AutoComplete
        {...args}
        label="Medium Rounded"
        rounded="md"
      />
      <AutoComplete
        {...args}
        label="Large Rounded"
        rounded="lg"
      />
      <AutoComplete
        {...args}
        label="Full Rounded"
        rounded="full"
      />
    </div>
  ),
};

// Size Examples
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

// Icon Examples
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

// State Examples
export const Loading: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    loading: true,
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

// Dropdown Position Examples
export const WithTopDropdown: Story = {
  args: {
    label: 'Fruit Search',
    options: defaultOptions,
    placeholder: 'Search fruits...',
    dropdownPosition: 'top',
  },
};

// Form Example
export const FormExample: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Search fruits...',
  },
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <AutoComplete
        {...args}
        label="Fruit Search"
        variant="underline"
        showClear
      />
      <AutoComplete
        {...args}
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

// Search Type Examples
export const SearchTypeInclude: Story = {
  args: {
    label: 'Country Search (Include)',
    options: countryOptions,
    placeholder: 'Search countries...',
    searchType: 'include',
    helperText: 'Searches for countries that contain the input anywhere in the name',
  },
};

export const SearchTypeStartsWith: Story = {
  args: {
    label: 'Country Search (Starts With)',
    options: countryOptions,
    placeholder: 'Search countries...',
    searchType: 'startsWith',
    helperText: 'Searches for countries that start with the input',
  },
};

export const SearchTypeComparison: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Search countries...',
  },
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <AutoComplete
        {...args}
        label="Include Search"
        searchType="include"
        helperText="Type 'i' to see all countries containing 'i'"
      />
      <AutoComplete
        {...args}
        label="Starts With Search"
        searchType="startsWith"
        helperText="Type 'i' to see only countries starting with 'i'"
      />
    </div>
  ),
};
