import type { Meta, StoryObj } from '@storybook/react';
import { WidgetCardGroup } from './WidgetCardGroup';

const meta = {
  title: 'Organisms/WidgetCardGroup',
  component: WidgetCardGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WidgetCardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockWidgets = [
  {
    id: 1,
    label: 'Total Dipesan',
    value: '11',
    icon: 'mdi:steam',
  },
  {
    id: 2,
    label: 'Total Pengguna',
    value: '58',
    icon: 'mdi:user',
  },
  {
    id: 3,
    label: 'Total Keuntungan',
    value: 'IDR 6.863.438',
    icon: 'mdi:cash',
  },
];

export const Default: Story = {
  args: {
    widgets: mockWidgets,
  },
};

export const SingleWidget: Story = {
  args: {
    widgets: [mockWidgets[0]],
  },
};

export const TwoWidgets: Story = {
  args: {
    widgets: [mockWidgets[0], mockWidgets[1]],
  },
}; 