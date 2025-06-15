import React from 'react';
declare const ICON_COLOR_MAP: {
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    info: string;
    success: string;
    disabled: string;
};
export type IconColor = keyof typeof ICON_COLOR_MAP | string;
export interface BadgeNotifProps {
    /** The icon name from Iconify (e.g., 'mdi:home') */
    icon?: string;
    /** Custom CSS classes */
    className?: string;
    /** Color of the icon. Accepts a color name (primary, secondary, etc.) or a custom color value. */
    color?: IconColor;
    /** Number of the notification */
    value?: number;
    /** Maximum number to display before showing maxValue+ */
    maxValue?: number;
    /** Custom node to wrap (icon, card, etc) */
    children?: React.ReactNode;
}
export declare const BadgeNotif: ({ icon, className, color, value, maxValue, children, ...props }: BadgeNotifProps) => import("react/jsx-runtime").JSX.Element;
export {};
