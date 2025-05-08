import React from 'react';
import type { IconifyIcon } from '@iconify/react';
import { ToastPosition } from './ToastContext';
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';
export type ToastRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: ToastVariant;
    rounded?: ToastRounded;
    title?: string;
    description?: string;
    onClose?: () => void;
    icon?: string | IconifyIcon;
    showIcon?: boolean;
    duration?: number;
    showClose?: boolean;
    position?: ToastPosition;
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
export { Toast };
