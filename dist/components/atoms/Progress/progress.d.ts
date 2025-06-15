import React from 'react';
export type ProgressVariant = 'bar' | 'circular' | 'loading';
export type ProgressColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type ProgressSize = 'sm' | 'md' | 'lg';
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual style variant */
    variant?: ProgressVariant;
    /** Color scheme */
    color?: ProgressColor;
    /** Size of the progress indicator */
    size?: ProgressSize;
    /** Current progress value (0-100) */
    value?: number;
    /** Whether the progress is indeterminate */
    isIndeterminate?: boolean;
    /** Whether to show the percentage text */
    showValue?: boolean;
    /** Custom label for the progress */
    label?: string;
    /** Border radius for the bar (e.g., 'md', 'full'). Default: 'md', but 'full' for loading. */
    rounded?: 'none' | 'full';
    /** Iconify icon string for circular progress */
    icon?: string;
}
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
