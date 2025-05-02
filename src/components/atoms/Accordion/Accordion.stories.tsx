import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: '1',
    title: 'What is Lorem Ipsum?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    id: '2',
    title: 'Why do we use it?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: '3',
    title: 'Where does it come from?',
    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const MultipleOpen: Story = {
  args: {
    items: sampleItems,
    multiple: true,
    defaultOpenIds: ['1', '2'],
  },
};

export const LeftIcon: Story = {
  args: {
    items: sampleItems,
    iconPosition: 'left',
  },
};

export const CustomIcon: Story = {
  args: {
    items: sampleItems,
    icon: 'mdi:chevron-right',
  },
};

export const CustomStyling: Story = {
  args: {
    items: sampleItems,
    className: 'max-w-md mx-auto',
    itemClassName: 'bg-gray-50 dark:bg-gray-900',
    headerClassName: 'font-semibold text-lg',
    contentClassName: 'text-gray-600 dark:text-gray-300',
  },
}; 