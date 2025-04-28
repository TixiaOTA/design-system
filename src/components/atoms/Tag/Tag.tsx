import React from 'react';
import { cn } from '@/utils/cn';
import { Icon } from '@iconify/react';
import type { IconifyIcon } from '@iconify/react';

export type TagVariant = 'solid' | 'outline' | 'subtle';
export type TagColor = 'primary' | 'success' | 'warning' | 'error' | 'info';
export type TagSize = 'sm' | 'md' | 'lg';

const variantStyles: Record<TagVariant, Record<TagColor, string>> = {
  solid: {
    primary: 'bg-primary-500 text-white',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-white',
    error: 'bg-error-500 text-white',
    info: 'bg-info-500 text-white'
  },
  outline: {
    primary: 'border border-primary-500 text-primary-500',
    success: 'border border-success-500 text-success-500',
    warning: 'border border-warning-500 text-warning-500',
    error: 'border border-error-500 text-error-500',
    info: 'border border-info-500 text-info-500'
  },
  subtle: {
    primary: 'bg-primary-100 text-primary-700',
    success: 'bg-success-100 text-success-700',
    warning: 'bg-warning-100 text-warning-700',
    error: 'bg-error-100 text-error-700',
    info: 'bg-info-100 text-info-700'
  }
};

const sizeStyles: Record<TagSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5'
};

export interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  color?: TagColor;
  size?: TagSize;
  onClose?: () => void;
  className?: string;
  icon?: string | IconifyIcon;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  onClose,
  className,
  icon
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium',
        variantStyles[variant][color],
        sizeStyles[size],
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

export { Tag }; 