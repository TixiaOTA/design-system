import type { Meta, StoryObj } from '@storybook/react';
import { CheckBoxGroup } from './CheckBoxGroup';
import { useState } from 'react';

const meta: Meta<typeof CheckBoxGroup> = {
  title: 'Atoms/CheckBoxGroup',
  component: CheckBoxGroup,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'grid'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['square', 'circle'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
    },
    checkboxSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    labelPlacement: {
      control: 'select',
      options: ['top', 'left'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    showSelectAll: {
      control: 'boolean',
    },
    indeterminateSelectAll: {
      control: 'boolean',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    selectAllGap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBoxGroup>;

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

// Basic Examples
export const Default: Story = {
  args: {
    options: sampleOptions,
    label: 'Select Options',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: sampleOptions,
    label: 'Select Options',
    defaultValue: ['option1', 'option3'],
  },
};

export const WithHelperText: Story = {
  args: {
    options: sampleOptions,
    label: 'Select Options',
    helperText: 'Choose one or more options from the list',
  },
};

export const WithError: Story = {
  args: {
    options: sampleOptions,
    label: 'Select Options',
    error: true,
    errorText: 'Please select at least one option',
  },
};

export const WithErrorAndSelectAll: Story = {
  args: {
    options: sampleOptions,
    label: 'Select Options',
    error: true,
    errorText: 'Please select at least one option',
    showSelectAll: true,
  },
};

export const ErrorWithDifferentVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="Square Variant with Error"
        error={true}
        errorText="This field has an error"
        variant="square"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Circle Variant with Error"
        error={true}
        errorText="This field has an error"
        variant="circle"
        showSelectAll={true}
      />
    </div>
  ),
};

export const ErrorWithDifferentColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="Primary Color with Error (should show error styling)"
        error={true}
        errorText="Error overrides color prop"
        color="primary"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Success Color with Error (should show error styling)"
        error={true}
        errorText="Error overrides color prop"
        color="success"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Warning Color with Error (should show error styling)"
        error={true}
        errorText="Error overrides color prop"
        color="warning"
        showSelectAll={true}
      />
    </div>
  ),
};

export const UnselectedErrorStyling: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="Unselected Checkboxes with Error (Square)"
        error={true}
        errorText="Notice the danger-colored borders on unselected checkboxes"
        variant="square"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Unselected Checkboxes with Error (Circle)"
        error={true}
        errorText="Notice the danger-colored borders on unselected checkboxes"
        variant="circle"
        showSelectAll={true}
      />
    </div>
  ),
};

export const ErrorStateComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="Normal State (No Error)"
        variant="square"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Error State (Danger borders on unselected)"
        error={true}
        errorText="Compare with the normal state above"
        variant="square"
        showSelectAll={true}
      />
    </div>
  ),
};

export const Required: Story = {
  args: {
    options: sampleOptions,
    label: 'Select Options',
    required: true,
    helperText: 'This field is required',
  },
};

// Layout Examples
export const VerticalLayout: Story = {
  args: {
    options: sampleOptions,
    label: 'Vertical Layout',
    layout: 'vertical',
  },
};

export const HorizontalLayout: Story = {
  args: {
    options: sampleOptions,
    label: 'Horizontal Layout',
    layout: 'horizontal',
  },
};

export const GridLayout: Story = {
  args: {
    options: sampleOptions,
    label: 'Grid Layout',
    layout: 'grid',
  },
};

export const LeftLabel: Story = {
  args: {
    options: sampleOptions,
    label: 'Left Label',
    labelPlacement: 'left',
  },
};

// Size Examples
export const SizeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <CheckBoxGroup
        options={sampleOptions}
        label="Small Size"
        size="sm"
        checkboxSize="sm"
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Medium Size"
        size="md"
        checkboxSize="md"
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Large Size"
        size="lg"
        checkboxSize="lg"
      />
    </div>
  ),
};

// Variant Examples
export const VariantExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <CheckBoxGroup
        options={sampleOptions}
        label="Square Variant"
        variant="square"
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Circle Variant"
        variant="circle"
      />
    </div>
  ),
};

// Color Examples
export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <CheckBoxGroup
        options={sampleOptions}
        label="Primary Color"
        color="primary"
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Secondary Color"
        color="secondary"
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Success Color"
        color="success"
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Warning Color"
        color="warning"
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Error Color"
        color="error"
      />
    </div>
  ),
};

// Select All Examples
export const WithSelectAll: Story = {
  args: {
    options: sampleOptions,
    label: 'Select All Options',
    showSelectAll: true,
  },
};

export const CustomSelectAllText: Story = {
  args: {
    options: sampleOptions,
    label: 'Custom Select All',
    showSelectAll: true,
    selectAllText: 'Check All Items',
  },
};

export const WithoutIndeterminateSelectAll: Story = {
  args: {
    options: sampleOptions,
    label: 'No Indeterminate State',
    showSelectAll: true,
    indeterminateSelectAll: false,
  },
};

// State Examples
export const Disabled: Story = {
  args: {
    options: sampleOptions,
    label: 'Disabled Group',
    disabled: true,
  },
};

export const PartiallyDisabled: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4', disabled: true },
      { value: 'option5', label: 'Option 5' },
    ],
    label: 'Partially Disabled Options',
  },
};

export const WithIndeterminateOptions: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', indeterminate: true },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4', indeterminate: true },
      { value: 'option5', label: 'Option 5' },
    ],
    label: 'Options with Indeterminate State',
  },
};

// Interactive Examples
export const ControlledComponent: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['option1']);
    
    return (
      <div className="flex flex-col gap-4">
                 <CheckBoxGroup
           options={sampleOptions}
           label="Controlled CheckBoxGroup"
           value={selectedValues}
           onChange={setSelectedValues}
           showSelectAll={true}
         />
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-sm font-medium">Selected Values:</p>
          <p className="text-sm text-gray-600">
            {selectedValues.length > 0 ? selectedValues.join(', ') : 'None'}
          </p>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      interests: [] as string[],
      notifications: [] as string[],
    });

    const interestOptions = [
      { value: 'technology', label: 'Technology' },
      { value: 'sports', label: 'Sports' },
      { value: 'music', label: 'Music' },
      { value: 'travel', label: 'Travel' },
      { value: 'cooking', label: 'Cooking' },
    ];

    const notificationOptions = [
      { value: 'email', label: 'Email Notifications' },
      { value: 'sms', label: 'SMS Notifications' },
      { value: 'push', label: 'Push Notifications' },
    ];

    return (
      <div className="flex flex-col gap-6 max-w-md">
                 <CheckBoxGroup
           options={interestOptions}
           label="Interests"
           value={formData.interests}
           onChange={(value) => setFormData(prev => ({ ...prev, interests: value }))}
           showSelectAll={true}
           selectAllText="Select All Interests"
           helperText="Choose your areas of interest"
         />
         
         <CheckBoxGroup
           options={notificationOptions}
           label="Notification Preferences"
           value={formData.notifications}
           onChange={(value) => setFormData(prev => ({ ...prev, notifications: value }))}
           showSelectAll={true}
           selectAllText="Enable All Notifications"
           helperText="Select how you'd like to receive notifications"
         />

        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Form Data:</h3>
          <pre className="text-sm text-blue-800">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

// Layout Examples
export const LayoutComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="Vertical Layout (Default)"
        layout="vertical"
      />
      
      <CheckBoxGroup
        options={sampleOptions}
        label="Horizontal Layout"
        layout="horizontal"
      />
      
      <CheckBoxGroup
        options={sampleOptions}
        label="Grid Layout"
        layout="grid"
      />
    </div>
  ),
};

export const FullWidthExample: Story = {
  args: {
    options: sampleOptions,
    label: 'Full Width CheckBoxGroup',
    fullWidth: true,
    layout: 'horizontal',
  },
};

// Accessibility Examples
export const AccessibilityExample: Story = {
  args: {
    options: sampleOptions,
    label: 'Accessible CheckBoxGroup',
    required: true,
    helperText: 'This example demonstrates proper accessibility features',
    'aria-describedby': 'custom-description',
  },
};

// Gap Examples
export const GapVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="No Gap"
        gap="none"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Extra Small Gap"
        gap="xs"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Small Gap"
        gap="sm"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Medium Gap"
        gap="md"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Large Gap"
        gap="lg"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Extra Large Gap"
        gap="xl"
        showSelectAll={true}
      />
    </div>
  ),
};

export const CustomSelectAllGap: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="Small Gap Between Options, Large Gap After Select All"
        gap="sm"
        selectAllGap="lg"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Large Gap Between Options, Small Gap After Select All"
        gap="lg"
        selectAllGap="sm"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="No Gap Between Options, Medium Gap After Select All"
        gap="none"
        selectAllGap="md"
        showSelectAll={true}
      />
    </div>
  ),
};

export const HorizontalLayoutWithGaps: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="Horizontal Layout - Small Gap"
        layout="horizontal"
        gap="sm"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Horizontal Layout - Large Gap"
        layout="horizontal"
        gap="lg"
        showSelectAll={true}
      />
    </div>
  ),
};

export const GridLayoutWithGaps: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckBoxGroup
        options={sampleOptions}
        label="Grid Layout - Small Gap"
        layout="grid"
        gap="sm"
        showSelectAll={true}
      />
      <CheckBoxGroup
        options={sampleOptions}
        label="Grid Layout - Large Gap"
        layout="grid"
        gap="lg"
        showSelectAll={true}
      />
    </div>
  ),
};
