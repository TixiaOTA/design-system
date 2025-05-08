import React from 'react';
export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'small' | 'medium' | 'large';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    className?: string;
}
export declare const Badge: React.FC<BadgeProps>;
