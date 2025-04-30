import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  variantSize?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  disabled = false,
  indeterminate = false,
  variantSize = 'sm',
  color = 'primary',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const colorClasses = {
    primary: 'checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600 focus:ring-primary-500',
    secondary: 'checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600 focus:ring-secondary-500',
    success: 'checked:bg-success-600 checked:border-success-600 hover:border-success-600 focus:ring-success-500',
    warning: 'checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600 focus:ring-warning-500',
    error: 'checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600 focus:ring-danger-500',
  };

  const checkboxClasses = twMerge(
    'rounded border-2 transition-colors duration-200',
    sizeClasses[variantSize],
    colorClasses[color],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const labelClasses = twMerge(
    'ml-2 text-sm',
    disabled && 'opacity-50',
    error && 'text-danger-600'
  );

  return (
    <div className="items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          className={checkboxClasses}
          disabled={disabled}
          ref={(input) => {
            if (input) {
              input.indeterminate = indeterminate;
            }
          }}
          {...props}
        />
        {label && (
          <label className={labelClasses}>
            {label}
          </label>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-danger-600">{error}</p>
      )}
    </div>
  );
};
