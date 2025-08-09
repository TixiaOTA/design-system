import React from "react";
export type PhoneInputVariant = "default" | "error" | "success" | "ghost" | "underline";
export type PhoneInputSize = "sm" | "md" | "lg";
export type PhoneInputRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
export interface PhoneInputProps {
    /** Visual style variant */
    variant?: PhoneInputVariant;
    /** Size of the input */
    size?: PhoneInputSize;
    /** Border radius of the input */
    rounded?: PhoneInputRounded;
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
    /** Whether the input should take full width */
    fullWidth?: boolean;
    /** Current phone number value */
    value?: string;
    /** Callback when phone number changes */
    onChange?: (phone: string) => void;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Default country code */
    defaultCountry?: string;
    /** Custom class name */
    className?: string;
    /** Placeholder for the phone number input */
    placeholder?: string;
    /** Whether to automatically detect country from phone number input */
    autoDetect?: boolean;
}
export declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps & React.RefAttributes<HTMLDivElement>>;
