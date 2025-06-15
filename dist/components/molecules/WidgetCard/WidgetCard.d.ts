import React from 'react';
export interface WidgetCardProps {
    label: string;
    value: string | number;
    icon?: string;
    className?: string;
}
declare const WidgetCard: React.FC<WidgetCardProps>;
export { WidgetCard };
