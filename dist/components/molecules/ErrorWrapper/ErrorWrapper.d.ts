import { ReactNode } from 'react';
type ErrorVariant = 'no-internet' | 'data-not-found' | 'under-development' | 'information-unavailable' | 'success' | 'checked';
interface ErrorWrapperProps {
    error?: unknown;
    reload?: () => void;
    children?: ReactNode;
    className?: string;
    variant?: ErrorVariant;
}
declare const ErrorWrapper: ({ error, reload, children, className, variant }: ErrorWrapperProps) => import("react/jsx-runtime").JSX.Element | null;
export { ErrorWrapper };
export type { ErrorWrapperProps, ErrorVariant };
