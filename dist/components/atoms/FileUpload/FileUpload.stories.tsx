import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Atoms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    accept: { control: 'object' },
    maxSize: { control: 'number' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    placeholder: 'Drag and drop files here or click to browse',
  },
};

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    placeholder: 'Upload multiple files',
  },
};

export const ImageOnly: Story = {
  args: {
    accept: ['image/*'],
    placeholder: 'Upload images only',
  },
};

export const PDFOnly: Story = {
  args: {
    accept: ['.pdf'],
    placeholder: 'Upload PDF files only',
  },
};

export const CustomMaxSize: Story = {
  args: {
    maxSize: 2 * 1024 * 1024, // 2MB
    placeholder: 'Max file size: 2MB',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Upload disabled',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Choose your files',
  },
}; 