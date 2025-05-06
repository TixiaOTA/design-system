import React from 'react';
export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
