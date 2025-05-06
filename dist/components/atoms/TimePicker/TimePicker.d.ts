export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    /** The selected time value */
    value?: string;
    /** Callback when time is selected */
    onChange?: (time: string) => void;
    /** Time format to display */
    format?: '12h' | '24h';
    /** Visual style variant */
    variant?: 'default' | 'error' | 'success';
    /** Size of the input */
    size?: 'sm' | 'md' | 'lg';
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
}
export declare const TimePicker: import("react").ForwardRefExoticComponent<TimePickerProps & import("react").RefAttributes<HTMLInputElement>>;
