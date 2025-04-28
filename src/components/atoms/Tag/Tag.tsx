import React from 'react';
import { cn } from '@/utils/cn';
import { Icon } from '@iconify/react';

export type TagVariant = 'solid' | 'outline' | 'soft';
export type TagColor = 'primary' | 'success' | 'warning' | 'danger' | 'default';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  color?: TagColor;
  size?: TagSize;
  onClose?: () => void;
  className?: string;
  icon?: string;
}

const variantStyles: Record<TagVariant, Record<TagColor, string>> = {
  solid: {
    primary: 'bg-primary text-white',
    success: 'bg-success-500 text-white',
    warning: 'bg-warning-500 text-black',
    danger: 'bg-danger-500 text-white',
    default: 'bg-default-200 text-default-800'
  },
  outline: {
    primary: 'border border-primary text-primary',
    success: 'border border-success-500 text-success-500',
    warning: 'border border-warning-500 text-warning-500',
    danger: 'border border-danger-500 text-danger-500',
    default: 'border border-default-400 text-default-800'
  },
  soft: {
    primary: 'bg-primary/20 text-primary',
    success: 'bg-success-500/20 text-success-700',
    warning: 'bg-warning-500/20 text-warning-700',
    danger: 'bg-danger-500/20 text-danger-700',
    default: 'bg-default-100 text-default-800'
  }
};

const sizeStyles: Record<TagSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5'
};

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'solid',
  color = 'default',
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

export default Tag; 