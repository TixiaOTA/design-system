import { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import dayjs from 'dayjs';
import { Icon } from '../../atoms/Icons/Icons';
import { getWindow, getDocument } from '../../../utils/ssr';

const datePickerVariants = cva(
  'border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50',
        error: 'border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50',
        success: 'border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50',
      },
      size: {
        sm: 'h-8 px-2 py-1 text-sm',
        md: 'h-10 px-3 py-2 text-base',
        lg: 'h-12 px-4 py-3 text-lg',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'md',
      fullWidth: true,
    },
  }
);

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
  /** Border radius of the input */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
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

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value,
      endDate,
      onChange,
      onEndDateChange,
      isRangeSelection = false,
      minDate,
      maxDate,
      variant = 'default',
      size = 'md',
      rounded = 'md',
      disabled = false,
      errorText,
      helperText,
      label,
      required = false,
      labelPlacement = 'top',
      fullWidth = false,
      className,
      placeholder = 'Select date',
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(endDate || null);
    const [currentMonth, setCurrentMonth] = useState<Date>(value || new Date());
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const updateDropdownPosition = () => {
      if (!isOpen || !inputRef.current || !dropdownRef.current) return;

      const { bottom, left, width } = inputRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      const win = getWindow();
      
      Object.assign(dropdown.style, {
        position: 'fixed',
        left: `${left}px`,
        top: `${bottom + 4}px`,
        width: `${width}px`,
        maxHeight: `${win.innerHeight - bottom - 8}px`,
      });
    };

    useEffect(() => {
      const win = getWindow();
      const doc = getDocument();

      const handleScroll = () => {
        if (isOpen) {
          updateDropdownPosition();
        }
      };

      const handleResize = () => {
        if (isOpen) {
          updateDropdownPosition();
        }
      };

      const handleClickOutside = (e: Event) => {
        const target = e.target as HTMLElement;
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(target) &&
          dropdownRef.current &&
          !dropdownRef.current.contains(target)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        updateDropdownPosition();
        win.addEventListener('scroll', handleScroll, true);
        win.addEventListener('resize', handleResize);
      }

      doc.addEventListener('click', handleClickOutside);

      return () => {
        win.removeEventListener('scroll', handleScroll, true);
        win.removeEventListener('resize', handleResize);
        doc.removeEventListener('click', handleClickOutside);
      };
    }, [isOpen]);

    const handleDateSelect = (date: Date) => {
      if (isRangeSelection) {
        if (!selectedDate) {
          setSelectedDate(date);
          onChange?.(date);
        } else {
          if (dayjs(date).isBefore(selectedDate)) {
            setSelectedEndDate(selectedDate);
            setSelectedDate(date);
            onChange?.(date);
            onEndDateChange?.(selectedDate);
          } else {
            setSelectedEndDate(date);
            onEndDateChange?.(date);
          }
          setIsOpen(false);
        }
      } else {
        setSelectedDate(date);
        onChange?.(date);
        setIsOpen(false);
      }
    };

    const handlePrevMonth = () => {
      setCurrentMonth(dayjs(currentMonth).subtract(1, 'month').toDate());
    };

    const handleNextMonth = () => {
      setCurrentMonth(dayjs(currentMonth).add(1, 'month').toDate());
    };

    const getDaysInMonth = () => {
      const startOfMonth = dayjs(currentMonth).startOf('month');
      const endOfMonth = dayjs(currentMonth).endOf('month');
      const days: Date[] = [];
      let currentDate = startOfMonth;

      while (currentDate.isBefore(endOfMonth) || currentDate.isSame(endOfMonth, 'day')) {
        days.push(currentDate.toDate());
        currentDate = currentDate.add(1, 'day');
      }

      return days;
    };

    const isDateDisabled = (date: Date) => {
      if (minDate && dayjs(date).isBefore(minDate, 'day')) return true;
      if (maxDate && dayjs(date).isAfter(maxDate, 'day')) return true;
      return false;
    };

    const days = getDaysInMonth();
    const firstDayOfMonth = dayjs(currentMonth).startOf('month').day();

    const formatDateRange = () => {
      if (!selectedDate) return '';
      const start = dayjs(selectedDate).format('DD MMM YYYY');
      if (isRangeSelection && selectedEndDate) {
        return `${start} - ${dayjs(selectedEndDate).format('DD MMM YYYY')}`;
      }
      return start;
    };

    const renderDropdown = () => {
      if (!isOpen) return null;

      const doc = getDocument();
      if (!('body' in doc)) return null;

      return createPortal(
        <div
          ref={dropdownRef}
          className="fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg"
        >
          <div className="flex items-center justify-between p-2 border-b border-gray-200">
            <button
              onClick={handlePrevMonth}
              className="p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200"
            >
              <Icon
                icon="mdi:chevron-left"
                className="w-5 h-5 text-neutral-600"
              />
            </button>
            <span className="font-medium text-gray-900">
              {dayjs(currentMonth).format('MMMM YYYY')}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-1 rounded-full hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200"
            >
              <Icon
                icon="mdi:chevron-right"
                className="w-5 h-5 text-neutral-600"
              />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 p-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500"
              >
                {day}
              </div>
            ))}

            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} />
            ))}

            {days.map((day) => {
              const isSelected = selectedDate && dayjs(day).isSame(selectedDate, 'day');
              const isDisabled = isDateDisabled(day);
              const isCurrentMonth = dayjs(day).isSame(currentMonth, 'month');

              return (
                <button
                  key={day.toString()}
                  onClick={() => !isDisabled && handleDateSelect(day)}
                  disabled={isDisabled}
                  className={cn(
                    'p-2 rounded-full text-sm transition-colors duration-200',
                    isSelected && 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
                    !isSelected && !isDisabled && 'hover:bg-primary-50 active:bg-primary-100',
                    !isCurrentMonth && 'text-neutral-400',
                    isDisabled && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {dayjs(day).format('D')}
                </button>
              );
            })}
          </div>
        </div>,
        doc.body
      );
    };

    return (
      <div ref={wrapperRef} className={cn('relative', fullWidth && 'w-full', className)}>
        {label && (
          <label
            className={cn(
              'block text-sm font-medium text-gray-700 mb-1',
              labelPlacement === 'left' && 'inline-block mr-2'
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div ref={inputRef}>
          <input
            ref={ref}
            type="text"
            value={formatDateRange()}
            placeholder={placeholder}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            readOnly
            className={cn(datePickerVariants({ variant, size, rounded, fullWidth }))}
            disabled={disabled}
            {...props}
          />
        </div>

        {renderDropdown()}

        {errorText && (
          <p className="mt-1 text-sm text-red-500">{errorText}</p>
        )}
        {helperText && !errorText && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker'; 