import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { PrimitiveDatePicker } from "./PrimitiveDatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Atoms/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "error", "success", "ghost", "underline"],
      description: "The visual style variant of the date picker",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the date picker",
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
      description: "The border radius of the date picker",
    },
    labelPlacement: {
      control: "select",
      options: ["top", "left"],
      description: "The placement of the label",
    },
    disabled: {
      control: "boolean",
      description: "Whether the date picker is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the date picker is required",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the date picker should take full width",
    },
    monthsToShow: {
      control: "select",
      options: [1, 2],
      description: "Number of months to show in the calendar",
    },
    mode: {
      control: "select",
      options: ["single", "range"],
      description: "The selection mode of the date picker",
    },
    minDate: {
      control: "date",
      description: "The minimum selectable date",
    },
    maxDate: {
      control: "date",
      description: "The maximum selectable date",
    },
    leftIcon: {
      control: "text",
      description: "Icon to show on the left side of the input",
    },
    rightIcon: {
      control: "text",
      description: "Icon to show on the right side of the input",
    },
    closeOnSelect: {
      control: "boolean",
      description: "Whether to close the calendar on date selection",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Single: Story = {
  args: {
    label: "Single Date",
    placeholder: "Select date",
    mode: "single",
    leftIcon: "mdi:calendar",
    rightIcon: "mdi:chevron-down",
  },
};

export const Range: Story = {
  args: {
    label: "Date Range",
    placeholder: "Select date range",
    mode: "range",
    leftIcon: "mdi:calendar",
    rightIcon: "mdi:chevron-down",
  },
};

// Variant Examples
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker
        label="Default"
        variant="default"
        placeholder="Select date"
        mode="single"
      />
      <DatePicker
        label="Error"
        variant="error"
        errorText="Invalid date"
        placeholder="Select date"
        mode="single"
      />
      <DatePicker
        label="Success"
        variant="success"
        placeholder="Select date"
        mode="single"
      />
      <DatePicker
        label="Ghost"
        variant="ghost"
        placeholder="Select date"
        mode="single"
      />
      <DatePicker
        label="Underline"
        variant="underline"
        placeholder="Select date"
        mode="single"
      />
    </div>
  ),
};

// Size Examples
export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker label="Small" size="sm" placeholder="Select date" />
      <DatePicker label="Medium" size="md" placeholder="Select date" />
      <DatePicker label="Large" size="lg" placeholder="Select date" />
    </div>
  ),
};

// Rounded Examples
export const RoundedVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker label="No Rounded" rounded="none" placeholder="Select date" />
      <DatePicker label="Small Rounded" rounded="sm" placeholder="Select date" />
      <DatePicker label="Medium Rounded" rounded="md" placeholder="Select date" />
      <DatePicker label="Large Rounded" rounded="lg" placeholder="Select date" />
      <DatePicker label="Full Rounded" rounded="full" placeholder="Select date" />
    </div>
  ),
};

// Layout Examples
export const LayoutExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker label="Top Label" labelPlacement="top" placeholder="Select date" />
      <DatePicker label="Left Label" labelPlacement="left" placeholder="Select date" />
      <DatePicker label="Full Width" fullWidth placeholder="Select date" />
    </div>
  ),
};

// Calendar Examples
export const CalendarExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker
        label="Single Month"
        monthsToShow={1}
        placeholder="Select date"
      />
      <DatePicker
        label="Two Months"
        monthsToShow={2}
        placeholder="Select date"
      />
      <DatePicker
        label="With Min/Max Dates"
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2024, 11, 31)}
        placeholder="Select date"
      />
    </div>
  ),
};

// State Examples
export const StateExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker
        label="Required"
        required
        placeholder="Select date"
      />
      <DatePicker
        label="Disabled"
        disabled
        placeholder="Select date"
      />
      <DatePicker
        label="With Error"
        error
        errorText="Please select a valid date"
        placeholder="Select date"
      />
      <DatePicker
        label="With Helper Text"
        helperText="Select a date within the next 30 days"
        placeholder="Select date"
      />
    </div>
  ),
};

// Icon Examples
export const IconExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker
        label="Left Icon Only"
        leftIcon="mdi:calendar"
        placeholder="Select date"
      />
      <DatePicker
        label="Right Icon Only"
        rightIcon="mdi:chevron-down"
        placeholder="Select date"
      />
      <DatePicker
        label="Both Icons"
        leftIcon="mdi:calendar"
        rightIcon="mdi:chevron-down"
        placeholder="Select date"
      />
    </div>
  ),
};

// Range Examples
export const RangeExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker
        label="Basic Range"
        mode="range"
        placeholder="Select date range"
      />
      <DatePicker
        label="Range with Two Months"
        mode="range"
        monthsToShow={2}
        placeholder="Select date range"
      />
      <DatePicker
        label="Range with Min/Max"
        mode="range"
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2024, 11, 31)}
        placeholder="Select date range"
      />
      <DatePicker
        label="Range with Error"
        mode="range"
        error
        errorText="Please select a valid date range"
        placeholder="Select date range"
      />
    </div>
  ),
};

// Primitive Examples
export const PrimitiveExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <PrimitiveDatePicker
        label="Basic Primitive"
        placeholder="Select date"
      />
      <PrimitiveDatePicker
        label="Primitive with Icons"
        leftIcon="mdi:calendar"
        rightIcon="mdi:chevron-down"
        placeholder="Select date"
      />
      <PrimitiveDatePicker
        label="Primitive Two Months"
        monthsToShow={2}
        placeholder="Select date"
      />
    </div>
  ),
};
