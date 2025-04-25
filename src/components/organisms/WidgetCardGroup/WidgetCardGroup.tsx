import React from 'react';
import { WidgetCard } from '../../molecules/WidgetCard/WidgetCard';

interface WidgetData {
  id: string | number;
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

interface WidgetCardGroupProps {
  widgets: WidgetData[];
  className?: string;
}

export const WidgetCardGroup: React.FC<WidgetCardGroupProps> = ({
  widgets,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {widgets.map((widget) => (
        <WidgetCard
          key={widget.id}
          label={widget.label}
          value={widget.value}
          icon={widget.icon}
        />
      ))}
    </div>
  );
}; 