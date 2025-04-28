import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Icon } from '@/components/Icons';

const toastVariants = cva(
  'pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'bg-white border-neutral-200 text-neutral-900',
        success: 'bg-success-50 border-success-200 text-success-700',
        error: 'bg-danger-50 border-danger-200 text-danger-700',
        warning: 'bg-warning-50 border-warning-200 text-warning-700',
        info: 'bg-info-50 border-info-200 text-info-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const defaultIconMap = {
  default: 'mdi:bell',
  success: 'mdi:check-circle',
  error: 'mdi:alert-circle',
  warning: 'mdi:alert',
  info: 'mdi:information',
};

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  /** Title of the toast */
  title?: string;
  /** Description or message of the toast */
  description?: string;
  /** Whether to show the close button */
  showClose?: boolean;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Duration in milliseconds before auto-closing (0 to disable) */
  duration?: number;
  /** Custom icon to display */
  icon?: string;
  /** Whether to show the icon */
  showIcon?: boolean;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      variant = 'default',
      title,
      description,
      showClose = true,
      onClose,
      duration = 5000,
      icon,
      showIcon = true,
      ...props
    },
    ref
  ) => {
    React.useEffect(() => {
      if (duration && onClose) {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);

    const iconToShow = icon || (showIcon ? defaultIconMap[variant || 'default'] : undefined);

    return (
      <div
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-start gap-3">
          {iconToShow && (
            <Icon
              icon={iconToShow}
              className={cn(
                'h-5 w-5 shrink-0',
                variant === 'default' && 'text-neutral-700',
                variant === 'success' && 'text-success-700',
                variant === 'error' && 'text-danger-700',
                variant === 'warning' && 'text-warning-700',
                variant === 'info' && 'text-info-700'
              )}
            />
          )}
          <div className="grid gap-1">
            {title && (
              <div className="text-sm font-semibold">
                {title}
              </div>
            )}
            {description && (
              <div className="text-sm opacity-90">
                {description}
              </div>
            )}
          </div>
        </div>
        {showClose && (
          <button
            onClick={onClose}
            className={cn(
              'absolute right-2 top-2 rounded-md p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2',
              variant === 'default' && 'text-neutral-700/50 hover:text-neutral-700',
              variant === 'success' && 'text-success-700/50 hover:text-success-700',
              variant === 'error' && 'text-danger-700/50 hover:text-danger-700',
              variant === 'warning' && 'text-warning-700/50 hover:text-warning-700',
              variant === 'info' && 'text-info-700/50 hover:text-info-700'
            )}
          >
            <Icon icon="mdi:close" className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast'; 