import React from 'react';
export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'fullscreen';
export type DialogRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type DialogPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    backdrop?: 'blur' | 'dark' | 'transparent';
    header?: React.ReactNode;
    closeOnBackdropClick?: boolean;
    size?: DialogSize;
    /**
     * Optional Tailwind classes to control width or max-width.
     * Examples: `w-full`, `w-[10em]`, `max-w-7xl`.
     * Takes precedence over preset sizes except when `size` is `fullscreen`.
     */
    sizeClassName?: string;
    rounded?: DialogRounded;
    position?: DialogPosition;
}
interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    className?: string;
}
interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
interface DialogActionsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
}
declare const DialogHeader: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogBody: React.ForwardRefExoticComponent<DialogBodyProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogActions: React.ForwardRefExoticComponent<DialogActionsProps & React.RefAttributes<HTMLDivElement>>;
export { Dialog, DialogTitle, DialogBody, DialogActions, DialogHeader };
