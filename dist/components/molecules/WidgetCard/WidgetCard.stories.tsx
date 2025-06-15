import type { Meta, StoryObj } from '@storybook/react';
import { WidgetCard } from './WidgetCard';

const meta = {
  title: 'Molecules/WidgetCard',
  component: WidgetCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WidgetCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Orders: Story = {
  args: {
    label: 'Total Dipesan',
    value: '11',
    icon: 'mdi:steam',
  },
};

export const Users: Story = {
  args: {
    label: 'Total Pengguna',
    value: '58',
    icon: 'mdi:user',
  },
};

export const Revenue: Story = {
  args: {
    label: 'Total Keuntungan',
    value: 'IDR 6.863.438',
    icon: 'mdi:cash',
  },
}; 