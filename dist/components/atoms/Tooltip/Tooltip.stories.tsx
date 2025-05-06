import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    delay: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    position: 'top',
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    position: 'bottom',
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    position: 'left',
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    position: 'right',
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Tooltip with 500ms delay',
    delay: 500,
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
};

export const WithCustomContent: Story = {
  args: {
    content: (
      <div className="text-sm">
        <div className="font-bold">Custom Content</div>
        <div>This tooltip has custom HTML content</div>
      </div>
    ),
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
}; 