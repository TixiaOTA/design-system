import React from 'react';
import { cn } from '@/utils/cn';
import { Icon } from '@iconify/react';
import type { IconifyIcon } from '@iconify/react';
import { Card } from '../../atoms/Card';

export interface WidgetCardProps {
  label: string;
  value: string | number;
  icon?: string | IconifyIcon;
  className?: string;
}

const WidgetCard: React.FC<WidgetCardProps> = ({
  label,
  value,
  icon,
  className
}) => {
  return (
    <Card className={cn(
        'flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200',
        className
      )}>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
      </div>
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
          <Icon icon={icon} className="h-6 w-6 text-primary-600" />
        </div>
      )}
    </Card>
  );
};

export { WidgetCard }; 