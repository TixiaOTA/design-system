import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import { Input } from '../Input/Input';
import { SelectItem } from '../SelectItem/SelectItem';

// Create a custom event for autocomplete dropdown management
const AUTOCOMPLETE_OPEN_EVENT = 'autocomplete-dropdown-opened';

const dropdownVariants = cva(
  'fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg',
  {
    variants: {
      position: {
        bottom: 'top-full',
        top: 'bottom-full',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);

export interface AutoCompleteProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onSelect'> {
  /** Options to display in the dropdown */
  options: Array<{ value: string; label: string }>;
  /** Callback when an option is selected */
  onSelect?: (value: string) => void;
  /** Whether the dropdown is open */
  isOpen?: boolean;
  /** Position of the dropdown relative to the input */
  dropdownPosition?: 'top' | 'bottom';
  /** Whether to show loading state */
  loading?: boolean;
  /** Custom render function for options */
  renderOption?: (option: { value: string; label: string }) => React.ReactNode;
  /** Input variant that determines the visual style */
  variant?: 'default' | 'error' | 'success' | 'ghost' | 'underline';
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Border radius of the input */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Icon to display on the left side of the input */
  leftIcon?: string;
  /** Icon to display on the right side of the input */
  rightIcon?: string;
  /** Whether the input is in an error state */
  error?: boolean;
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
  /** Whether to show clear icon when there's input */
  showClear?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
}

interface AutoCompleteOpenEvent extends CustomEvent {
  detail: {
    id: string;
  };
}

const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>(
  (
    {
      className,
      options,
      onSelect,
      isOpen: controlledIsOpen,
      dropdownPosition = 'bottom',
      loading = false,
      renderOption,
      variant = 'default',
      size = 'md',
      rounded = 'md',
      leftIcon,
      rightIcon,
      error = false,
      errorText,
      helperText,
      label,
      required = false,
      labelPlacement = 'top',
      fullWidth = false,
      value,
      onChange,
      onFocus,
      onBlur,
      showClear = false,
      onClear,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value as string || '');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const isControlled = controlledIsOpen !== undefined;
    const reactId = React.useId();
    const id = `autocomplete-${reactId.replace(/:/g, '')}`;

    const updateDropdownPosition = () => {
      if (!isOpen || !inputRef.current || !dropdownRef.current) return;

      const { bottom, top, left, width } = inputRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      const commonStyles = {
        position: 'fixed',
        left: `${left}px`,
        width: `${width}px`,
      };

      const styles = dropdownPosition === 'bottom'
        ? {
            ...commonStyles,
            top: `${bottom + 4}px`,
            maxHeight: `${window.innerHeight - bottom - 8}px`,
          }
        : {
            ...commonStyles,
            bottom: `${window.innerHeight - top + 4}px`,
            maxHeight: `${top - 8}px`,
          };

      Object.assign(dropdown.style, styles);
    };

    useEffect(() => {
      setInputValue(value as string || '');
    }, [value]);

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

      const handleOtherAutocompleteOpen = (e: Event) => {
        const customEvent = e as AutoCompleteOpenEvent;
        if (customEvent.detail.id !== id) {
          setIsOpen(false);
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

      document.addEventListener(AUTOCOMPLETE_OPEN_EVENT, handleOtherAutocompleteOpen);
      document.addEventListener('click', handleClickOutside);

      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener(AUTOCOMPLETE_OPEN_EVENT, handleOtherAutocompleteOpen);
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isOpen, id]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInputValue(value);
      
      if (!value.trim()) {
        setIsOpen(false);
        return;
      }
      
      setIsOpen(true);
      onChange?.(event);
    };

    const handleClear = (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setInputValue('');
      onClear?.();
      const syntheticEvent = new Event('change') as unknown as React.ChangeEvent<HTMLInputElement>;
      syntheticEvent.target = { value: '' } as HTMLInputElement;
      onChange?.(syntheticEvent);
    };

    const handleSelect = (option: { value: string; label: string }) => {
      if (!option) return;
      
      const { value, label } = option;
      setInputValue(label);
      setIsOpen(false);
      onSelect?.(value);

      const selectEvent = new CustomEvent('autocomplete-select', {
        detail: { selectedOption: option }
      });
      inputRef.current?.dispatchEvent(selectEvent);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!isControlled) {
        document.dispatchEvent(
          new CustomEvent(AUTOCOMPLETE_OPEN_EVENT, {
            detail: { id },
          })
        );
        setIsOpen(true);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
    };

    const filteredOptions = options.filter(({ label }) => 
      label.toLowerCase().includes((inputValue || '').toLowerCase().trim())
    );

    const showDropdown = isControlled ? controlledIsOpen : isOpen;

    // Determine if we should show the clear button
    const shouldShowClear = showClear && inputValue && !props.disabled && !props.readOnly;

    // If we have a clear button and a right icon, use the clear button instead
    const effectiveRightIcon = shouldShowClear ? 'mdi:close' : rightIcon;

    const renderDropdown = () => {
      if (!showDropdown) return null;

      const dropdown = (
        <div
          ref={dropdownRef}
          className={cn(
            dropdownVariants({ position: dropdownPosition }),
            'overflow-auto'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {loading ? (
            <div className="flex items-center justify-center py-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
            </div>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                selected={option.label === inputValue}
                onClick={() => handleSelect(option)}
              >
                {renderOption ? renderOption(option) : option.label}
              </SelectItem>
            ))
          ) : (
            <div className="px-2 py-2 text-sm text-neutral-500">No options found</div>
          )}
        </div>
      );

      return createPortal(dropdown, document.body);
    };

    return (
      <div ref={wrapperRef} className={cn("relative", fullWidth ? "w-full" : "inline-block")}>
        <div ref={inputRef} className={cn(!fullWidth && "inline-block")}>
          <Input
            ref={ref}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            variant={variant}
            size={size}
            rounded={rounded}
            leftIcon={leftIcon}
            rightIcon={effectiveRightIcon}
            error={error}
            errorText={errorText}
            helperText={helperText}
            label={label}
            required={required}
            labelPlacement={labelPlacement}
            fullWidth={fullWidth}
            className={className}
            {...props}
            onClick={shouldShowClear ? handleClear : props.onClick}
          />
        </div>
        {renderDropdown()}
      </div>
    );
  }
);

AutoComplete.displayName = 'AutoComplete';

export { AutoComplete };
