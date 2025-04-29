import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Icon } from '@iconify/react';
import type { IconifyIcon } from '@iconify/react';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant;
  title?: string;
  description?: string;
  onClose?: () => void;
  icon?: string | IconifyIcon;
  showIcon?: boolean;
  duration?: number;
  showClose?: boolean;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ 
    className, 
    variant = 'default', 
    title, 
    description, 
    onClose, 
    icon, 
    showIcon = true, 
    ...props 
  }, ref) => {
    const defaultIconMap: Record<ToastVariant, string> = {
      default: 'mdi:information',
      success: 'mdi:check-circle',
      error: 'mdi:alert-circle',
      warning: 'mdi:alert',
      info: 'mdi:information'
    };

    const iconToShow = icon || (showIcon ? defaultIconMap[variant] : undefined);

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start gap-3 rounded-lg p-4 shadow-lg',
          'border border-gray-200',
          {
            'bg-white': variant === 'default',
            'bg-success-50': variant === 'success',
            'bg-error-50': variant === 'error',
            'bg-warning-50': variant === 'warning',
            'bg-info-50': variant === 'info'
          },
          className
        )}
        {...props}
      >
        {iconToShow && (
          <Icon
            icon={iconToShow}
            className={cn('h-5 w-5 flex-shrink-0', {
              'text-gray-500': variant === 'default',
              'text-success-500': variant === 'success',
              'text-error-500': variant === 'error',
              'text-warning-500': variant === 'warning',
              'text-info-500': variant === 'info'
            })}
          />
        )}
        <div className="flex-1">
          {title && (
            <h3
              className={cn('text-sm font-medium', {
                'text-gray-900': variant === 'default',
                'text-success-900': variant === 'success',
                'text-error-900': variant === 'error',
                'text-warning-900': variant === 'warning',
                'text-info-900': variant === 'info'
              })}
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className={cn('mt-1 text-sm', {
                'text-gray-500': variant === 'default',
                'text-success-700': variant === 'success',
                'text-error-700': variant === 'error',
                'text-warning-700': variant === 'warning',
                'text-info-700': variant === 'info'
              })}
            >
              {description}
            </p>
          )}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'ml-4 flex-shrink-0 rounded-md p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2',
              {
                'text-gray-400 hover:text-gray-500': variant === 'default',
                'text-success-400 hover:text-success-500': variant === 'success',
                'text-error-400 hover:text-error-500': variant === 'error',
                'text-warning-400 hover:text-warning-500': variant === 'warning',
                'text-info-400 hover:text-info-500': variant === 'info'
              }
            )}
          >
            <Icon icon="mdi:close" className="h-5 w-5" />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export { Toast }; 