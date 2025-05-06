import React from 'react';
export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export interface NotificationProps {
    type?: NotificationType;
    title?: string;
    message: string;
    icon?: string;
    duration?: number;
    showClose?: boolean;
    className?: string;
    onClose?: () => void;
    actions?: {
        label: string;
        onClick: () => void;
        className?: string;
    }[];
}
export declare const Notification: React.FC<NotificationProps>;
