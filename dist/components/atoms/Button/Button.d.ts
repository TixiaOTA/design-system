import React from 'react';
declare const buttonVariants: (props?: ({
    variant?: "success" | "ghost" | "link" | "primary" | "secondary" | "warning" | "outline" | "outline-primary" | "outline-secondary" | "outline-success" | "outline-warning" | "outline-danger" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | "xs" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
    fullWidth?: boolean | null | undefined;
    isIconOnly?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-danger' | 'ghost' | 'link' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    isIconOnly?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
export { buttonVariants };
