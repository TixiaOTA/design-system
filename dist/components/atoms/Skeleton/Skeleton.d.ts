import React from 'react';
export interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
    animation?: 'pulse' | 'wave';
    height?: string;
    width?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
}
export declare const Skeleton: React.FC<SkeletonProps>;
