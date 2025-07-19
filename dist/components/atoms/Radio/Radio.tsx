import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface RadioProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
  error?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  variantSize?: 'sm' | 'md' | 'lg';
}

export const Radio: React.FC<RadioProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  name,
  value,
  error,
  color = 'primary',
  variantSize = 'sm',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const colorClasses = {
    primary: 'checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600',
    secondary: 'checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600',
    success: 'checked:bg-success-600 checked:border-success-600 hover:border-success-600',
    warning: 'checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600',
    error: 'checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600',
  };



  return (
    <label
      className={twMerge(
        'inline-flex items-center cursor-pointer',
        disabled && 'opacity-60 cursor-not-allowed'
      )}
    >
      <input
        type="radio"
        className={twMerge(
          'border-2 rounded-full appearance-none',
          'focus:outline-none focus:ring-2 focus:ring-primary/25',
          'transition-colors duration-200',
          'checked:bg-no-repeat checked:bg-center',
          'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]',
          sizeClasses[variantSize],
          checked
            ? colorClasses[color]
            : error ? 'border-danger-600' : 'border-gray-300',
          error && !checked && 'hover:border-danger-700',
          disabled && 'cursor-not-allowed'
        )}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
      />
      {label && (
        <label className={twMerge(
          'ml-2 text-sm font-medium',
          disabled && 'opacity-50 cursor-not-allowed',
          error && 'text-danger-600'
        )}>
          {label}
        </label>
      )}
    </label>
  );
}; 