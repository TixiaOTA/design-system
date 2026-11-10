import React, { forwardRef, useState, useRef, useEffect, RefCallback } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import { Button } from '../../atoms/Button';

const inputOTPVariants = cva(
  'border bg-white flex items-center justify-center aspect-square transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-center',
  {
    variants: {
      variant: {
        default: 'border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50',
        error: 'border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50',
        success: 'border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50',
        ghost: 'border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50',
        underline: 'border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent',
      },
      size: {
        sm: 'h-8 w-8 text-sm',
        md: 'h-12 w-12 text-lg',
        lg: 'h-16 w-16 text-xl',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'md',
    },
  }
);

export type InputOTPVariant = 'default' | 'error' | 'success' | 'ghost' | 'underline';
export type InputOTPSize = 'sm' | 'md' | 'lg';
export type InputOTPRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  /** Visual style variant */
  variant?: InputOTPVariant;
  /** Size of the OTP inputs */
  size?: InputOTPSize;
  /** Border radius of the OTP inputs */
  rounded?: InputOTPRounded;
  /** Whether the input is in an error state */
  error?: boolean;
  /** Error message to display below the input */
  errorText?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Label for the input */
  label?: string;
  /** Bottom label for additional information */
  bottomLabel?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Whether to show a submit button */
  showSubmitButton?: boolean;
  /** Label for the submit button */
  submitButtonLabel?: string;
  /** Variant for the submit button */
  submitButtonVariant?: 'primary' | 'secondary' | 'success';
  /** Number of OTP inputs */
  length?: number;
  /** Whether the OTP is numeric only */
  numericOnly?: boolean;
  /** Callback when all OTP inputs are filled */
  onComplete?: (value: string) => void;
  /** Callback when OTP value changes */
  onChange?: (value: string) => void;
  /** Callback when submit button is clicked */
  onSubmit?: (value: string) => void;
  /** Value of the OTP input */
  value?: string;
  /** Default value of the OTP input */
  defaultValue?: string;
  /** Whether the OTP input is disabled */
  disabled?: boolean;
  /** Whether to auto-focus the first input on mount */
  autoFocus?: boolean;
}

const InputOTP = forwardRef<HTMLDivElement, InputOTPProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    rounded = 'md', 
    error = false,
    errorText, 
    helperText, 
    label, 
    bottomLabel,
    required = false,
    showSubmitButton = false,
    submitButtonLabel = 'Submit',
    submitButtonVariant = 'primary',
    length = 6,
    numericOnly = true,
    onComplete,
    onChange,
    onSubmit,
    value: controlledValue,
    defaultValue = '',
    disabled = false,
    autoFocus = false,
    ...props 
  }, ref) => {
    const [value, setValue] = useState<string>(defaultValue || '');
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    
    // Handle controlled component
    useEffect(() => {
      if (controlledValue !== undefined) {
        setValue(controlledValue);
      }
    }, [controlledValue]);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : value;

    const updateValue = (newValue: string) => {
      if (!isControlled) {
        setValue(newValue);
      }
      
      onChange?.(newValue);
      
      if (newValue.length === length) {
        onComplete?.(newValue);
        
        // Auto-submit when complete if no submit button is shown
        if (!showSubmitButton) {
          onSubmit?.(newValue);
        }
      }
    };

    // Remove the problematic useEffect with direct event listeners and create a ref callback instead
    const setInputRef = (index: number): RefCallback<HTMLInputElement> => (element) => {
      inputRefs.current[index] = element;
      
      // No need to add/remove listeners manually - React will handle this
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.select();
    };

    /** Top-row digits via e.key; numpad via e.code so NumLock-off still types digits. */
    const resolveDigitKey = (e: React.KeyboardEvent<HTMLInputElement>): string | null => {
      if (/^\d$/.test(e.key)) return e.key;
      const numpadMatch = /^Numpad([0-9])$/.exec(e.code);
      return numpadMatch ? numpadMatch[1] : null;
    };

    const commitCharAt = (index: number, char: string) => {
      const next = currentValue.split('');
      while (next.length <= index) {
        next.push('');
      }
      next[index] = char;
      updateValue(next.join(''));

      if (char && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    // Mobile / autofill / IME path — desktop digits are handled in keyDown
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const inputValue = e.target.value;

      if (inputValue.length === 0) {
        const next = currentValue.split('');
        next[index] = '';
        updateValue(next.join(''));
        return;
      }

      const newChar = inputValue.slice(-1);
      if (numericOnly && !/^\d$/.test(newChar)) {
        return;
      }

      commitCharAt(index, newChar);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      const digit = resolveDigitKey(e);

      // Prefer digits over arrow remaps from numpad when NumLock is off
      if (digit && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        commitCharAt(index, digit);
        return;
      }

      if (
        numericOnly &&
        !e.ctrlKey && !e.altKey && !e.metaKey &&
        e.key.length === 1 &&
        !/^\d$/.test(e.key)
      ) {
        e.preventDefault();
        return;
      }

      if (e.key === 'Backspace') {
        const next = currentValue.split('');

        if (currentValue[index]) {
          e.preventDefault();
          next[index] = '';
          updateValue(next.join(''));
        } else if (index > 0) {
          e.preventDefault();
          next[index - 1] = '';
          updateValue(next.join(''));
          inputRefs.current[index - 1]?.focus();
        }
        return;
      }

      if (e.key === 'Delete') {
        if (currentValue[index]) {
          e.preventDefault();
          const next = currentValue.split('');
          next[index] = '';
          updateValue(next.join(''));
        }
        return;
      }

      // Real arrow keys only — numpad arrows already handled as digits above
      if (e.code === 'ArrowLeft' && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
        return;
      }

      if (e.code === 'ArrowRight' && index < length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text/plain').trim();
      
      if (numericOnly && !/^\d+$/.test(pastedData)) {
        return;
      }
      
      // Only use the first 'length' characters
      const relevantData = pastedData.slice(0, length);
      
      // Fill the OTP inputs with the pasted data, replacing existing values
      const newValue = relevantData.padEnd(currentValue.length, '').slice(0, length);
      updateValue(newValue);
      
      // Focus the next empty input or the last input if all are filled
      const nextEmptyIndex = newValue.length < length ? newValue.length : length - 1;
      inputRefs.current[nextEmptyIndex]?.focus();
    };

    const handleSubmit = () => {
      if (currentValue.length === length) {
        onSubmit?.(currentValue);
      }
    };

    // Split the value into individual digits for display
    const digits = currentValue.split('').concat(Array(length - currentValue.length).fill(''));

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {label && (
          <label className="mb-1.5 block text-sm text-neutral-900">
            {label}
            {required && <span className="text-danger ml-0.5">*</span>}
          </label>
        )}
        
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length }).map((_, index) => (
              <input
                key={index}
                ref={setInputRef(index)}
                type={numericOnly ? 'tel' : 'text'}
                inputMode={numericOnly ? 'numeric' : 'text'}
                maxLength={1}
                value={digits[index] ?? ''}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                onFocus={handleInputFocus}
                disabled={disabled}
                autoFocus={autoFocus && index === 0}
                className={cn(
                  inputOTPVariants({ 
                    variant: error ? 'error' : variant, 
                    size, 
                    rounded 
                  })
                )}
                aria-invalid={error}
              />
            ))}
          </div>
          
          {(error && errorText) && (
            <p className="mt-1 text-xs text-danger self-start">
              {errorText}
            </p>
          )}
          
          {(!error && helperText) && (
            <p className="mt-1 text-xs text-neutral self-start">
              {helperText}
            </p>
          )}
          
          {bottomLabel && (
            <p className="text-sm text-neutral-600">
              {bottomLabel}
            </p>
          )}
          
          {showSubmitButton && (
            <Button 
              variant={submitButtonVariant}
              disabled={currentValue.length !== length || disabled}
              onClick={handleSubmit}
              className="mt-4"
            >
              {submitButtonLabel}
            </Button>
          )}
        </div>
      </div>
    );
  }
);

InputOTP.displayName = 'InputOTP';

export { InputOTP, inputOTPVariants };
