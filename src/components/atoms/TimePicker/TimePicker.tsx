import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import { Button } from '../Button';
import { Icon } from '../Icons/Icons';
import { getWindow, getDocument } from '../../../utils/ssr';

// Create a custom event for timepicker dropdown management
const TIMEPICKER_OPEN_EVENT = 'timepicker-dropdown-opened';

const timePickerVariants = cva(
  'border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50',
        error: 'border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50',
        success: 'border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50',
        ghost: 'border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50',
        underline: 'border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent',
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

export interface PrimitiveTimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> {
  /** The selected time value */
  value?: string;
  /** Callback when time is selected */
  onChange?: (time: string) => void;
  /** Whether to use 24-hour format */
  use24Hour?: boolean;
  /** Visual style variant */
  variant?: 'default' | 'error' | 'success' | 'ghost' | 'underline';
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
  /** Icon to display on the left side of the input */
  leftIcon?: string;
  /** Icon to display on the right side of the input */
  rightIcon?: string;
  /** Custom formatter for the displayed time value */
  valueFormatter?: (time: string) => string;
  /** Whether to close the dropdown after selection */
  closeOnSelect?: boolean;
}

export const PrimitiveTimePicker = forwardRef<HTMLInputElement, PrimitiveTimePickerProps>(
  (
    {
      value,
      onChange,
      use24Hour = false,
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
      placeholder = 'Select time',
      leftIcon,
      rightIcon,
      valueFormatter,
      closeOnSelect = true,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState(value || '');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isAM, setIsAM] = useState(true);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const reactId = React.useId();
    const id = `timepicker-${reactId.replace(/:/g, '')}`;

    const updateDropdownPosition = () => {
      if (!isOpen || !inputRef.current || !dropdownRef.current) return;

      const inputRect = inputRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      const dropdownHeight = dropdown.offsetHeight;
      const win = getWindow();

      const spaceBelow = win.innerHeight - inputRect.bottom;
      const spaceAbove = inputRect.top;
      const touchesBottom = inputRect.bottom + dropdownHeight + 4 >= win.innerHeight;
      const hasMoreSpaceAbove = spaceAbove > spaceBelow;
      const shouldFlip = touchesBottom && hasMoreSpaceAbove;

      // Always position below the input
      dropdown.style.top = `${inputRect.bottom + 4}px`;
      dropdown.style.bottom = 'auto';
      dropdown.style.left = `${inputRect.left}px`;
      dropdown.style.maxHeight = `${spaceBelow - 8}px`;
      dropdown.style.width = `${inputRect.width}px`;
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

      const handleOtherTimePickerOpen = (e: Event) => {
        const customEvent = e as CustomEvent;
        if (customEvent.detail.id !== id) {
          setIsOpen(false);
        }
      };

      const handleClickOutside = (e: Event) => {
        const target = e.target as HTMLElement;
        if (
          wrapperRef.current &&
          dropdownRef.current &&
          !wrapperRef.current.contains(target) &&
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

      doc.addEventListener(TIMEPICKER_OPEN_EVENT, handleOtherTimePickerOpen);
      doc.addEventListener('mousedown', handleClickOutside);

      return () => {
        win.removeEventListener('scroll', handleScroll, true);
        win.removeEventListener('resize', handleResize);
        doc.removeEventListener(TIMEPICKER_OPEN_EVENT, handleOtherTimePickerOpen);
        doc.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, id]);

    const handleOpen = () => {
      if (disabled) return;
      
      if (!isOpen) {
        const doc = getDocument();
        doc.dispatchEvent(
          new CustomEvent(TIMEPICKER_OPEN_EVENT, {
            detail: { id },
          })
        );
      }
      
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      if (value) {
        setSelectedTime(value);
        const [h, m] = value.split(':').map(Number);
        if (use24Hour) {
          setHours(h);
        } else {
          setHours(h % 12 || 12);
          setIsAM(h < 12);
        }
        setMinutes(m);
      }
    }, [value, use24Hour]);

    const handleTimeSelect = () => {
      const formattedHours = use24Hour ? hours : isAM ? hours : hours + 12;
      const time = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      setSelectedTime(time);
      onChange?.(time);
      if (closeOnSelect) {
        setIsOpen(false);
      }
    };

    const generateHours = () => {
      return use24Hour ? Array.from({ length: 24 }, (_, i) => i) : Array.from({ length: 12 }, (_, i) => i + 1);
    };

    const generateMinutes = () => {
      return Array.from({ length: 60 }, (_, i) => i);
    };

    const displayValue = valueFormatter ? valueFormatter(selectedTime) : selectedTime;

    const doc = getDocument();
    if (!('body' in doc)) return null;

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
        <div ref={inputRef} className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 flex items-center justify-center">
              <Icon icon={leftIcon} size={20} />
            </div>
          )}
          <input
            ref={ref}
            type="text"
            value={displayValue}
            placeholder={placeholder}
            onClick={handleOpen}
            readOnly
            className={cn(
              timePickerVariants({ variant, size, rounded, fullWidth }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              'text-left'
            )}
            disabled={disabled}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 flex items-center justify-center">
              <Icon icon={rightIcon} size={20} />
            </div>
          )}
        </div>
        {isOpen &&
          createPortal(
            <div
              ref={dropdownRef}
              className="fixed z-[9999] min-w-[320px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className={cn(
                  "grid gap-4 text-sm font-medium text-gray-500",
                  use24Hour ? "grid-cols-2" : "grid-cols-3"
                )}>
                  <span>Hours</span>
                  <span>Minutes</span>
                  {!use24Hour && <span>AM/PM</span>}
                </div>
                <div className={cn(
                  "flex mt-2",
                  use24Hour ? "justify-center gap-8" : "justify-center gap-4"
                )}>
                  <div className="w-24 flex flex-col">
                    <div className="overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full" style={{ maxHeight: '200px' }}>
                      <div className="flex flex-col gap-1 py-1">
                        {generateHours().map((h) => (
                          <Button
                            key={h}
                            variant="ghost"
                            onClick={() => setHours(h)}
                            className={cn(
                              'px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start',
                              hours === h && 'bg-primary-100 text-primary-700'
                            )}
                          >
                            {h.toString().padStart(2, '0')}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-24 flex flex-col">
                    <div className="overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full" style={{ maxHeight: '200px' }}>
                      <div className="flex flex-col gap-1 py-1">
                        {generateMinutes().map((m) => (
                          <Button
                            key={m}
                            variant="ghost"
                            onClick={() => setMinutes(m)}
                            className={cn(
                              'px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start',
                              minutes === m && 'bg-primary-100 text-primary-700'
                            )}
                          >
                            {m.toString().padStart(2, '0')}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {!use24Hour && (
                    <div className="w-24 flex flex-col gap-2">
                      <Button
                        variant="ghost"
                        onClick={() => setIsAM(true)}
                        className={cn(
                          'px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start',
                          isAM && 'bg-primary-100 text-primary-700'
                        )}
                      >
                        AM
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setIsAM(false)}
                        className={cn(
                          'px-3 py-1.5 text-sm rounded hover:bg-gray-100 w-full justify-start',
                          !isAM && 'bg-primary-100 text-primary-700'
                        )}
                      >
                        PM
                      </Button>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="primary"
                    onClick={handleTimeSelect}
                    size="sm"
                  >
                    Select
                  </Button>
                </div>
              </div>
            </div>,
            doc.body
          )}
        {errorText && <p className="mt-1 text-sm text-danger-600">{errorText}</p>}
        {helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

PrimitiveTimePicker.displayName = 'PrimitiveTimePicker';

export interface TimePickerProps extends Omit<PrimitiveTimePickerProps, 'onChange' | 'value'> {
  /** The selected time value */
  value?: string;
  /** Callback when time is selected */
  onChange?: (time: string) => void;
  /** Custom formatter for the displayed time value */
  valueFormatter?: (time: string) => string;
  /** Whether to close the dropdown after selection */
  closeOnSelect?: boolean;
}

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  valueFormatter,
  closeOnSelect,
  ...props
}) => {
  return (
    <PrimitiveTimePicker
      value={value}
      onChange={onChange}
      valueFormatter={valueFormatter}
      closeOnSelect={closeOnSelect}
      {...props}
    />
  );
};

TimePicker.displayName = 'TimePicker';