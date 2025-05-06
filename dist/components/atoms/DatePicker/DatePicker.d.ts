export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> {
    /** The selected date value */
    value?: Date;
    /** End date for range selection */
    endDate?: Date;
    /** Callback when date is selected */
    onChange?: (date: Date) => void;
    /** Callback when end date is selected */
    onEndDateChange?: (date: Date) => void;
    /** Whether to enable range selection */
    isRangeSelection?: boolean;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
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
export declare const DatePicker: import("react").ForwardRefExoticComponent<DatePickerProps & import("react").RefAttributes<HTMLInputElement>>;
