import React, { ReactNode } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

interface AutoCompleteProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onSelect'> {
    /** Options to display in the dropdown */
    options: Array<{
        value: string;
        label: string;
    }>;
    /** Callback when an option is selected */
    onSelect?: (value: string) => void;
    /** Whether the dropdown is open */
    isOpen?: boolean;
    /** Position of the dropdown relative to the input */
    dropdownPosition?: 'top' | 'bottom';
    /** Whether to show loading state */
    loading?: boolean;
    /** Custom render function for options */
    renderOption?: (option: {
        value: string;
        label: string;
    }) => React.ReactNode;
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
declare const AutoComplete: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<HTMLInputElement>>;

type AccordionVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'default' | 'light' | 'dark' | 'info';
type AccordionShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type AccordionRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
interface AccordionItem {
    id: string;
    title: string | React.ReactNode;
    content: string | React.ReactNode;
    disabled?: boolean;
}
interface AccordionProps {
    items: AccordionItem[];
    multiple?: boolean;
    defaultOpenIds?: string[];
    icon?: string;
    iconPosition?: 'left' | 'right';
    className?: string;
    contentClassName?: string;
    variant?: AccordionVariant;
    shadow?: AccordionShadow;
    rounded?: AccordionRounded;
}
declare const Accordion: React.FC<AccordionProps>;

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'circle' | 'square';
    className?: string;
}
declare const Avatar: React.FC<AvatarProps>;

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'small' | 'medium' | 'large';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    className?: string;
}
declare const Badge: React.FC<BadgeProps>;

declare const buttonVariants: (props?: ({
    variant?: "link" | "success" | "ghost" | "primary" | "secondary" | "warning" | "outline" | "outline-primary" | "outline-secondary" | "outline-success" | "outline-warning" | "outline-danger" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | "xs" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
    fullWidth?: boolean | null | undefined;
    isIconOnly?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-danger' | 'ghost' | 'link' | 'success' | 'warning' | 'danger';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    isIconOnly?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const cardVariants: (props?: ({
    variant?: "default" | "ghost" | "outline" | "elevated" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
    shadow?: "sm" | "md" | "lg" | "none" | "xl" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "none" | "full" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type CardVariant = 'default' | 'elevated' | 'outline' | 'ghost';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';
type CardShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type CardRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    shadow?: CardShadow;
    rounded?: CardRounded;
    asChild?: boolean;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    variantSize?: 'sm' | 'md' | 'lg';
    variant?: 'square' | 'circle';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}
declare const Checkbox: React.FC<CheckboxProps>;

type ChipVariant = 'solid' | 'outline' | 'subtle' | 'soft';
type ChipColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'danger' | 'default';
type ChipSize = 'sm' | 'md' | 'lg';
type ChipRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
interface ChipProps {
    children: React.ReactNode;
    variant?: ChipVariant;
    color?: ChipColor;
    size?: ChipSize;
    rounded?: ChipRounded;
    onClose?: () => void;
    className?: string;
    icon?: string;
}
declare const Chip: React.FC<ChipProps>;

type PrimitiveDatePickerVariant = "default" | "error" | "success" | "ghost" | "underline";
type PrimitiveDatePickerSize = "sm" | "md" | "lg";
type PrimitiveDatePickerRounded = "none" | "sm" | "md" | "lg" | "full";
type PrimitiveDatePickerLabelPlacement = "top" | "left";
interface PrimitiveDatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "value"> {
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
declare const PrimitiveDatePicker: React.ForwardRefExoticComponent<PrimitiveDatePickerProps & React.RefAttributes<HTMLInputElement>>;

type DatePickerMode = "single" | "range";
interface DatePickerProps extends Omit<PrimitiveDatePickerProps, "onChange" | "value"> {
    mode?: DatePickerMode;
    value?: Date | [Date, Date];
    onChange?: (date: Date | [Date | undefined, Date | undefined]) => void;
    monthsToShow?: 1 | 2;
    calendarFooter?: React.ReactNode;
}
declare const DatePicker: React.FC<DatePickerProps>;

type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    backdrop?: 'blur' | 'dark' | 'transparent';
    header?: React.ReactNode;
    closeOnBackdropClick?: boolean;
    size?: DialogSize;
}
interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    className?: string;
}
interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
interface DialogActionsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
}
declare const DialogHeader: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogBody: React.ForwardRefExoticComponent<DialogBodyProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogActions: React.ForwardRefExoticComponent<DialogActionsProps & React.RefAttributes<HTMLDivElement>>;

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted';
    color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
declare const Divider: React.FC<DividerProps>;

type FileUploadVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'default' | 'light' | 'dark' | 'info';
type FileUploadShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type FileUploadRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
interface FileUploadProps {
    accept?: string[];
    maxSize?: number;
    multiple?: boolean;
    value?: File[];
    onChange?: (files: File[]) => void;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    variant?: FileUploadVariant;
    shadow?: FileUploadShadow;
    rounded?: FileUploadRounded;
    children?: React.ReactNode;
    showFileList?: boolean;
    showPlaceholder?: boolean;
    showMaxSize?: boolean;
    icon?: string;
}
declare const FileUpload: React.FC<FileUploadProps>;

interface IconProps {
    /** The icon name from Iconify (e.g., 'mdi:home') */
    icon: string;
    /** Custom CSS classes */
    className?: string;
    /** Size of the icon in pixels */
    size?: number | string;
    /** Color of the icon */
    color?: string;
    /** Rotation in degrees */
    rotate?: number;
    /** Flip the icon horizontally or vertically */
    flip?: 'horizontal' | 'vertical' | 'both';
    /** Whether the icon should spin */
    spin?: boolean;
    /** Whether to load icon inline (default: true for SSR compatibility) */
    inline?: boolean;
    /** Mode of the icon (svg, mask, bg) */
    mode?: 'svg' | 'mask' | 'bg';
}
declare const Icon: ({ icon, className, size, color, rotate, flip, spin, inline, mode, ...props }: IconProps) => react_jsx_runtime.JSX.Element | null;

type InputVariant = 'default' | 'error' | 'success' | 'ghost' | 'underline';
type InputSize = 'sm' | 'md' | 'lg';
type InputRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
type LabelPlacement = 'top' | 'left';
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Visual style variant */
    variant?: InputVariant;
    /** Size of the input */
    size?: InputSize;
    /** Border radius of the input */
    rounded?: InputRounded;
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
    labelPlacement?: LabelPlacement;
    /** Whether the input should take full width */
    fullWidth?: boolean;
    /** Icon to display on the left side of the input */
    leftIcon?: string;
    /** Icon to display on the right side of the input */
    rightIcon?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

type NotificationType = 'info' | 'success' | 'warning' | 'error';
interface NotificationProps {
    /** The title of the notification */
    title?: string;
    /** The content of the notification */
    children: React.ReactNode;
    /** The icon to display */
    icon?: string;
    /** The visual style variant */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    /** Border radius of the notification */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    /** Whether to show a close button */
    showClose?: boolean;
    /** Callback when the notification is closed */
    onClose?: () => void;
    /** Additional class name */
    className?: string;
}
declare const Notification: ({ title, children, icon, variant, rounded, showClose, onClose, className, }: NotificationProps) => react_jsx_runtime.JSX.Element;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalData: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    className?: string;
    perPageOptions?: number[];
    perPage?: number;
    onPerPageChange?: (perPage: number) => void;
    label?: string;
}
declare const Pagination: React.FC<PaginationProps>;

interface RadioProps {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    name?: string;
    value?: string;
}
declare const Radio: React.FC<RadioProps>;

type SelectPosition = 'bottom' | 'top' | 'left' | 'right';
declare const selectVariants: (props?: ({
    variant?: "error" | "default" | "success" | "ghost" | "underline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type SelectVariant = 'default' | 'error' | 'success' | 'ghost' | 'underline';
type SelectSize = 'sm' | 'md' | 'lg';
interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}
interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'>, VariantProps<typeof selectVariants> {
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
    /** Whether the select should take full width */
    fullWidth?: boolean;
    variant?: SelectVariant;
    size?: SelectSize;
    /** Children components (SelectItem) */
    children?: React.ReactNode;
    /** Icon to display on the left side of the select */
    leftIcon?: string;
    /** Icon to display on the right side of the select */
    rightIcon?: string;
    /** Border radius of the select */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    selected?: boolean;
    disabled?: boolean;
}
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;

interface SkeletonProps {
    /** The width of the skeleton */
    width?: string | number;
    /** The height of the skeleton */
    height?: string | number;
    /** The visual style variant */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    /** Border radius of the skeleton */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    /** Whether the skeleton should take full width */
    fullWidth?: boolean;
    /** Additional class name */
    className?: string;
}
declare const Skeleton: ({ width, height, variant, rounded, fullWidth, className, }: SkeletonProps) => react_jsx_runtime.JSX.Element;

interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    className?: string;
    disabled?: boolean;
    showValue?: boolean;
    marks?: {
        value: number;
        label: string;
    }[];
}
declare const Slider: React.FC<SliderProps>;

type StarRatingSize = 'sm' | 'md' | 'lg';
type StarRatingColor = 'primary' | 'warning' | 'default';
interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: StarRatingSize;
    color?: StarRatingColor;
    readOnly?: boolean;
    onRatingChange?: (rating: number) => void;
    className?: string;
}
declare const StarRating: React.FC<StarRatingProps>;

type StatusIndicatorStatus = 'active' | 'inactive' | 'pending' | 'warning' | 'error';
type StatusIndicatorSize = 'sm' | 'md' | 'lg';
interface StatusIndicatorProps {
    status: StatusIndicatorStatus;
    size?: StatusIndicatorSize;
    withLabel?: boolean;
    className?: string;
}
declare const StatusIndicator: React.FC<StatusIndicatorProps>;

type StepStatus = 'completed' | 'active' | 'pending';
type StepperVariant = 'default' | 'simple';
interface StepProps {
    label: string;
    description?: string;
    icon?: string;
    status?: StepStatus;
}
interface StepperProps {
    steps: StepProps[];
    activeStep: number;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    variant?: StepperVariant;
}
declare const Stepper: React.FC<StepperProps>;

interface SwitchProps {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
}
declare const Switch: React.FC<SwitchProps>;

interface TabItem {
    id: string;
    label: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
    icon?: string;
}
interface TabsProps {
    items: TabItem[];
    defaultActiveId?: string;
    variant?: 'default' | 'pills' | 'underline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    tabListClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
    onChange?: (activeId: string) => void;
}
declare const Tabs: React.FC<TabsProps>;

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'heading3' | 'body1' | 'display1' | 'display2' | 'heading1' | 'heading2' | 'heading4' | 'subtitle1' | 'subtitle2' | 'body2' | 'caption' | 'value';
interface TextProps {
    variant?: TextVariant;
    children: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}
declare const Text: React.FC<TextProps>;

interface PrimitiveTimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> {
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
interface TimePickerProps extends Omit<PrimitiveTimePickerProps, 'onChange' | 'value'> {
    /** The selected time value */
    value?: string;
    /** Callback when time is selected */
    onChange?: (time: string) => void;
    /** Custom formatter for the displayed time value */
    valueFormatter?: (time: string) => string;
    /** Whether to close the dropdown after selection */
    closeOnSelect?: boolean;
}
declare const TimePicker: React.FC<TimePickerProps>;

declare const toggleVariants: (props?: ({
    variant?: "success" | "primary" | "warning" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ToggleVariant = 'primary' | 'success' | 'warning' | 'danger';
type ToggleSize = 'sm' | 'md' | 'lg';
interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    /** Whether the toggle is checked */
    checked?: boolean;
    /** Callback when toggle state changes */
    onCheckedChange?: (checked: boolean) => void;
    /** Visual style variant of the toggle */
    variant?: ToggleVariant;
    /** Size of the toggle */
    size?: ToggleSize;
    /** Label for the toggle */
    label?: string;
    /** Whether the toggle is required */
    required?: boolean;
    /** Helper text to display below the toggle */
    helperText?: string;
    /** Error message to display below the toggle */
    errorText?: string;
    /** Whether the toggle is in an error state */
    error?: boolean;
}
declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;

interface TooltipProps {
    /** Content to display in the tooltip */
    content: React.ReactNode;
    /** Element that triggers the tooltip */
    children: React.ReactNode;
    /** Position of the tooltip relative to the trigger */
    position?: "top" | "bottom" | "left" | "right";
    /** Delay before showing the tooltip (in milliseconds) */
    delay?: number;
    /** Additional class name for the tooltip */
    className?: string;
    /** Color variant of the tooltip */
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral" | "light";
    /** Size of the tooltip text */
    size?: "sm" | "md" | "lg";
    /** Whether the tooltip is controlled externally */
    isOpen?: boolean;
    /** Callback when tooltip visibility changes */
    onOpenChange?: (isOpen: boolean) => void;
    /** How the tooltip should be triggered */
    trigger?: "hover" | "click";
}
declare const Tooltip: React.FC<TooltipProps>;

type ProgressVariant = 'bar' | 'circular' | 'loading';
type ProgressColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
type ProgressSize = 'sm' | 'md' | 'lg';
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual style variant */
    variant?: ProgressVariant;
    /** Color scheme */
    color?: ProgressColor;
    /** Size of the progress indicator */
    size?: ProgressSize;
    /** Current progress value (0-100) */
    value?: number;
    /** Whether the progress is indeterminate */
    isIndeterminate?: boolean;
    /** Whether to show the percentage text */
    showValue?: boolean;
    /** Custom label for the progress */
    label?: string;
    /** Border radius for the bar (e.g., 'md', 'full'). Default: 'md', but 'full' for loading. */
    rounded?: 'none' | 'full';
    /** Iconify icon string for circular progress */
    icon?: string;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;

type PhoneInputVariant = "default" | "error" | "success" | "ghost" | "underline";
type PhoneInputSize = "sm" | "md" | "lg";
type PhoneInputRounded = "none" | "sm" | "md" | "lg" | "full";
interface PhoneInputProps {
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
}
declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps & React.RefAttributes<HTMLDivElement>>;

declare const breadcrumbsVariants: (props?: ({
    variant?: "default" | "light" | "dark" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BreadcrumbsVariant = 'default' | 'light' | 'dark';
type BreadcrumbsSize = 'sm' | 'md' | 'lg';
interface BreadcrumbItem {
    /** Label to display */
    label: string;
    /** URL to navigate to */
    href?: string;
    /** Icon to display before the label */
    icon?: string;
    onClick?: () => void;
}
interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof breadcrumbsVariants> {
    /** Array of breadcrumb items */
    items: BreadcrumbItem[];
    /** Custom separator between items */
    separator?: React.ReactNode;
    /** Whether the last item should be active */
    activeLastItem?: boolean;
    /** Size of the breadcrumbs */
    size?: BreadcrumbsSize;
    variant?: BreadcrumbsVariant;
}
declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLDivElement>>;

type TableVariant = 'primary' | 'secondary' | 'warning' | 'danger' | 'ghost' | 'success';
type ColumnAlignment = 'left' | 'center' | 'right';
interface TableColumn<T> {
    name: string;
    label: string;
    accessorKey: keyof T;
    type: 'string' | 'number' | 'date' | 'other';
    sortable?: boolean;
    sort?: 'asc' | 'desc';
    align?: ColumnAlignment;
    render?: (value: any, row: T, index?: number) => React.ReactNode;
}
interface TableProps<T extends Record<string, any>> {
    schema: TableColumn<T>[];
    data: T[];
    className?: string;
    headerClassName?: string;
    rowClassName?: string;
    cellClassName?: string;
    emptyState?: React.ReactNode;
    isLoading?: boolean;
    loadingState?: React.ReactNode;
    showIndex?: boolean;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    onSortChange?: (sort: string, sortBy: string) => void;
    onRowClick?: (row: T, index: number) => void;
    showPagination?: boolean;
    variant?: TableVariant;
    meta?: {
        current_page: number;
        total_page: number;
        total_data: number;
        limit_number: number;
    };
}
declare const Table: <T extends Record<string, any>>({ schema, data, className, headerClassName, rowClassName, cellClassName, emptyState, isLoading, loadingState, showIndex, onPageChange, onPageSizeChange, onSortChange, onRowClick, showPagination, variant, meta, }: TableProps<T>) => string | number | true | react_jsx_runtime.JSX.Element | Iterable<React.ReactNode>;

type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
interface ToastContextValue {
    showToast: (props: Omit<ToastProps, 'onClose'>) => string;
    removeToast: (id: string) => void;
}
declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
declare const useToast: () => ToastContextValue;

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';
type ToastRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: ToastVariant;
    rounded?: ToastRounded;
    title?: string;
    description?: string;
    onClose?: () => void;
    icon?: string;
    showIcon?: boolean;
    duration?: number;
    showClose?: boolean;
    position?: ToastPosition;
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;

interface WidgetCardProps {
    label: string;
    value: string | number;
    icon?: string;
    className?: string;
}
declare const WidgetCard: React.FC<WidgetCardProps>;

type ErrorVariant = 'no-internet' | 'data-not-found' | 'under-development' | 'information-unavailable' | 'success' | 'checked';
interface ErrorWrapperProps {
    error?: unknown;
    reload?: () => void;
    children?: ReactNode;
    className?: string;
    variant?: ErrorVariant;
    customImage?: string;
    customMessage?: string;
}
declare const ErrorWrapper: ({ error, reload, children, className, variant, customImage, customMessage }: ErrorWrapperProps) => react_jsx_runtime.JSX.Element | null;

declare const inputOTPVariants: (props?: ({
    variant?: "error" | "default" | "success" | "ghost" | "underline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "none" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type InputOTPVariant = 'default' | 'error' | 'success' | 'ghost' | 'underline';
type InputOTPSize = 'sm' | 'md' | 'lg';
type InputOTPRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';
interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
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
declare const InputOTP: React.ForwardRefExoticComponent<InputOTPProps & React.RefAttributes<HTMLDivElement>>;

declare const ICON_COLOR_MAP: {
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    info: string;
    success: string;
    disabled: string;
};
type IconColor = keyof typeof ICON_COLOR_MAP | string;
interface BadgeNotifProps {
    /** The icon name from Iconify (e.g., 'mdi:home') */
    icon?: string;
    /** Custom CSS classes */
    className?: string;
    /** Color of the icon. Accepts a color name (primary, secondary, etc.) or a custom color value. */
    color?: IconColor;
    /** Number of the notification */
    value?: number;
    /** Maximum number to display before showing maxValue+ */
    maxValue?: number;
    /** Custom node to wrap (icon, card, etc) */
    children?: React.ReactNode;
}
declare const BadgeNotif: ({ icon, className, color, value, maxValue, children, ...props }: BadgeNotifProps) => react_jsx_runtime.JSX.Element;

interface WidgetCardGroupProps {
    widgets: WidgetCardProps[];
    className?: string;
}
declare const WidgetCardGroup: React.FC<WidgetCardGroupProps>;

interface OnboardStep {
    title: string;
    description: string;
}
interface OnboardDialogProps {
    steps: OnboardStep[];
    isOpen: boolean;
    onClose: () => void;
    onFinish?: () => void;
    onSkip?: () => void;
    _step?: number;
    _setStep?: (step: number) => void;
}

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, type AccordionItem, type AccordionProps, AutoComplete, type AutoCompleteProps, Avatar, type AvatarProps, Badge, BadgeNotif, type BadgeNotifProps, type BadgeProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, type BreadcrumbsSize, type BreadcrumbsVariant, Button, type ButtonProps, type ButtonRounded, type ButtonSize, type ButtonVariant, Card, type CardPadding, type CardProps, type CardRounded, type CardShadow, type CardVariant, Checkbox, type CheckboxProps, Chip, type ChipColor, type ChipProps, type ChipSize, type ChipVariant, DatePicker, type DatePickerProps, Dialog, DialogActions, DialogBody, DialogHeader, type DialogSize, DialogTitle, Divider, type DividerProps, type ErrorVariant, ErrorWrapper, type ErrorWrapperProps, FileUpload, type FileUploadProps, Icon, type IconColor, type IconProps, Input, InputOTP, type InputOTPProps, type InputOTPRounded, type InputOTPSize, type InputOTPVariant, type InputProps, type InputRounded, type InputSize, type InputVariant, type LabelPlacement, Notification, type NotificationProps, type NotificationType, type OnboardDialogProps, type OnboardStep, Pagination, type PaginationProps, PhoneInput, type PhoneInputProps, type PhoneInputRounded, type PhoneInputSize, type PhoneInputVariant, PrimitiveDatePicker, type PrimitiveDatePickerProps, Progress, type ProgressColor, type ProgressProps, type ProgressSize, type ProgressVariant, Radio, type RadioProps, Select, SelectItem, type SelectItemProps, type SelectOption, type SelectPosition, type SelectProps, type SelectSize, type SelectVariant, Skeleton, type SkeletonProps, Slider, type SliderProps, StarRating, type StarRatingProps, StatusIndicator, type StatusIndicatorProps, type StatusIndicatorStatus, type StepProps, type StepStatus, Stepper, type StepperProps, type StepperVariant, Switch, type SwitchProps, type TabItem, Table, type TableColumn, type TableProps, type TableVariant, Tabs, type TabsProps, Text, type TextProps, type TextVariant, TimePicker, type TimePickerProps, Toast, type ToastPosition, type ToastProps, ToastProvider, type ToastRounded, type ToastVariant, Toggle, type ToggleProps, type ToggleSize, type ToggleVariant, Tooltip, type TooltipProps, WidgetCard, WidgetCardGroup, type WidgetCardGroupProps, type WidgetCardProps, buttonVariants, cardVariants, cn, inputOTPVariants, toggleVariants, useToast };
