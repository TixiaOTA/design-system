import React from 'react';
import clsx from 'clsx';

export interface RadioProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  name,
  value,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label
      className={clsx(
        'inline-flex items-center cursor-pointer',
        disabled && 'opacity-60 cursor-not-allowed'
      )}
    >
      <input
        type="radio"
        className={clsx(
          'w-5 h-5 border-2 rounded-full appearance-none',
          'focus:outline-none focus:ring-2 focus:ring-primary/25',
          checked
            ? 'border-primary bg-primary'
            : 'border-gray-300 hover:border-primary',
          disabled && 'cursor-not-allowed'
        )}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
      />
      {label && (
        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
}; 