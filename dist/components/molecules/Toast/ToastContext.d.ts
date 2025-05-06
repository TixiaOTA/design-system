import React from 'react';
import { ToastProps } from './Toast';
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
interface ToastContextValue {
    showToast: (props: Omit<ToastProps, 'onClose'>) => string;
    removeToast: (id: string) => void;
}
export declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useToast: () => ToastContextValue;
export {};
