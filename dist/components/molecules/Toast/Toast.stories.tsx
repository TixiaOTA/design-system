import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProvider, useToast } from ".";
import { Button } from "../../atoms/Button";

const meta: Meta<typeof Toast> = {
  title: "Molecules/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Static Examples
export const Default: Story = {
  args: {
    title: "Toast Title",
    description: "This is a default toast message.",
  },
};

export const Interactive: Story = {
  render: () => <ToastDemo />,
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Your changes have been saved successfully.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "An error occurred while saving your changes.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Your session will expire in 5 minutes.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "A new version is available.",
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: "info",
    description: "This is a toast message without a title.",
  },
};

export const WithoutClose: Story = {
  args: {
    title: "No Close Button",
    description: "This toast does not have a close button.",
    showClose: false,
  },
};

export const LongContent: Story = {
  args: {
    title: "Long Content",
    description:
      "This is a toast message with a very long description that should wrap to multiple lines. It demonstrates how the toast handles longer content while maintaining its layout and readability.",
  },
};

// Interactive Demo
const ToastDemo = () => {
  const { showToast } = useToast();

  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ] as const;

  const variants = ["default", "success", "error", "warning", "info"] as const;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-2">
        {positions.map((position) => (
          <Button
            key={position}
          onClick={() =>
            showToast({
              title: "Toast Title",
              description: "This is a toast message.",
              position,
              variant: "default",
            })
          }
        >
          Show {position} toast
        </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {variants.map((variant) => (
          <Button
          key={variant}
          onClick={() =>
            showToast({
              title: `${
                variant.charAt(0).toUpperCase() + variant.slice(1)
              } Toast`,
              description: `This is a ${variant} toast message.`,
              variant,
              position: "top-right",
            })
          }
        >
            Show {variant} toast
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
      <Button
        onClick={() => {
          // Show multiple toasts in sequence
          ["success", "error", "warning", "info"].forEach((variant, index) => {
            setTimeout(() => {
              showToast({
                title: `${
                  variant.charAt(0).toUpperCase() + variant.slice(1)
                } Toast`,
                description: `This is toast number ${index + 1}`,
                variant: variant as any,
                position: "top-right",
                duration: 3000,
              });
            }, index * 1000);
          });
        }}
      >
        Show multiple toasts
      </Button>

      <Button
        onClick={() =>
          showToast({
            title: "Persistent Toast",
            description: "This toast will not auto-close.",
            variant: "info",
            position: "top-right",
            duration: 0,
          })
        }
      >
          Show persistent toast
        </Button>
      </div>
    </div>
  );
};
