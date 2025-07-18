import React from "react";
import { PrimitiveDatePickerProps } from "./PrimitiveDatePicker";
export type DatePickerMode = "single" | "range";
export interface DatePickerProps extends Omit<PrimitiveDatePickerProps, "onChange" | "value"> {
    mode?: DatePickerMode;
    value?: Date | [Date, Date];
    onChange?: (date: Date | [Date | undefined, Date | undefined]) => void;
    monthsToShow?: 1 | 2;
    calendarFooter?: React.ReactNode;
    /** Whether the date picker is in an error state */
    error?: boolean;
    /** Error message to display below the input */
    errorText?: string;
    /** Date format for input display and parsing */
    format?: "DD-MM-YYYY" | "YYYY-MM-DD" | "MM-DD-YYYY";
    /** Whether to allow manual input typing */
    allowInput?: boolean;
}
export declare const DatePicker: React.FC<DatePickerProps>;
