import React from 'react';
export interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted';
    color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
export declare const Divider: React.FC<DividerProps>;
