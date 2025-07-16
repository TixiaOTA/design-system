import { ReactNode } from 'react';
type ErrorVariant = 'no-internet' | 'data-not-found' | 'under-development' | 'information-unavailable' | 'payment-success' | 'payment-failed' | 'no-order' | 'timeout' | 'on-process' | 'page-not-found';
interface ErrorWrapperProps {
    error?: unknown;
    reload?: () => void;
    children?: ReactNode;
    className?: string;
    variant?: ErrorVariant;
    customImage?: string;
    customMessage?: string | ReactNode;
}
declare const ErrorWrapper: ({ error, reload, children, className, variant, customImage, customMessage }: ErrorWrapperProps) => import("react/jsx-runtime").JSX.Element | null;
export { ErrorWrapper };
export type { ErrorWrapperProps, ErrorVariant };
