import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md active:shadow-none',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-sm hover:shadow-md active:shadow-none',
        outline: 'border border-neutral-300 text-primary-500 hover:bg-primary-50 active:bg-primary-100 hover:border-primary-500',
        'outline-primary': 'border border-primary-600 text-primary-600 hover:bg-primary-50',
        'outline-secondary': 'border border-secondary-600 text-secondary-600 hover:bg-secondary-50',
        'outline-success': 'border border-success-600 text-success-600 hover:bg-success-50',
        'outline-warning': 'border border-warning-600 text-warning-600 hover:bg-warning-50',
        'outline-danger': 'border border-danger-600 text-danger-600 hover:bg-danger-50',
        ghost: 'text-primary-500 hover:bg-primary-50 active:bg-primary-100',
        link: 'text-primary-500 hover:underline p-0',
        success: 'bg-success-500 text-white hover:bg-success-600 active:bg-success-700 shadow-sm hover:shadow-md active:shadow-none',
        warning: 'bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 shadow-sm hover:shadow-md active:shadow-none',
        danger: 'bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 shadow-sm hover:shadow-md active:shadow-none',
      },
      size: {
        xs: 'text-xs px-2 py-1',
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-2.5',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'none',
      fullWidth: false,
    },
  }
);

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success' 
  | 'outline-warning' 
  | 'outline-danger' 
  | 'ghost' 
  | 'link' 
  | 'success' 
  | 'warning' 
  | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    rounded = 'md', 
    fullWidth = false, 
    isLoading = false, 
    leftIcon, 
    rightIcon, 
    children, 
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, fullWidth, className }))}
        ref={ref}
        disabled={props.disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" />
        )}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

export { buttonVariants };
