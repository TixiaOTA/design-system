import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleItems = [
  {
    id: 'home',
    label: 'Home',
    content: 'Home content goes here',
    icon: 'mdi:home',
  },
  {
    id: 'profile',
    label: 'Profile',
    content: 'Profile content goes here',
    icon: 'mdi:account',
  },
  {
    id: 'settings',
    label: 'Settings',
    content: 'Settings content goes here',
    icon: 'mdi:cog',
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const Pills: Story = {
  args: {
    items: sampleItems,
    variant: 'pills',
  },
};

export const Underline: Story = {
  args: {
    items: sampleItems,
    variant: 'underline',
  },
};

export const Small: Story = {
  args: {
    items: sampleItems,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    items: sampleItems,
    size: 'lg',
  },
};

export const CustomStyling: Story = {
  args: {
    items: sampleItems,
    className: 'max-w-md mx-auto',
    tabListClassName: 'bg-gray-50 dark:bg-gray-900 rounded-lg p-2',
    tabClassName: 'rounded-md',
    contentClassName: 'p-4 bg-white dark:bg-gray-800 rounded-lg shadow',
  },
}; 