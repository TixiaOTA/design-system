import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: '1',
    title: 'Accordion Item 1',
    content: 'This is the content of accordion item 1.',
  },
  {
    id: '2',
    title: 'Accordion Item 2',
    content: 'This is the content of accordion item 2.',
  },
  {
    id: '3',
    title: 'Accordion Item 3 (Disabled)',
    content: 'This is the content of accordion item 3.',
    disabled: true,
  },
];

const longContentItems = [
  {
    id: '1',
    title: 'Getting Started',
    content: 'Learn the basics of our platform and how to get started with your first project. This guide will walk you through the essential features and best practices.',
  },
  {
    id: '2',
    title: 'Advanced Features',
    content: 'Explore advanced features and capabilities that will help you take your projects to the next level. Includes detailed documentation and examples.',
  },
  {
    id: '3',
    title: 'Troubleshooting',
    content: 'Common issues and their solutions. Learn how to debug problems and get help when you need it.',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
  },
};

export const WithShadow: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
    shadow: 'md',
  },
};

export const RoundedNone: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
    rounded: 'none',
  },
};

export const RoundedSmall: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
    rounded: 'sm',
  },
};

export const RoundedMedium: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
    rounded: 'md',
  },
};

export const RoundedLarge: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
    rounded: 'lg',
  },
};

export const RoundedExtraLarge: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
    rounded: 'xl',
  },
};

export const RoundedFull: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
    rounded: 'full',
  },
};

export const Primary: Story = {
  args: {
    items: sampleItems,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    items: sampleItems,
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    items: sampleItems,
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    items: sampleItems,
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    items: sampleItems,
    variant: 'info',
  },
};

export const Light: Story = {
  args: {
    items: sampleItems,
    variant: 'light',
  },
};

export const Dark: Story = {
  args: {
    items: sampleItems,
    variant: 'dark',
  },
};

export const Multiple: Story = {
  args: {
    items: sampleItems,
    multiple: true,
    variant: 'primary',
    shadow: 'sm',
  },
};

export const LeftIcon: Story = {
  args: {
    items: sampleItems,
    iconPosition: 'left',
    variant: 'primary',
    shadow: 'sm',
  },
};

export const CustomIcon: Story = {
  args: {
    items: sampleItems,
    icon: 'mdi:chevron-right',
    variant: 'primary',
    shadow: 'sm',
  },
};

export const LongContent: Story = {
  args: {
    items: longContentItems,
    variant: 'primary',
    className: 'max-w-2xl',
    shadow: 'md',
  },
}; 