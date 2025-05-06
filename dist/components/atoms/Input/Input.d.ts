import React from 'react';
export type InputVariant = 'default' | 'error' | 'success';
export type InputSize = 'sm' | 'md' | 'lg';
export type LabelPlacement = 'top' | 'left';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Input variant that determines the visual style */
    variant?: InputVariant;
    /** Size of the input */
    size?: InputSize;
    /** Icon to display on the left side of the input */
    leftIcon?: string;
    /** Icon to display on the right side of the input */
    rightIcon?: string;
    /** Whether the input is in an error state */
    error?: boolean;
    /** Error message to display below the input */
    errorText?: string;
    /** Helper text to display below the input */
    helperText?: string;
    /** Label for the input */
    label?: string;
    /** Whether the input is required */
    required?: boolean;
    /** Position of the label relative to the input */
    labelPlacement?: LabelPlacement;
    /** Additional className for the wrapper div */
    wrapperClassName?: string;
    /** Whether the input should take full width */
    fullWidth?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
