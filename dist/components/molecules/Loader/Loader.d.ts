import { ReactNode } from 'react';
export type LoaderVariant = 'flight-light' | 'flight-dark';
interface LoaderProps {
    variant: LoaderVariant;
    customImage?: string;
    customMessage?: ReactNode;
    width?: number | string;
    height?: number | string;
    className?: string;
}
export declare const Loader: ({ variant, customImage, customMessage, width, height, className, }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
