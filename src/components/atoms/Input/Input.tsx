import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const inputVariants = cva(
  'w-full rounded-md border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50',
        error: 'border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50',
        success: 'border-success-500 hover:border-success-600 focus:border-success-600',
      },
      inputSize: {
        sm: 'h-8 px-2 py-1 text-sm',
        md: 'h-10 px-3 py-2 text-base',
        lg: 'h-12 px-4 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

export type InputVariant = 'default' | 'error' | 'success';
export type InputSize = 'sm' | 'md' | 'lg';
export type LabelPlacement = 'top' | 'left';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input variant that determines the visual style */
  variant?: InputVariant;
  /** Size of the input */
  size?: InputSize;
  /** Icon to display on the left side of the input */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side of the input */
  rightIcon?: React.ReactNode;
  /** Whether the input is in an error state */
  error?: boolean;
  /** Error message to display below the input */
  errorText?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Label for the input */
  label?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Position of the label relative to the input */
  labelPlacement?: LabelPlacement;
  /** Additional className for the wrapper div */
  wrapperClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    wrapperClassName,
    variant = 'default', 
    size = 'md', 
    leftIcon, 
    rightIcon, 
    error = false,
    errorText, 
    helperText, 
    label, 
    required = false,
    labelPlacement = 'top',
    id: providedId,
    ...props 
  }, ref) => {
    const id = providedId || React.useId();
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;

    const inputField = (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
            {leftIcon}
          </div>
        )}
        <input
          id={id}
          type="text"
          ref={ref}
          className={cn(
            inputVariants({ variant: error ? 'error' : variant, inputSize: size }),
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            className
          )}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          aria-invalid={error}
          aria-required={required}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
            {rightIcon}
          </div>
        )}
      </div>
    );

    const helperOrError = (
      <>
        {error && errorText && (
          <p className="mt-1 text-xs text-danger-500" id={errorId}>
            {errorText}
          </p>
        )}
        {!error && helperText && (
          <p className="mt-1 text-xs text-neutral-500" id={helperId}>
            {helperText}
          </p>
        )}
      </>
    );

    if (labelPlacement === 'left') {
      return (
        <div className={cn("w-full", wrapperClassName)}>
          <div className="flex items-start gap-4">
            {label && (
              <label
                htmlFor={id}
                className="block text-sm text-neutral-900 pt-2"
              >
                {label}
                {required && <span className="text-danger-500 ml-0.5">*</span>}
              </label>
            )}
            <div className="flex-1">
              {inputField}
              {helperOrError}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={cn("w-full", wrapperClassName)}>
        {label && (
          <label
            htmlFor={id}
            className="mb-1.5 block text-sm text-neutral-900"
          >
            {label}
            {required && <span className="text-danger-500 ml-0.5">*</span>}
          </label>
        )}
        {inputField}
        {helperOrError}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input }; 