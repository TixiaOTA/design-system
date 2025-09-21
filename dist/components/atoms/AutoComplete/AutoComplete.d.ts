import React from "react";
export interface AutoCompleteProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onSelect"> {
    /** Options to display in the dropdown */
    options: Array<{
        value: string;
        label: string;
    }>;
    /** Callback when an option is selected */
    onSelect?: (value: string) => void;
    /** Whether the dropdown is open */
    isOpen?: boolean;
    /** Whether to show loading state */
    loading?: boolean;
    /** Custom render function for options */
    renderOption?: (option: {
        value: string;
        label: string;
    }) => React.ReactNode;
    /** Type of search to perform - 'include' searches anywhere in the string, 'startsWith' searches from the beginning */
    searchType?: "include" | "startsWith";
    /** Number of items to display initially. If 0 or undefined, displays all items */
    initialItemsToShow?: number;
    /** Number of additional items to load when scrolling to bottom */
    itemsToLoad?: number;
    /** Maximum height of the dropdown in pixels */
    maxDropdownHeight?: number;
    /** Custom message to display when no options are found */
    noOptionsMessage?: React.ReactNode;
    /** Custom message for scroll indicator. Use {current} and {total} as placeholders */
    scrollMoreMessage?: string;
    /** Custom message for when all options are shown. Use {total} as placeholder */
    allOptionsShownMessage?: string;
    /** Input variant that determines the visual style */
    variant?: "default" | "error" | "success" | "ghost" | "underline";
    /** Size of the input */
    size?: "sm" | "md" | "lg";
    /** Border radius of the input */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
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
    labelPlacement?: "top" | "left";
    /** Whether the input should take full width */
    fullWidth?: boolean;
    /** Whether to show clear icon when there's input */
    showClear?: boolean;
    /** Callback when clear button is clicked */
    onClear?: () => void;
    /** Whether to reset invalid input to null on blur. When true, if user types a value that doesn't match any option and then blurs, the input will be reset to null */
    resetInvalidOnBlur?: boolean;
    /** Callback when invalid input is reset to null */
    onInvalidReset?: () => void;
}
declare const AutoComplete: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<HTMLInputElement>>;
export { AutoComplete };
