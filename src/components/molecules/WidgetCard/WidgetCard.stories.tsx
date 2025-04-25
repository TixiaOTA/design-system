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

// Mock icon component for stories
const MockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="12" fill="currentColor" fillOpacity="0.1" />
    <path
      d="M12 6v12M6 12h12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const Orders: Story = {
  args: {
    label: 'Total Dipesan',
    value: '11',
    icon: <MockIcon />,
  },
};

export const Users: Story = {
  args: {
    label: 'Total Pengguna',
    value: '58',
    icon: <MockIcon />,
  },
};

export const Revenue: Story = {
  args: {
    label: 'Total Keuntungan',
    value: 'IDR 6.863.438',
    icon: <MockIcon />,
  },
}; 