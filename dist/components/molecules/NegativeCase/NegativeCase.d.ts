import { ReactNode } from 'react';
export type NegativeCaseVariant = 'no-internet' | 'data-not-found' | 'under-development' | 'information-unavailable' | 'payment-success' | 'payment-failed' | 'no-order' | 'timeout' | 'on-process' | 'page-not-found' | 'page-not-found-v2' | 'no-seat-available' | 'change-price' | 'help-desk';
interface NegativeCaseProps {
    variant: NegativeCaseVariant;
    customMessage?: ReactNode;
    reload?: () => void;
    reloadText?: string;
    customImage?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
}
export declare const NegativeCase: ({ variant, customMessage, reload, reloadText, customImage, width, height, className, }: NegativeCaseProps) => import("react/jsx-runtime").JSX.Element;
export {};
