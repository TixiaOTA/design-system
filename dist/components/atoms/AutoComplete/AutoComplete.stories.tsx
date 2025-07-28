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
    initialItemsToShow: {
      control: { type: 'number', min: 0, max: 100 },
    },
    itemsToLoad: {
      control: { type: 'number', min: 1, max: 50 },
    },
    maxDropdownHeight: {
      control: { type: 'number', min: 100, max: 600 },
    },
    noOptionsMessage: {
      control: 'text',
    },
    scrollMoreMessage: {
      control: 'text',
    },
    allOptionsShownMessage: {
      control: 'text',
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

// Large dataset for virtual scrolling demo
const largeCountryOptions = Array.from({ length: 200 }, (_, index) => ({
  value: `country-${index}`,
  label: `Country ${String.fromCharCode(65 + (index % 26))}${Math.floor(index / 26) + 1}`,
}));

// Basic Examples
export const Default: Story = {
  args: {
    options: countryOptions,
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

// Virtual Scrolling Examples
export const VirtualScrollingDefault: Story = {
  args: {
    label: 'Large Dataset (Virtual Scrolling)',
    options: largeCountryOptions,
    placeholder: 'Search countries...',
    initialItemsToShow: 10,
    itemsToLoad: 10,
    maxDropdownHeight: 200,
    helperText: 'Shows 10 items initially, loads 10 more when scrolling',
  },
};

export const VirtualScrollingCustom: Story = {
  args: {
    label: 'Custom Virtual Scrolling',
    options: largeCountryOptions,
    placeholder: 'Search countries...',
    initialItemsToShow: 5,
    itemsToLoad: 5,
    maxDropdownHeight: 150,
    helperText: 'Shows 5 items initially, loads 5 more when scrolling',
  },
};

export const VirtualScrollingComparison: Story = {
  args: {
    options: largeCountryOptions,
    placeholder: 'Search countries...',
  },
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <AutoComplete
        {...args}
        label="All Items (No Virtual Scrolling)"
        initialItemsToShow={0}
        helperText="Shows all 200 items at once (may be slow)"
      />
      <AutoComplete
        {...args}
        label="Virtual Scrolling (10 items)"
        initialItemsToShow={10}
        itemsToLoad={10}
        maxDropdownHeight={200}
        helperText="Shows 10 items initially, loads more on scroll"
      />
      <AutoComplete
        {...args}
        label="Virtual Scrolling (5 items)"
        initialItemsToShow={5}
        itemsToLoad={5}
        maxDropdownHeight={150}
        helperText="Shows 5 items initially, loads more on scroll"
      />
    </div>
  ),
};

// Custom Messages Examples
export const CustomMessages: Story = {
  args: {
    label: 'Custom Messages',
    options: countryOptions,
    placeholder: 'Search countries...',
    initialItemsToShow: 5,
    itemsToLoad: 5,
    maxDropdownHeight: 200,
    noOptionsMessage: '😔 No countries found matching your search',
    scrollMoreMessage: 'Load more countries ({current}/{total})',
    allOptionsShownMessage: '✨ All {total} countries displayed',
    helperText: 'Custom messages for different states',
  },
};

export const CustomNoOptionsMessage: Story = {
  args: {
    label: 'Custom No Options Message',
    options: [],
    placeholder: 'Search countries...',
    noOptionsMessage: (
      <div className="flex flex-col items-center gap-2 py-4">
        <div className="text-4xl">🌍</div>
        <div className="text-sm font-medium">No countries available</div>
        <div className="text-xs text-neutral-500">Try a different search term</div>
      </div>
    ),
    helperText: 'Custom React node for no options message',
  },
};

export const LocalizedMessages: Story = {
  args: {
    label: 'Localized Messages (Spanish)',
    options: countryOptions,
    placeholder: 'Buscar países...',
    initialItemsToShow: 5,
    itemsToLoad: 5,
    maxDropdownHeight: 200,
    noOptionsMessage: 'No se encontraron países',
    scrollMoreMessage: 'Cargar más países ({current} de {total})',
    allOptionsShownMessage: 'Todos los {total} países mostrados',
    helperText: 'Messages in Spanish',
  },
};
