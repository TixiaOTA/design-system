import React from 'react';
declare const toggleVariants: (props?: ({
    variant?: "success" | "primary" | "warning" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ToggleVariant = 'primary' | 'success' | 'warning' | 'danger';
export type ToggleSize = 'sm' | 'md' | 'lg';
export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    /** Whether the toggle is checked */
    checked?: boolean;
    /** Callback when toggle state changes */
    onCheckedChange?: (checked: boolean) => void;
    /** Visual style variant of the toggle */
    variant?: ToggleVariant;
    /** Size of the toggle */
    size?: ToggleSize;
    /** Label for the toggle */
    label?: string;
    /** Whether the toggle is required */
    required?: boolean;
    /** Helper text to display below the toggle */
    helperText?: string;
    /** Error message to display below the toggle */
    errorText?: string;
    /** Whether the toggle is in an error state */
    error?: boolean;
}
declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;
export { Toggle, toggleVariants };
