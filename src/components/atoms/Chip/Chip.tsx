import React from 'react';
import { cn } from '@/utils/cn';
import { Icon } from '@iconify/react';
import type { IconifyIcon } from '@iconify/react';

export type ChipVariant = 'solid' | 'outline' | 'subtle' | 'soft';
export type ChipColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'danger' | 'default';
export type ChipSize = 'sm' | 'md' | 'lg';
export type ChipRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

const variantStyles: Record<ChipVariant, Record<ChipColor, string>> = {
  solid: {
    primary: 'bg-primary-500 text-white',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-white',
    error: 'bg-error-500 text-white',
    info: 'bg-info-500 text-white',
    danger: 'bg-danger-500 text-white',
    default: 'bg-neutral-500 text-white'
  },
  outline: {
    primary: 'border border-primary-500 text-primary-500',
    success: 'border border-success-500 text-success-500',
    warning: 'border border-warning-500 text-warning-500',
    error: 'border border-error-500 text-error-500',
    info: 'border border-info-500 text-info-500',
    danger: 'border border-danger-500 text-danger-500',
    default: 'border border-neutral-500 text-neutral-500'
  },
  subtle: {
    primary: 'bg-primary-100 text-primary-700',
    success: 'bg-success-100 text-success-700',
    warning: 'bg-warning-100 text-warning-700',
    error: 'bg-error-100 text-error-700',
    info: 'bg-info-100 text-info-700',
    danger: 'bg-danger-100 text-danger-700',
    default: 'bg-neutral-100 text-neutral-700'
  },
  soft: {
    primary: 'bg-primary-50 text-primary-600',
    success: 'bg-success-50 text-success-600',
    warning: 'bg-warning-50 text-warning-600',
    error: 'bg-error-50 text-error-600',
    info: 'bg-info-50 text-info-600',
    danger: 'bg-danger-50 text-danger-600',
    default: 'bg-neutral-50 text-neutral-600'
  }
};

const sizeStyles: Record<ChipSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5'
};

const roundedStyles: Record<ChipRounded, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
};

export interface ChipProps {
  children: React.ReactNode;
  variant?: ChipVariant;
  color?: ChipColor;
  size?: ChipSize;
  rounded?: ChipRounded;
  onClose?: () => void;
  className?: string;
  icon?: string | IconifyIcon;
}

const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  rounded = 'md',
  onClose,
  className,
  icon
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 font-medium',
        variantStyles[variant][color],
        sizeStyles[size],
        roundedStyles[rounded],
        className
      )}
    >
      {icon && (
        <span className="inline-flex items-center">
          <Icon icon={icon} className="w-4 h-4" />
        </span>
      )}
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-1 rounded-full hover:bg-black/10 p-0.5"
          aria-label="Close"
        >
          <Icon icon="mdi:close" className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};

export { Chip }; 