import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'filled', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    leftIcon: {
      control: 'text',
    },
    rightIcon: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    errorText: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    labelPlacement: {
      control: 'select',
      options: ['top', 'left'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithTopLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    labelPlacement: 'top',
  },
};

export const WithLeftLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    labelPlacement: 'left',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Password must be at least 8 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: true,
    errorText: 'Invalid email address',
    value: 'invalid-email',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    variant: 'success',
    value: 'valid@email.com',
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Search...',
    leftIcon: 'mdi:magnify',
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: 'Password',
    rightIcon: 'mdi:eye',
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: 'Search...',
    leftIcon: 'mdi:magnify',
    rightIcon: 'mdi:close',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Input
        label="Full Name"
        placeholder="Enter your full name"
        labelPlacement="left"
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        labelPlacement="left"
        error={true}
        errorText="Please enter a valid email address"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        labelPlacement="left"
        rightIcon="mdi:eye"
      />
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    placeholder: 'You cannot edit this',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-only input',
    value: 'You cannot edit this',
    readOnly: true,
  },
}; 