import type { Meta, StoryObj } from "@storybook/react";
import { ErrorWrapper } from "./ErrorWrapper";

const meta: Meta<typeof ErrorWrapper> = {
  title: "Molecules/ErrorWrapper",
  component: ErrorWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorWrapper>;

// Basic usage stories
export const NoError: Story = {
  args: {
    children: <div>This content will be shown when there is no error</div>,
  },
};

export const WithChildren: Story = {
  args: {
    children: <div>This is the content that will be shown when there is no error</div>,
  },
};

// Error-based stories
export const WithErrorCode: Story = {
  args: {
    error: {
      code: "404",
      message: "The page you are looking for does not exist.",
    },
  },
};

export const WithErrorAndReload: Story = {
  args: {
    error: {
      code: "500",
      message: "Something went wrong on our end. Please try again later.",
    },
    reload: () => alert("Reload clicked"),
  },
};

// Variant-based stories
export const WithVariant: Story = {
  args: {
    variant: "no-internet",
    reload: () => alert("Reload clicked"),
  },
};

export const WithVariantAndCustomMessage: Story = {
  args: {
    variant: "data-not-found",
    customMessage: "We couldn't find what you're looking for. Please try a different search term.",
    reload: () => alert("Reload clicked"),
  },
};

// Custom content stories
export const WithCustomContent: Story = {
  args: {
    customImage: "https://placehold.co/300x200",
    customMessage: "This is a completely custom error state",
    reload: () => alert("Reload clicked"),
  },
};

export const WithCustomImageOnly: Story = {
  args: {
    error: {
      code: "404",
    },
    customImage: "https://placehold.co/300x200",
    reload: () => alert("Reload clicked"),
  },
};

export const WithCustomMessageOnly: Story = {
  args: {
    error: {
      code: "500",
    },
    customMessage: "This is a custom error message that overrides the default one",
    reload: () => alert("Reload clicked"),
  },
};

// Complex combinations
export const WithVariantAndCustomImage: Story = {
  args: {
    variant: "under-development",
    customImage: "https://placehold.co/300x200",
    reload: () => alert("Reload clicked"),
  },
};

export const WithErrorAndCustomContent: Story = {
  args: {
    error: {
      code: "403",
    },
    customImage: "https://placehold.co/300x200",
    customMessage: "Custom access denied message",
    reload: () => alert("Reload clicked"),
  },
};