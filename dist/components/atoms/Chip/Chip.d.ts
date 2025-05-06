import React from 'react';
import type { IconifyIcon } from '@iconify/react';
export type ChipVariant = 'solid' | 'outline' | 'subtle' | 'soft';
export type ChipColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'danger' | 'default';
export type ChipSize = 'sm' | 'md' | 'lg';
export interface ChipProps {
    children: React.ReactNode;
    variant?: ChipVariant;
    color?: ChipColor;
    size?: ChipSize;
    onClose?: () => void;
    className?: string;
    icon?: string | IconifyIcon;
}
declare const Chip: React.FC<ChipProps>;
export { Chip };
