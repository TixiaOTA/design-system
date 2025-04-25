import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Icon } from '../../Icons';

const selectVariants = cva(
  'w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-neutral-200 hover:border-neutral-300',
        error: 'border-danger-500 hover:border-danger-600 focus-visible:ring-danger-500',
        success: 'border-success-500 hover:border-success-600 focus-visible:ring-success-500',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  /** Options for the select */
  options: SelectOption[];
  /** Label for the select */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text to display below select */
  helperText?: string;
  /** Whether the select is required */
  required?: boolean;
  /** Placeholder text */
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant,
      size,
      options,
      label,
      error,
      helperText,
      required,
      placeholder,
      ...props
    },
    ref
  ) => {
    const id = React.useId();

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-1.5 block text-sm font-medium text-neutral-900"
          >
            {label}
            {required && <span className="text-danger-500">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            id={id}
            ref={ref}
            className={cn(
              selectVariants({ variant: error ? 'error' : variant, size }),
              'appearance-none pr-10',
              className
            )}
            aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
            <Icon icon="mdi:chevron-down" />
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-danger-500" id={`${id}-error`}>
            {error}
          </p>
        )}
        {!error && helperText && (
          <p className="mt-1 text-sm text-neutral-500" id={`${id}-helper`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select'; 