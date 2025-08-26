import React from 'react';
export type RadioGroupLayout = 'vertical' | 'horizontal' | 'grid';
export type RadioGroupSize = 'sm' | 'md' | 'lg';
export type RadioGroupLabelPlacement = 'top' | 'left';
export interface RadioOption {
    value: string;
    label: string | React.ReactNode;
    disabled?: boolean;
}
export interface RadioGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
    /** Array of radio options */
    options: RadioOption[];
    /** Currently selected value */
    value?: string;
    /** Default selected value */
    defaultValue?: string;
    /** Callback when selection changes */
    onChange?: (value: string) => void;
    /** Layout direction of radio buttons */
    layout?: RadioGroupLayout;
    /** Size of the radio group */
    size?: RadioGroupSize;
    /** Whether the group is in an error state */
    error?: boolean;
    /** Error message to display below the group */
    errorText?: string;
    /** Helper text to display below the group */
    helperText?: string;
    /** Label for the radio group */
    label?: string;
    /** Whether the group is required */
    required?: boolean;
    /** Position of the label relative to the group */
    labelPlacement?: RadioGroupLabelPlacement;
    /** Whether the group should take full width */
    fullWidth?: boolean;
    /** Whether all radio buttons are disabled */
    disabled?: boolean;
    /** Name attribute for the radio group */
    name?: string;
    /** Custom gap between options (overrides size-based gap) */
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color theme for radio buttons */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Size variant for individual radio buttons */
    radioSize?: 'sm' | 'md' | 'lg';
}
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
export { RadioGroup };
