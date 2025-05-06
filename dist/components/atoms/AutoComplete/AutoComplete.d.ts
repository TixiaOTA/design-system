import React from 'react';
export interface AutoCompleteProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onSelect'> {
    /** Options to display in the dropdown */
    options: Array<{
        value: string;
        label: string;
    }>;
    /** Callback when an option is selected */
    onSelect?: (value: string) => void;
    /** Whether the dropdown is open */
    isOpen?: boolean;
    /** Position of the dropdown relative to the input */
    dropdownPosition?: 'top' | 'bottom';
    /** Whether to show loading state */
    loading?: boolean;
    /** Custom render function for options */
    renderOption?: (option: {
        value: string;
        label: string;
    }) => React.ReactNode;
    /** Input variant that determines the visual style */
    variant?: 'default' | 'error' | 'success';
    /** Size of the input */
    size?: 'sm' | 'md' | 'lg';
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
    labelPlacement?: 'top' | 'left';
    /** Whether the input should take full width */
    fullWidth?: boolean;
    /** Whether to show clear icon when there's input */
    showClear?: boolean;
    /** Callback when clear button is clicked */
    onClear?: () => void;
}
declare const AutoComplete: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<HTMLInputElement>>;
export { AutoComplete };
