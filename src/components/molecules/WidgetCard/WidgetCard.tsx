import React from 'react';
import { Text } from '@/components/atoms/Text/Text';
import { Card } from '@/components/atoms/Card';
import { cn } from '@/utils/cn';

interface WidgetCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
}

export const WidgetCard: React.FC<WidgetCardProps> = ({
  label,
  value,
  icon,
  className = ''
}) => {
  return (
    <Card className={cn('bg-white grid grid-cols-4 justify-between p-4 shadow-sm hover:bg-primary-50', className)}>
      <div className="space-y-1 pr-8 col-span-3">
        <Text variant="label">{label}</Text>
        <Text variant="value">{value}</Text>
      </div>
      <div className="text-cyan-400 self-center justify-self-end">
        {icon}
      </div>
    </Card>
  );
}; 