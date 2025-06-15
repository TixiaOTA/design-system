import React from "react";
import { PrimitiveDatePickerProps } from "./PrimitiveDatePicker";
export type DatePickerMode = "single" | "range";
export interface DatePickerProps extends Omit<PrimitiveDatePickerProps, "onChange" | "value"> {
    mode?: DatePickerMode;
    value?: Date | [Date, Date];
    onChange?: (date: Date | [Date | undefined, Date | undefined]) => void;
    monthsToShow?: 1 | 2;
    calendarFooter?: React.ReactNode;
}
export declare const DatePicker: React.FC<DatePickerProps>;
