import React from 'react';
export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export interface NotificationProps {
    /** The title of the notification */
    title?: string;
    /** The content of the notification */
    children: React.ReactNode;
    /** The icon to display */
    icon?: string;
    /** The visual style variant */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    /** Border radius of the notification */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
    /** Whether to show a close button */
    showClose?: boolean;
    /** Callback when the notification is closed */
    onClose?: () => void;
    /** Additional class name */
    className?: string;
}
export declare const Notification: ({ title, children, icon, variant, rounded, showClose, onClose, className, }: NotificationProps) => import("react/jsx-runtime").JSX.Element;
