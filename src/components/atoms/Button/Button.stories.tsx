import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { Icon } from '@/components/Icons/index';

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "link",
        "success",
        "warning",
        "danger",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
};

export const RoundedVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button rounded="none">none</Button>
      <Button rounded="sm">sm</Button>
      <Button rounded="md">md</Button>
      <Button rounded="lg">lg</Button>
      <Button rounded="full">full</Button>
    </div>
  ),
};

export const WithStartIcon: Story = {
  args: {
    children: "Search",
    leftIcon: <Icon icon="mdi:search" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "Next",
    rightIcon: <Icon icon="mdi:arrow-right" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Add Item",
    leftIcon: <Icon icon="mdi:plus" />,
    rightIcon: <Icon icon="mdi:arrow-right" />,
  },
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Search",
    children: <Icon icon="mdi:search" />,
    rounded: "full",
  },
};

export const IconOnlySmall: Story = {
  args: {
    "aria-label": "Add",
    children: <Icon icon="mdi:plus" />,
    size: "sm",
    rounded: "full",
  },
};

export const IconOnlyLarge: Story = {
  args: {
    "aria-label": "Next",
    children: <Icon icon="mdi:arrow-right" />,
    size: "lg",
    rounded: "full",
  },
};

export const SemanticVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="success">Success Action</Button>
      <Button variant="warning">Warning Action</Button>
      <Button variant="danger">Danger Action</Button>
    </div>
  ),
};

export const SemanticWithIcons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="success" leftIcon={<Icon icon="mdi:plus" />}>
        Add Success
      </Button>
      <Button variant="warning" leftIcon={<Icon icon="mdi:search" />}>
        Search Warning
      </Button>
      <Button variant="danger" leftIcon={<Icon icon="mdi:arrow-right" />}>
        Delete Danger
      </Button>
    </div>
  ),
};
