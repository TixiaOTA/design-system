import React from 'react';
export interface PrimitiveTimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> {
    /** The selected time value */
    value?: string;
    /** Callback when time is selected */
    onChange?: (time: string) => void;
    /** Whether to use 24-hour format */
    use24Hour?: boolean;
    /** Visual style variant */
    variant?: 'default' | 'error' | 'success' | 'ghost' | 'underline';
    /** Size of the input */
    size?: 'sm' | 'md' | 'lg';
    /** Border radius of the input */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Error message to display below the input */
    errorText?: string;
    /** Helper text to display below the input */
    helperText?: string;
    /** Label for the input */
    label?: string;
    /** Whether the input is required */
    required?: boolean;
    /** Position of the label relative to the input */
    labelPlacement?: 'top' | 'left';
    /** Whether the input should take full width */
    fullWidth?: boolean;
    /** Icon to display on the left side of the input */
    leftIcon?: string;
    /** Icon to display on the right side of the input */
    rightIcon?: string;
    /** Custom formatter for the displayed time value */
    valueFormatter?: (time: string) => string;
    /** Whether to close the dropdown after selection */
    closeOnSelect?: boolean;
}
export declare const PrimitiveTimePicker: React.ForwardRefExoticComponent<PrimitiveTimePickerProps & React.RefAttributes<HTMLInputElement>>;
export interface TimePickerProps extends Omit<PrimitiveTimePickerProps, 'onChange' | 'value'> {
    /** The selected time value */
    value?: string;
    /** Callback when time is selected */
    onChange?: (time: string) => void;
    /** Custom formatter for the displayed time value */
    valueFormatter?: (time: string) => string;
    /** Whether to close the dropdown after selection */
    closeOnSelect?: boolean;
}
export declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<HTMLInputElement>>;
