import React from 'react';
export type CheckBoxGroupLayout = 'vertical' | 'horizontal' | 'grid';
export type CheckBoxGroupSize = 'sm' | 'md' | 'lg';
export type CheckBoxGroupLabelPlacement = 'top' | 'left';
export interface CheckBoxOption {
    value: string;
    label: string | React.ReactNode;
    disabled?: boolean;
    indeterminate?: boolean;
}
export interface CheckBoxGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
    /** Array of checkbox options */
    options: CheckBoxOption[];
    /** Currently selected values */
    value?: string[];
    /** Default selected values */
    defaultValue?: string[];
    /** Callback when selection changes */
    onChange?: (value: string[]) => void;
    /** Layout direction of checkboxes */
    layout?: CheckBoxGroupLayout;
    /** Size of the checkbox group */
    size?: CheckBoxGroupSize;
    /** Whether the group is in an error state */
    error?: boolean;
    /** Error message to display below the group */
    errorText?: string;
    /** Helper text to display below the group */
    helperText?: string;
    /** Label for the checkbox group */
    label?: string | React.ReactNode;
    /** Whether the group is required */
    required?: boolean;
    /** Position of the label relative to the group */
    labelPlacement?: CheckBoxGroupLabelPlacement;
    /** Whether the group should take full width */
    fullWidth?: boolean;
    /** Whether all checkboxes are disabled */
    disabled?: boolean;
    /** Visual style variant for checkboxes */
    variant?: 'square' | 'circle';
    /** Color theme for checkboxes */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Size variant for individual checkboxes */
    checkboxSize?: 'sm' | 'md' | 'lg';
    /** Whether to show "Select All" option */
    showSelectAll?: boolean;
    /** Custom text for "Select All" option */
    selectAllText?: string | React.ReactNode;
    /** Whether to show "Select All" as indeterminate when some items are selected */
    indeterminateSelectAll?: boolean;
    /** Custom gap between options (overrides size-based gap) */
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Custom gap between select all and options (overrides gap) */
    selectAllGap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Name attribute for form submission and React Hook Form */
    name?: string;
}
declare const CheckBoxGroup: React.ForwardRefExoticComponent<CheckBoxGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
export { CheckBoxGroup };
