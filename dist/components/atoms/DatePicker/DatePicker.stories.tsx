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
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    labelPlacement: {
      control: "select",
      options: ["top", "left"],
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    monthsToShow: {
      control: "select",
      options: [1, 2],
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Double: Story = {
  args: {
    label: "Roundtrip",
    placeholder: "Departure date",
    mode: "double",
    leftIcon: "mdi:calendar",
    rightIcon: "mdi:chevron-down",
  },
};

export const WithIcons: Story = {
  args: {
    label: "With Icons",
    placeholder: "Select date",
    leftIcon: "mdi:calendar",
    rightIcon: "mdi:chevron-down",
    mode: "single",
  },
};

export const GhostVariant: Story = {
  args: {
    label: "Ghost Variant",
    variant: "ghost",
    placeholder: "Select date",
    mode: "single",
  },
};

export const UnderlineVariant: Story = {
  args: {
    label: "Underline Variant",
    variant: "underline",
    placeholder: "Select date",
    mode: "single",
  },
};

export const TwoMonths: Story = {
  args: {
    label: "Two Months",
    placeholder: "Select date",
    monthsToShow: 2,
    mode: "single",
    leftIcon: "mdi:calendar",
    rightIcon: "mdi:chevron-down",
  },
};

export const DoubleTwoMonths: Story = {
  args: {
    label: "Roundtrip",
    placeholder: "Departure date",
    monthsToShow: 2,
    mode: "double",
    leftIcon: "mdi:calendar",
    rightIcon: "mdi:chevron-down",
  },
};

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

export const PrimitiveSingle: Story = {
  render: () => (
    <PrimitiveDatePicker label="Primitive Single" placeholder="Select date" />
  ),
};

export const PrimitiveWithIcons: Story = {
  render: () => (
    <PrimitiveDatePicker
      label="Primitive With Icons"
      leftIcon="mdi:calendar"
      rightIcon="mdi:chevron-down"
      placeholder="Select date"
    />
  ),
};

export const PrimitiveTwoMonths: Story = {
  render: () => (
    <PrimitiveDatePicker
      label="Primitive Two Months"
      monthsToShow={2}
      placeholder="Select date"
    />
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Date",
    placeholder: "Select date",
  },
};

export const Required: Story = {
  args: {
    label: "Date",
    required: true,
    placeholder: "Select date",
  },
};

export const Error: Story = {
  args: {
    label: "Date",
    variant: "error",
    errorText: "Please select a valid date",
    placeholder: "Select date",
  },
};

export const Success: Story = {
  args: {
    label: "Date",
    variant: "success",
    helperText: "Date selected successfully",
    placeholder: "Select date",
  },
};

export const Disabled: Story = {
  args: {
    label: "Date",
    disabled: true,
    placeholder: "Select date",
  },
};

export const WithMinMaxDates: Story = {
  args: {
    label: "Date",
    minDate: new Date(2024, 0, 1), // Jan 1, 2024
    maxDate: new Date(2024, 11, 31), // Dec 31, 2024
    placeholder: "Select date",
  },
};

export const Small: Story = {
  args: {
    label: "Date",
    size: "sm",
    placeholder: "Select date",
  },
};

export const Large: Story = {
  args: {
    label: "Date",
    size: "lg",
    placeholder: "Select date",
  },
};

export const LeftLabel: Story = {
  args: {
    label: "Date",
    labelPlacement: "left",
    placeholder: "Select date",
  },
};

export const WithRangeSelection: Story = {
  args: {
    label: "Date Range",
    placeholder: "Select date range",
    isRangeSelection: true,
  },
};

export const WithValidation: Story = {
  args: {
    label: "Date",
    placeholder: "Select date",
    required: true,
    errorText: "This field is required",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Date",
    placeholder: "Select date",
    helperText: "Select a date within the next 30 days",
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker label="Small" size="sm" placeholder="Select date" />
      <DatePicker label="Medium" size="md" placeholder="Select date" />
      <DatePicker label="Large" size="lg" placeholder="Select date" />
    </div>
  ),
};

export const RoundedVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker label="No Rounded" rounded="none" placeholder="Select date" />
      <DatePicker
        label="Small Rounded"
        rounded="sm"
        placeholder="Select date"
      />
      <DatePicker
        label="Medium Rounded"
        rounded="md"
        placeholder="Select date"
      />
      <DatePicker
        label="Large Rounded"
        rounded="lg"
        placeholder="Select date"
      />
      <DatePicker
        label="Full Rounded"
        rounded="full"
        placeholder="Select date"
      />
    </div>
  ),
};

export const VariantExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker label="Default" variant="default" placeholder="Select date" />
      <DatePicker
        label="Error"
        variant="error"
        errorText="Invalid date"
        placeholder="Select date"
      />
      <DatePicker label="Success" variant="success" placeholder="Select date" />
    </div>
  ),
};

export const LayoutExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker
        label="Top Label"
        labelPlacement="top"
        placeholder="Select date"
      />
      <DatePicker
        label="Left Label"
        labelPlacement="left"
        placeholder="Select date"
      />
      <DatePicker label="Full Width" fullWidth placeholder="Select date" />
    </div>
  ),
};
