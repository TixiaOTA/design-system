import React, { forwardRef, useState, Children, isValidElement, cloneElement, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Icon } from '../../atoms/Icons/Icons';
import { SelectItem, SelectItemProps } from '../SelectItem';

// Create a custom event for select dropdown management
const SELECT_OPEN_EVENT = 'select-dropdown-opened';

export type SelectPosition = 'bottom' | 'top' | 'left' | 'right';

const selectVariants = cva(
  'w-full rounded-md border bg-white px-3 py-2 text-sm ring-0 transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50',
        error: 'border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50',
        success: 'border-success-500 hover:border-success-600 focus:border-success-600',
      },
      size: {
        sm: 'h-8 px-2 py-1 text-sm',
        md: 'h-10 px-3 py-2 text-base',
        lg: 'h-12 px-4 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export type SelectVariant = 'default' | 'error' | 'success';
export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'>,
    VariantProps<typeof selectVariants> {
  /** Options for the select */
  options?: SelectOption[];
  /** Label for the select */
  label?: string;
  /** Error message to display */
  error?: boolean | string;
  /** Helper text to display below select */
  helperText?: string;
  /** Whether the select is required */
  required?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Position of the dropdown */
  position?: SelectPosition;
  variant?: SelectVariant;
  size?: SelectSize;
  /** Children components (SelectItem) */
  children?: React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      options,
      label,
      error = false,
      helperText,
      required = false,
      placeholder,
      value,
      onChange,
      disabled = false,
      position = 'bottom',
      children,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const reactId = React.useId();
    const id = `select-${reactId.replace(/:/g, '')}`;

    const updateDropdownPosition = () => {
      if (isOpen && buttonRef.current && dropdownRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdown = dropdownRef.current;

        if (position === 'bottom') {
          dropdown.style.position = 'fixed';
          dropdown.style.top = `${buttonRect.bottom + 4}px`;
          dropdown.style.left = `${buttonRect.left}px`;
          dropdown.style.width = `${buttonRect.width}px`;
          dropdown.style.maxHeight = `${window.innerHeight - buttonRect.bottom - 8}px`;
        } else if (position === 'top') {
          dropdown.style.position = 'fixed';
          dropdown.style.bottom = `${window.innerHeight - buttonRect.top + 4}px`;
          dropdown.style.left = `${buttonRect.left}px`;
          dropdown.style.width = `${buttonRect.width}px`;
          dropdown.style.maxHeight = `${buttonRect.top - 8}px`;
        } else if (position === 'left') {
          dropdown.style.position = 'fixed';
          dropdown.style.right = `${window.innerWidth - buttonRect.left + 4}px`;
          dropdown.style.top = `${buttonRect.top}px`;
          dropdown.style.maxHeight = `${window.innerHeight - buttonRect.top - 8}px`;
        } else if (position === 'right') {
          dropdown.style.position = 'fixed';
          dropdown.style.left = `${buttonRect.right + 4}px`;
          dropdown.style.top = `${buttonRect.top}px`;
          dropdown.style.maxHeight = `${window.innerHeight - buttonRect.top - 8}px`;
        }
      }
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

      if (isOpen) {
        updateDropdownPosition();
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleResize);
      }

      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
      };
    }, [isOpen, position]);

    useEffect(() => {
      const handleOtherSelectOpen = (e: Event) => {
        const customEvent = e as CustomEvent;
        if (customEvent.detail.id !== id) {
          setIsOpen(false);
        }
      };

      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const selectButton = buttonRef.current;
        const dropdown = dropdownRef.current;

        if (
          selectButton &&
          dropdown &&
          !selectButton.contains(target) &&
          !dropdown.contains(target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener(SELECT_OPEN_EVENT, handleOtherSelectOpen);
      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener(SELECT_OPEN_EVENT, handleOtherSelectOpen);
        document.removeEventListener('click', handleClickOutside);
      };
    }, [id]);

    const handleOpen = () => {
      if (disabled) return;
      
      if (isOpen) {
        setIsOpen(false);
        return;
      }

      document.dispatchEvent(
        new CustomEvent(SELECT_OPEN_EVENT, {
          detail: { id },
        })
      );
      
      setIsOpen(true);
    };

    const getSelectedLabel = () => {
      if (options) {
        const selectedOption = options.find((option) => option.value === value);
        return selectedOption?.label;
      }
      
      if (children) {
        const childArray = Children.toArray(children);
        const selectedChild = childArray.find(
          (child) => 
            isValidElement<SelectItemProps>(child) && 
            'value' in child.props && 
            child.props.value === value
        );
        return isValidElement(selectedChild) ? selectedChild.props.children : null;
      }
      
      return null;
    };

    const handleSelect = (value: string) => {
      if (disabled) return;
      console.log({value});
      onChange?.(value);
      setIsOpen(false);
    };

    const renderOptions = () => {
      if (options) {
        return options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            selected={option.value === value}
            onClick={() => handleSelect(option.value)}
          >
            <div className="flex items-center gap-2">
              {option.icon}
              {option.label}
            </div>
          </SelectItem>
        ));
      }

      if (children) {
        return Children.map(children, (child) => {
          if (isValidElement<SelectItemProps>(child) && 'value' in child.props) {
            return cloneElement(child, {
              selected: child.props.value === value,
              onClick: () => handleSelect(child.props.value),
            });
          }
          return null;
        });
      }

      return null;
    };

    const renderDropdown = () => {
      if (!isOpen || disabled) return null;

      const dropdown = (
        <div
          ref={dropdownRef}
          className={cn(
            'fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg',
            position === 'left' || position === 'right' ? 'w-max' : 'w-full'
          )}
          onClick={(e) => e.stopPropagation()}
          style={{
            overflowY: 'auto',
          }}
        >
          {renderOptions()}
        </div>
      );

      return createPortal(dropdown, document.body);
    };

    return (
      <div className="w-full" ref={ref} {...props}>
        {label && (
          <label
            htmlFor={id}
            className="mb-1.5 block text-sm text-neutral-900"
          >
            {label}
            {required && <span className="text-danger-500 ml-0.5">*</span>}
          </label>
        )}
        <div className="relative">
          <button
            id={id}
            ref={buttonRef}
            type="button"
            className={cn(
              selectVariants({ variant: error ? 'error' : variant, size }),
              'flex w-full items-center justify-between',
              disabled && 'cursor-not-allowed opacity-50',
              className
            )}
            onClick={handleOpen}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
            disabled={disabled}
          >
            <span className="flex items-center text-neutral-500 gap-2 min-w-0 flex-1">
              <span className="truncate">
                {getSelectedLabel() || placeholder}
              </span>
            </span>
            <Icon
              icon="mdi:chevron-down"
              className={cn('transition-transform flex-shrink-0 ml-2', isOpen && 'rotate-180')}
            />
          </button>
          {renderDropdown()}
        </div>
        {error && (
          <p className="mt-1 text-xs text-danger-500" id={`${id}-error`}>
            {error}
          </p>
        )}
        {!error && helperText && (
          <p className="mt-1 text-xs text-neutral-500" id={`${id}-helper`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select }; 