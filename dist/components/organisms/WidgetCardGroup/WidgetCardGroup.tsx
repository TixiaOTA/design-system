import React from 'react';
import { WidgetCard } from '../../molecules/WidgetCard/WidgetCard';
import type { WidgetCardProps } from '../../molecules/WidgetCard/WidgetCard';
import { cn } from '@/utils/cn';

export interface WidgetCardGroupProps {
  widgets: WidgetCardProps[];
  className?: string;
}

const WidgetCardGroup: React.FC<WidgetCardGroupProps> = ({
  widgets,
  className
}) => {
  return (
    <div className={cn('w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {widgets.map((widget, index) => (
        <WidgetCard key={index} {...widget} />
      ))}
    </div>
  );
};

export { WidgetCardGroup }; 