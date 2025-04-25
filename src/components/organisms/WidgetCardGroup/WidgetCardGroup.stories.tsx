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

const mockWidgets = [
  {
    id: 1,
    label: 'Total Dipesan',
    value: '11',
    icon: <MockIcon />,
  },
  {
    id: 2,
    label: 'Total Pengguna',
    value: '58',
    icon: <MockIcon />,
  },
  {
    id: 3,
    label: 'Total Keuntungan',
    value: 'IDR 6.863.438',
    icon: <MockIcon />,
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