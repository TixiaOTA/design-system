import React from 'react';
import { cn } from '@/utils/cn';

export type StatusIndicatorStatus = 'active' | 'inactive' | 'pending' | 'warning' | 'error';
export type StatusIndicatorSize = 'sm' | 'md' | 'lg';

export interface StatusIndicatorProps {
  status: StatusIndicatorStatus;
  size?: StatusIndicatorSize;
  withLabel?: boolean;
  className?: string;
}

const statusConfig = {
  active: {
    bgColor: 'bg-success-500',
    label: 'Active'
  },
  inactive: {
    bgColor: 'bg-default-400',
    label: 'Inactive'
  },
  pending: {
    bgColor: 'bg-warning-500',
    label: 'Pending'
  },
  warning: {
    bgColor: 'bg-warning-500',
    label: 'Warning'
  },
  error: {
    bgColor: 'bg-danger-500',
    label: 'Error'
  }
};

const sizeConfig = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4'
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  size = 'md',
  withLabel = false,
  className
}) => {
  const { bgColor, label } = statusConfig[status];
  const sizeClass = sizeConfig[size];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn('rounded-full animate-pulse', bgColor, sizeClass)} />
      {withLabel && <span className="text-sm">{label}</span>}
    </div>
  );
};

export default StatusIndicator; 