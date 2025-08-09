import React from 'react';
export type ChipVariant = 'solid' | 'outline' | 'subtle' | 'soft';
export type ChipColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'danger' | 'default';
export type ChipSize = 'sm' | 'md' | 'lg';
export type ChipRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export interface ChipProps {
    children: React.ReactNode;
    variant?: ChipVariant;
    color?: ChipColor;
    size?: ChipSize;
    rounded?: ChipRounded;
    onClose?: () => void;
    className?: string;
    icon?: string;
}
declare const Chip: React.FC<ChipProps>;
export { Chip };
