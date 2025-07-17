import React, { forwardRef, useState, useRef, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { Icon } from "../../atoms/Icons/Icons";
import { createPortal } from "react-dom";
import { COUNTRIES } from "./constant";

const phoneInputVariants = cva(
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

export type PhoneInputVariant =
  | "default"
  | "error"
  | "success"
  | "ghost"
  | "underline";
export type PhoneInputSize = "sm" | "md" | "lg";
export type PhoneInputRounded = "none" | "sm" | "md" | "lg" | "full";

export interface PhoneInputProps {
  /** Visual style variant */
  variant?: PhoneInputVariant;
  /** Size of the input */
  size?: PhoneInputSize;
  /** Border radius of the input */
  rounded?: PhoneInputRounded;
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
  /** Whether the input should take full width */
  fullWidth?: boolean;
  /** Current phone number value */
  value?: string;
  /** Callback when phone number changes */
  onChange?: (phone: string) => void;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Default country code */
  defaultCountry?: string;
  /** Custom class name */
  className?: string;
  /** Placeholder for the phone number input */
  placeholder?: string;
}

export const PhoneInput = forwardRef<HTMLDivElement, PhoneInputProps>(
  ({
    className,
    variant = "default",
    size = "md",
    rounded = "md",
    error = false,
    errorText,
    helperText,
    label,
    required = false,
    fullWidth = false,
    value = "",
    onChange,
    disabled = false,
    defaultCountry = "id",
    placeholder = "Enter phone number",
    ...props
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(
      () =>
        COUNTRIES.find((country) => country.iso === defaultCountry) ||
        COUNTRIES[0]
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(() => {
      const dialCode = selectedCountry.code;
      return value.startsWith(dialCode) ? value.slice(dialCode.length) : value;
    });

    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const id = React.useId();
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;

    const filteredCountries = COUNTRIES.filter(
      (country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.includes(searchQuery)
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const updateDropdownPosition = () => {
      if (isOpen && buttonRef.current && dropdownRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdown = dropdownRef.current;
        const win =
          typeof window !== "undefined"
            ? window
            : { innerHeight: 0, innerWidth: 0 };
        const spaceBelow = win.innerHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;
        const dropdownBottom =
          buttonRect.bottom + (dropdown.offsetHeight || 0) + 4;
        const touchesBottom = dropdownBottom >= win.innerHeight;
        const hasMoreSpaceAbove = spaceAbove > spaceBelow;
        const shouldFlip = touchesBottom && hasMoreSpaceAbove;
        dropdown.style.position = "fixed";
        dropdown.style.left = `${buttonRect.left}px`;
        dropdown.style.minWidth = `${buttonRect.width}px`;
        dropdown.style.maxWidth = "340px"; // or any reasonable max width
        dropdown.style.width = "auto";
        if (shouldFlip) {
          dropdown.style.bottom = `${win.innerHeight - buttonRect.top + 4}px`;
          dropdown.style.top = "auto";
          dropdown.style.maxHeight = `${spaceAbove - 8}px`;
        } else {
          dropdown.style.top = `${buttonRect.bottom + 4}px`;
          dropdown.style.bottom = "auto";
          dropdown.style.maxHeight = `${spaceBelow - 8}px`;
        }
      }
    };

    useEffect(() => {
      const win = typeof window !== "undefined" ? window : undefined;
      const handleScroll = () => {
        if (isOpen) updateDropdownPosition();
      };
      const handleResize = () => {
        if (isOpen) updateDropdownPosition();
      };
      if (isOpen) {
        updateDropdownPosition();
        win?.addEventListener("scroll", handleScroll, true);
        win?.addEventListener("resize", handleResize);
      }
      return () => {
        win?.removeEventListener("scroll", handleScroll, true);
        win?.removeEventListener("resize", handleResize);
      };
    }, [isOpen]);

    useEffect(() => {
      if (!isOpen) return;
      const handleClickOutside = (e: Event) => {
        const target = e.target as HTMLElement;
        if (
          buttonRef.current &&
          dropdownRef.current &&
          !buttonRef.current.contains(target) &&
          !dropdownRef.current.contains(target)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);

    const handleCountrySelect = (country: (typeof COUNTRIES)[0]) => {
      setSelectedCountry(country);
      setIsOpen(false);
      setSearchQuery("");
      const newValue = country.code + phoneNumber;
      onChange?.(newValue);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPhoneNumber = e.target.value.replace(/[^\d]/g, "");
      setPhoneNumber(newPhoneNumber);
      const newValue = selectedCountry.code + newPhoneNumber;
      onChange?.(newValue);
    };

    const inputClassName = cn(
      phoneInputVariants({
        variant: error ? "error" : variant,
        size,
        rounded,
        fullWidth,
      }),
      "!w-full"
    );

    return (
      <div
        ref={wrapperRef}
        className={cn(fullWidth ? "w-full" : "inline-block", className)}
        {...props}
      >
        {label && (
          <label htmlFor={id} className="mb-1.5 block text-sm text-neutral-900">
            {label}
            {required && <span className="text-danger ml-0.5">*</span>}
          </label>
        )}
        <div className={cn("relative", !fullWidth && "inline-block")}>
          <div className="flex">
            <button
              type="button"
              ref={buttonRef}
              onClick={() => !disabled && setIsOpen(!isOpen)}
              className={cn(
                inputClassName,
                "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                disabled && "cursor-not-allowed opacity-50"
              )}
            >
              <span className="flex items-center gap-2">
                <Icon icon={selectedCountry.flag} className="w-5 h-5" />
                <span className="text-sm">{selectedCountry.code}</span>
              </span>
              <Icon
                icon="mdi:chevron-down"
                className={cn("transition-transform", isOpen && "rotate-180")}
              />
            </button>
            <input
              type="tel"
              id={id}
              value={phoneNumber}
              onChange={handlePhoneChange}
              disabled={disabled}
              className={cn(
                inputClassName,
                "rounded-l-none flex-1 min-w-0 w-full"
              )}
              placeholder={placeholder}
            />
          </div>

          {isOpen &&
            createPortal(
              <div
                ref={dropdownRef}
                className={cn(
                  "border border-neutral-200 bg-white shadow-lg overflow-y-auto",
                  {
                    "rounded-none": rounded === "none",
                    "rounded-sm": rounded === "sm",
                    "rounded-md": rounded === "md",
                    "rounded-lg": rounded === "lg",
                    "rounded-xl": rounded === "full",
                  }
                )}
              >
                <div className="p-2 border-b border-neutral-200">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search countries..."
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                  />
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {filteredCountries.map((country) => (
                    <button
                      key={country.iso + country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className={cn(
                        "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                        selectedCountry.iso === country.iso && "bg-primary-50"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <Icon icon={country.flag} className="w-5 h-5" />
                        <span className="text-sm font-medium">
                          {country.code}
                        </span>
                        <span className="text-sm text-neutral-600">
                          {country.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>,
              typeof document !== "undefined" ? document.body : document
            )}
        </div>
        {error && errorText && (
          <p className="mt-1 text-xs text-danger" id={errorId}>
            {errorText}
          </p>
        )}
        {!error && helperText && (
          <p className="mt-1 text-xs text-neutral" id={helperId}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
