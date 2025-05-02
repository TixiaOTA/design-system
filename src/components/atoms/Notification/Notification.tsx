import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface NotificationProps {
  type?: NotificationType;
  title?: string;
  message: string;
  icon?: string;
  duration?: number;
  showClose?: boolean;
  className?: string;
  onClose?: () => void;
  actions?: {
    label: string;
    onClick: () => void;
    className?: string;
  }[];
}

export const Notification: React.FC<NotificationProps> = ({
  type = 'info',
  title,
  message,
  icon,
  duration = 5000,
  showClose = true,
  className,
  onClose,
  actions = [],
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // Wait for animation to complete
  };

  const getIcon = () => {
    if (icon) return icon;
    switch (type) {
      case 'success':
        return 'mdi:check-circle';
      case 'warning':
        return 'mdi:alert';
      case 'error':
        return 'mdi:close-circle';
      default:
        return 'mdi:information';
    }
  };

  const getTypeClasses = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={clsx(
        'relative p-4 rounded-lg border transition-all duration-300',
        'transform translate-y-0 opacity-100',
        getTypeClasses(),
        className
      )}
    >
      <div className="flex items-start">
        <Icon
          icon={getIcon()}
          className={clsx(
            'w-5 h-5 flex-shrink-0 mt-0.5',
            type === 'success' && 'text-green-500',
            type === 'warning' && 'text-yellow-500',
            type === 'error' && 'text-red-500',
            type === 'info' && 'text-blue-500'
          )}
        />
        <div className="ml-3 flex-1">
          {title && (
            <h3 className="text-sm font-medium mb-1">{title}</h3>
          )}
          <p className="text-sm">{message}</p>
          {actions.length > 0 && (
            <div className="mt-3 flex space-x-2">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={clsx(
                    'text-sm font-medium px-3 py-1 rounded-md transition-colors',
                    type === 'success' && 'text-green-700 hover:bg-green-100',
                    type === 'warning' && 'text-yellow-700 hover:bg-yellow-100',
                    type === 'error' && 'text-red-700 hover:bg-red-100',
                    type === 'info' && 'text-blue-700 hover:bg-blue-100',
                    action.className
                  )}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {showClose && (
          <button
            onClick={handleClose}
            className={clsx(
              'absolute top-4 right-4 p-1 rounded-full transition-colors',
              type === 'success' && 'hover:bg-green-100',
              type === 'warning' && 'hover:bg-yellow-100',
              type === 'error' && 'hover:bg-red-100',
              type === 'info' && 'hover:bg-blue-100'
            )}
          >
            <Icon
              icon="mdi:close"
              className="w-4 h-4"
            />
          </button>
        )}
      </div>
    </div>
  );
}; 