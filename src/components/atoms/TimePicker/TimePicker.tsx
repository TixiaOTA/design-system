import { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Button } from '../Button';

const timePickerVariants = cva(
  'rounded-md border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
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
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: true,
    },
  }
);

export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** The selected time value */
  value?: string;
  /** Callback when time is selected */
  onChange?: (time: string) => void;
  /** Time format to display */
  format?: '12h' | '24h';
  /** Visual style variant */
  variant?: 'default' | 'error' | 'success';
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
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

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      value,
      onChange,
      format = '12h',
      variant = 'default',
      size = 'md',
      disabled = false,
      errorText,
      helperText,
      label,
      required = false,
      labelPlacement = 'top',
      fullWidth = false,
      className,
      placeholder = 'Select time',
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState<string | null>(value || null);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [isAM, setIsAM] = useState(true);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const updateDropdownPosition = () => {
      if (!isOpen || !inputRef.current || !dropdownRef.current) return;

      const { bottom, left, width } = inputRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      
      Object.assign(dropdown.style, {
        position: 'fixed',
        left: `${left}px`,
        top: `${bottom + 4}px`,
        width: `${width}px`,
        maxHeight: `${window.innerHeight - bottom - 8}px`,
      });
    };

    useEffect(() => {
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

      const handleClickOutside = (e: MouseEvent) => {
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
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleResize);
      }

      document.addEventListener('click', handleClickOutside);

      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isOpen]);

    const handleTimeSelect = () => {
      const formattedHours = format === '12h' ? (isAM ? hours : hours + 12) : hours;
      const time = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      setSelectedTime(time);
      onChange?.(time);
      setIsOpen(false);
    };

    const generateHours = () => {
      return format === '12h' ? Array.from({ length: 12 }, (_, i) => i + 1) : Array.from({ length: 24 }, (_, i) => i);
    };

    const generateMinutes = () => {
      return Array.from({ length: 60 }, (_, i) => i);
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
            value={selectedTime || ''}
            placeholder={placeholder}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            readOnly
            className={cn(timePickerVariants({ variant, size, fullWidth }))}
            disabled={disabled}
            {...props}
          />
        </div>

        {isOpen &&
          createPortal(
            <div
              ref={dropdownRef}
              className="fixed z-[9999] bg-white border border-neutral-200 rounded-md shadow-lg w-[280px]"
            >
              <div className="p-4">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between text-sm font-medium text-neutral-900">
                    <span>Hours</span>
                    <span>Minutes</span>
                    {format === '12h' && <span>AM/PM</span>}
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="w-20 h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-neutral-50">
                      {generateHours().map((hour) => (
                        <Button
                          key={hour}
                          variant={hours === hour ? 'primary' : 'ghost'}
                          size="sm"
                          className="w-full justify-center"
                          onClick={() => setHours(hour)}
                        >
                          {hour.toString().padStart(2, '0')}
                        </Button>
                      ))}
                    </div>
                    <div className="w-20 h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-neutral-50">
                      {generateMinutes().map((minute) => (
                        <Button
                          key={minute}
                          variant={minutes === minute ? 'primary' : 'ghost'}
                          size="sm"
                          className="w-full justify-center"
                          onClick={() => setMinutes(minute)}
                        >
                          {minute.toString().padStart(2, '0')}
                        </Button>
                      ))}
                    </div>
                    {format === '12h' && (
                      <div className="w-20 flex flex-col gap-2">
                        <Button
                          variant={isAM ? 'primary' : 'ghost'}
                          size="sm"
                          className="w-full justify-center"
                          onClick={() => setIsAM(true)}
                        >
                          AM
                        </Button>
                        <Button
                          variant={!isAM ? 'primary' : 'ghost'}
                          size="sm"
                          className="w-full justify-center"
                          onClick={() => setIsAM(false)}
                        >
                          PM
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end p-4 border-t border-neutral-200">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleTimeSelect}
                >
                  Select
                </Button>
              </div>
            </div>,
            document.body
          )}

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

TimePicker.displayName = 'TimePicker'; 