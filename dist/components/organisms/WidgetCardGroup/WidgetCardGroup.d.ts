import React from 'react';
import type { WidgetCardProps } from '../../molecules/WidgetCard/WidgetCard';
export interface WidgetCardGroupProps {
    widgets: WidgetCardProps[];
    className?: string;
}
declare const WidgetCardGroup: React.FC<WidgetCardGroupProps>;
export { WidgetCardGroup };
