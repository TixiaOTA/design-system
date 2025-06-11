import React, { forwardRef, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { Icon } from "../../atoms/Icons/Icons";
import { getWindow, getDocument } from "../../../utils/ssr";
import { Button } from "../Button/Button";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const primitiveDatePickerVariants = cva(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error:
          "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success:
          "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost:
          "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline:
          "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent",
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: true,
    },
  }
);

export type PrimitiveDatePickerVariant =
  | "default"
  | "error"
  | "success"
  | "ghost"
  | "underline";
export type PrimitiveDatePickerSize = "sm" | "md" | "lg";
export type PrimitiveDatePickerRounded = "none" | "sm" | "md" | "lg" | "full";
export type PrimitiveDatePickerLabelPlacement = "top" | "left";

export interface PrimitiveDatePickerProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "value"
  > {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  variant?: PrimitiveDatePickerVariant;
  size?: PrimitiveDatePickerSize;
  rounded?: PrimitiveDatePickerRounded;
  disabled?: boolean;
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
}

export const PrimitiveDatePicker = forwardRef<
  HTMLInputElement,
  PrimitiveDatePickerProps
>(
  (
    {
      value,
      onChange,
      minDate,
      maxDate,
      variant = "default",
      size = "md",
      rounded = "md",
      disabled = false,
      errorText,
      helperText,
      label,
      required = false,
      labelPlacement = "top",
      fullWidth = false,
      className,
      placeholder = "Select date",
      leftIcon,
      rightIcon,
      monthsToShow = 1,
      valueFormatter,
      rangeStart,
      rangeEnd,
      closeOnSelect = true,
      calendarFooter,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
    const [currentMonth, setCurrentMonth] = useState<Date>(value || new Date());
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setSelectedDate(value || undefined);
    }, [value]);

    const updateDropdownPosition = () => {
      if (!isOpen || !inputRef.current || !dropdownRef.current) return;
      const { bottom, left, width } = inputRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      const win = getWindow();
      if (monthsToShow === 2) {
        Object.assign(dropdown.style, {
          position: "fixed",
          left: `${left}px`,
          top: `${bottom + 4}px`,
          minWidth: "500px",
          width: "auto",
          maxHeight: `${win.innerHeight - bottom - 8}px`,
          transform: "",
        });
      } else {
        Object.assign(dropdown.style, {
          position: "fixed",
          left: `${left + width / 2}px`,
          top: `${bottom + 4}px`,
          width: "320px",
          maxWidth: "100vw",
          maxHeight: `${win.innerHeight - bottom - 8}px`,
          transform: "translateX(-50%)",
        });
      }
    };

    useEffect(() => {
      const win = getWindow();
      const doc = getDocument();
      const handleScroll = () => {
        if (isOpen) updateDropdownPosition();
      };
      const handleResize = () => {
        if (isOpen) updateDropdownPosition();
      };
      const handleKeyDown = (e: Event) => {
        if ((e as KeyboardEvent).key === 'Escape' && isOpen) {
          setIsOpen(false);
          setShowYearDropdown(false);
        }
      };

      if (isOpen) {
        updateDropdownPosition();
        win.addEventListener("scroll", handleScroll, true);
        win.addEventListener("resize", handleResize);
        doc.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        win.removeEventListener("scroll", handleScroll, true);
        win.removeEventListener("resize", handleResize);
        doc.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen]);

    const handleDateSelect = (date: Date) => {
      const isRangeMode = rangeStart !== undefined && rangeEnd !== undefined;

      if (isRangeMode) {
        if (rangeStart && rangeEnd) {
          // If both dates are already selected, reset and start new range
          setSelectedDate(date);
          onChange?.(date);
          // Don't close dropdown to allow selecting end date
        } else if (rangeStart) {
          // If start date is selected, set end date
          const newEndDate = date;
          if (dayjs(newEndDate).isBefore(rangeStart)) {
            // If end date is before start date, swap them
            setSelectedDate(newEndDate);
            onChange?.(newEndDate);
          } else {
            setSelectedDate(newEndDate);
            onChange?.(newEndDate);
          }
          // Always close dropdown after end date is selected
          setIsOpen(false);
          setShowYearDropdown(false);
        } else {
          // Set start date
          setSelectedDate(date);
          onChange?.(date);
          // Don't close dropdown for start date selection
        }
      } else {
        // Single date mode
        setSelectedDate(date);
        onChange?.(date);
        // Always close dropdown after date selection in single mode
        setIsOpen(false);
        setShowYearDropdown(false);
      }
    };

    const handlePrevMonth = () => {
      setCurrentMonth(dayjs(currentMonth).subtract(1, "month").toDate());
    };
    const handleNextMonth = () => {
      setCurrentMonth(dayjs(currentMonth).add(1, "month").toDate());
    };

    const getDaysInMonth = (month: Date) => {
      const startOfMonth = dayjs(month).startOf("month");
      const endOfMonth = dayjs(month).endOf("month");
      const days: Date[] = [];
      let currentDate = startOfMonth;
      while (
        currentDate.isBefore(endOfMonth) ||
        currentDate.isSame(endOfMonth, "day")
      ) {
        days.push(currentDate.toDate());
        currentDate = currentDate.add(1, "day");
      }
      return days;
    };

    const isDateDisabled = (date: Date) => {
      if (minDate && dayjs(date).isBefore(minDate, "day")) return true;
      if (maxDate && dayjs(date).isAfter(maxDate, "day")) return true;
      return false;
    };

    const formatDate = () => {
      if (!selectedDate) return "";
      return dayjs(selectedDate).format("DD MMM YYYY");
    };

    const handleYearSelect = (year: number) => {
      const newDate = dayjs(currentMonth).year(year).toDate();
      setCurrentMonth(newDate);
      setShowYearDropdown(false);
    };

    const renderYearDropdown = () => {
      if (!showYearDropdown) return null;
      const currentYear = dayjs(currentMonth).year();
      const years = Array.from({ length: 50 }, (_, i) => currentYear - 25 + i);

      return (
        <div className="grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]">
          {years.map((year) => (
            <div
              key={year}
              onClick={() => handleYearSelect(year)}
              className={cn(
                year === currentYear && "bg-primary-50 text-primary",
                "text-sm cursor-pointer p-2"
              )}
            >
              {year}
            </div>
          ))}
        </div>
      );
    };

    const renderDropdown = () => {
      if (!isOpen) return null;
      const doc = getDocument();
      if (!("body" in doc)) return null;
      const months = Array.from({ length: monthsToShow }).map((_, idx) =>
        dayjs(currentMonth).add(idx, "month").toDate()
      );
      return createPortal(
        <>
          <div 
            className="fixed inset-0 z-[9998]"
            onClick={() => {
              if (!showYearDropdown) {
                setIsOpen(false);
              }
            }}
          />
          <div
            ref={dropdownRef}
            className="fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-2 border-b border-gray-200">
              <Button
                onClick={handlePrevMonth}
                variant="ghost"
                size="sm"
                leftIcon="mdi:chevron-left"
              />
              <div className="relative">
                <span className="font-medium text-gray-900">
                  {monthsToShow === 1 ? (
                    <div className="flex items-center gap-2">
                      <span>{dayjs(currentMonth).format("MMMM")}</span>
                      <div
                        className="cursor-pointer flex items-center gap-1"
                        onClick={() => setShowYearDropdown(!showYearDropdown)}
                      >
                        <span>{dayjs(currentMonth).format("YYYY")}</span>
                        <Button variant="ghost" size="sm" leftIcon={showYearDropdown ? "mdi:chevron-up" : "mdi:chevron-down"} />
                      </div>
                    </div>
                  ) : (
                    `${dayjs(currentMonth).format("MMMM YYYY")} - ${dayjs(
                      currentMonth
                    )
                      .add(monthsToShow - 1, "month")
                      .format("MMMM YYYY")}`
                  )}
                </span>
              </div>
              <Button
                onClick={handleNextMonth}
                variant="ghost"
                size="sm"
                rightIcon="mdi:chevron-right"
              />
            </div>
            {/* calendar body */}
            {showYearDropdown ? (
              renderYearDropdown()
            ) : (
              <div
                className={cn(
                  monthsToShow === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                )}
              >
                {months.map((month, idx) => {
                  const days = getDaysInMonth(month);
                  const firstDayOfMonth = dayjs(month).startOf("month").day();
                  return (
                    <div key={idx} className="flex flex-col">
                      <div className="grid grid-cols-7 gap-y-1 my-1">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                          (day, idx) => {
                            const weekend = idx === 0 || idx === 6;
                            return (
                              <div
                                key={day}
                                className={cn(
                                  "text-center text-xs font-medium text-neutral",
                                  weekend && "text-danger"
                                )}
                              >
                                {day}
                              </div>
                            );
                          }
                        )}
                        {Array.from({ length: firstDayOfMonth }).map(
                          (_, index) => (
                            <div key={`empty-${index}`} />
                          )
                        )}
                        {days.map((day) => {
                          const isSelected =
                            selectedDate &&
                            dayjs(day).isSame(selectedDate, "day");
                          const isDisabled = isDateDisabled(day);
                          const isCurrentMonth = dayjs(day).isSame(
                            month,
                            "month"
                          );
                          // Range styling
                          const inRange =
                            rangeStart &&
                            rangeEnd &&
                            dayjs(day).isSameOrAfter(rangeStart, "day") &&
                            dayjs(day).isSameOrBefore(rangeEnd, "day");
                          const isRangeStart =
                            rangeStart && dayjs(day).isSame(rangeStart, "day");
                          const isRangeEnd =
                            rangeEnd && dayjs(day).isSame(rangeEnd, "day");
                          const isWeekend =
                            dayjs(day).day() === 0 || dayjs(day).day() === 6;
                          const isModeRange = rangeStart && rangeEnd;

                          return (
                            <div className="flex flex-col items-center justify-center">
                              <div
                                className={cn(
                                  inRange && "rounded-none bg-primary-50",
                                  isModeRange && isRangeStart && "rounded-l-full",
                                  isModeRange && isRangeEnd && "rounded-r-full"
                                )}
                              >
                                <button
                                  key={day.toString()}
                                  onClick={() =>
                                    !isDisabled && handleDateSelect(day)
                                  }
                                  disabled={isDisabled}
                                  className={cn(
                                    "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                    isWeekend && "!text-danger",
                                    isSelected &&
                                      "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                    isSelected && !isModeRange && "rounded-full",
                                    !isSelected &&
                                      !isDisabled &&
                                      "hover:bg-primary-50 active:bg-primary-100",
                                    !isCurrentMonth && "text-neutral-400",
                                    isDisabled && "opacity-50 cursor-not-allowed",
                                    // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                    isModeRange &&
                                      isRangeStart &&
                                      "!bg-primary !text-white !rounded-full",
                                    isModeRange &&
                                      isRangeEnd &&
                                      "!bg-primary !text-white !rounded-full"
                                  )}
                                >
                                  {dayjs(day).format("D")}
                                </button>
                              </div>
                              {/* show price if exists TO BE DEVELOPED
                            displayType normal text neutral while HIGHLIGHT_CHEAP === text-success */}
                              {/* <div
                              className={cn(
                                "text-[10px] text-neutral",
                                id === 15 && "text-success"
                              )}
                            >
                              1 BTC
                            </div> */}
                            </div>
                          );
                        })}
                      </div>
                      {/* calendarFooter accepts reactnode */}
                      {calendarFooter}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>,
        doc.body
      );
    };

    const inputField = (
      <div
        className={cn("relative", !fullWidth && "inline-block")}
        ref={inputRef}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral">
            <Icon icon={leftIcon} className="w-4 h-4" />
          </div>
        )}
        <input
          ref={ref}
          type="text"
          value={valueFormatter ? valueFormatter() : formatDate()}
          placeholder={placeholder}
          readOnly
          className={cn(
            primitiveDatePickerVariants({ variant, size, rounded, fullWidth }),
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            className
          )}
          disabled={disabled}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral">
            <Icon icon={rightIcon} className="w-4 h-4" />
          </div>
        )}
      </div>
    );

    const helperOrError = (
      <>
        {errorText && <p className="mt-1 text-xs text-danger">{errorText}</p>}
        {!errorText && helperText && (
          <p className="mt-1 text-xs text-neutral">{helperText}</p>
        )}
      </>
    );

    if (labelPlacement === "left") {
      return (
        <div
          className={cn(fullWidth ? "w-full" : "inline-block", className)}
          ref={wrapperRef}
        >
          <div className="flex items-start gap-4">
            {label && (
              <label className="block text-sm text-neutral-900 pt-2">
                {label}
                {required && <span className="text-danger ml-0.5">*</span>}
              </label>
            )}
            <div className={cn("flex-1", !fullWidth && "inline-block")}>
              {inputField}
              {helperOrError}
            </div>
          </div>
          {renderDropdown()}
        </div>
      );
    }

    return (
      <div
        className={cn(fullWidth ? "w-full" : "inline-block", className)}
        ref={wrapperRef}
      >
        {label && (
          <label className="mb-1.5 block text-sm text-neutral-900">
            {label}
            {required && <span className="text-danger ml-0.5">*</span>}
          </label>
        )}
        {inputField}
        {helperOrError}
        {renderDropdown()}
      </div>
    );
  }
);

PrimitiveDatePicker.displayName = "PrimitiveDatePicker";
