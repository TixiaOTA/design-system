import React, { useState } from "react";
import {
  PrimitiveDatePicker,
  PrimitiveDatePickerProps,
} from "./PrimitiveDatePicker";

export type DatePickerMode = "single" | "range";

export interface DatePickerProps
  extends Omit<PrimitiveDatePickerProps, "onChange" | "value"> {
  mode?: DatePickerMode;
  value?: Date | [Date, Date];
  onChange?: (date: Date | [Date | undefined, Date | undefined]) => void;
  monthsToShow?: 1 | 2;
  calendarFooter?: React.ReactNode;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  mode = "single",
  value,
  onChange,
  monthsToShow = 1,
  calendarFooter,
  ...props
}) => {
  // State for range selection
  const [range, setRange] = useState<[Date | undefined, Date | undefined]>([
    undefined,
    undefined,
  ]);

  // Single mode
  if (mode === "single") {
    const singleValue = Array.isArray(value) ? value[0] : value;
    return (
      <PrimitiveDatePicker
        value={singleValue === null ? undefined : singleValue}
        onChange={(date) => onChange?.(date)}
        monthsToShow={monthsToShow}
        calendarFooter={calendarFooter}
        {...props}
      />
    );
  }

  // Range mode (check-in/check-out in one input)
  if (mode === "range") {
    let [start, end] = Array.isArray(value) ? value : range;
    const handleRangeChange = (date: Date) => {
      if (!start || (start && end)) {
        setRange([date, undefined]);
        onChange?.([date, undefined]);
      } else if (start && !end) {
        if (date < start) {
          setRange([date, start]);
          onChange?.([date, start]);
        } else {
          setRange([start, date]);
          onChange?.([start, date]);
        }
      }
    };
    const formatRange = () => {
      if (!start) return "";
      const format = (d: Date) =>
        d
          ? d.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "";
      if (start && end) {
        return `${format(start)} - ${format(end)}`;
      }
      return format(start);
    };
    return (
      <PrimitiveDatePicker
        value={start}
        onChange={handleRangeChange}
        monthsToShow={monthsToShow}
        placeholder={props.placeholder || "Select date range"}
        valueFormatter={formatRange}
        rangeStart={start}
        rangeEnd={end}
        closeOnSelect={Boolean(end)}
        calendarFooter={calendarFooter}
        {...props}
      />
    );
  }

  return null;
};

DatePicker.displayName = "DatePicker";
