import React from 'react';
import type { IconifyIcon } from '@iconify/react';
export interface WidgetCardProps {
    label: string;
    value: string | number;
    icon?: string | IconifyIcon;
    className?: string;
}
declare const WidgetCard: React.FC<WidgetCardProps>;
export { WidgetCard };
