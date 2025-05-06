import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const toggleVariants = cva(
  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-neutral-200 data-[state=checked]:bg-primary-500 focus-visible:ring-primary-500',
        success: 'bg-neutral-200 data-[state=checked]:bg-success-500 focus-visible:ring-success-500',
        warning: 'bg-neutral-200 data-[state=checked]:bg-warning-500 focus-visible:ring-warning-500',
        danger: 'bg-neutral-200 data-[state=checked]:bg-danger-500 focus-visible:ring-danger-500',
      },
      size: {
        sm: 'h-4 w-7',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const thumbVariants = cva(
  'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform',
  {
    variants: {
      size: {
        sm: 'h-3 w-3 data-[state=checked]:translate-x-3',
        md: 'h-5 w-5 data-[state=checked]:translate-x-5',
        lg: 'h-6 w-6 data-[state=checked]:translate-x-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type ToggleVariant = 'primary' | 'success' | 'warning' | 'danger';
export type ToggleSize = 'sm' | 'md' | 'lg';

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Whether the toggle is checked */
  checked?: boolean;
  /** Callback when toggle state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Visual style variant of the toggle */
  variant?: ToggleVariant;
  /** Size of the toggle */
  size?: ToggleSize;
  /** Label for the toggle */
  label?: string;
  /** Whether the toggle is required */
  required?: boolean;
  /** Helper text to display below the toggle */
  helperText?: string;
  /** Error message to display below the toggle */
  errorText?: string;
  /** Whether the toggle is in an error state */
  error?: boolean;
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({
    checked = false,
    onCheckedChange,
    variant = 'primary',
    size = 'md',
    label,
    required = false,
    helperText,
    errorText,
    error = false,
    className,
    ...props
  }, ref) => {
    const id = React.useId();
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;

    return (
      <div className="inline-flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            data-state={checked ? 'checked' : 'unchecked'}
            onClick={() => onCheckedChange?.(!checked)}
            ref={ref}
            className={cn(toggleVariants({ variant: error ? 'danger' : variant, size }), className)}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            aria-invalid={error}
            aria-required={required}
            {...props}
          >
            <span
              data-state={checked ? 'checked' : 'unchecked'}
              className={cn(
                thumbVariants({ size }),
                checked ? 'translate-x-5' : 'translate-x-1'
              )}
            />
          </button>
          {label && (
            <label
              htmlFor={id}
              className="text-sm text-neutral-900"
            >
              {label}
              {required && <span className="text-danger-500 ml-0.5">*</span>}
            </label>
          )}
        </div>
        {error && errorText && (
          <p className="text-xs text-danger-500" id={errorId}>
            {errorText}
          </p>
        )}
        {!error && helperText && (
          <p className="text-xs text-neutral-500" id={helperId}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle, toggleVariants };
