import React from 'react';
declare const inputOTPVariants: (props?: ({
    variant?: "error" | "default" | "success" | "ghost" | "underline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type InputOTPVariant = 'default' | 'error' | 'success' | 'ghost' | 'underline';
export type InputOTPSize = 'sm' | 'md' | 'lg';
export type InputOTPRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
export interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
    /** Visual style variant */
    variant?: InputOTPVariant;
    /** Size of the OTP inputs */
    size?: InputOTPSize;
    /** Border radius of the OTP inputs */
    rounded?: InputOTPRounded;
    /** Whether the input is in an error state */
    error?: boolean;
    /** Error message to display below the input */
    errorText?: string;
    /** Helper text to display below the input */
    helperText?: string;
    /** Label for the input */
    label?: string;
    /** Bottom label for additional information */
    bottomLabel?: string;
    /** Whether the input is required */
    required?: boolean;
    /** Whether to show a submit button */
    showSubmitButton?: boolean;
    /** Label for the submit button */
    submitButtonLabel?: string;
    /** Variant for the submit button */
    submitButtonVariant?: 'primary' | 'secondary' | 'success';
    /** Number of OTP inputs */
    length?: number;
    /** Whether the OTP is numeric only */
    numericOnly?: boolean;
    /** Callback when all OTP inputs are filled */
    onComplete?: (value: string) => void;
    /** Callback when OTP value changes */
    onChange?: (value: string) => void;
    /** Callback when submit button is clicked */
    onSubmit?: (value: string) => void;
    /** Value of the OTP input */
    value?: string;
    /** Default value of the OTP input */
    defaultValue?: string;
    /** Whether the OTP input is disabled */
    disabled?: boolean;
    /** Whether to auto-focus the first input on mount */
    autoFocus?: boolean;
}
declare const InputOTP: React.ForwardRefExoticComponent<InputOTPProps & React.RefAttributes<HTMLDivElement>>;
export { InputOTP, inputOTPVariants };
