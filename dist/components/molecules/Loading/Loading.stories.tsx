import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Molecules/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};


