import React from "react";
export type PrimitiveDatePickerVariant = "default" | "error" | "success" | "ghost" | "underline";
export type PrimitiveDatePickerSize = "sm" | "md" | "lg";
export type PrimitiveDatePickerRounded = "none" | "sm" | "md" | "lg" | "full";
export type PrimitiveDatePickerLabelPlacement = "top" | "left";
export type DateFormat = "DD-MM-YYYY" | "YYYY-MM-DD" | "MM-DD-YYYY";
export interface PrimitiveDatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "value"> {
    value?: Date;
    onChange?: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    variant?: PrimitiveDatePickerVariant;
    size?: PrimitiveDatePickerSize;
    rounded?: PrimitiveDatePickerRounded;
    disabled?: boolean;
    error?: boolean;
    errorText?: string;
    helperText?: string;
    label?: string;
    required?: boolean;
    labelPlacement?: PrimitiveDatePickerLabelPlacement;
    fullWidth?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    monthsToShow?: 1 | 2;
    valueFormatter?: () => string;
    rangeStart?: Date;
    rangeEnd?: Date;
    closeOnSelect?: boolean;
    calendarFooter?: React.ReactNode;
    /** Date format for input display and parsing */
    format?: DateFormat;
    /** Whether to allow manual input typing */
    allowInput?: boolean;
}
export declare const PrimitiveDatePicker: React.ForwardRefExoticComponent<PrimitiveDatePickerProps & React.RefAttributes<HTMLInputElement>>;
