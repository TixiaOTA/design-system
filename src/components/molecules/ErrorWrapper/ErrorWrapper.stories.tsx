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

// Variant-based stories
export const NoInternetVariant: Story = {
  args: {
    variant: "no-internet",
  },
};

export const DataNotFoundVariant: Story = {
  args: {
    variant: "data-not-found",
  },
};

export const UnderDevelopmentVariant: Story = {
  args: {
    variant: "under-development",
  },
};

export const InformationUnavailableVariant: Story = {
  args: {
    variant: "information-unavailable",
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: "success",
  },
};

export const CheckedVariant: Story = {
  args: {
    variant: "checked",
  },
};

// Original error object based stories
export const Default: Story = {
  args: {
    children: <div>Content that will be hidden when error occurs</div>,
    error: {
      code: "500",
      message: "Something went wrong. Please try again later.",
    },
  },
};

export const PageNotFound: Story = {
  args: {
    children: <div>Content that will be hidden when error occurs</div>,
    error: {
      code: "404",
      message: "The page you are looking for does not exist.",
    },
  },
};

export const RestrictedAccess: Story = {
  args: {
    children: <div>Content that will be hidden when error occurs</div>,
    error: {
      code: "403",
      message: "You do not have permission to access this resource.",
    },
  },
};

export const WithReload: Story = {
  args: {
    children: <div>Content that will be hidden when error occurs</div>,
    error: {
      code: "INFORMATION_UNAVAILABLE",
      message: "The requested information is currently unavailable.",
    },
    reload: () => "",
  },
};

export const NoError: Story = {
  args: {
    children: <div>This content will be shown when there is no error</div>,
  },
};