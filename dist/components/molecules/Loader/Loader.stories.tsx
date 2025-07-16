import type { Meta, StoryObj } from "@storybook/react";
import { Loader, LoaderVariant } from "./Loader";
import { Text } from "../../atoms/Text";

const meta: Meta<typeof Loader> = {
  title: "Molecules/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Loader>;

const variants: LoaderVariant[] = ["flight-light", "flight-dark"];

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {variants.map((variant) => (
        <div key={variant} className="border rounded-lg p-4 flex flex-col items-center">
          <Loader variant={variant} />
          <div className="mt-2 text-xs text-gray-500">variant: {variant}</div>
        </div>
      ))}
    </div>
  ),
};

export const WithCustomImage: Story = {
  args: {
    variant: "flight-light",
    customImage: "https://placehold.co/200x100.gif",
  },
};

export const WithCustomImageAndSize: Story = {
  args: {
    variant: "flight-dark",
    customImage: "https://placehold.co/120x80.gif",
    width: 120,
    height: 80,
  },
};

export const WithCustomMessageString: Story = {
  args: {
    variant: "flight-dark",
    customMessage: "Loading your data, please wait...",
  },
};

export const WithCustomMessageReactNode: Story = {
  args: {
    variant: "flight-light",
    // width: "1050px",
    // height: "1050px",
    customMessage: (
      <div className="space-y-2">
        <Text variant="body1" className="font-semibold text-blue-600">
          Please wait while we load your content
        </Text>
        <Text variant="body2" className="text-gray-600">
          This may take a few seconds
        </Text>
      </div>
    ),
  },
};

export const WithCustomImageAndMessage: Story = {
  args: {
    variant: "flight-dark",
    customImage: "https://placehold.co/200x100.gif",
    customMessage: "Custom loader with custom image and message",
  },
};
