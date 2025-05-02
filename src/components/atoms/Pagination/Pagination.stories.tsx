import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Atoms/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    siblingCount: { control: 'number' },
    onPageChange: { action: 'pageChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    siblingCount: 1,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    siblingCount: 1,
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 1,
    totalPages: 20,
    siblingCount: 1,
  },
};

export const CustomSiblingCount: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    siblingCount: 2,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
    siblingCount: 1,
  },
}; 