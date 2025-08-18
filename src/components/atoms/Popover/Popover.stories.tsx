import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../Button/Button";

const meta: Meta<typeof Popover> = {
  title: "Atoms/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
      ],
    },
    variant: {
      control: "select",
      options: ["default", "elevated", "outline", "ghost"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "neutral",
        "light",
        "custom",
      ],
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
    showArrow: {
      control: "boolean",
    },
    isDismissable: {
      control: "boolean",
    },
    disableAnimation: {
      control: "boolean",
    },
    backdrop: {
      control: "select",
      options: ["transparent", "blur", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: (
      <div className="p-4">
        <h4 className="font-semibold mb-2">Default Popover</h4>
        <p className="text-sm text-gray-600">
          This is a default popover with standard styling.
        </p>
      </div>
    ),
    children: <Button>Click me</Button>,
    placement: "bottom",
    variant: "default",
    color: "light",
    shadow: "md",
    rounded: "lg",
    showArrow: true,
  },
};

export const Elevated: Story = {
  args: {
    content: (
      <div className="p-4">
        <h4 className="font-semibold mb-2">Elevated Popover</h4>
        <p className="text-sm text-gray-600">
          This popover has an elevated appearance with stronger shadows.
        </p>
      </div>
    ),
    children: <Button>Elevated</Button>,
    variant: "elevated",
    color: "light",
    shadow: "lg",
    rounded: "xl",
    showArrow: true,
  },
};

export const ColoredVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Primary</h4>
            <p className="text-sm">Primary colored popover</p>
          </div>
        }
        color="primary"
        variant="default"
        shadow="md"
        rounded="lg"
      >
        <Button>Primary</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Success</h4>
            <p className="text-sm">Success colored popover</p>
          </div>
        }
        color="success"
        variant="default"
        shadow="md"
        rounded="lg"
      >
        <Button>Success</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Warning</h4>
            <p className="text-sm">Warning colored popover</p>
          </div>
        }
        color="warning"
        variant="default"
        shadow="md"
        rounded="lg"
      >
        <Button>Warning</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Danger</h4>
            <p className="text-sm">Danger colored popover</p>
          </div>
        }
        color="danger"
        variant="default"
        shadow="md"
        rounded="lg"
      >
        <Button>Danger</Button>
      </Popover>
    </div>
  ),
};

export const ShadowVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">No Shadow</h4>
            <p className="text-sm">Popover without shadow</p>
          </div>
        }
        shadow="none"
        rounded="lg"
      >
        <Button>No Shadow</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Small Shadow</h4>
            <p className="text-sm">Popover with small shadow</p>
          </div>
        }
        shadow="sm"
        rounded="lg"
      >
        <Button>Small Shadow</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Large Shadow</h4>
            <p className="text-sm">Popover with large shadow</p>
          </div>
        }
        shadow="lg"
        rounded="lg"
      >
        <Button>Large Shadow</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Extra Large Shadow</h4>
            <p className="text-sm">Popover with extra large shadow</p>
          </div>
        }
        shadow="xl"
        rounded="lg"
      >
        <Button>XL Shadow</Button>
      </Popover>
    </div>
  ),
};

export const RoundedVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">No Rounded</h4>
            <p className="text-sm">Sharp corners</p>
          </div>
        }
        rounded="none"
        shadow="md"
      >
        <Button>No Rounded</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Small Rounded</h4>
            <p className="text-sm">Small rounded corners</p>
          </div>
        }
        rounded="sm"
        shadow="md"
      >
        <Button>Small Rounded</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Large Rounded</h4>
            <p className="text-sm">Large rounded corners</p>
          </div>
        }
        rounded="xl"
        shadow="md"
      >
        <Button>Large Rounded</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Full Rounded</h4>
            <p className="text-sm">Fully rounded corners</p>
          </div>
        }
        rounded="full"
        shadow="md"
      >
        <Button>Full Rounded</Button>
      </Popover>
    </div>
  ),
};

export const PlacementVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Top</h4>
            <p className="text-sm">Appears above the trigger</p>
          </div>
        }
        placement="top"
        shadow="md"
        rounded="lg"
      >
        <Button>Top</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Bottom</h4>
            <p className="text-sm">Appears below the trigger</p>
          </div>
        }
        placement="bottom"
        shadow="md"
        rounded="lg"
      >
        <Button>Bottom</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Left</h4>
            <p className="text-sm">Appears to the left</p>
          </div>
        }
        placement="left"
        shadow="md"
        rounded="lg"
      >
        <Button>Left</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Right</h4>
            <p className="text-sm">Appears to the right</p>
          </div>
        }
        placement="right"
        shadow="md"
        rounded="lg"
      >
        <Button>Right</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Top Start</h4>
            <p className="text-sm">Top with start alignment</p>
          </div>
        }
        placement="top-start"
        shadow="md"
        rounded="lg"
      >
        <Button>Top Start</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Bottom End</h4>
            <p className="text-sm">Bottom with end alignment</p>
          </div>
        }
        placement="bottom-end"
        shadow="md"
        rounded="lg"
      >
        <Button>Bottom End</Button>
      </Popover>
    </div>
  ),
};

export const CustomColor: Story = {
  args: {
    content: (
      <div className="p-4">
        <h4 className="font-semibold mb-2">Custom Color</h4>
        <p className="text-sm">This popover uses a custom color</p>
      </div>
    ),
    children: <Button>Custom Color</Button>,
    color: "custom",
    customColor: "#8B5CF6",
    variant: "default",
    shadow: "lg",
    rounded: "xl",
    showArrow: true,
  },
};

export const NoArrow: Story = {
  args: {
    content: (
      <div className="p-4">
        <h4 className="font-semibold mb-2">No Arrow</h4>
        <p className="text-sm">This popover doesn't show an arrow</p>
      </div>
    ),
    children: <Button>No Arrow</Button>,
    showArrow: false,
    shadow: "md",
    rounded: "lg",
  },
};

export const OutlineVariant: Story = {
  args: {
    content: (
      <div className="p-4">
        <h4 className="font-semibold mb-2">Outline Variant</h4>
        <p className="text-sm">This popover has an outline style</p>
      </div>
    ),
    children: <Button>Outline</Button>,
    variant: "outline",
    color: "primary",
    shadow: "sm",
    rounded: "lg",
    showArrow: true,
  },
};

export const GhostVariant: Story = {
  args: {
    content: (
      <div className="p-4">
        <h4 className="font-semibold mb-2">Ghost Variant</h4>
        <p className="text-sm">This popover has a ghost style</p>
      </div>
    ),
    children: <Button>Ghost</Button>,
    variant: "ghost",
    color: "neutral",
    shadow: "none",
    rounded: "lg",
    showArrow: true,
  },
};

export const BackdropVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Transparent Backdrop</h4>
            <p className="text-sm">No backdrop overlay</p>
          </div>
        }
        backdrop="transparent"
        shadow="md"
        rounded="lg"
      >
        <Button>Transparent</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Blur Backdrop</h4>
            <p className="text-sm">Backdrop with blur effect</p>
          </div>
        }
        backdrop="blur"
        shadow="md"
        rounded="lg"
      >
        <Button>Blur</Button>
      </Popover>

      <Popover
        content={
          <div className="p-4">
            <h4 className="font-semibold mb-2">Dark Backdrop</h4>
            <p className="text-sm">Dark backdrop overlay</p>
          </div>
        }
        backdrop="dark"
        shadow="md"
        rounded="lg"
      >
        <Button>Dark</Button>
      </Popover>
    </div>
  ),
};
