import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 'medium',
    shape: 'circle',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User Avatar',
    size: 'medium',
    shape: 'circle',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    shape: 'circle',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    shape: 'circle',
  },
};

export const Square: Story = {
  args: {
    size: 'medium',
    shape: 'square',
  },
};
