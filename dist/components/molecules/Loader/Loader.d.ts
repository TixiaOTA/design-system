import { ReactNode } from 'react';
export type LoaderVariant = 'flight-light' | 'flight-dark';
interface LoaderProps {
    variant: LoaderVariant;
    customImage?: string;
    customMessage?: ReactNode;
    width?: string | number;
    height?: string | number;
    widthImg?: string | number;
    heightImg?: string | number;
    className?: string;
}
export declare const Loader: ({ variant, customImage, customMessage, width, height, widthImg, heightImg, className, }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
