import React from 'react';
export type TextareaVariant = 'default' | 'error' | 'success' | 'ghost' | 'underline';
export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';
export type TextareaLabelPlacement = 'top' | 'left';
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    /** Visual style variant */
    variant?: TextareaVariant;
    /** Size of the textarea */
    size?: TextareaSize;
    /** Border radius of the textarea */
    rounded?: TextareaRounded;
    /** Whether the textarea is in an error state */
    error?: boolean;
    /** Error message to display below the textarea */
    errorText?: string;
    /** Helper text to display below the textarea */
    helperText?: string;
    /** Label for the textarea */
    label?: string;
    /** Whether the textarea is required */
    required?: boolean;
    /** Position of the label relative to the textarea */
    labelPlacement?: TextareaLabelPlacement;
    /** Whether the textarea should take full width */
    fullWidth?: boolean;
    /** Resize behavior of the textarea */
    resize?: TextareaResize;
    /** Character count display */
    showCharCount?: boolean;
    /** Maximum character count */
    maxLength?: number;
    /** Minimum number of rows */
    minRows?: number;
    /** Maximum number of rows */
    maxRows?: number;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
