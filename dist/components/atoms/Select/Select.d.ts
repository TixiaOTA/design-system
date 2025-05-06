import React from 'react';
import { type VariantProps } from 'class-variance-authority';
export type SelectPosition = 'bottom' | 'top' | 'left' | 'right';
declare const selectVariants: (props?: ({
    variant?: "default" | "error" | "success" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type SelectVariant = 'default' | 'error' | 'success';
export type SelectSize = 'sm' | 'md' | 'lg';
export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}
export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'>, VariantProps<typeof selectVariants> {
    /** Options for the select */
    options?: SelectOption[];
    /** Label for the select */
    label?: string;
    /** Error message to display */
    error?: boolean | string;
    /** Helper text to display below select */
    helperText?: string;
    /** Whether the select is required */
    required?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Current value */
    value?: string;
    /** Callback when value changes */
    onChange?: (value: string) => void;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** Position of the dropdown */
    position?: SelectPosition;
    /** Whether the select should take full width */
    fullWidth?: boolean;
    variant?: SelectVariant;
    size?: SelectSize;
    /** Children components (SelectItem) */
    children?: React.ReactNode;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export { Select };
