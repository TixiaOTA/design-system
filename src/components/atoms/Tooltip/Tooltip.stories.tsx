import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'neutral', 'light'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button rightIcon="mdi:information">hover me</Button>,
    position: 'top',
    color: 'primary',
    size: 'md',
    delay: 0,
  },
};

export const WithCustomContent: Story = {
  args: {
    content: (
      <div className="flex items-center gap-2">
        <span className="text-lg">ℹ️</span>
        <span>Custom content with icon</span>
      </div>
    ),
    children: <Button>Custom Content</Button>,
    position: 'top',
    color: 'info',
  },
};

export const ClickTrigger: Story = {
  args: {
    content: 'Click to show/hide tooltip',
    children: <Button>Click me</Button>,
    trigger: 'click',
    position: 'bottom',
    color: 'success',
  },
};

export const AllPositions: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="flex items-center gap-4">
        <Tooltip content="Top tooltip" position="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
      </div>
      <div className="flex items-center gap-4">
        <Tooltip content="Left tooltip" position="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip content="Primary tooltip" color="primary">
        <Button>Primary</Button>
      </Tooltip>
      <Tooltip content="Secondary tooltip" color="secondary">
        <Button>Secondary</Button>
      </Tooltip>
      <Tooltip content="Success tooltip" color="success">
        <Button>Success</Button>
      </Tooltip>
      <Tooltip content="Warning tooltip" color="warning">
        <Button>Warning</Button>
      </Tooltip>
      <Tooltip content="Danger tooltip" color="danger">
        <Button>Danger</Button>
      </Tooltip>
      <Tooltip content="Info tooltip" color="info">
        <Button>Info</Button>
      </Tooltip>
      <Tooltip content="Neutral tooltip" color="neutral">
        <Button>Neutral</Button>
      </Tooltip>
      <Tooltip content="Light tooltip" color="light">
        <Button>Light</Button>
      </Tooltip>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip content="Small tooltip" size="sm">
        <Button>Small</Button>
      </Tooltip>
      <Tooltip content="Medium tooltip" size="md">
        <Button>Medium</Button>
      </Tooltip>
      <Tooltip content="Large tooltip" size="lg">
        <Button>Large</Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  args: {
    content: 'This tooltip appears after 500ms',
    children: <Button>Delayed Tooltip</Button>,
    delay: 500,
    color: 'warning',
  },
}; 