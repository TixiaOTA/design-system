"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AutoComplete: () => AutoComplete,
  Avatar: () => Avatar,
  Badge: () => Badge,
  BadgeNotif: () => BadgeNotif,
  Breadcrumbs: () => Breadcrumbs,
  Button: () => Button,
  Card: () => Card,
  Checkbox: () => Checkbox,
  Chip: () => Chip,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  DialogActions: () => DialogActions,
  DialogBody: () => DialogBody,
  DialogHeader: () => DialogHeader,
  DialogTitle: () => DialogTitle,
  Divider: () => Divider,
  ErrorWrapper: () => ErrorWrapper,
  FileUpload: () => FileUpload,
  Icon: () => Icon,
  Input: () => Input,
  InputOTP: () => InputOTP,
  Notification: () => Notification,
  Pagination: () => Pagination,
  PhoneInput: () => PhoneInput,
  PrimitiveDatePicker: () => PrimitiveDatePicker,
  Progress: () => Progress,
  Radio: () => Radio,
  Select: () => Select,
  SelectItem: () => SelectItem,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  StarRating: () => StarRating_default,
  StatusIndicator: () => StatusIndicator,
  Stepper: () => Stepper,
  Switch: () => Switch,
  Table: () => Table,
  Tabs: () => Tabs,
  Text: () => Text,
  TimePicker: () => TimePicker,
  Toast: () => Toast,
  ToastProvider: () => ToastProvider,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip,
  WidgetCard: () => WidgetCard,
  WidgetCardGroup: () => WidgetCardGroup,
  buttonVariants: () => buttonVariants,
  cardVariants: () => cardVariants,
  cn: () => cn,
  inputOTPVariants: () => inputOTPVariants,
  toggleVariants: () => toggleVariants,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/components/atoms/AutoComplete/AutoComplete.tsx
var import_react4 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_class_variance_authority2 = require("class-variance-authority");

// src/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/atoms/Input/Input.tsx
var import_react2 = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");

// src/components/atoms/Icons/Icons.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Icon = ({
  icon,
  className,
  size,
  color,
  rotate,
  flip,
  spin,
  inline = true,
  mode = "svg",
  ...props
}) => {
  const [IconifyIcon, setIconifyIcon] = (0, import_react.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    let isMounted = true;
    const loadIcon = async () => {
      try {
        const { Icon: Icon2 } = await import("@iconify/react");
        if (isMounted) {
          setIconifyIcon(() => Icon2);
          setIsLoading(false);
        }
      } catch (error2) {
        console.error("Failed to load icon:", error2);
        if (isMounted) {
          setError(error2);
          setIsLoading(false);
        }
      }
    };
    loadIcon();
    return () => {
      isMounted = false;
    };
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: size, height: size } });
  }
  if (error || !IconifyIcon) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    IconifyIcon,
    {
      icon,
      className: cn(
        spin && "animate-spin",
        className
      ),
      style: {
        color,
        transform: `rotate(${rotate || 0}deg)`
      },
      height: size,
      width: size,
      flip,
      inline,
      mode,
      ...props
    }
  );
};

// src/components/atoms/Input/Input.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var inputVariants = (0, import_class_variance_authority.cva)(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: true
    }
  }
);
var Input = (0, import_react2.forwardRef)(
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
    labelPlacement = "top",
    fullWidth = false,
    leftIcon,
    rightIcon,
    id: providedId,
    ...props
  }, ref) => {
    const id = providedId || import_react2.default.useId();
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const inputField = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: cn("relative", !fullWidth && "inline-block"), children: [
      leftIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { icon: leftIcon, className: "w-4 h-4" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          id,
          type: "text",
          ref,
          className: cn(
            inputVariants({ variant: error ? "error" : variant, size, rounded, fullWidth }),
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            className
          ),
          "aria-describedby": error ? errorId : helperText ? helperId : void 0,
          "aria-invalid": error,
          "aria-required": required,
          ...props
        }
      ),
      rightIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { icon: rightIcon, className: "w-4 h-4" }) })
    ] });
    const helperOrError = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      error && errorText && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-1 text-xs text-danger", id: errorId, children: errorText }),
      !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mt-1 text-xs text-neutral", id: helperId, children: helperText })
    ] });
    if (labelPlacement === "left") {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: cn(fullWidth ? "w-full" : "inline-block", className), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-start gap-4", children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "label",
          {
            htmlFor: id,
            className: "block text-sm text-neutral-900 pt-2",
            children: [
              label,
              required && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: cn("flex-1", !fullWidth && "inline-block"), children: [
          inputField,
          helperOrError
        ] })
      ] }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: cn(fullWidth ? "w-full" : "inline-block", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "label",
        {
          htmlFor: id,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      inputField,
      helperOrError
    ] });
  }
);
Input.displayName = "Input";

// src/components/atoms/SelectItem/SelectItem.tsx
var import_react3 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var SelectItem = import_react3.default.forwardRef(
  ({ className, children, selected, disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        ref,
        className: cn(
          "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
          "hover:bg-primary-50",
          selected && "bg-primary-50 text-primary-900",
          disabled && "pointer-events-none opacity-50",
          className
        ),
        ...props,
        children
      }
    );
  }
);
SelectItem.displayName = "SelectItem";

// src/utils/ssr.ts
var isBrowser = typeof window !== "undefined";
var getWindow = () => {
  if (!isBrowser) {
    return {
      innerHeight: 0,
      innerWidth: 0,
      addEventListener: () => {
      },
      removeEventListener: () => {
      }
    };
  }
  return window;
};
var getDocument = () => {
  if (!isBrowser) {
    return {
      addEventListener: () => {
      },
      removeEventListener: () => {
      },
      dispatchEvent: () => {
      }
    };
  }
  return document;
};

// src/components/atoms/AutoComplete/AutoComplete.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var AUTOCOMPLETE_OPEN_EVENT = "autocomplete-dropdown-opened";
var dropdownVariants = (0, import_class_variance_authority2.cva)(
  "fixed z-[9999] min-w-[8rem] rounded-md border border-neutral-200 bg-white py-1 shadow-lg",
  {
    variants: {
      position: {
        bottom: "top-full",
        top: "bottom-full"
      }
    },
    defaultVariants: {
      position: "bottom"
    }
  }
);
var AutoComplete = (0, import_react4.forwardRef)(
  ({
    className,
    options,
    onSelect,
    isOpen: controlledIsOpen,
    dropdownPosition = "bottom",
    loading = false,
    renderOption,
    variant = "default",
    size = "md",
    rounded = "md",
    leftIcon,
    rightIcon,
    error = false,
    errorText,
    helperText,
    label,
    required = false,
    labelPlacement = "top",
    fullWidth = false,
    value,
    onChange,
    onFocus,
    onBlur,
    showClear = false,
    onClear,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = (0, import_react4.useState)(false);
    const [inputValue, setInputValue] = (0, import_react4.useState)(value || "");
    const wrapperRef = (0, import_react4.useRef)(null);
    const inputRef = (0, import_react4.useRef)(null);
    const dropdownRef = (0, import_react4.useRef)(null);
    const isControlled = controlledIsOpen !== void 0;
    const reactId = import_react4.default.useId();
    const id = `autocomplete-${reactId.replace(/:/g, "")}`;
    const updateDropdownPosition = () => {
      if (!isOpen || !inputRef.current || !dropdownRef.current) return;
      const { bottom, top, left, width } = inputRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      const win = getWindow();
      const commonStyles = {
        position: "fixed",
        left: `${left}px`,
        width: `${width}px`
      };
      const styles = dropdownPosition === "bottom" ? {
        ...commonStyles,
        top: `${bottom + 4}px`,
        maxHeight: `${win.innerHeight - bottom - 8}px`
      } : {
        ...commonStyles,
        bottom: `${win.innerHeight - top + 4}px`,
        maxHeight: `${top - 8}px`
      };
      Object.assign(dropdown.style, styles);
    };
    (0, import_react4.useEffect)(() => {
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
      const handleOtherAutocompleteOpen = (e) => {
        const customEvent = e;
        if (customEvent.detail.id !== id) {
          setIsOpen(false);
        }
      };
      const handleClickOutside = (e) => {
        const target = e.target;
        if (wrapperRef.current && !wrapperRef.current.contains(target) && dropdownRef.current && !dropdownRef.current.contains(target)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        updateDropdownPosition();
        win.addEventListener("scroll", handleScroll, true);
        win.addEventListener("resize", handleResize);
      }
      doc.addEventListener(AUTOCOMPLETE_OPEN_EVENT, handleOtherAutocompleteOpen);
      doc.addEventListener("click", handleClickOutside);
      return () => {
        win.removeEventListener("scroll", handleScroll, true);
        win.removeEventListener("resize", handleResize);
        doc.removeEventListener(AUTOCOMPLETE_OPEN_EVENT, handleOtherAutocompleteOpen);
        doc.removeEventListener("click", handleClickOutside);
      };
    }, [isOpen, id]);
    (0, import_react4.useEffect)(() => {
      setInputValue(value || "");
    }, [value]);
    const handleInputChange = (event) => {
      const { value: value2 } = event.target;
      setInputValue(value2);
      if (!value2.trim()) {
        setIsOpen(false);
        return;
      }
      setIsOpen(true);
      onChange?.(event);
    };
    const handleClear = (e) => {
      e.stopPropagation();
      setInputValue("");
      onClear?.();
      const syntheticEvent = new Event("change");
      syntheticEvent.target = { value: "" };
      onChange?.(syntheticEvent);
    };
    const handleSelect = (option) => {
      if (!option) return;
      const { value: value2, label: label2 } = option;
      setInputValue(label2);
      setIsOpen(false);
      onSelect?.(value2);
      const selectEvent = new CustomEvent("autocomplete-select", {
        detail: { selectedOption: option }
      });
      inputRef.current?.dispatchEvent(selectEvent);
    };
    const handleFocus = (e) => {
      if (!isControlled) {
        const doc = getDocument();
        doc.dispatchEvent(
          new CustomEvent(AUTOCOMPLETE_OPEN_EVENT, {
            detail: { id }
          })
        );
        setIsOpen(true);
      }
      onFocus?.(e);
    };
    const handleBlur = (e) => {
      onBlur?.(e);
    };
    const filteredOptions = options.filter(
      ({ label: label2 }) => label2.toLowerCase().includes((inputValue || "").toLowerCase().trim())
    );
    const showDropdown = isControlled ? controlledIsOpen : isOpen;
    const shouldShowClear = showClear && inputValue && !props.disabled && !props.readOnly;
    const effectiveRightIcon = shouldShowClear ? "mdi:close" : rightIcon;
    const renderDropdown = () => {
      if (!showDropdown) return null;
      const doc = getDocument();
      if (!("body" in doc)) return null;
      const dropdown = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "div",
        {
          ref: dropdownRef,
          className: cn(
            dropdownVariants({ position: dropdownPosition }),
            "overflow-auto"
          ),
          onClick: (e) => e.stopPropagation(),
          children: loading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }) }) : filteredOptions.length > 0 ? filteredOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            SelectItem,
            {
              value: option.value,
              selected: option.label === inputValue,
              onClick: () => handleSelect(option),
              children: renderOption ? renderOption(option) : option.label
            },
            option.value
          )) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-2 py-2 text-sm text-neutral", children: "No options found" })
        }
      );
      return (0, import_react_dom.createPortal)(dropdown, doc.body);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { ref: wrapperRef, className: cn("relative", fullWidth ? "w-full" : "inline-block"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref: inputRef, className: cn(!fullWidth && "inline-block"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Input,
        {
          ref,
          value: inputValue,
          onChange: handleInputChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          variant,
          size,
          rounded,
          leftIcon,
          rightIcon: effectiveRightIcon,
          error,
          errorText,
          helperText,
          label,
          required,
          labelPlacement,
          fullWidth,
          className,
          ...props,
          onClick: shouldShowClear ? handleClear : props.onClick
        }
      ) }),
      renderDropdown()
    ] });
  }
);
AutoComplete.displayName = "AutoComplete";

// src/components/atoms/Accordion/Accordion.tsx
var import_react5 = require("react");
var import_clsx2 = __toESM(require("clsx"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var variantStyles = {
  primary: {
    hover: "hover:bg-primary-50",
    active: "bg-primary-50",
    text: "text-primary-700"
  },
  secondary: {
    hover: "hover:bg-secondary-50",
    active: "bg-secondary-50",
    text: "text-secondary-700"
  },
  success: {
    hover: "hover:bg-success-50",
    active: "bg-success-50",
    text: "text-success-700"
  },
  warning: {
    hover: "hover:bg-warning-50",
    active: "bg-warning-50",
    text: "text-warning-700"
  },
  default: {
    hover: "hover:bg-gray-50",
    active: "bg-gray-50",
    text: "text-gray-700"
  },
  light: {
    hover: "hover:bg-light-50",
    active: "bg-light-50",
    text: "text-light-900"
  },
  dark: {
    hover: "hover:bg-dark-50",
    active: "bg-dark-50",
    text: "text-dark-50"
  },
  info: {
    hover: "hover:bg-info-50",
    active: "bg-info-50",
    text: "text-info-700"
  }
};
var shadowStyles = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
};
var roundedStyles = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
};
var Accordion = ({
  items,
  multiple = false,
  defaultOpenIds = [],
  icon = "mdi:chevron-down",
  iconPosition = "right",
  className,
  contentClassName,
  variant = "primary",
  shadow = "none",
  rounded = "lg"
}) => {
  const [openIds, setOpenIds] = (0, import_react5.useState)(defaultOpenIds);
  const toggleItem = (id) => {
    if (multiple) {
      setOpenIds(
        (prev) => prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => prev.includes(id) ? [] : [id]);
    }
  };
  const styles = variantStyles[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: (0, import_clsx2.default)("w-full space-y-2", className), children: items.map((item) => {
    const isOpen = openIds.includes(item.id);
    const isDisabled = Boolean(item.disabled);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: (0, import_clsx2.default)(
          "border overflow-hidden",
          "bg-white",
          "border-gray-200",
          shadowStyles[shadow],
          roundedStyles[rounded],
          "transition-shadow duration-200"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "button",
            {
              onClick: () => !isDisabled && toggleItem(item.id),
              disabled: isDisabled,
              className: (0, import_clsx2.default)(
                "w-full flex items-center justify-between p-4",
                "text-left transition-colors",
                styles.hover,
                isOpen && styles.active,
                styles.text,
                isDisabled && "opacity-50 cursor-not-allowed"
              ),
              children: [
                iconPosition === "left" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "div",
                  {
                    className: (0, import_clsx2.default)(
                      "mr-3 transition-transform duration-200",
                      isOpen && "rotate-180"
                    ),
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { icon, className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex-1", children: item.title }),
                iconPosition === "right" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "div",
                  {
                    className: (0, import_clsx2.default)(
                      "ml-3 transition-transform duration-200",
                      isOpen && "rotate-180"
                    ),
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { icon, className: "w-5 h-5" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: (0, import_clsx2.default)(
                "grid transition-all duration-200 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "div",
                {
                  className: (0, import_clsx2.default)(
                    "p-4 border-t border-gray-200",
                    contentClassName
                  ),
                  children: item.content
                }
              ) })
            }
          )
        ]
      },
      item.id
    );
  }) });
};

// src/components/atoms/Avatar/Avatar.tsx
var import_tailwind_merge2 = require("tailwind-merge");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Avatar = ({
  src,
  alt = "avatar",
  size = "medium",
  shape = "circle",
  className = ""
}) => {
  const sizeClasses2 = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };
  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-lg"
  };
  const avatarClasses = (0, import_tailwind_merge2.twMerge)(
    "inline-flex items-center justify-center overflow-hidden bg-gray-200",
    sizeClasses2[size],
    shapeClasses[shape],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: avatarClasses, children: src ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src, alt, className: "w-full h-full object-cover" }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "svg",
    {
      className: "w-6 h-6 text-gray",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "path",
        {
          d: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
          fill: "currentColor"
        }
      )
    }
  ) });
};

// src/components/atoms/Badge/Badge.tsx
var import_tailwind_merge3 = require("tailwind-merge");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Badge = ({
  children,
  variant = "primary",
  size = "medium",
  rounded = "md",
  className = ""
}) => {
  const variantClasses = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  };
  const sizeClasses2 = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  };
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  };
  const badgeClasses = (0, import_tailwind_merge3.twMerge)(
    "inline-flex items-center font-medium",
    variantClasses[variant],
    sizeClasses2[size],
    roundedClasses[rounded],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: badgeClasses, children });
};

// src/components/atoms/Button/Button.tsx
var import_react6 = require("react");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime8 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority3.cva)(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md active:shadow-none",
        secondary: "bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-sm hover:shadow-md active:shadow-none",
        outline: "border border-neutral-300 text-primary hover:bg-primary-50 active:bg-primary-100 hover:border-primary",
        "outline-primary": "border border-primary-600 text-primary-600 hover:bg-primary-50",
        "outline-secondary": "border border-secondary-600 text-secondary-600 hover:bg-secondary-50",
        "outline-success": "border border-success-600 text-success-600 hover:bg-success-50",
        "outline-warning": "border border-warning-600 text-warning-600 hover:bg-warning-50",
        "outline-danger": "border border-danger-600 text-danger-600 hover:bg-danger-50",
        ghost: "text-primary hover:bg-primary-50 active:bg-primary-100",
        link: "text-primary hover:underline p-0",
        success: "bg-success text-white hover:bg-success-600 active:bg-success-700 shadow-sm hover:shadow-md active:shadow-none",
        warning: "bg-warning text-white hover:bg-warning-600 active:bg-warning-700 shadow-sm hover:shadow-md active:shadow-none",
        danger: "bg-danger text-white hover:bg-danger-600 active:bg-danger-700 shadow-sm hover:shadow-md active:shadow-none"
      },
      size: {
        xs: "text-xs px-2 py-1",
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-2.5"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full"
      },
      isIconOnly: {
        true: "p-2 aspect-square"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "none",
      fullWidth: false,
      isIconOnly: false
    }
  }
);
var Button = (0, import_react6.forwardRef)(
  ({
    className,
    variant = "primary",
    size = "md",
    rounded = "md",
    fullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    isIconOnly = false,
    children,
    ...props
  }, ref) => {
    const hasIcon = Boolean(leftIcon || rightIcon);
    const isIconButton = isIconOnly || hasIcon && !children;
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "button",
      {
        className: cn(
          buttonVariants({
            variant,
            size,
            rounded: isIconButton ? "full" : rounded,
            fullWidth,
            isIconOnly: isIconButton,
            className
          })
        ),
        ref,
        disabled: props.disabled || isLoading,
        ...props,
        children: [
          isLoading && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "animate-spin inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full" }),
          leftIcon && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { icon: leftIcon, className: "w-4 h-4", inline: true }),
          children && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children }),
          rightIcon && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { icon: rightIcon, className: "w-4 h-4", inline: true })
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/atoms/Card/Card.tsx
var import_react7 = require("react");
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime9 = require("react/jsx-runtime");
var cardVariants = (0, import_class_variance_authority4.cva)(
  "border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "border-border shadow-sm",
        elevated: "border-border shadow-lg",
        outline: "border-border bg-transparent",
        ghost: "border-transparent bg-transparent"
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      shadow: "sm",
      rounded: "md"
    }
  }
);
var Card = (0, import_react7.forwardRef)(
  ({
    className,
    variant = "default",
    padding = "md",
    shadow = "none",
    rounded = "md",
    asChild = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      {
        className: cn(cardVariants({ variant, padding, shadow, rounded, className })),
        ref,
        ...props
      }
    );
  }
);
Card.displayName = "Card";

// src/components/atoms/CheckBox/CheckBox.tsx
var import_tailwind_merge4 = require("tailwind-merge");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Checkbox = ({
  label,
  error,
  disabled = false,
  indeterminate = false,
  variantSize = "sm",
  variant = "square",
  color = "primary",
  className = "",
  ...props
}) => {
  const sizeClasses2 = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  const colorClasses = {
    primary: "checked:bg-primary-600 checked:border-primary-600 hover:border-primary-600",
    secondary: "checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-600",
    success: "checked:bg-success-600 checked:border-success-600 hover:border-success-600",
    warning: "checked:bg-warning-600 checked:border-warning-600 hover:border-warning-600",
    error: "checked:bg-danger-600 checked:border-danger-600 hover:border-danger-600"
  };
  const variantClasses = {
    square: "rounded",
    circle: "rounded-full"
  };
  const checkboxClasses = (0, import_tailwind_merge4.twMerge)(
    "border-2 transition-colors duration-200",
    "appearance-none cursor-pointer",
    "checked:bg-no-repeat checked:bg-center",
    variant === "circle" ? 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iNCIgZmlsbD0id2hpdGUiLz48L3N2Zz4=")]' : 'checked:bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM0w0LjUgOC41TDIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=")]',
    variantClasses[variant],
    sizeClasses2[variantSize],
    colorClasses[color],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  const labelClasses = (0, import_tailwind_merge4.twMerge)(
    "ml-2 text-sm font-medium",
    disabled && "opacity-50 cursor-not-allowed",
    error && "text-danger-600"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "input",
        {
          type: "checkbox",
          className: checkboxClasses,
          disabled,
          ref: (input) => {
            if (input) {
              input.indeterminate = indeterminate;
            }
          },
          ...props
        }
      ),
      label && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { className: labelClasses, children: label })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mt-1 text-sm text-danger-600", children: error })
  ] });
};

// src/components/atoms/Chip/Chip.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var variantStyles2 = {
  solid: {
    primary: "bg-primary text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    error: "bg-danger text-white",
    info: "bg-info text-white",
    danger: "bg-danger text-white",
    default: "bg-neutral text-white"
  },
  outline: {
    primary: "border border-primary text-primary",
    success: "border border-success text-success",
    warning: "border border-warning text-warning",
    error: "border border-error text-error",
    info: "border border-info text-info",
    danger: "border border-danger text-danger",
    default: "border border-neutral text-neutral"
  },
  subtle: {
    primary: "bg-primary-100 text-primary-700",
    success: "bg-success-100 text-success-700",
    warning: "bg-warning-100 text-warning-700",
    error: "bg-error-100 text-error-700",
    info: "bg-info-100 text-info-700",
    danger: "bg-danger-100 text-danger-700",
    default: "bg-neutral-100 text-neutral-700"
  },
  soft: {
    primary: "bg-primary-50 text-primary-600",
    success: "bg-success-50 text-success-600",
    warning: "bg-warning-50 text-warning-600",
    error: "bg-error-50 text-error-600",
    info: "bg-info-50 text-info-600",
    danger: "bg-danger-50 text-danger-600",
    default: "bg-neutral-50 text-neutral-600"
  }
};
var sizeStyles = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
};
var roundedStyles2 = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
};
var Chip = ({
  children,
  variant = "solid",
  color = "primary",
  size = "md",
  rounded = "md",
  onClose,
  className,
  icon
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-1.5 font-medium",
        variantStyles2[variant][color],
        sizeStyles[size],
        roundedStyles2[rounded],
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "inline-flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { icon, className: "w-4 h-4" }) }),
        children,
        onClose && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "button",
          {
            onClick: onClose,
            className: "ml-1 rounded-full hover:bg-black/10 p-0.5",
            "aria-label": "Close",
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Icon, { icon: "mdi:close", className: "w-3 h-3" })
          }
        )
      ]
    }
  );
};

// src/components/atoms/DatePicker/DatePicker.tsx
var import_react9 = require("react");

// src/components/atoms/DatePicker/PrimitiveDatePicker.tsx
var import_react8 = require("react");
var import_react_dom2 = require("react-dom");
var import_class_variance_authority5 = require("class-variance-authority");
var import_dayjs = __toESM(require("dayjs"));
var import_isSameOrAfter = __toESM(require("dayjs/plugin/isSameOrAfter"));
var import_isSameOrBefore = __toESM(require("dayjs/plugin/isSameOrBefore"));
var import_jsx_runtime12 = require("react/jsx-runtime");
import_dayjs.default.extend(import_isSameOrAfter.default);
import_dayjs.default.extend(import_isSameOrBefore.default);
var primitiveDatePickerVariants = (0, import_class_variance_authority5.cva)(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: true
    }
  }
);
var PrimitiveDatePicker = (0, import_react8.forwardRef)(
  ({
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
  }, ref) => {
    const [isOpen, setIsOpen] = (0, import_react8.useState)(false);
    const [selectedDate, setSelectedDate] = (0, import_react8.useState)(value);
    const [currentMonth, setCurrentMonth] = (0, import_react8.useState)(value || /* @__PURE__ */ new Date());
    const [showYearDropdown, setShowYearDropdown] = (0, import_react8.useState)(false);
    const wrapperRef = (0, import_react8.useRef)(null);
    const inputRef = (0, import_react8.useRef)(null);
    const dropdownRef = (0, import_react8.useRef)(null);
    (0, import_react8.useEffect)(() => {
      setSelectedDate(value || void 0);
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
          transform: ""
        });
      } else {
        Object.assign(dropdown.style, {
          position: "fixed",
          left: `${left + width / 2}px`,
          top: `${bottom + 4}px`,
          width: "320px",
          maxWidth: "100vw",
          maxHeight: `${win.innerHeight - bottom - 8}px`,
          transform: "translateX(-50%)"
        });
      }
    };
    (0, import_react8.useEffect)(() => {
      const win = getWindow();
      const doc = getDocument();
      const handleScroll = () => {
        if (isOpen) updateDropdownPosition();
      };
      const handleResize = () => {
        if (isOpen) updateDropdownPosition();
      };
      const handleKeyDown = (e) => {
        if (e.key === "Escape" && isOpen) {
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
    const handleDateSelect = (date) => {
      const isRangeMode = rangeStart !== void 0 && rangeEnd !== void 0;
      if (isRangeMode) {
        if (rangeStart && rangeEnd) {
          setSelectedDate(date);
          onChange?.(date);
        } else if (rangeStart) {
          const newEndDate = date;
          if ((0, import_dayjs.default)(newEndDate).isBefore(rangeStart)) {
            setSelectedDate(newEndDate);
            onChange?.(newEndDate);
          } else {
            setSelectedDate(newEndDate);
            onChange?.(newEndDate);
          }
          setIsOpen(false);
          setShowYearDropdown(false);
        } else {
          setSelectedDate(date);
          onChange?.(date);
        }
      } else {
        setSelectedDate(date);
        onChange?.(date);
        setIsOpen(false);
        setShowYearDropdown(false);
      }
    };
    const handlePrevMonth = () => {
      setCurrentMonth((0, import_dayjs.default)(currentMonth).subtract(1, "month").toDate());
    };
    const handleNextMonth = () => {
      setCurrentMonth((0, import_dayjs.default)(currentMonth).add(1, "month").toDate());
    };
    const getDaysInMonth = (month) => {
      const startOfMonth = (0, import_dayjs.default)(month).startOf("month");
      const endOfMonth = (0, import_dayjs.default)(month).endOf("month");
      const days = [];
      let currentDate = startOfMonth;
      while (currentDate.isBefore(endOfMonth) || currentDate.isSame(endOfMonth, "day")) {
        days.push(currentDate.toDate());
        currentDate = currentDate.add(1, "day");
      }
      return days;
    };
    const isDateDisabled = (date) => {
      if (minDate && (0, import_dayjs.default)(date).isBefore(minDate, "day")) return true;
      if (maxDate && (0, import_dayjs.default)(date).isAfter(maxDate, "day")) return true;
      return false;
    };
    const formatDate = () => {
      if (!selectedDate) return "";
      return (0, import_dayjs.default)(selectedDate).format("DD MMM YYYY");
    };
    const handleYearSelect = (year) => {
      const newDate = (0, import_dayjs.default)(currentMonth).year(year).toDate();
      setCurrentMonth(newDate);
      setShowYearDropdown(false);
    };
    const renderYearDropdown = () => {
      if (!showYearDropdown) return null;
      const currentYear = (0, import_dayjs.default)(currentMonth).year();
      const years = Array.from({ length: 50 }, (_, i) => currentYear - 25 + i);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-cols-5 gap-2 p-2 overflow-y-auto max-h-[300px]", children: years.map((year) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "div",
        {
          onClick: () => handleYearSelect(year),
          className: cn(
            year === currentYear && "bg-primary-50 text-primary",
            "text-sm cursor-pointer p-2"
          ),
          children: year
        },
        year
      )) });
    };
    const renderDropdown = () => {
      if (!isOpen) return null;
      const doc = getDocument();
      if (!("body" in doc)) return null;
      const months = Array.from({ length: monthsToShow }).map(
        (_, idx) => (0, import_dayjs.default)(currentMonth).add(idx, "month").toDate()
      );
      return (0, import_react_dom2.createPortal)(
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "div",
            {
              className: "fixed inset-0 z-[9998]",
              onClick: () => {
                if (!showYearDropdown) {
                  setIsOpen(false);
                }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            "div",
            {
              ref: dropdownRef,
              className: "fixed z-[9999] bg-white border border-gray-200 rounded-md shadow-lg",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center justify-between p-2 border-b border-gray-200", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    Button,
                    {
                      onClick: handlePrevMonth,
                      variant: "ghost",
                      size: "sm",
                      leftIcon: "mdi:chevron-left"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "font-medium text-gray-900", children: monthsToShow === 1 ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: (0, import_dayjs.default)(currentMonth).format("MMMM") }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "div",
                      {
                        className: "cursor-pointer flex items-center gap-1",
                        onClick: () => setShowYearDropdown(!showYearDropdown),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: (0, import_dayjs.default)(currentMonth).format("YYYY") }),
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, { variant: "ghost", size: "sm", leftIcon: showYearDropdown ? "mdi:chevron-up" : "mdi:chevron-down" })
                        ]
                      }
                    )
                  ] }) : `${(0, import_dayjs.default)(currentMonth).format("MMMM YYYY")} - ${(0, import_dayjs.default)(
                    currentMonth
                  ).add(monthsToShow - 1, "month").format("MMMM YYYY")}` }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    Button,
                    {
                      onClick: handleNextMonth,
                      variant: "ghost",
                      size: "sm",
                      rightIcon: "mdi:chevron-right"
                    }
                  )
                ] }),
                showYearDropdown ? renderYearDropdown() : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  "div",
                  {
                    className: cn(
                      monthsToShow === 2 ? "flex gap-5 p-2 mx-auto w-fit" : "justify-between p-2 mx-auto w-fit"
                    ),
                    children: months.map((month, idx) => {
                      const days = getDaysInMonth(month);
                      const firstDayOfMonth = (0, import_dayjs.default)(month).startOf("month").day();
                      return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-7 gap-y-1 my-1", children: [
                          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (day, idx2) => {
                              const weekend = idx2 === 0 || idx2 === 6;
                              return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                                "div",
                                {
                                  className: cn(
                                    "text-center text-xs font-medium text-neutral",
                                    weekend && "text-danger"
                                  ),
                                  children: day
                                },
                                day
                              );
                            }
                          ),
                          Array.from({ length: firstDayOfMonth }).map(
                            (_, index) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {}, `empty-${index}`)
                          ),
                          days.map((day) => {
                            const isSelected = selectedDate && (0, import_dayjs.default)(day).isSame(selectedDate, "day");
                            const isDisabled = isDateDisabled(day);
                            const isCurrentMonth = (0, import_dayjs.default)(day).isSame(
                              month,
                              "month"
                            );
                            const inRange = rangeStart && rangeEnd && (0, import_dayjs.default)(day).isSameOrAfter(rangeStart, "day") && (0, import_dayjs.default)(day).isSameOrBefore(rangeEnd, "day");
                            const isRangeStart = rangeStart && (0, import_dayjs.default)(day).isSame(rangeStart, "day");
                            const isRangeEnd = rangeEnd && (0, import_dayjs.default)(day).isSame(rangeEnd, "day");
                            const isWeekend = (0, import_dayjs.default)(day).day() === 0 || (0, import_dayjs.default)(day).day() === 6;
                            const isModeRange = rangeStart && rangeEnd;
                            return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                              "div",
                              {
                                className: cn(
                                  inRange && "rounded-none bg-primary-50",
                                  isModeRange && isRangeStart && "rounded-l-full",
                                  isModeRange && isRangeEnd && "rounded-r-full"
                                ),
                                children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                                  "button",
                                  {
                                    onClick: () => !isDisabled && handleDateSelect(day),
                                    disabled: isDisabled,
                                    className: cn(
                                      "p-2 text-sm transition-colors duration-200 w-10 h-10 rounded-full",
                                      isWeekend && "!text-danger",
                                      isSelected && "bg-primary !text-white hover:bg-primary-600 active:bg-primary-700",
                                      isSelected && !isModeRange && "rounded-full",
                                      !isSelected && !isDisabled && "hover:bg-primary-50 active:bg-primary-100",
                                      !isCurrentMonth && "text-neutral-400",
                                      isDisabled && "opacity-50 cursor-not-allowed",
                                      // inRange && "bg-primary-50 text-primary-900 rounded-none",
                                      isModeRange && isRangeStart && "!bg-primary !text-white !rounded-full",
                                      isModeRange && isRangeEnd && "!bg-primary !text-white !rounded-full"
                                    ),
                                    children: (0, import_dayjs.default)(day).format("D")
                                  },
                                  day.toString()
                                )
                              }
                            ) });
                          })
                        ] }),
                        calendarFooter
                      ] }, idx);
                    })
                  }
                )
              ]
            }
          )
        ] }),
        doc.body
      );
    };
    const inputField = /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        className: cn("relative", !fullWidth && "inline-block"),
        ref: inputRef,
        onClick: () => !disabled && setIsOpen(!isOpen),
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icon, { icon: leftIcon, className: "w-4 h-4" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "input",
            {
              ref,
              type: "text",
              value: valueFormatter ? valueFormatter() : formatDate(),
              placeholder,
              readOnly: true,
              className: cn(
                primitiveDatePickerVariants({ variant, size, rounded, fullWidth }),
                leftIcon && "pl-10",
                rightIcon && "pr-10",
                className
              ),
              disabled,
              ...props
            }
          ),
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icon, { icon: rightIcon, className: "w-4 h-4" }) })
        ]
      }
    );
    const helperOrError = /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
      errorText && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mt-1 text-xs text-danger", children: errorText }),
      !errorText && helperText && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mt-1 text-xs text-neutral", children: helperText })
    ] });
    if (labelPlacement === "left") {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        "div",
        {
          className: cn(fullWidth ? "w-full" : "inline-block", className),
          ref: wrapperRef,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-start gap-4", children: [
              label && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "block text-sm text-neutral-900 pt-2", children: [
                label,
                required && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-danger ml-0.5", children: "*" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: cn("flex-1", !fullWidth && "inline-block"), children: [
                inputField,
                helperOrError
              ] })
            ] }),
            renderDropdown()
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        className: cn(fullWidth ? "w-full" : "inline-block", className),
        ref: wrapperRef,
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          inputField,
          helperOrError,
          renderDropdown()
        ]
      }
    );
  }
);
PrimitiveDatePicker.displayName = "PrimitiveDatePicker";

// src/components/atoms/DatePicker/DatePicker.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var DatePicker = ({
  mode = "single",
  value,
  onChange,
  monthsToShow = 1,
  calendarFooter,
  ...props
}) => {
  const [range, setRange] = (0, import_react9.useState)([
    void 0,
    void 0
  ]);
  if (mode === "single") {
    const singleValue = Array.isArray(value) ? value[0] : value;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      PrimitiveDatePicker,
      {
        value: singleValue === null ? void 0 : singleValue,
        onChange: (date) => onChange?.(date),
        monthsToShow,
        calendarFooter,
        ...props
      }
    );
  }
  if (mode === "range") {
    let [start, end] = Array.isArray(value) ? value : range;
    const handleRangeChange = (date) => {
      if (!start || start && end) {
        setRange([date, void 0]);
        onChange?.([date, void 0]);
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
      const format = (d) => d ? d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }) : "";
      if (start && end) {
        return `${format(start)} - ${format(end)}`;
      }
      return format(start);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      PrimitiveDatePicker,
      {
        value: start,
        onChange: handleRangeChange,
        monthsToShow,
        placeholder: props.placeholder || "Select date range",
        valueFormatter: formatRange,
        rangeStart: start,
        rangeEnd: end,
        closeOnSelect: Boolean(end),
        calendarFooter,
        ...props
      }
    );
  }
  return null;
};
DatePicker.displayName = "DatePicker";

// src/components/atoms/Dialog/Dialog.tsx
var import_react10 = require("react");
var import_react_dom3 = require("react-dom");
var import_jsx_runtime14 = require("react/jsx-runtime");
var DialogHeader = (0, import_react10.forwardRef)(
  ({ children, onClose, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "div",
    {
      ref,
      className: cn("mb-4 flex items-center justify-between", className),
      ...props,
      children: [
        children,
        onClose && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "button",
          {
            onClick: onClose,
            className: "ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700",
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Icon, { icon: "mdi:close", className: "h-5 w-5" })
          }
        )
      ]
    }
  )
);
var sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-4xl",
  fullscreen: "w-full h-full max-w-none max-h-none rounded-none"
};
var Dialog = (0, import_react10.forwardRef)(
  ({
    isOpen,
    onClose,
    children,
    className,
    backdrop = "dark",
    header,
    closeOnBackdropClick = true,
    size = "md",
    ...props
  }, ref) => {
    const [isVisible, setIsVisible] = (0, import_react10.useState)(false);
    const [isAnimating, setIsAnimating] = (0, import_react10.useState)(false);
    (0, import_react10.useEffect)(() => {
      if (isOpen) {
        setIsVisible(true);
        setIsAnimating(true);
        const doc2 = getDocument();
        if ("body" in doc2) {
          doc2.body.style.overflow = "hidden";
        }
      } else {
        setIsAnimating(false);
        const timer = setTimeout(() => {
          setIsVisible(false);
          const doc2 = getDocument();
          if ("body" in doc2) {
            doc2.body.style.overflow = "";
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);
    (0, import_react10.useEffect)(() => {
      const handleEscape = (event) => {
        if (event instanceof KeyboardEvent && event.key === "Escape") {
          onClose();
        }
      };
      if (isOpen) {
        const doc2 = getDocument();
        doc2.addEventListener("keydown", handleEscape);
      }
      return () => {
        const doc2 = getDocument();
        doc2.removeEventListener("keydown", handleEscape);
      };
    }, [isOpen, onClose]);
    if (!isVisible) return null;
    const backdropClasses = {
      blur: "backdrop-blur-sm bg-black/30",
      dark: "bg-black/50",
      transparent: "bg-transparent"
    };
    const handleBackdropClick = () => {
      if (closeOnBackdropClick) {
        onClose();
      }
    };
    const doc = getDocument();
    if (!("body" in doc)) return null;
    return (0, import_react_dom3.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "div",
        {
          className: cn(
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
            backdropClasses[backdrop],
            isAnimating ? "opacity-100" : "opacity-0",
            size === "fullscreen" && "items-start"
          ),
          onClick: handleBackdropClick,
          children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
            "div",
            {
              ref,
              className: cn(
                "relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300",
                sizeClasses[size],
                isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0",
                className
              ),
              onClick: (e) => e.stopPropagation(),
              ...props,
              children: [
                header && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogHeader, { onClose, children: header }),
                children
              ]
            }
          )
        }
      ),
      doc.body
    );
  }
);
var DialogTitle = (0, import_react10.forwardRef)(
  ({ children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "h2",
    {
      ref,
      className: cn("text-xl font-semibold text-gray-900", className),
      ...props,
      children
    }
  )
);
var DialogBody = (0, import_react10.forwardRef)(
  ({ children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      ref,
      className: cn("text-gray-600", className),
      ...props,
      children
    }
  )
);
var DialogActions = (0, import_react10.forwardRef)(
  ({ children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      ref,
      className: cn("mt-6 flex justify-end gap-3", className),
      ...props,
      children
    }
  )
);
Dialog.displayName = "Dialog";
DialogTitle.displayName = "DialogTitle";
DialogBody.displayName = "DialogBody";
DialogActions.displayName = "DialogActions";
DialogHeader.displayName = "DialogHeader";

// src/components/atoms/Divider/Divider.tsx
var import_tailwind_merge5 = require("tailwind-merge");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Divider = ({
  orientation = "horizontal",
  variant = "solid",
  color = "neutral",
  size = "sm",
  className = ""
}) => {
  const orientationClasses = {
    horizontal: "w-full border-t-0 border-l-0 border-r-0 border-b",
    vertical: "h-full border-l border-t-0 border-r-0 border-b-0"
  };
  const variantClasses = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted"
  };
  const colorClasses = {
    primary: "border-primary-300",
    secondary: "border-secondary-300",
    neutral: "border-neutral-300",
    success: "border-success-300",
    warning: "border-warning-300",
    error: "border-error-300"
  };
  const sizeClasses2 = {
    sm: orientation === "horizontal" ? "border-b" : "border-l",
    md: orientation === "horizontal" ? "border-b-2" : "border-l-2",
    lg: orientation === "horizontal" ? "border-b-4" : "border-l-4"
  };
  const dividerClasses = (0, import_tailwind_merge5.twMerge)(
    "inline-block",
    orientationClasses[orientation],
    variantClasses[variant],
    colorClasses[color],
    sizeClasses2[size],
    className
  );
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: dividerClasses });
};

// src/components/atoms/FileUpload/FileUpload.tsx
var import_react11 = require("react");
var import_clsx3 = __toESM(require("clsx"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var variantStyles3 = {
  primary: {
    border: "border-primary-200",
    hover: "hover:border-primary-300",
    active: "border-primary-400",
    text: "text-primary-700",
    bg: "bg-primary-50"
  },
  secondary: {
    border: "border-secondary-200",
    hover: "hover:border-secondary-300",
    active: "border-secondary-400",
    text: "text-secondary-700",
    bg: "bg-secondary-50"
  },
  success: {
    border: "border-success-200",
    hover: "hover:border-success-300",
    active: "border-success-400",
    text: "text-success-700",
    bg: "bg-success-50"
  },
  warning: {
    border: "border-warning-200",
    hover: "hover:border-warning-300",
    active: "border-warning-400",
    text: "text-warning-700",
    bg: "bg-warning-50"
  },
  default: {
    border: "border-gray-200",
    hover: "hover:border-gray-300",
    active: "border-gray-400",
    text: "text-gray-700",
    bg: "bg-gray-50"
  },
  light: {
    border: "border-light-200",
    hover: "hover:border-light-300",
    active: "border-light-400",
    text: "text-light-900",
    bg: "bg-light-50"
  },
  dark: {
    border: "border-dark-200",
    hover: "hover:border-dark-300",
    active: "border-dark-400",
    text: "text-dark-50",
    bg: "bg-dark-50"
  },
  info: {
    border: "border-info-200",
    hover: "hover:border-info-300",
    active: "border-info-400",
    text: "text-info-700",
    bg: "bg-info-50"
  }
};
var shadowStyles2 = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
};
var roundedStyles3 = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
};
var FileUpload = ({
  accept = ["*"],
  maxSize = 5 * 1024 * 1024,
  // 5MB default
  multiple = false,
  value = [],
  onChange,
  className,
  disabled = false,
  placeholder = "Drag and drop files here or click to browse",
  variant = "default",
  shadow = "none",
  rounded = "lg",
  children,
  showFileList = true,
  showPlaceholder = true,
  showMaxSize = true,
  icon = "mdi:upload"
}) => {
  const [isDragging, setIsDragging] = (0, import_react11.useState)(false);
  const [error, setError] = (0, import_react11.useState)(null);
  const fileInputRef = (0, import_react11.useRef)(null);
  const handleDragOver = (0, import_react11.useCallback)((e) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);
  const handleDragLeave = (0, import_react11.useCallback)((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  const validateFile = (0, import_react11.useCallback)((file) => {
    if (file.size > maxSize) {
      return `File size exceeds ${maxSize / (1024 * 1024)}MB limit`;
    }
    if (accept[0] !== "*" && !accept.some((type) => {
      if (type.startsWith(".")) {
        return file.name.toLowerCase().endsWith(type.toLowerCase());
      }
      return file.type.startsWith(type);
    })) {
      return `File type not allowed. Allowed types: ${accept.join(", ")}`;
    }
    return null;
  }, [accept, maxSize]);
  const handleDrop = (0, import_react11.useCallback)((e) => {
    e.preventDefault();
    setIsDragging(false);
    setError(null);
    if (disabled) return;
    const files = Array.from(e.dataTransfer.files);
    const validFiles = [];
    const errors = [];
    files.forEach((file) => {
      const validationError = validateFile(file);
      if (validationError) {
        errors.push(`${file.name}: ${validationError}`);
      } else {
        validFiles.push(file);
      }
    });
    if (errors.length > 0) {
      setError(errors.join("\n"));
    }
    if (validFiles.length > 0) {
      const newFiles = multiple ? [...value, ...validFiles] : validFiles;
      onChange?.(newFiles);
    }
  }, [disabled, multiple, onChange, validateFile, value]);
  const handleFileInput = (0, import_react11.useCallback)((e) => {
    setError(null);
    if (disabled || !e.target.files) return;
    const files = Array.from(e.target.files);
    const validFiles = [];
    const errors = [];
    files.forEach((file) => {
      const validationError = validateFile(file);
      if (validationError) {
        errors.push(`${file.name}: ${validationError}`);
      } else {
        validFiles.push(file);
      }
    });
    if (errors.length > 0) {
      setError(errors.join("\n"));
    }
    if (validFiles.length > 0) {
      const newFiles = multiple ? [...value, ...validFiles] : validFiles;
      onChange?.(newFiles);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [disabled, multiple, onChange, validateFile, value]);
  const removeFile = (0, import_react11.useCallback)((index) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange?.(newFiles);
  }, [onChange, value]);
  const getFileIcon = (file) => {
    if (file.type.startsWith("image/")) {
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Icon, { icon: "mdi:image", className: "w-5 h-5" });
    }
    if (file.type.startsWith("text/")) {
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Icon, { icon: "mdi:file-document", className: "w-5 h-5" });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Icon, { icon: "mdi:file", className: "w-5 h-5" });
  };
  const styles = variantStyles3[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: (0, import_clsx3.default)("w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "div",
      {
        className: (0, import_clsx3.default)(
          "p-6 text-center transition-colors",
          !children && [
            "border-2 border-dashed",
            styles.border,
            styles.bg,
            isDragging && styles.active,
            !disabled && styles.hover
          ],
          disabled && "opacity-50 cursor-not-allowed",
          shadowStyles2[shadow],
          roundedStyles3[rounded],
          !children && "cursor-pointer"
        ),
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        onClick: () => !disabled && !children && fileInputRef.current?.click(),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: accept.join(","),
              multiple,
              onChange: handleFileInput,
              className: "hidden",
              disabled
            }
          ),
          children ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { onClick: () => !disabled && fileInputRef.current?.click(), children }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Icon, { icon, className: "w-12 h-12 mx-auto mb-4 text-neutral-400" }),
            showPlaceholder && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: (0, import_clsx3.default)("text-neutral-600", styles.text), children: placeholder }),
            showMaxSize && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "text-sm text-neutral mt-2", children: [
              "Max file size: ",
              maxSize / (1024 * 1024),
              "MB"
            ] })
          ] })
        ]
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mt-2 text-sm text-danger", children: error }),
    showFileList && value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mt-4 space-y-2", children: value.map((file, index) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "div",
      {
        className: (0, import_clsx3.default)(
          "flex items-center justify-between p-2",
          roundedStyles3[rounded],
          styles.bg
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center space-x-2", children: [
            getFileIcon(file),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: (0, import_clsx3.default)("text-sm", styles.text), children: file.name }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "text-xs text-neutral", children: [
              "(",
              (file.size / 1024).toFixed(1),
              " KB)"
            ] })
          ] }),
          !disabled && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "button",
            {
              onClick: () => removeFile(index),
              className: "p-1 text-neutral hover:text-danger",
              children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Icon, { icon: "mdi:close", className: "w-4 h-4" })
            }
          )
        ]
      },
      `${file.name}-${index}`
    )) })
  ] });
};

// src/components/atoms/Notification/Notification.tsx
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime17 = require("react/jsx-runtime");
var notificationVariants = (0, import_class_variance_authority6.cva)(
  "flex items-start gap-3 p-4 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-white border border-neutral-200",
        primary: "bg-primary-50 border border-primary-200",
        success: "bg-success-50 border border-success-200",
        warning: "bg-warning-50 border border-warning-200",
        danger: "bg-danger-50 border border-danger-200",
        info: "bg-info-50 border border-info-200"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      rounded: "md"
    }
  }
);
var Notification = ({
  title,
  children,
  icon,
  variant = "default",
  rounded = "md",
  showClose = false,
  onClose,
  className
}) => {
  const getIconColor = () => {
    switch (variant) {
      case "primary":
        return "text-primary-600";
      case "success":
        return "text-success-600";
      case "warning":
        return "text-warning-600";
      case "danger":
        return "text-danger-600";
      case "info":
        return "text-info-600";
      default:
        return "text-neutral-600";
    }
  };
  const getIcon = () => {
    if (icon) return icon;
    switch (variant) {
      case "primary":
        return "mdi:information";
      case "success":
        return "mdi:check-circle";
      case "warning":
        return "mdi:alert";
      case "danger":
        return "mdi:alert-circle";
      case "info":
        return "mdi:information";
      default:
        return "mdi:information";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: cn(notificationVariants({ variant, rounded }), className), children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Icon, { icon: getIcon(), className: cn("h-5 w-5 flex-shrink-0", getIconColor()) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex-1", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "text-sm font-medium text-neutral-900", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "mt-1 text-sm text-neutral", children })
    ] }),
    showClose && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        type: "button",
        className: "ml-auto flex-shrink-0 text-neutral-400 hover:text-neutral",
        onClick: onClose,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Icon, { icon: "mdi:close", className: "h-5 w-5" })
      }
    )
  ] });
};

// src/components/atoms/Pagination/Pagination.tsx
var import_clsx4 = __toESM(require("clsx"));

// src/components/atoms/Select/Select.tsx
var import_react12 = __toESM(require("react"));
var import_react_dom4 = require("react-dom");
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime18 = require("react/jsx-runtime");
var SELECT_OPEN_EVENT = "select-dropdown-opened";
var selectVariants = (0, import_class_variance_authority7.cva)(
  "rounded-md px-3 py-2 text-sm ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50 bg-white",
        error: "border border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50 bg-white",
        success: "border border-success hover:border-success-600 focus:border-success-600 bg-white",
        ghost: "border-0 hover:bg-neutral-100 focus:bg-neutral-100 bg-transparent",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: true
    }
  }
);
var Select = (0, import_react12.forwardRef)(
  ({
    className,
    variant = "default",
    size = "md",
    rounded = "md",
    options,
    label,
    error = false,
    helperText,
    required = false,
    placeholder,
    value,
    onChange,
    disabled = false,
    position = "bottom",
    fullWidth = false,
    children,
    leftIcon,
    rightIcon,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = (0, import_react12.useState)(false);
    const buttonRef = (0, import_react12.useRef)(null);
    const dropdownRef = (0, import_react12.useRef)(null);
    const reactId = import_react12.default.useId();
    const id = `select-${reactId.replace(/:/g, "")}`;
    const updateDropdownPosition = () => {
      if (isOpen && buttonRef.current && dropdownRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdown = dropdownRef.current;
        const win = getWindow();
        const spaceBelow = win.innerHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;
        const dropdownBottom = buttonRect.bottom + dropdown.offsetHeight + 4;
        const touchesBottom = dropdownBottom >= win.innerHeight;
        const hasMoreSpaceAbove = spaceAbove > spaceBelow;
        const shouldFlip = touchesBottom && hasMoreSpaceAbove;
        if (position === "bottom" || position === "top") {
          dropdown.style.position = "fixed";
          dropdown.style.left = `${buttonRect.left}px`;
          dropdown.style.width = `${buttonRect.width}px`;
          if (position === "bottom" && shouldFlip) {
            dropdown.style.bottom = `${win.innerHeight - buttonRect.top + 4}px`;
            dropdown.style.top = "auto";
            dropdown.style.maxHeight = `${spaceAbove - 8}px`;
          } else if (position === "bottom") {
            dropdown.style.top = `${buttonRect.bottom + 4}px`;
            dropdown.style.bottom = "auto";
            dropdown.style.maxHeight = `${spaceBelow - 8}px`;
          } else if (position === "top" && !shouldFlip) {
            dropdown.style.top = `${buttonRect.bottom + 4}px`;
            dropdown.style.bottom = "auto";
            dropdown.style.maxHeight = `${spaceBelow - 8}px`;
          } else {
            dropdown.style.bottom = `${win.innerHeight - buttonRect.top + 4}px`;
            dropdown.style.top = "auto";
            dropdown.style.maxHeight = `${spaceAbove - 8}px`;
          }
        } else if (position === "left") {
          dropdown.style.position = "fixed";
          dropdown.style.right = `${win.innerWidth - buttonRect.left + 4}px`;
          dropdown.style.top = `${buttonRect.top}px`;
          dropdown.style.maxHeight = `${win.innerHeight - buttonRect.top - 8}px`;
        } else if (position === "right") {
          dropdown.style.position = "fixed";
          dropdown.style.left = `${buttonRect.right + 4}px`;
          dropdown.style.top = `${buttonRect.top}px`;
          dropdown.style.maxHeight = `${win.innerHeight - buttonRect.top - 8}px`;
        }
      }
    };
    (0, import_react12.useEffect)(() => {
      const win = getWindow();
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
        win.addEventListener("scroll", handleScroll, true);
        win.addEventListener("resize", handleResize);
      }
      return () => {
        win.removeEventListener("scroll", handleScroll, true);
        win.removeEventListener("resize", handleResize);
      };
    }, [isOpen, position]);
    (0, import_react12.useEffect)(() => {
      const doc = getDocument();
      const handleOtherSelectOpen = (e) => {
        const customEvent = e;
        if (customEvent.detail.id !== id) {
          setIsOpen(false);
        }
      };
      const handleClickOutside = (e) => {
        const target = e.target;
        const selectButton = buttonRef.current;
        const dropdown = dropdownRef.current;
        if (selectButton && dropdown && !selectButton.contains(target) && !dropdown.contains(target)) {
          setIsOpen(false);
        }
      };
      doc.addEventListener(SELECT_OPEN_EVENT, handleOtherSelectOpen);
      doc.addEventListener("click", handleClickOutside);
      return () => {
        doc.removeEventListener(SELECT_OPEN_EVENT, handleOtherSelectOpen);
        doc.removeEventListener("click", handleClickOutside);
      };
    }, [id]);
    const handleOpen = () => {
      if (disabled) return;
      if (isOpen) {
        setIsOpen(false);
        return;
      }
      const doc = getDocument();
      doc.dispatchEvent(
        new CustomEvent(SELECT_OPEN_EVENT, {
          detail: { id }
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
        const childArray = import_react12.Children.toArray(children);
        const selectedChild = childArray.find(
          (child) => (0, import_react12.isValidElement)(child) && "value" in child.props && child.props.value === value
        );
        return (0, import_react12.isValidElement)(selectedChild) ? selectedChild.props.children : null;
      }
      return null;
    };
    const handleSelect = (value2) => {
      if (disabled) return;
      onChange?.(value2);
      setIsOpen(false);
    };
    const renderOptions = () => {
      if (options) {
        return options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          SelectItem,
          {
            value: option.value,
            disabled: option.disabled,
            selected: option.value === value,
            onClick: () => handleSelect(option.value),
            children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-2", children: [
              option.icon,
              option.label
            ] })
          },
          option.value
        ));
      }
      if (children) {
        return import_react12.Children.map(children, (child) => {
          if ((0, import_react12.isValidElement)(child) && "value" in child.props) {
            return (0, import_react12.cloneElement)(child, {
              selected: child.props.value === value,
              onClick: () => handleSelect(child.props.value)
            });
          }
          return null;
        });
      }
      return null;
    };
    const renderDropdown = () => {
      if (!isOpen || disabled) return null;
      const dropdown = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "div",
        {
          ref: dropdownRef,
          className: cn(
            "fixed z-[9999] min-w-[8rem] border border-neutral-200 bg-white py-1 shadow-lg",
            {
              "rounded-none": rounded === "none",
              "rounded-sm": rounded === "sm",
              "rounded-md": rounded === "md",
              "rounded-lg": rounded === "lg",
              "rounded-xl": rounded === "full"
            },
            position === "left" || position === "right" ? "w-max" : "w-full"
          ),
          onClick: (e) => e.stopPropagation(),
          style: {
            overflowY: "auto"
          },
          children: renderOptions()
        }
      );
      const doc = getDocument();
      if (!("body" in doc)) return null;
      return (0, import_react_dom4.createPortal)(dropdown, doc.body);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: cn(fullWidth ? "w-full" : "inline-block"), ref, ...props, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        "label",
        {
          htmlFor: id,
          className: "mb-1.5 block text-sm text-neutral-900",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-danger ml-0.5", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        "div",
        {
          className: cn("relative", !fullWidth && "inline-block"),
          onClick: handleOpen,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
              "button",
              {
                id,
                ref: buttonRef,
                type: "button",
                className: cn(
                  selectVariants({ variant: error ? "error" : variant, size, rounded, fullWidth }),
                  "flex items-center justify-between",
                  disabled && "cursor-not-allowed opacity-50",
                  leftIcon && "pl-10",
                  rightIcon && "pr-10",
                  className
                ),
                "aria-haspopup": "listbox",
                "aria-expanded": isOpen,
                "aria-describedby": error ? `${id}-error` : helperText ? `${id}-helper` : void 0,
                disabled,
                children: [
                  leftIcon && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Icon, { icon: leftIcon, className: "w-4 h-4" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "flex items-center text-neutral gap-2 min-w-0 flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "truncate", children: getSelectedLabel() || placeholder }) }),
                  rightIcon ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Icon, { icon: rightIcon, className: "w-4 h-4" }) }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                    Icon,
                    {
                      icon: "mdi:chevron-down",
                      className: cn("transition-transform flex-shrink-0 ml-2", isOpen && "rotate-180")
                    }
                  )
                ]
              }
            ),
            renderDropdown()
          ]
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-1 text-xs text-danger", id: `${id}-error`, children: error }),
      !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mt-1 text-xs text-neutral", id: `${id}-helper`, children: helperText })
    ] });
  }
);
Select.displayName = "Select";

// src/components/atoms/Pagination/Pagination.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var Pagination = ({
  currentPage,
  totalPages,
  totalData,
  onPageChange,
  siblingCount = 1,
  className,
  perPageOptions,
  perPage = 10,
  label = "",
  onPerPageChange
}) => {
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };
  const getPageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalPageNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);
      let pages2 = range(startPage, endPage);
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalPageNumbers - (pages2.length + 1);
      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages2 = [...extraPages, ...pages2];
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages2 = [...pages2, ...extraPages];
      } else if (hasLeftSpill && hasRightSpill) {
        pages2 = [...pages2];
      }
      return [1, ...pages2, totalPages];
    }
    return range(1, totalPages);
  };
  const pages = getPageNumbers();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "nav",
    {
      className: (0, import_clsx4.default)("flex items-center justify-between space-x-1", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "hidden sm:block text-sm text-neutral-700", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("b", { children: `${currentPage} - ${totalPages}` }),
          " dari ",
          totalData,
          " ",
          label
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-2", children: [
          perPageOptions && perPageOptions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-2 mr-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-neutral-700 text-sm", children: "Menampilkan" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              Select,
              {
                value: perPage?.toString(),
                onChange: (val) => onPerPageChange && onPerPageChange(Number(val)),
                size: "sm",
                className: "w-16",
                fullWidth: false,
                "aria-label": "Items per page",
                children: perPageOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SelectItem, { value: option.toString(), children: option }, option))
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-neutral-700 text-sm", children: "data per halaman" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            Button,
            {
              variant: "ghost",
              onClick: () => onPageChange(currentPage - 1),
              disabled: currentPage === 1,
              className: (0, import_clsx4.default)(
                "px-3 py-1 rounded-md text-sm",
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Icon, { size: "18", icon: "mdi:chevron-left" })
            }
          ),
          pages.map((page, index) => {
            const isCurrentPage = page === currentPage;
            const isEllipsis = typeof page === "string" && page === "...";
            return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              Button,
              {
                variant: "ghost",
                onClick: () => !isEllipsis && onPageChange(page),
                className: (0, import_clsx4.default)(
                  "px-3 py-1 rounded-md text-sm",
                  isCurrentPage ? "bg-primary text-white hover:bg-primary" : "text-gray-700",
                  isEllipsis && "cursor-default"
                ),
                children: page
              },
              index
            );
          }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            Button,
            {
              variant: "ghost",
              onClick: () => onPageChange(currentPage + 1),
              disabled: currentPage === totalPages,
              className: (0, import_clsx4.default)(
                "px-3 py-1 rounded-md text-sm",
                currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Icon, { size: "18", icon: "mdi:chevron-right" })
            }
          )
        ] })
      ]
    }
  );
};

// src/components/atoms/Radio/Radio.tsx
var import_clsx5 = __toESM(require("clsx"));
var import_jsx_runtime20 = require("react/jsx-runtime");
var Radio = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  name,
  value
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "label",
    {
      className: (0, import_clsx5.default)(
        "inline-flex items-center cursor-pointer",
        disabled && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "input",
          {
            type: "radio",
            className: (0, import_clsx5.default)(
              "w-5 h-5 border-2 rounded-full appearance-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/25",
              checked ? "border-primary bg-primary" : "border-gray-300 hover:border-primary",
              disabled && "cursor-not-allowed"
            ),
            checked,
            disabled,
            onChange: handleChange,
            name,
            value
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: label })
      ]
    }
  );
};

// src/components/atoms/Skeleton/Skeleton.tsx
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime21 = require("react/jsx-runtime");
var skeletonVariants = (0, import_class_variance_authority8.cva)(
  "animate-pulse bg-neutral-200",
  {
    variants: {
      variant: {
        default: "bg-neutral-200",
        primary: "bg-primary-200",
        success: "bg-success-200",
        warning: "bg-warning-200",
        danger: "bg-danger-200",
        info: "bg-info-200"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      rounded: "md",
      fullWidth: false
    }
  }
);
var Skeleton = ({
  width,
  height,
  variant = "default",
  rounded = "md",
  fullWidth = false,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "div",
    {
      className: cn(skeletonVariants({ variant, rounded, fullWidth }), className),
      style: {
        width: !fullWidth && typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height
      }
    }
  );
};

// src/components/atoms/Slider/Slider.tsx
var import_react13 = require("react");
var import_clsx6 = __toESM(require("clsx"));
var import_jsx_runtime22 = require("react/jsx-runtime");
var Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue = min,
  onChange,
  className,
  disabled = false,
  showValue = false,
  marks = []
}) => {
  const [value, setValue] = (0, import_react13.useState)(defaultValue);
  const [isDragging, setIsDragging] = (0, import_react13.useState)(false);
  const sliderRef = (0, import_react13.useRef)(null);
  const currentValue = controlledValue !== void 0 ? controlledValue : value;
  const handleChange = (newValue) => {
    if (disabled) return;
    const clampedValue = Math.min(Math.max(newValue, min), max);
    if (controlledValue === void 0) {
      setValue(clampedValue);
    }
    onChange?.(clampedValue);
  };
  const handleMouseDown = (e) => {
    if (disabled) return;
    setIsDragging(true);
    updateValueFromEvent(e);
  };
  const handleMouseMove = (e) => {
    if (!isDragging || disabled) return;
    updateValueFromEvent(e);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const updateValueFromEvent = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage2 = x / rect.width;
    const newValue = min + (max - min) * percentage2;
    const steppedValue = Math.round(newValue / step) * step;
    handleChange(steppedValue);
  };
  (0, import_react13.useEffect)(() => {
    if (isDragging) {
      const win = getWindow();
      win.addEventListener("mousemove", handleMouseMove);
      win.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      const win = getWindow();
      win.removeEventListener("mousemove", handleMouseMove);
      win.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);
  const percentage = (currentValue - min) / (max - min) * 100;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: (0, import_clsx6.default)("relative w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "div",
      {
        ref: sliderRef,
        className: (0, import_clsx6.default)(
          "relative h-2 bg-gray-200 rounded-full cursor-pointer",
          disabled && "opacity-50 cursor-not-allowed"
        ),
        onMouseDown: handleMouseDown,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "div",
            {
              className: "absolute h-full bg-primary rounded-full",
              style: { width: `${percentage}%` }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "div",
            {
              className: (0, import_clsx6.default)(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md",
                "border-2 border-primary",
                disabled && "cursor-not-allowed"
              ),
              style: { left: `${percentage}%`, transform: "translate(-50%, -50%)" }
            }
          )
        ]
      }
    ),
    marks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex justify-between mt-2", children: marks.map((mark) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "div",
      {
        className: "text-xs text-gray",
        style: { left: `${(mark.value - min) / (max - min) * 100}%` },
        children: mark.label
      },
      mark.value
    )) }),
    showValue && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mt-2 text-sm text-gray-600", children: currentValue })
  ] });
};

// src/components/atoms/StarRating/StarRating.tsx
var import_react14 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var sizeConfig = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
};
var colorConfig = {
  primary: "text-primary",
  warning: "text-warning",
  default: "text-default-400"
};
var StarRating = ({
  rating,
  maxRating = 5,
  size = "md",
  color = "primary",
  readOnly = false,
  onRatingChange,
  className
}) => {
  const [hoverRating, setHoverRating] = (0, import_react14.useState)(null);
  const handleMouseEnter = (index) => {
    if (!readOnly) {
      setHoverRating(index);
    }
  };
  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(null);
    }
  };
  const handleClick = (index) => {
    if (!readOnly && onRatingChange) {
      onRatingChange(index);
    }
  };
  const displayRating = hoverRating !== null ? hoverRating : rating;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: cn("flex items-center gap-1", className), children: [...Array(maxRating)].map((_, index) => {
    const starIndex = index + 1;
    const isFilled = starIndex <= displayRating;
    const isHovered = hoverRating !== null && starIndex <= hoverRating;
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "button",
      {
        className: cn(
          "transition-colors duration-200",
          sizeConfig[size],
          isFilled || isHovered ? colorConfig[color] : "text-default-200",
          !readOnly && "cursor-pointer"
        ),
        onMouseEnter: () => handleMouseEnter(starIndex),
        onMouseLeave: handleMouseLeave,
        onClick: () => handleClick(starIndex),
        disabled: readOnly,
        "aria-label": `Rate ${starIndex} out of ${maxRating}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Icon,
          {
            icon: isFilled || isHovered ? "mdi:star" : "mdi:star-outline",
            className: "w-full h-full"
          }
        )
      },
      index
    );
  }) });
};
var StarRating_default = StarRating;

// src/components/atoms/StatusIndicator/StatusIndicator.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var statusConfig = {
  active: {
    bgColor: "bg-success",
    label: "Active"
  },
  inactive: {
    bgColor: "bg-default",
    label: "Inactive"
  },
  pending: {
    bgColor: "bg-warning",
    label: "Pending"
  },
  warning: {
    bgColor: "bg-warning",
    label: "Warning"
  },
  error: {
    bgColor: "bg-danger",
    label: "Error"
  }
};
var sizeConfig2 = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4"
};
var StatusIndicator = ({
  status,
  size = "md",
  withLabel = false,
  className
}) => {
  const { bgColor, label } = statusConfig[status];
  const sizeClass = sizeConfig2[size];
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: cn("flex items-center gap-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: cn("rounded-full animate-pulse", bgColor, sizeClass) }),
    withLabel && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-sm", children: label })
  ] });
};

// src/components/atoms/Stepper/Stepper.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var getStepIconByStatus = (status, customIcon) => {
  if (customIcon) return customIcon;
  switch (status) {
    case "completed":
      return "mdi:check";
    case "active":
      return "mdi:circle-medium";
    default:
      return "mdi:circle-outline";
  }
};
var getStepColorByStatus = (status) => {
  switch (status) {
    case "completed":
      return "text-white bg-primary ring-4 ring-primary-50";
    case "active":
      return "text-primary bg-primary-50 ring-4 ring-primary-50";
    default:
      return "text-neutral bg-neutral-50 ring-4 ring-neutral-50";
  }
};
var HorizontalStepper = ({
  steps,
  activeStep,
  className,
  variant = "default"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: cn("flex flex-row items-center w-full justify-between", className), children: steps.map((step, index) => {
    const status = index < activeStep ? "completed" : index === activeStep ? "active" : "pending";
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "div",
      {
        className: "flex items-center flex-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: cn(
            "flex flex-col items-center z-10",
            variant === "default" ? "gap-4" : "gap-2",
            variant === "default" ? "px-5" : "px-3"
          ), children: [
            variant === "default" && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "div",
              {
                className: cn(
                  "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                  getStepColorByStatus(status)
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  Icon,
                  {
                    icon: getStepIconByStatus(status, step.icon),
                    className: "h-5 w-5"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex flex-col items-center text-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "span",
                {
                  className: cn(
                    "text-sm font-medium",
                    status === "active" ? "text-primary" : status === "completed" ? "text-neutral-900" : "text-neutral"
                  ),
                  children: step.label
                }
              ),
              step.description && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-xs text-neutral", children: step.description })
            ] })
          ] }),
          index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            Divider,
            {
              className: cn(
                "transition-all duration-200",
                index < activeStep ? "bg-primary" : "bg-neutral-200"
              )
            }
          )
        ]
      },
      index
    );
  }) });
};
var VerticalStepper = ({
  steps,
  activeStep,
  className,
  variant = "default"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: cn("flex flex-col items-start gap-8", className), children: steps.map((step, index) => {
    const status = index < activeStep ? "completed" : index === activeStep ? "active" : "pending";
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "div",
      {
        className: "flex flex-row w-full items-center relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: cn(
            "flex flex-row items-center z-10",
            variant === "default" ? "gap-4" : "gap-2"
          ), children: [
            variant === "default" && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "div",
              {
                className: cn(
                  "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
                  getStepColorByStatus(status)
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  Icon,
                  {
                    icon: getStepIconByStatus(status, step.icon),
                    className: "h-5 w-5"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex flex-col items-start", children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "span",
                {
                  className: cn(
                    "text-sm font-medium",
                    status === "active" ? "text-primary00" : status === "completed" ? "text-neutral-900" : "text-neutral"
                  ),
                  children: step.label
                }
              ),
              step.description && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-xs text-neutral", children: step.description })
            ] })
          ] }),
          index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            "div",
            {
              className: cn(
                "absolute transition-all duration-200",
                variant === "default" ? "left-4 w-[1px] top-10 bottom-[-24px]" : "left-0 w-[1px] top-6 bottom-[-24px]",
                index < activeStep ? "bg-primary" : "bg-neutral-200"
              )
            }
          )
        ]
      },
      index
    );
  }) });
};
var Stepper = ({
  orientation = "horizontal",
  variant = "default",
  ...props
}) => {
  if (orientation === "vertical") {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(VerticalStepper, { variant, ...props });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(HorizontalStepper, { variant, ...props });
};

// src/components/atoms/Switch/Switch.tsx
var import_clsx7 = __toESM(require("clsx"));
var import_jsx_runtime26 = require("react/jsx-runtime");
var Switch = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  size = "md"
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };
  const sizeClasses2 = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-7"
  };
  const dotSizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "label",
    {
      className: (0, import_clsx7.default)(
        "inline-flex items-center cursor-pointer",
        disabled && "opacity-60 cursor-not-allowed"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "input",
            {
              type: "checkbox",
              className: "sr-only",
              checked,
              disabled,
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "div",
            {
              className: (0, import_clsx7.default)(
                "block rounded-full transition-colors duration-200 ease-in-out",
                sizeClasses2[size],
                checked ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
                disabled && "cursor-not-allowed"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            "div",
            {
              className: (0, import_clsx7.default)(
                "absolute rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                dotSizeClasses[size],
                checked ? size === "sm" ? "translate-x-4" : size === "md" ? "translate-x-5" : "translate-x-7" : "translate-x-0.5",
                "top-1/2 -translate-y-1/2"
              )
            }
          )
        ] }),
        label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "ml-3 text-sm text-gray-700 dark:text-gray-300", children: label })
      ]
    }
  );
};

// src/components/atoms/Tabs/Tabs.tsx
var import_react15 = require("react");
var import_clsx8 = __toESM(require("clsx"));
var import_jsx_runtime27 = require("react/jsx-runtime");
var Tabs = ({
  items,
  defaultActiveId,
  variant = "default",
  size = "md",
  className,
  tabListClassName,
  tabClassName,
  contentClassName,
  onChange
}) => {
  const [activeId, setActiveId] = (0, import_react15.useState)(defaultActiveId || items[0]?.id || "");
  const handleTabClick = (0, import_react15.useCallback)((id) => {
    setActiveId(id);
    onChange?.(id);
  }, [onChange]);
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-sm px-3 py-1.5";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  };
  const getVariantClasses = (isActive, isDisabled) => {
    const baseClasses = (0, import_clsx8.default)(
      "flex items-center space-x-2 transition-colors",
      "font-medium",
      getSizeClasses(),
      isDisabled && "opacity-50 cursor-not-allowed",
      !isDisabled && "cursor-pointer"
    );
    switch (variant) {
      case "pills":
        return (0, import_clsx8.default)(
          baseClasses,
          "rounded-full",
          isActive ? "bg-primary text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        );
      case "underline":
        return (0, import_clsx8.default)(
          baseClasses,
          "border-b-2",
          isActive ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
      default:
        return (0, import_clsx8.default)(
          baseClasses,
          "border-b-2",
          isActive ? "border-primary text-primary" : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
        );
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: (0, import_clsx8.default)("w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "div",
      {
        className: (0, import_clsx8.default)(
          "flex space-x-1 border-b border-gray-200 dark:border-gray-700",
          variant === "pills" && "space-x-2 border-b-0",
          tabListClassName
        ),
        children: items.map((item) => {
          const isActive = item.id === activeId;
          const isDisabled = Boolean(item.disabled);
          return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            "button",
            {
              onClick: () => !isDisabled && handleTabClick(item.id),
              disabled: isDisabled,
              className: (0, import_clsx8.default)(
                getVariantClasses(isActive, isDisabled),
                tabClassName
              ),
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  Icon,
                  {
                    icon: item.icon,
                    className: "w-5 h-5 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: item.label })
              ]
            },
            item.id
          );
        })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: (0, import_clsx8.default)("mt-4", contentClassName), children: items.find((item) => item.id === activeId)?.content })
  ] });
};

// src/components/atoms/Text/Text.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var Text = ({
  variant = "p",
  children,
  className,
  as
}) => {
  const variantStyles4 = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    p: "text-base",
    span: "text-base",
    label: "text-sm font-medium",
    heading3: "text-2xl font-bold",
    body1: "text-base",
    display1: "text-5xl font-bold",
    display2: "text-4xl font-bold",
    heading1: "text-4xl font-bold",
    heading2: "text-3xl font-bold",
    heading4: "text-xl font-bold",
    subtitle1: "text-lg font-medium",
    subtitle2: "text-base font-medium",
    body2: "text-sm",
    caption: "text-xs",
    value: "text-base font-medium"
  };
  const getComponent = (variant2) => {
    switch (variant2) {
      case "display1":
      case "display2":
      case "heading1":
      case "heading2":
      case "heading3":
      case "heading4":
        return "h" + variant2.slice(-1);
      case "body1":
      case "body2":
      case "subtitle1":
      case "subtitle2":
        return "p";
      case "caption":
      case "value":
        return "span";
      default:
        return variant2;
    }
  };
  const Component = as || getComponent(variant);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Component, { className: cn("text-gray-900", variantStyles4[variant], className), children });
};

// src/components/atoms/TimePicker/TimePicker.tsx
var import_react16 = __toESM(require("react"));
var import_react_dom5 = require("react-dom");
var import_class_variance_authority9 = require("class-variance-authority");
var import_jsx_runtime29 = require("react/jsx-runtime");
var TIMEPICKER_OPEN_EVENT = "timepicker-dropdown-opened";
var timePickerVariants = (0, import_class_variance_authority9.cva)(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: true
    }
  }
);
var PrimitiveTimePicker = (0, import_react16.forwardRef)(
  ({
    value,
    onChange,
    use24Hour = false,
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
    placeholder = "Select time",
    leftIcon,
    rightIcon,
    valueFormatter,
    closeOnSelect = true,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = (0, import_react16.useState)(false);
    const [selectedTime, setSelectedTime] = (0, import_react16.useState)(value || "");
    const [hours, setHours] = (0, import_react16.useState)(0);
    const [minutes, setMinutes] = (0, import_react16.useState)(0);
    const [isAM, setIsAM] = (0, import_react16.useState)(true);
    const wrapperRef = (0, import_react16.useRef)(null);
    const inputRef = (0, import_react16.useRef)(null);
    const dropdownRef = (0, import_react16.useRef)(null);
    const reactId = import_react16.default.useId();
    const id = `timepicker-${reactId.replace(/:/g, "")}`;
    const updateDropdownPosition = () => {
      if (!isOpen || !inputRef.current || !dropdownRef.current) return;
      const inputRect = inputRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      const win = getWindow();
      const spaceBelow = win.innerHeight - inputRect.bottom;
      dropdown.style.top = `${inputRect.bottom + 4}px`;
      dropdown.style.bottom = "auto";
      dropdown.style.left = `${inputRect.left}px`;
      dropdown.style.maxHeight = `${spaceBelow - 8}px`;
      dropdown.style.width = `${inputRect.width}px`;
    };
    (0, import_react16.useEffect)(() => {
      const win = getWindow();
      const doc2 = getDocument();
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
      const handleOtherTimePickerOpen = (e) => {
        const customEvent = e;
        if (customEvent.detail.id !== id) {
          setIsOpen(false);
        }
      };
      const handleClickOutside = (e) => {
        const target = e.target;
        if (wrapperRef.current && dropdownRef.current && !wrapperRef.current.contains(target) && !dropdownRef.current.contains(target)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        updateDropdownPosition();
        win.addEventListener("scroll", handleScroll, true);
        win.addEventListener("resize", handleResize);
      }
      doc2.addEventListener(TIMEPICKER_OPEN_EVENT, handleOtherTimePickerOpen);
      doc2.addEventListener("mousedown", handleClickOutside);
      return () => {
        win.removeEventListener("scroll", handleScroll, true);
        win.removeEventListener("resize", handleResize);
        doc2.removeEventListener(TIMEPICKER_OPEN_EVENT, handleOtherTimePickerOpen);
        doc2.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen, id]);
    const handleOpen = () => {
      if (disabled) return;
      if (!isOpen) {
        const doc2 = getDocument();
        doc2.dispatchEvent(
          new CustomEvent(TIMEPICKER_OPEN_EVENT, {
            detail: { id }
          })
        );
      }
      setIsOpen(!isOpen);
    };
    (0, import_react16.useEffect)(() => {
      if (value) {
        setSelectedTime(value);
        const [h, m] = value.split(":").map(Number);
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
      const time = `${formattedHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
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
    if (!("body" in doc)) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { ref: wrapperRef, className: cn("relative", fullWidth && "w-full", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
        "label",
        {
          className: cn(
            "block text-sm font-medium text-gray-700 mb-1",
            labelPlacement === "left" && "inline-block mr-2"
          ),
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-red ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
        "div",
        {
          ref: inputRef,
          className: "relative",
          onClick: handleOpen,
          children: [
            leftIcon && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { icon: leftIcon, size: 20 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "input",
              {
                ref,
                type: "text",
                value: displayValue,
                placeholder,
                readOnly: true,
                className: cn(
                  timePickerVariants({ variant, size, rounded, fullWidth }),
                  leftIcon && "pl-10",
                  rightIcon && "pr-10",
                  "text-left"
                ),
                disabled,
                ...props
              }
            ),
            rightIcon && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { icon: rightIcon, size: 20 }) })
          ]
        }
      ),
      isOpen && (0, import_react_dom5.createPortal)(
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "div",
          {
            ref: dropdownRef,
            className: "fixed z-[9999] w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "p-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(Card, { variant: "ghost", className: cn(
                "flex mx-2 my-1 p-0",
                use24Hour ? "justify-start gap-8" : "justify-start gap-4"
              ), children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex flex-col gap-2", children: generateHours().map((h) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    onClick: () => setHours(h),
                    className: cn(hours === h && "bg-primary text-white"),
                    children: h.toString().padStart(2, "0")
                  },
                  h
                )) }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] hover:scrollbar-thumb-neutral-200 hover:scrollbar-track-transparent [&::-webkit-scrollbar]:hidden hover:[&::-webkit-scrollbar]:block hover:[&::-webkit-scrollbar]:w-1.5 hover:[&::-webkit-scrollbar-thumb]:rounded-full", style: { maxHeight: "200px" }, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex flex-col gap-2", children: generateMinutes().map((m) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    onClick: () => setMinutes(m),
                    className: cn(minutes === m && "bg-primary text-white"),
                    children: m.toString().padStart(2, "0")
                  },
                  m
                )) }) }) }),
                !use24Hour && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    Button,
                    {
                      variant: "ghost",
                      onClick: () => setIsAM(true),
                      className: cn(isAM && "bg-primary text-white"),
                      children: "AM"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                    Button,
                    {
                      variant: "ghost",
                      onClick: () => setIsAM(false),
                      className: cn(!isAM && "bg-primary text-white"),
                      children: "PM"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "mb-2 mx-2", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                Button,
                {
                  variant: "primary",
                  onClick: handleTimeSelect,
                  size: "sm",
                  fullWidth: true,
                  children: "Select"
                }
              ) })
            ] })
          }
        ),
        doc.body
      ),
      errorText && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "mt-1 text-sm text-danger-600", children: errorText }),
      helperText && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "mt-1 text-sm text-gray", children: helperText })
    ] });
  }
);
PrimitiveTimePicker.displayName = "PrimitiveTimePicker";
var TimePicker = ({
  value,
  onChange,
  valueFormatter,
  closeOnSelect,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    PrimitiveTimePicker,
    {
      value,
      onChange,
      valueFormatter,
      closeOnSelect,
      ...props
    }
  );
};
TimePicker.displayName = "TimePicker";

// src/components/atoms/Toogle/Toogle.tsx
var import_react17 = __toESM(require("react"));
var import_class_variance_authority10 = require("class-variance-authority");
var import_jsx_runtime30 = require("react/jsx-runtime");
var toggleVariants = (0, import_class_variance_authority10.cva)(
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-neutral-200 data-[state=checked]:bg-primary focus-visible:ring-primary",
        success: "bg-neutral-200 data-[state=checked]:bg-success focus-visible:ring-success",
        warning: "bg-neutral-200 data-[state=checked]:bg-warning focus-visible:ring-warning",
        danger: "bg-neutral-200 data-[state=checked]:bg-danger focus-visible:ring-danger"
      },
      size: {
        sm: "h-4 w-7",
        md: "h-6 w-11",
        lg: "h-7 w-14"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var thumbVariants = (0, import_class_variance_authority10.cva)(
  "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3",
        md: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-6 w-6 data-[state=checked]:translate-x-7"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Toggle = (0, import_react17.forwardRef)(
  ({
    checked = false,
    onCheckedChange,
    variant = "primary",
    size = "md",
    label,
    required = false,
    helperText,
    errorText,
    error = false,
    className,
    ...props
  }, ref) => {
    const id = import_react17.default.useId();
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "inline-flex flex-col gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "button",
          {
            type: "button",
            role: "switch",
            "aria-checked": checked,
            "data-state": checked ? "checked" : "unchecked",
            onClick: () => onCheckedChange?.(!checked),
            ref,
            className: cn(toggleVariants({ variant: error ? "danger" : variant, size }), className),
            "aria-describedby": error ? errorId : helperText ? helperId : void 0,
            "aria-invalid": error,
            "aria-required": required,
            ...props,
            children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
              "span",
              {
                "data-state": checked ? "checked" : "unchecked",
                className: cn(
                  thumbVariants({ size }),
                  checked ? "translate-x-5" : "translate-x-1"
                )
              }
            )
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
          "label",
          {
            htmlFor: id,
            className: "text-sm text-neutral-900",
            children: [
              label,
              required && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "text-danger ml-0.5", children: "*" })
            ]
          }
        )
      ] }),
      error && errorText && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-xs text-danger", id: errorId, children: errorText }),
      !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-xs text-neutral", id: helperId, children: helperText })
    ] });
  }
);
Toggle.displayName = "Toggle";

// src/components/atoms/Tooltip/Tooltip.tsx
var import_react18 = require("react");
var import_class_variance_authority11 = require("class-variance-authority");
var import_react_dom6 = require("react-dom");
var import_jsx_runtime31 = require("react/jsx-runtime");
var tooltipVariants = (0, import_class_variance_authority11.cva)(
  "absolute z-50 px-3 py-2 text-sm rounded-md shadow-lg transition-opacity duration-200",
  {
    variants: {
      color: {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-success text-white",
        warning: "bg-warning text-white",
        danger: "bg-danger text-white",
        info: "bg-info text-white",
        neutral: "bg-neutral text-white",
        light: "bg-white text-neutral-900 border border-neutral-200"
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      color: "primary",
      size: "md"
    }
  }
);
var arrowVariants = (0, import_class_variance_authority11.cva)("absolute w-2 h-2 transform rotate-45", {
  variants: {
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
      info: "bg-info",
      neutral: "bg-neutral",
      light: "bg-white"
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
var Tooltip = ({
  content,
  children,
  position = "top",
  delay = 0,
  className,
  color = "light",
  size = "md",
  isOpen: controlledIsOpen,
  onOpenChange,
  trigger = "hover"
}) => {
  const [isVisible, setIsVisible] = (0, import_react18.useState)(false);
  const [tooltipPosition, setTooltipPosition] = (0, import_react18.useState)({ top: 0, left: 0 });
  const tooltipRef = (0, import_react18.useRef)(null);
  const triggerRef = (0, import_react18.useRef)(null);
  const timeoutRef = (0, import_react18.useRef)();
  const isControlled = controlledIsOpen !== void 0;
  const showTooltip = isControlled ? controlledIsOpen : isVisible;
  const updatePosition = () => {
    if (!tooltipRef.current || !triggerRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const win = getWindow();
    const scrollX = win.scrollX || win.pageXOffset;
    const scrollY = win.scrollY || win.pageYOffset;
    let top = 0;
    let left = 0;
    const spacing = 8;
    switch (position) {
      case "top":
        top = triggerRect.top + scrollY - tooltipRect.height - spacing;
        left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + scrollY + spacing;
        left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left + scrollX - tooltipRect.width - spacing;
        break;
      case "right":
        top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + scrollX + spacing;
        break;
    }
    const viewportWidth = win.innerWidth;
    const viewportHeight = win.innerHeight;
    if (left < 0) left = 0;
    if (left + tooltipRect.width > viewportWidth) {
      left = viewportWidth - tooltipRect.width;
    }
    if (top < 0) top = 0;
    if (top + tooltipRect.height > viewportHeight) {
      top = viewportHeight - tooltipRect.height;
    }
    setTooltipPosition({ top, left });
  };
  (0, import_react18.useEffect)(() => {
    if (showTooltip) {
      updatePosition();
      const win = getWindow();
      win.addEventListener("scroll", updatePosition, true);
      win.addEventListener("resize", updatePosition);
    }
    return () => {
      const win = getWindow();
      win.removeEventListener("scroll", updatePosition, true);
      win.removeEventListener("resize", updatePosition);
    };
  }, [showTooltip, position]);
  const handleShow = () => {
    if (isControlled) {
      onOpenChange?.(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
  };
  const handleHide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (isControlled) {
      onOpenChange?.(false);
    } else {
      setIsVisible(false);
    }
  };
  const handleClick = (e) => {
    e.stopPropagation();
    if (trigger === "click") {
      if (isControlled) {
        onOpenChange?.(!controlledIsOpen);
      } else {
        setIsVisible(!isVisible);
      }
    }
  };
  (0, import_react18.useEffect)(() => {
    const handleClickOutside = (e) => {
      if (trigger === "click" && tooltipRef.current && !tooltipRef.current.contains(e.target) && triggerRef.current && !triggerRef.current.contains(e.target)) {
        handleHide();
      }
    };
    if (showTooltip) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showTooltip, trigger]);
  const renderTooltip = () => {
    if (!showTooltip) return null;
    const doc = getDocument();
    if (!("body" in doc)) return null;
    return (0, import_react_dom6.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
        "div",
        {
          ref: tooltipRef,
          className: cn(tooltipVariants({ color, size }), className),
          style: {
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`
          },
          children: [
            content,
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              "div",
              {
                className: cn(
                  arrowVariants({ color }),
                  position === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  position === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  position === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  position === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
                  color === "light" && position === "top" && "border-r border-b border-neutral-200",
                  color === "light" && position === "bottom" && "border-l border-t border-neutral-200",
                  color === "light" && position === "left" && "border-t border-r border-neutral-200",
                  color === "light" && position === "right" && "border-l border-b border-neutral-200"
                )
              }
            )
          ]
        }
      ),
      doc.body
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "div",
    {
      ref: triggerRef,
      className: "relative inline-block",
      onMouseEnter: trigger === "hover" ? handleShow : void 0,
      onMouseLeave: trigger === "hover" ? handleHide : void 0,
      onClick: handleClick,
      children: [
        children,
        renderTooltip()
      ]
    }
  ) });
};

// src/components/atoms/Progress/progress.tsx
var import_react19 = __toESM(require("react"));
var import_class_variance_authority12 = require("class-variance-authority");
var import_jsx_runtime32 = require("react/jsx-runtime");
var progressVariants = (0, import_class_variance_authority12.cva)(
  "relative overflow-hidden",
  {
    variants: {
      variant: {
        bar: "w-full bg-neutral-100",
        circular: "inline-block"
      },
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        success: "text-success",
        warning: "text-warning",
        danger: "text-danger",
        info: "text-info"
      },
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      }
    },
    defaultVariants: {
      variant: "bar",
      color: "primary",
      size: "md"
    }
  }
);
var circularSizeMap = {
  sm: 24,
  md: 36,
  lg: 48
};
var barColorMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info"
};
var circularColorMap = {
  primary: "#007C99",
  // Tailwind primary
  secondary: "#CEEAE7",
  success: "#00B37D",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9"
};
var Progress = import_react19.default.forwardRef(
  ({
    className,
    variant = "bar",
    color = "primary",
    size = "md",
    value = 0,
    isIndeterminate = false,
    showValue = false,
    label,
    rounded = "full",
    icon,
    ...props
  }, ref) => {
    const clampedValue = Math.min(Math.max(value, 0), 100);
    const circularSize = circularSizeMap[size];
    const strokeWidth = size === "sm" ? 2 : size === "md" ? 3 : 4;
    const radius = (circularSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - clampedValue / 100 * circumference;
    let roundedClass = "";
    if (variant === "loading") {
      roundedClass = "rounded-full";
    } else if (rounded) {
      roundedClass = rounded === "none" ? "" : `rounded-${rounded}`;
    } else {
      roundedClass = "rounded-md";
    }
    if (variant === "circular") {
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "inline-flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "relative", style: { width: circularSize, height: circularSize }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
            "svg",
            {
              className: cn(
                "transform -rotate-90",
                isIndeterminate ? "animate-spin" : ""
              ),
              width: circularSize,
              height: circularSize,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                  "circle",
                  {
                    strokeWidth,
                    stroke: "#e5e7eb",
                    fill: "transparent",
                    r: radius,
                    cx: circularSize / 2,
                    cy: circularSize / 2
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                  "circle",
                  {
                    className: cn(
                      "transition-all duration-300 ease-in-out",
                      isIndeterminate ? "animate-dash" : ""
                    ),
                    strokeWidth,
                    strokeDasharray: circumference,
                    strokeDashoffset: isIndeterminate ? 0 : strokeDashoffset,
                    strokeLinecap: "round",
                    stroke: circularColorMap[color],
                    fill: "transparent",
                    r: radius,
                    cx: circularSize / 2,
                    cy: circularSize / 2
                  }
                )
              ]
            }
          ),
          icon && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Icon, { icon, size: circularSize * 0.5 }) }),
          showValue && !isIndeterminate && !icon && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "absolute inset-0 flex items-center justify-center text-xs font-medium", children: [
            Math.round(clampedValue),
            "%"
          ] })
        ] }),
        label && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "text-sm text-neutral-600", children: label })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "div",
        {
          ref,
          className: cn(progressVariants({ variant: variant === "loading" ? "bar" : variant, size }), roundedClass, className),
          role: "progressbar",
          "aria-valuenow": isIndeterminate ? void 0 : clampedValue,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          ...props,
          children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "div",
            {
              className: cn(
                "h-full transition-all duration-300 ease-in-out",
                isIndeterminate ? "animate-progress-indeterminate" : "",
                barColorMap[color],
                roundedClass
              ),
              style: {
                width: isIndeterminate ? "100%" : `${clampedValue}%`
              }
            }
          )
        }
      ),
      (showValue || label) && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex justify-between text-xs text-neutral-600", children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { children: label }),
        showValue && !isIndeterminate && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("span", { children: [
          Math.round(clampedValue),
          "%"
        ] })
      ] })
    ] });
  }
);
Progress.displayName = "Progress";

// src/components/atoms/PhoneInput/PhoneInput.tsx
var import_react20 = __toESM(require("react"));
var import_class_variance_authority13 = require("class-variance-authority");
var import_react_dom7 = require("react-dom");

// src/components/atoms/PhoneInput/constant.ts
var COUNTRIES = [
  { name: "Afghanistan", code: "+93", iso: "af", flag: "flagpack:af" },
  { name: "Albania", code: "+355", iso: "al", flag: "flagpack:al" },
  { name: "Algeria", code: "+213", iso: "dz", flag: "flagpack:dz" },
  { name: "American Samoa", code: "+1684", iso: "as", flag: "flagpack:as" },
  { name: "Andorra", code: "+376", iso: "ad", flag: "flagpack:ad" },
  { name: "Angola", code: "+244", iso: "ao", flag: "flagpack:ao" },
  { name: "Anguilla", code: "+1264", iso: "ai", flag: "flagpack:ai" },
  { name: "Antarctica", code: "+672", iso: "aq", flag: "flagpack:aq" },
  { name: "Antigua and Barbuda", code: "+1268", iso: "ag", flag: "flagpack:ag" },
  { name: "Argentina", code: "+54", iso: "ar", flag: "flagpack:ar" },
  { name: "Armenia", code: "+374", iso: "am", flag: "flagpack:am" },
  { name: "Aruba", code: "+297", iso: "aw", flag: "flagpack:aw" },
  { name: "Australia", code: "+61", iso: "au", flag: "flagpack:au" },
  { name: "Austria", code: "+43", iso: "at", flag: "flagpack:at" },
  { name: "Azerbaijan", code: "+994", iso: "az", flag: "flagpack:az" },
  { name: "Bahamas", code: "+1242", iso: "bs", flag: "flagpack:bs" },
  { name: "Bahrain", code: "+973", iso: "bh", flag: "flagpack:bh" },
  { name: "Bangladesh", code: "+880", iso: "bd", flag: "flagpack:bd" },
  { name: "Barbados", code: "+1246", iso: "bb", flag: "flagpack:bb" },
  { name: "Belarus", code: "+375", iso: "by", flag: "flagpack:by" },
  { name: "Belgium", code: "+32", iso: "be", flag: "flagpack:be" },
  { name: "Belize", code: "+501", iso: "bz", flag: "flagpack:bz" },
  { name: "Benin", code: "+229", iso: "bj", flag: "flagpack:bj" },
  { name: "Bermuda", code: "+1441", iso: "bm", flag: "flagpack:bm" },
  { name: "Bhutan", code: "+975", iso: "bt", flag: "flagpack:bt" },
  { name: "Bolivia", code: "+591", iso: "bo", flag: "flagpack:bo" },
  { name: "Bosnia and Herzegovina", code: "+387", iso: "ba", flag: "flagpack:ba" },
  { name: "Botswana", code: "+267", iso: "bw", flag: "flagpack:bw" },
  { name: "Brazil", code: "+55", iso: "br", flag: "flagpack:br" },
  { name: "British Indian Ocean Territory", code: "+246", iso: "io", flag: "flagpack:io" },
  { name: "British Virgin Islands", code: "+1284", iso: "vg", flag: "flagpack:vg" },
  { name: "Brunei", code: "+673", iso: "bn", flag: "flagpack:bn" },
  { name: "Bulgaria", code: "+359", iso: "bg", flag: "flagpack:bg" },
  { name: "Burkina Faso", code: "+226", iso: "bf", flag: "flagpack:bf" },
  { name: "Burundi", code: "+257", iso: "bi", flag: "flagpack:bi" },
  { name: "Cambodia", code: "+855", iso: "kh", flag: "flagpack:kh" },
  { name: "Cameroon", code: "+237", iso: "cm", flag: "flagpack:cm" },
  { name: "Canada", code: "+1", iso: "ca", flag: "flagpack:ca" },
  { name: "Cape Verde", code: "+238", iso: "cv", flag: "flagpack:cv" },
  { name: "Cayman Islands", code: "+1345", iso: "ky", flag: "flagpack:ky" },
  { name: "Central African Republic", code: "+236", iso: "cf", flag: "flagpack:cf" },
  { name: "Chad", code: "+235", iso: "td", flag: "flagpack:td" },
  { name: "Chile", code: "+56", iso: "cl", flag: "flagpack:cl" },
  { name: "China", code: "+86", iso: "cn", flag: "flagpack:cn" },
  { name: "Christmas Island", code: "+61", iso: "cx", flag: "flagpack:cx" },
  { name: "Cocos Islands", code: "+61", iso: "cc", flag: "flagpack:cc" },
  { name: "Colombia", code: "+57", iso: "co", flag: "flagpack:co" },
  { name: "Comoros", code: "+269", iso: "km", flag: "flagpack:km" },
  { name: "Cook Islands", code: "+682", iso: "ck", flag: "flagpack:ck" },
  { name: "Costa Rica", code: "+506", iso: "cr", flag: "flagpack:cr" },
  { name: "Croatia", code: "+385", iso: "hr", flag: "flagpack:hr" },
  { name: "Cuba", code: "+53", iso: "cu", flag: "flagpack:cu" },
  { name: "Curacao", code: "+599", iso: "cw", flag: "flagpack:cw" },
  { name: "Cyprus", code: "+357", iso: "cy", flag: "flagpack:cy" },
  { name: "Czech Republic", code: "+420", iso: "cz", flag: "flagpack:cz" },
  { name: "Democratic Republic of the Congo", code: "+243", iso: "cd", flag: "flagpack:cd" },
  { name: "Denmark", code: "+45", iso: "dk", flag: "flagpack:dk" },
  { name: "Djibouti", code: "+253", iso: "dj", flag: "flagpack:dj" },
  { name: "Dominica", code: "+1767", iso: "dm", flag: "flagpack:dm" },
  { name: "Dominican Republic", code: "+1809", iso: "do", flag: "flagpack:do" },
  { name: "East Timor", code: "+670", iso: "tl", flag: "flagpack:tl" },
  { name: "Ecuador", code: "+593", iso: "ec", flag: "flagpack:ec" },
  { name: "Egypt", code: "+20", iso: "eg", flag: "flagpack:eg" },
  { name: "El Salvador", code: "+503", iso: "sv", flag: "flagpack:sv" },
  { name: "Equatorial Guinea", code: "+240", iso: "gq", flag: "flagpack:gq" },
  { name: "Eritrea", code: "+291", iso: "er", flag: "flagpack:er" },
  { name: "Estonia", code: "+372", iso: "ee", flag: "flagpack:ee" },
  { name: "Ethiopia", code: "+251", iso: "et", flag: "flagpack:et" },
  { name: "Falkland Islands", code: "+500", iso: "fk", flag: "flagpack:fk" },
  { name: "Faroe Islands", code: "+298", iso: "fo", flag: "flagpack:fo" },
  { name: "Fiji", code: "+679", iso: "fj", flag: "flagpack:fj" },
  { name: "Finland", code: "+358", iso: "fi", flag: "flagpack:fi" },
  { name: "France", code: "+33", iso: "fr", flag: "flagpack:fr" },
  { name: "French Polynesia", code: "+689", iso: "pf", flag: "flagpack:pf" },
  { name: "Gabon", code: "+241", iso: "ga", flag: "flagpack:ga" },
  { name: "Gambia", code: "+220", iso: "gm", flag: "flagpack:gm" },
  { name: "Georgia", code: "+995", iso: "ge", flag: "flagpack:ge" },
  { name: "Germany", code: "+49", iso: "de", flag: "flagpack:de" },
  { name: "Ghana", code: "+233", iso: "gh", flag: "flagpack:gh" },
  { name: "Gibraltar", code: "+350", iso: "gi", flag: "flagpack:gi" },
  { name: "Greece", code: "+30", iso: "gr", flag: "flagpack:gr" },
  { name: "Greenland", code: "+299", iso: "gl", flag: "flagpack:gl" },
  { name: "Grenada", code: "+1473", iso: "gd", flag: "flagpack:gd" },
  { name: "Guam", code: "+1671", iso: "gu", flag: "flagpack:gu" },
  { name: "Guatemala", code: "+502", iso: "gt", flag: "flagpack:gt" },
  { name: "Guernsey", code: "+441481", iso: "gg", flag: "flagpack:gg" },
  { name: "Guinea", code: "+224", iso: "gn", flag: "flagpack:gn" },
  { name: "GuineaBissau", code: "+245", iso: "gw", flag: "flagpack:gw" },
  { name: "Guyana", code: "+592", iso: "gy", flag: "flagpack:gy" },
  { name: "Haiti", code: "+509", iso: "ht", flag: "flagpack:ht" },
  { name: "Honduras", code: "+504", iso: "hn", flag: "flagpack:hn" },
  { name: "Hong Kong", code: "+852", iso: "hk", flag: "flagpack:hk" },
  { name: "Hungary", code: "+36", iso: "hu", flag: "flagpack:hu" },
  { name: "Iceland", code: "+354", iso: "is", flag: "flagpack:is" },
  { name: "India", code: "+91", iso: "in", flag: "flagpack:in" },
  { name: "Indonesia", code: "+62", iso: "id", flag: "flagpack:id" },
  { name: "Iran", code: "+98", iso: "ir", flag: "flagpack:ir" },
  { name: "Iraq", code: "+964", iso: "iq", flag: "flagpack:iq" },
  { name: "Ireland", code: "+353", iso: "ie", flag: "flagpack:ie" },
  { name: "Isle of Man", code: "+441624", iso: "im", flag: "flagpack:im" },
  { name: "Israel", code: "+972", iso: "il", flag: "flagpack:il" },
  { name: "Italy", code: "+39", iso: "it", flag: "flagpack:it" },
  { name: "Ivory Coast", code: "+225", iso: "ci", flag: "flagpack:ci" },
  { name: "Jamaica", code: "+1876", iso: "jm", flag: "flagpack:jm" },
  { name: "Japan", code: "+81", iso: "jp", flag: "flagpack:jp" },
  { name: "Jersey", code: "+441534", iso: "je", flag: "flagpack:je" },
  { name: "Jordan", code: "+962", iso: "jo", flag: "flagpack:jo" },
  { name: "Kazakhstan", code: "+7", iso: "kz", flag: "flagpack:kz" },
  { name: "Kenya", code: "+254", iso: "ke", flag: "flagpack:ke" },
  { name: "Kiribati", code: "+686", iso: "ki", flag: "flagpack:ki" },
  { name: "Kosovo", code: "+383", iso: "xk", flag: "flagpack:xk" },
  { name: "Kuwait", code: "+965", iso: "kw", flag: "flagpack:kw" },
  { name: "Kyrgyzstan", code: "+996", iso: "kg", flag: "flagpack:kg" },
  { name: "Laos", code: "+856", iso: "la", flag: "flagpack:la" },
  { name: "Latvia", code: "+371", iso: "lv", flag: "flagpack:lv" },
  { name: "Lebanon", code: "+961", iso: "lb", flag: "flagpack:lb" },
  { name: "Lesotho", code: "+266", iso: "ls", flag: "flagpack:ls" },
  { name: "Liberia", code: "+231", iso: "lr", flag: "flagpack:lr" },
  { name: "Libya", code: "+218", iso: "ly", flag: "flagpack:ly" },
  { name: "Liechtenstein", code: "+423", iso: "li", flag: "flagpack:li" },
  { name: "Lithuania", code: "+370", iso: "lv", flag: "flagpack:lv" },
  { name: "Luxembourg", code: "+352", iso: "lu", flag: "flagpack:lu" },
  { name: "Macao", code: "+853", iso: "mo", flag: "flagpack:mo" },
  { name: "Macedonia", code: "+389", iso: "mk", flag: "flagpack:mk" },
  { name: "Madagascar", code: "+261", iso: "mg", flag: "flagpack:mg" },
  { name: "Malawi", code: "+265", iso: "mw", flag: "flagpack:mw" },
  { name: "Malaysia", code: "+60", iso: "my", flag: "flagpack:my" },
  { name: "Maldives", code: "+960", iso: "mv", flag: "flagpack:mv" },
  { name: "Mali", code: "+223", iso: "ml", flag: "flagpack:ml" },
  { name: "Malta", code: "+356", iso: "mt", flag: "flagpack:mt" },
  { name: "Marshall Islands", code: "+692", iso: "mh", flag: "flagpack:mh" },
  { name: "Mauritania", code: "+222", iso: "mr", flag: "flagpack:mr" },
  { name: "Mauritius", code: "+230", iso: "mu", flag: "flagpack:mu" },
  { name: "Mayotte", code: "+262", iso: "yt", flag: "flagpack:yt" },
  { name: "Mexico", code: "+52", iso: "mx", flag: "flagpack:mx" },
  { name: "Micronesia", code: "+691", iso: "fm", flag: "flagpack:fm" },
  { name: "Moldova", code: "+373", iso: "md", flag: "flagpack:md" },
  { name: "Monaco", code: "+377", iso: "mc", flag: "flagpack:mc" },
  { name: "Mongolia", code: "+976", iso: "mn", flag: "flagpack:mn" },
  { name: "Montenegro", code: "+382", iso: "me", flag: "flagpack:me" },
  { name: "Montserrat", code: "+1664", iso: "ms", flag: "flagpack:ms" },
  { name: "Morocco", code: "+212", iso: "ma", flag: "flagpack:ma" },
  { name: "Mozambique", code: "+258", iso: "mz", flag: "flagpack:mz" },
  { name: "Myanmar", code: "+95", iso: "mm", flag: "flagpack:mm" },
  { name: "Namibia", code: "+264", iso: "na", flag: "flagpack:na" },
  { name: "Nauru", code: "+674", iso: "nr", flag: "flagpack:nr" },
  { name: "Nepal", code: "+977", iso: "np", flag: "flagpack:np" },
  { name: "Netherlands", code: "+31", iso: "nl", flag: "flagpack:nl" },
  { name: "Netherlands Antilles", code: "+599", iso: "an", flag: "flagpack:an" },
  { name: "New Caledonia", code: "+687", iso: "nc", flag: "flagpack:nc" },
  { name: "New Zealand", code: "+64", iso: "nz", flag: "flagpack:nz" },
  { name: "Nicaragua", code: "+505", iso: "ni", flag: "flagpack:ni" },
  { name: "Niger", code: "+227", iso: "ne", flag: "flagpack:ne" },
  { name: "Nigeria", code: "+234", iso: "ng", flag: "flagpack:ng" },
  { name: "Niue", code: "+683", iso: "nu", flag: "flagpack:nu" },
  { name: "North Korea", code: "+850", iso: "kp", flag: "flagpack:kp" },
  { name: "Northern Mariana Islands", code: "+1670", iso: "mp", flag: "flagpack:mp" },
  { name: "Norway", code: "+47", iso: "no", flag: "flagpack:no" },
  { name: "Oman", code: "+968", iso: "om", flag: "flagpack:om" },
  { name: "Pakistan", code: "+92", iso: "pk", flag: "flagpack:pk" },
  { name: "Palau", code: "+680", iso: "pw", flag: "flagpack:pw" },
  { name: "Palestine", code: "+970", iso: "ps", flag: "flagpack:ps" },
  { name: "Panama", code: "+507", iso: "pa", flag: "flagpack:pa" },
  { name: "Papua New Guinea", code: "+675", iso: "pg", flag: "flagpack:pg" },
  { name: "Paraguay", code: "+595", iso: "py", flag: "flagpack:py" },
  { name: "Peru", code: "+51", iso: "pe", flag: "flagpack:pe" },
  { name: "Philippines", code: "+63", iso: "ph", flag: "flagpack:ph" },
  { name: "Pitcairn", code: "+64", iso: "pn", flag: "flagpack:pn" },
  { name: "Poland", code: "+48", iso: "pl", flag: "flagpack:pl" },
  { name: "Portugal", code: "+351", iso: "pt", flag: "flagpack:pt" },
  { name: "Puerto Rico", code: "+1787, +1939", iso: "pr", flag: "flagpack:pr" },
  { name: "Qatar", code: "+974", iso: "qa", flag: "flagpack:qa" },
  { name: "Republic of the Congo", code: "+242", iso: "cg", flag: "flagpack:cg" },
  { name: "Reunion", code: "+262", iso: "re", flag: "flagpack:re" },
  { name: "Romania", code: "+40", iso: "ro", flag: "flagpack:ro" },
  { name: "Russia", code: "+7", iso: "ru", flag: "flagpack:ru" },
  { name: "Rwanda", code: "+250", iso: "rw", flag: "flagpack:rw" },
  { name: "Saint Barthelemy", code: "+590", iso: "bl", flag: "flagpack:bl" },
  { name: "Saint Helena", code: "+290", iso: "sh", flag: "flagpack:sh" },
  { name: "Saint Kitts and Nevis", code: "+1869", iso: "kn", flag: "flagpack:kn" },
  { name: "Saint Lucia", code: "+1758", iso: "lc", flag: "flagpack:lc" },
  { name: "Saint Martin", code: "+590", iso: "mf", flag: "flagpack:mf" },
  { name: "Saint Pierre and Miquelon", code: "+508", iso: "pm", flag: "flagpack:pm" },
  { name: "Saint Vincent and the Grenadines", code: "+1784", iso: "vc", flag: "flagpack:vc" },
  { name: "Samoa", code: "+685", iso: "ws", flag: "flagpack:ws" },
  { name: "San Marino", code: "+378", iso: "sm", flag: "flagpack:sm" },
  { name: "Sao Tome and Principe", code: "+239", iso: "st", flag: "flagpack:st" },
  { name: "Saudi Arabia", code: "+966", iso: "sa", flag: "flagpack:sa" },
  { name: "Senegal", code: "+221", iso: "sn", flag: "flagpack:sn" },
  { name: "Serbia", code: "+381", iso: "rs", flag: "flagpack:rs" },
  { name: "Seychelles", code: "+248", iso: "sc", flag: "flagpack:sc" },
  { name: "Sierra Leone", code: "+232", iso: "sl", flag: "flagpack:sl" },
  { name: "Singapore", code: "+65", iso: "sg", flag: "flagpack:sg" },
  { name: "Sint Maarten", code: "+1721", iso: "sx", flag: "flagpack:sx" },
  { name: "Slovakia", code: "+421", iso: "sk", flag: "flagpack:sk" },
  { name: "Slovenia", code: "+386", iso: "si", flag: "flagpack:si" },
  { name: "Solomon Islands", code: "+677", iso: "sb", flag: "flagpack:sb" },
  { name: "Somalia", code: "+252", iso: "so", flag: "flagpack:so" },
  { name: "South Africa", code: "+27", iso: "za", flag: "flagpack:za" },
  { name: "South Korea", code: "+82", iso: "kr", flag: "flagpack:kr" },
  { name: "South Sudan", code: "+211", iso: "ss", flag: "flagpack:ss" },
  { name: "Spain", code: "+34", iso: "es", flag: "flagpack:es" },
  { name: "Sri Lanka", code: "+94", iso: "lk", flag: "flagpack:lk" },
  { name: "Sudan", code: "+249", iso: "sd", flag: "flagpack:sd" },
  { name: "Suriname", code: "+597", iso: "sr", flag: "flagpack:sr" },
  { name: "Svalbard and Jan Mayen", code: "+47", iso: "sj", flag: "flagpack:sj" },
  { name: "Swaziland", code: "+268", iso: "sz", flag: "flagpack:sz" },
  { name: "Sweden", code: "+46", iso: "se", flag: "flagpack:se" },
  { name: "Switzerland", code: "+41", iso: "ch", flag: "flagpack:ch" },
  { name: "Syria", code: "+963", iso: "sy", flag: "flagpack:sy" },
  { name: "Taiwan", code: "+886", iso: "tw", flag: "flagpack:tw" },
  { name: "Tajikistan", code: "+992", iso: "tj", flag: "flagpack:tj" },
  { name: "Tanzania", code: "+255", iso: "tz", flag: "flagpack:tz" },
  { name: "Thailand", code: "+66", iso: "th", flag: "flagpack:th" },
  { name: "Togo", code: "+228", iso: "tg", flag: "flagpack:tg" },
  { name: "Tokelau", code: "+690", iso: "tk", flag: "flagpack:tk" },
  { name: "Tonga", code: "+676", iso: "to", flag: "flagpack:to" },
  { name: "Trinidad and Tobago", code: "+1868", iso: "tt", flag: "flagpack:tt" },
  { name: "Tunisia", code: "+216", iso: "tn", flag: "flagpack:tn" },
  { name: "Turkey", code: "+90", iso: "tr", flag: "flagpack:tr" },
  { name: "Turkmenistan", code: "+993", iso: "tm", flag: "flagpack:tm" },
  { name: "Turks and Caicos Islands", code: "+1649", iso: "tc", flag: "flagpack:tc" },
  { name: "Tuvalu", code: "+688", iso: "tv", flag: "flagpack:tv" },
  { name: "U.S. Virgin Islands", code: "+1340", iso: "vi", flag: "flagpack:vi" },
  { name: "Uganda", code: "+256", iso: "ug", flag: "flagpack:ug" },
  { name: "Ukraine", code: "+380", iso: "ua", flag: "flagpack:ua" },
  { name: "United Arab Emirates", code: "+971", iso: "ae", flag: "flagpack:ae" },
  { name: "United Kingdom", code: "+44", iso: "gb", flag: "flagpack:gb" },
  { name: "United States", code: "+1", iso: "us", flag: "flagpack:us" },
  { name: "Uruguay", code: "+598", iso: "uy", flag: "flagpack:uy" },
  { name: "Uzbekistan", code: "+998", iso: "uz", flag: "flagpack:uz" },
  { name: "Vanuatu", code: "+678", iso: "vu", flag: "flagpack:vu" },
  { name: "Vatican", code: "+379", iso: "va", flag: "flagpack:va" },
  { name: "Venezuela", code: "+58", iso: "ve", flag: "flagpack:ve" },
  { name: "Vietnam", code: "+84", iso: "vn", flag: "flagpack:vn" },
  { name: "Wallis and Futuna", code: "+681", iso: "wf", flag: "flagpack:wf" },
  { name: "Western Sahara", code: "+212", iso: "eh", flag: "flagpack:eh" },
  { name: "Yemen", code: "+967", iso: "ye", flag: "flagpack:ye" },
  { name: "Zambia", code: "+260", iso: "zm", flag: "flagpack:zm" },
  { name: "Zimbabwe", code: "+263", iso: "zw", flag: "flagpack:zw" }
];

// src/components/atoms/PhoneInput/PhoneInput.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var phoneInputVariants = (0, import_class_variance_authority13.cva)(
  "border bg-white px-3 py-2 ring-0 transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      fullWidth: true
    }
  }
);
var PhoneInput = (0, import_react20.forwardRef)(
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
    ...props
  }) => {
    const [isOpen, setIsOpen] = (0, import_react20.useState)(false);
    const [selectedCountry, setSelectedCountry] = (0, import_react20.useState)(
      () => COUNTRIES.find((country) => country.iso === defaultCountry) || COUNTRIES[0]
    );
    const [searchQuery, setSearchQuery] = (0, import_react20.useState)("");
    const [phoneNumber, setPhoneNumber] = (0, import_react20.useState)(() => {
      const dialCode = selectedCountry.code;
      return value.startsWith(dialCode) ? value.slice(dialCode.length) : value;
    });
    const buttonRef = (0, import_react20.useRef)(null);
    const dropdownRef = (0, import_react20.useRef)(null);
    const id = import_react20.default.useId();
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const filteredCountries = COUNTRIES.filter(
      (country) => country.name.toLowerCase().includes(searchQuery.toLowerCase()) || country.code.includes(searchQuery)
    );
    const wrapperRef = (0, import_react20.useRef)(null);
    const updateDropdownPosition = () => {
      if (isOpen && buttonRef.current && dropdownRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdown = dropdownRef.current;
        const win = typeof window !== "undefined" ? window : { innerHeight: 0, innerWidth: 0 };
        const spaceBelow = win.innerHeight - buttonRect.bottom;
        const spaceAbove = buttonRect.top;
        const dropdownBottom = buttonRect.bottom + (dropdown.offsetHeight || 0) + 4;
        const touchesBottom = dropdownBottom >= win.innerHeight;
        const hasMoreSpaceAbove = spaceAbove > spaceBelow;
        const shouldFlip = touchesBottom && hasMoreSpaceAbove;
        dropdown.style.position = "fixed";
        dropdown.style.left = `${buttonRect.left}px`;
        dropdown.style.minWidth = `${buttonRect.width}px`;
        dropdown.style.maxWidth = "340px";
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
    (0, import_react20.useEffect)(() => {
      const win = typeof window !== "undefined" ? window : void 0;
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
    (0, import_react20.useEffect)(() => {
      if (!isOpen) return;
      const handleClickOutside = (e) => {
        const target = e.target;
        if (buttonRef.current && dropdownRef.current && !buttonRef.current.contains(target) && !dropdownRef.current.contains(target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);
    const handleCountrySelect = (country) => {
      setSelectedCountry(country);
      setIsOpen(false);
      setSearchQuery("");
      const newValue = country.code + phoneNumber;
      onChange?.(newValue);
    };
    const handlePhoneChange = (e) => {
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
        fullWidth
      }),
      "!w-full"
    );
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
      "div",
      {
        ref: wrapperRef,
        className: cn(fullWidth ? "w-full" : "inline-block", className),
        ...props,
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("label", { htmlFor: id, className: "mb-1.5 block text-sm text-neutral-900", children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-danger ml-0.5", children: "*" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: cn("relative", !fullWidth && "inline-block"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
                "button",
                {
                  type: "button",
                  ref: buttonRef,
                  onClick: () => !disabled && setIsOpen(!isOpen),
                  className: cn(
                    inputClassName,
                    "flex items-center gap-2 rounded-r-none justify-between max-w-[100px]",
                    disabled && "cursor-not-allowed opacity-50"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { icon: selectedCountry.flag, className: "w-5 h-5" }),
                      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-sm", children: selectedCountry.code })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                      Icon,
                      {
                        icon: "mdi:chevron-down",
                        className: cn("transition-transform", isOpen && "rotate-180")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                "input",
                {
                  type: "tel",
                  id,
                  value: phoneNumber,
                  onChange: handlePhoneChange,
                  disabled,
                  className: cn(
                    inputClassName,
                    "rounded-l-none flex-1 min-w-0 w-full"
                  ),
                  placeholder: "Enter phone number"
                }
              )
            ] }),
            isOpen && (0, import_react_dom7.createPortal)(
              /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
                "div",
                {
                  ref: dropdownRef,
                  className: cn(
                    "border border-neutral-200 bg-white shadow-lg overflow-y-auto",
                    {
                      "rounded-none": rounded === "none",
                      "rounded-sm": rounded === "sm",
                      "rounded-md": rounded === "md",
                      "rounded-lg": rounded === "lg",
                      "rounded-xl": rounded === "full"
                    }
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "p-2 border-b border-neutral-200", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                      "input",
                      {
                        type: "text",
                        value: searchQuery,
                        onChange: (e) => setSearchQuery(e.target.value),
                        placeholder: "Search countries...",
                        className: "w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-primary-300"
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "max-h-[300px] overflow-y-auto", children: filteredCountries.map((country) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => handleCountrySelect(country),
                        className: cn(
                          "w-full px-3 py-2 text-sm text-left hover:bg-primary-50 cursor-pointer",
                          selectedCountry.iso === country.iso && "bg-primary-50"
                        ),
                        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { icon: country.flag, className: "w-5 h-5" }),
                          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-sm font-medium", children: country.code }),
                          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-sm text-neutral-600", children: country.name })
                        ] })
                      },
                      country.iso + country.code
                    )) })
                  ]
                }
              ),
              typeof document !== "undefined" ? document.body : document
            )
          ] }),
          error && errorText && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "mt-1 text-xs text-danger", id: errorId, children: errorText }),
          !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "mt-1 text-xs text-neutral", id: helperId, children: helperText })
        ]
      }
    );
  }
);
PhoneInput.displayName = "PhoneInput";

// src/components/molecules/Breadcrumbs/Breadcrumbs.tsx
var import_react21 = require("react");
var import_class_variance_authority14 = require("class-variance-authority");
var import_jsx_runtime34 = require("react/jsx-runtime");
var breadcrumbsVariants = (0, import_class_variance_authority14.cva)("flex items-center text-sm", {
  variants: {
    variant: {
      default: "text-neutral-600",
      light: "text-neutral-400",
      dark: "text-neutral-800"
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});
var Breadcrumbs = (0, import_react21.forwardRef)(
  ({
    className,
    variant = "default",
    size = "md",
    items,
    separator = /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Icon, { icon: "mdi:slash-forward", className: "h-4 w-4 flex-shrink-0" }),
    activeLastItem = true,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "nav",
      {
        ref,
        className: cn(breadcrumbsVariants({ variant, size }), className),
        "aria-label": "Breadcrumb",
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("ol", { className: "flex flex-wrap items-center gap-1.5", children: items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isActive = isLast && activeLastItem;
          return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
            "li",
            {
              className: cn(
                "flex items-center gap-1.5",
                isActive && "text-primary font-medium"
              ),
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                  Icon,
                  {
                    icon: item.icon,
                    className: cn(
                      "flex-shrink-0",
                      size === "sm" && "h-3.5 w-3.5",
                      size === "md" && "h-4 w-4",
                      size === "lg" && "h-5 w-5"
                    )
                  }
                ),
                item.href && !isActive ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                  "a",
                  {
                    href: item.href,
                    className: cn(
                      "transition-colors duration-200",
                      "hover:text-primary hover:underline focus:outline-none",
                      "focus-visible:text-primary focus-visible:underline",
                      "active:text-primary-600"
                    ),
                    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "truncate max-w-[200px] inline-block align-bottom", children: item.label })
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: cn(
                  "truncate max-w-[200px] inline-block",
                  isActive && "text-primary"
                ), children: item.label }),
                !isLast && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: cn(
                  "text-neutral-400 flex-shrink-0",
                  size === "sm" && "scale-90",
                  size === "lg" && "scale-110"
                ), children: separator })
              ]
            },
            item.label
          );
        }) })
      }
    );
  }
);
Breadcrumbs.displayName = "Breadcrumbs";

// src/components/molecules/Table/Table.tsx
var import_react22 = __toESM(require("react"));
var import_react_table = require("@tanstack/react-table");
var import_jsx_runtime35 = require("react/jsx-runtime");
var getVariantStyles = (variant) => {
  const styles = {
    header: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      warning: "bg-warning text-white",
      danger: "bg-danger text-white",
      ghost: "bg-gray-100 text-gray-700",
      success: "bg-success text-white"
    },
    row: {
      primary: "hover:bg-primary/5",
      secondary: "hover:bg-secondary/5",
      warning: "hover:bg-warning/5",
      danger: "hover:bg-danger/5",
      ghost: "hover:bg-gray-50",
      success: "hover:bg-success/5"
    },
    border: {
      primary: "border-primary",
      secondary: "border-secondary",
      warning: "border-warning",
      danger: "border-danger",
      ghost: "border-gray-200",
      success: "border-success"
    },
    stripe: {
      primary: "bg-primary/5",
      secondary: "bg-secondary/5",
      warning: "bg-warning/5",
      danger: "bg-danger/5",
      ghost: "bg-gray-50",
      success: "bg-success/5"
    }
  };
  return {
    header: styles.header[variant],
    row: styles.row[variant],
    border: styles.border[variant],
    stripe: styles.stripe[variant]
  };
};
var TableLoading = ({ schema, variant = "primary" }) => {
  const displayColumns = [{ name: "no", label: "No.", accessorKey: "no", type: "number" }, ...schema];
  const variantStyles4 = getVariantStyles(variant);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "bg-white rounded-md", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("table", { className: "w-full border-spacing-0 border-separate", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("thead", { className: cn("border-2 sticky top-0 z-10 rounded-t-md", variantStyles4.border), children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("tr", { children: displayColumns.map((column, index) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "th",
      {
        className: cn(
          "text-sm text-wrap border-y p-4 text-left",
          variantStyles4.header,
          {
            "rounded-tl-md": index === 0,
            "rounded-tr-md": index === displayColumns.length - 1
          }
        ),
        children: column.label
      },
      index
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("tbody", { className: "max-h-[50vh]", children: [...Array(5)].map((_, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "tr",
      {
        className: cn("p-3", {
          [variantStyles4.stripe]: rowIndex % 2 !== 0,
          "bg-white": rowIndex % 2 === 0
        }),
        children: displayColumns.map((_2, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "td",
          {
            className: "text-left text-nowrap text-sm p-4",
            children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Skeleton, { className: "h-10 w-full rounded-md" })
          },
          `${rowIndex}-${colIndex}`
        ))
      },
      rowIndex
    )) })
  ] }) }) });
};
var Table = ({
  schema,
  data,
  className,
  headerClassName,
  rowClassName,
  cellClassName,
  emptyState,
  isLoading,
  loadingState,
  showIndex = false,
  onPageChange,
  onPageSizeChange,
  onSortChange,
  onRowClick,
  showPagination = false,
  variant = "primary",
  meta = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10
  }
}) => {
  const [sorting, setSorting] = (0, import_react22.useState)(() => {
    const sortedColumn = schema.find((col) => col.sortable && col.sort);
    if (sortedColumn) {
      return [{
        id: sortedColumn.accessorKey.toString(),
        desc: sortedColumn.sort === "desc"
      }];
    }
    return [];
  });
  const columns = import_react22.default.useMemo(() => {
    const baseColumns = schema.map((col) => ({
      accessorKey: col.accessorKey,
      header: col.label,
      enableSorting: !!col.sortable,
      cell: col.render ? ({ row }) => col.render?.(row.original[col.accessorKey], row.original, row.index) : ({ row }) => row.original[col.accessorKey] || "-",
      meta: {
        align: col.align || "left"
      }
    }));
    if (showIndex) {
      return [{
        accessorKey: "no",
        header: "No.",
        enableSorting: false,
        cell: ({ row }) => (meta.current_page - 1) * meta.limit_number + row.index + 1,
        meta: {
          align: "left"
        }
      }, ...baseColumns];
    }
    return baseColumns;
  }, [schema, showIndex, meta]);
  const table = (0, import_react_table.useReactTable)({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: (updater) => {
      const newSorting = typeof updater === "function" ? updater(sorting) : updater;
      setSorting(newSorting);
      if (newSorting.length > 0) {
        onSortChange?.(newSorting[0].desc ? "desc" : "asc", newSorting[0].id);
      } else {
        onSortChange?.("", "");
      }
    },
    getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
    getSortedRowModel: (0, import_react_table.getSortedRowModel)(),
    getPaginationRowModel: (0, import_react_table.getPaginationRowModel)(),
    manualPagination: true,
    pageCount: meta.total_page
  });
  const variantStyles4 = getVariantStyles(variant);
  if (isLoading) {
    return loadingState || /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TableLoading, { schema, variant });
  }
  const handleRowClick = (event, row, index) => {
    const target = event.target;
    const isInteractiveElement = target.tagName === "BUTTON" || target.tagName === "A" || target.tagName === "INPUT" || target.tagName === "SELECT" || target.closest("button") !== null || target.closest("a") !== null || target.closest("input") !== null || target.closest("select") !== null;
    if (!isInteractiveElement) {
      onRowClick?.(row, index);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "bg-white rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("table", { className: cn("w-full border-spacing-0 border-separate", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("thead", { className: cn("border-2 sticky top-0 z-10 rounded-t-md", variantStyles4.border), children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("tr", { children: headerGroup.headers.map((header, index) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        "th",
        {
          className: cn(
            "text-sm text-wrap border-y p-4",
            variantStyles4.header,
            {
              "cursor-pointer": header.column.getCanSort(),
              "rounded-tl-md": index === 0,
              "rounded-tr-md": index === headerGroup.headers.length - 1,
              "text-left": header.column.columnDef.meta?.align === "left",
              "text-center": header.column.columnDef.meta?.align === "center",
              "text-right": header.column.columnDef.meta?.align === "right"
            },
            headerClassName
          ),
          onClick: header.column.getCanSort() ? header.column.getToggleSortingHandler() : void 0,
          children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: cn({
              "font-semibold": index === 0
            }), children: (0, import_react_table.flexRender)(header.column.columnDef.header, header.getContext()) }),
            header.column.getCanSort() && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
              Icon,
              {
                icon: header.column.getIsSorted() ? header.column.getIsSorted() === "desc" ? "mdi:keyboard-arrow-up" : "mdi:keyboard-arrow-down" : "mdi:unfold-more-horizontal",
                className: cn("h-4 w-4", {
                  "text-white": variant !== "ghost",
                  "text-gray-700": variant === "ghost"
                })
              }
            )
          ] })
        },
        header.id
      )) }, headerGroup.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("tbody", { className: "max-h-[50vh]", children: table.getRowModel().rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        "td",
        {
          colSpan: table.getAllColumns().length,
          className: cn(
            "text-center border h-full w-full rounded-b-md"
          ),
          children: emptyState || /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex mx-auto w-full text-center justify-center gap-3 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { children: "Data Not Found" }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { icon: "mdi:face-frown-open", size: 34 })
          ] })
        }
      ) }) : table.getRowModel().rows.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
        "tr",
        {
          className: cn(
            "p-3",
            variantStyles4.row,
            {
              [variantStyles4.stripe]: rowIndex % 2 !== 0,
              "bg-white": rowIndex % 2 === 0,
              "cursor-pointer": onRowClick
            },
            rowClassName
          ),
          onClick: (event) => handleRowClick(event, row.original, rowIndex),
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "td",
            {
              className: cn(
                "px-4 py-3 text-sm text-gray-900",
                {
                  "text-left": cell.column.columnDef.meta?.align === "left",
                  "text-center": cell.column.columnDef.meta?.align === "center",
                  "text-right": cell.column.columnDef.meta?.align === "right"
                },
                cellClassName
              ),
              children: (0, import_react_table.flexRender)(cell.column.columnDef.cell, cell.getContext())
            },
            cell.id
          ))
        },
        row.id
      )) })
    ] }) }),
    !!data.length && showPagination && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "p-4 bg-white rounded-b-md", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      Pagination,
      {
        currentPage: meta.current_page,
        totalPages: meta.total_page,
        totalData: meta.total_data,
        onPageChange: onPageChange || (() => {
        }),
        perPage: meta.limit_number,
        onPerPageChange: onPageSizeChange || (() => {
        }),
        perPageOptions: [5, 10, 20, 50, 100],
        siblingCount: 1
      }
    ) })
  ] });
};

// src/components/molecules/Toast/Toast.tsx
var import_react23 = require("react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var roundedStyles4 = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
};
var Toast = (0, import_react23.forwardRef)(
  ({
    className,
    variant = "default",
    rounded = "lg",
    title,
    description,
    onClose,
    icon,
    showIcon = true,
    showClose = true,
    ...props
  }, ref) => {
    const defaultIconMap = {
      default: "mdi:information",
      success: "mdi:check-circle",
      error: "mdi:alert-circle",
      warning: "mdi:alert",
      info: "mdi:information"
    };
    const iconToShow = icon || (showIcon ? defaultIconMap[variant] : void 0);
    const hasContent = title || description;
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
      "div",
      {
        ref,
        className: cn(
          "flex",
          description ? "items-start gap-3 p-4" : "items-center gap-2 py-2.5 px-3",
          "border border-gray-200",
          roundedStyles4[rounded],
          {
            "bg-white": variant === "default",
            "bg-success-50": variant === "success",
            "bg-danger-50": variant === "error",
            "bg-warning-50": variant === "warning",
            "bg-info-50": variant === "info"
          },
          className
        ),
        ...props,
        children: [
          iconToShow && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            Icon,
            {
              icon: iconToShow,
              className: cn(
                "flex-shrink-0",
                description ? "h-5 w-5 mt-0.5" : "h-4 w-4",
                {
                  "text-gray": variant === "default",
                  "text-success": variant === "success",
                  "text-danger": variant === "error",
                  "text-warning": variant === "warning",
                  "text-info": variant === "info"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex-1", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "h3",
              {
                className: cn("text-sm font-medium leading-5", {
                  "text-gray-900": variant === "default",
                  "text-success-900": variant === "success",
                  "text-danger-900": variant === "error",
                  "text-warning-900": variant === "warning",
                  "text-info-900": variant === "info"
                }),
                children: title
              }
            ),
            description && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "p",
              {
                className: cn(title ? "mt-1" : "", "text-sm leading-5", {
                  "text-gray": variant === "default",
                  "text-success-700": variant === "success",
                  "text-danger-700": variant === "error",
                  "text-warning-700": variant === "warning",
                  "text-info-700": variant === "info"
                }),
                children: description
              }
            ),
            !hasContent && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-sm leading-5", children: props.children })
          ] }),
          showClose && onClose && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: onClose,
              className: cn(
                "flex-shrink-0 !p-1",
                description ? "ml-4" : "ml-2",
                {
                  "text-gray-400 hover:text-gray": variant === "default",
                  "text-success-400 hover:text-success": variant === "success",
                  "text-danger-400 hover:text-danger": variant === "error",
                  "text-warning-400 hover:text-warning": variant === "warning",
                  "text-info-400 hover:text-info": variant === "info"
                }
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:close", className: cn(description ? "h-5 w-5" : "h-4 w-4") })
            }
          )
        ]
      }
    );
  }
);
Toast.displayName = "Toast";

// src/components/molecules/Toast/ToastContext.tsx
var import_react24 = require("react");
var import_react_dom8 = require("react-dom");
var import_jsx_runtime37 = require("react/jsx-runtime");
var ToastContext = (0, import_react24.createContext)(void 0);
var positionStyles = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
};
var ToastProvider = ({ children }) => {
  const [toasts, setToasts] = (0, import_react24.useState)([]);
  const removeToast = (0, import_react24.useCallback)((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);
  const showToast = (0, import_react24.useCallback)((props) => {
    const id = Math.random().toString(36).substr(2, 9);
    const position = props.position || "top-right";
    const duration = props.duration || 5e3;
    const newToast = {
      ...props,
      id,
      position
    };
    setToasts((prev) => [...prev, newToast]);
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
    return id;
  }, [removeToast]);
  const toastsByPosition = toasts.reduce((acc, toast) => {
    if (!acc[toast.position]) {
      acc[toast.position] = [];
    }
    acc[toast.position].push(toast);
    return acc;
  }, {
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
    "top-center": [],
    "bottom-center": []
  });
  const doc = getDocument();
  if (!("body" in doc)) return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ToastContext.Provider, { value: { showToast, removeToast }, children });
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(ToastContext.Provider, { value: { showToast, removeToast }, children: [
    children,
    (0, import_react_dom8.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: Object.entries(toastsByPosition).map(([position, items]) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        "div",
        {
          className: cn(
            "fixed z-[100] flex flex-col gap-2 min-w-[320px] max-w-[420px]",
            positionStyles[position],
            position.includes("bottom") ? "flex-col-reverse" : "flex-col"
          ),
          children: items.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            Toast,
            {
              ...toast,
              onClose: () => removeToast(toast.id),
              className: "animate-slide-in"
            },
            toast.id
          ))
        },
        position
      )) }),
      doc.body
    )
  ] });
};
var useToast = () => {
  const context = (0, import_react24.useContext)(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// src/components/molecules/WidgetCard/WidgetCard.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
var WidgetCard = ({
  label,
  value,
  icon,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Card, { className: cn(
    "flex items-center gap-4 rounded-lg w-full bg-white p-4 shadow-sm hover:bg-neutral-50 transition-shadow duration-200 justify-between",
    className
  ), children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "text-sm font-medium text-gray", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "mt-1 text-2xl font-semibold text-gray-900", children: value })
    ] }),
    icon && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Icon, { icon, className: "h-6 w-6 text-primary-600" }) })
  ] });
};

// src/components/molecules/ErrorWrapper/ErrorWrapper.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
var httpErrorConfig = {
  "400": {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Bad request. Please check your input and try again."
  },
  "401": {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Please sign in to access this resource."
  },
  "403": {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "You do not have permission to access this resource."
  },
  "404": {
    image: "https://design-system-eaip.onrender.com/img/page-not-found.svg",
    message: "The page you are looking for does not exist."
  },
  "500": {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Something went wrong on our end. Please try again later."
  },
  "502": {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Bad gateway. Our servers are having trouble connecting."
  },
  "503": {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Service unavailable. We are currently performing maintenance."
  },
  "504": {
    image: "https://design-system-eaip.onrender.com/img/error.svg",
    message: "Gateway timeout. The server took too long to respond."
  }
};
var appErrorConfig = {
  "NO_INTERNET": {
    image: "https://design-system-eaip.onrender.com/img/no-internet.svg",
    message: "Please check your internet connection and try again."
  },
  "DATA_NOT_FOUND": {
    image: "https://design-system-eaip.onrender.com/img/search-not-found.svg",
    message: "No data available for your request."
  },
  "UNDER_DEVELOPMENT": {
    image: "https://design-system-eaip.onrender.com/img/under-development.svg",
    message: "This feature is currently under development."
  },
  "INFORMATION_UNAVAILABLE": {
    image: "https://design-system-eaip.onrender.com/img/search-not-found.svg",
    message: "The requested information is currently unavailable."
  },
  "SUCCESS": {
    image: "https://design-system-eaip.onrender.com/img/payment-success.svg",
    message: "Operation completed successfully."
  },
  "CHECKED": {
    image: "https://design-system-eaip.onrender.com/img/payment-success.svg",
    message: "All checks have passed successfully."
  }
};
var variantToErrorCode = {
  "no-internet": "NO_INTERNET",
  "data-not-found": "DATA_NOT_FOUND",
  "under-development": "UNDER_DEVELOPMENT",
  "information-unavailable": "INFORMATION_UNAVAILABLE",
  "success": "SUCCESS",
  "checked": "CHECKED"
};
var allErrorConfigs = {
  ...httpErrorConfig,
  ...appErrorConfig
};
var defaultErrorConfig = {
  image: "https://design-system-eaip.onrender.com/img/error.svg",
  message: "An unexpected error occurred. Our team is currently investigating the issue."
};
var isValidErrorObject = (error) => {
  return typeof error === "object" && error !== null && ("code" in error || "message" in error);
};
var ErrorWrapper = ({
  error,
  reload,
  children,
  className = "",
  variant,
  customImage,
  customMessage
}) => {
  if (!error && !variant) {
    return children ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_jsx_runtime39.Fragment, { children }) : null;
  }
  const getErrorConfig = () => {
    if (variant) {
      const errorCode = variantToErrorCode[variant];
      return appErrorConfig[errorCode];
    }
    if (!isValidErrorObject(error)) {
      return defaultErrorConfig;
    }
    return error.code && allErrorConfigs[error.code] ? allErrorConfigs[error.code] : defaultErrorConfig;
  };
  const errorConfig = getErrorConfig();
  const displayImage = customImage || errorConfig.image;
  const displayMessage = customMessage || (isValidErrorObject(error) ? error.message : null) || errorConfig.message;
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: `flex flex-col items-center justify-center p-8 text-center gap-4 ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      "img",
      {
        src: displayImage,
        alt: "Error illustration",
        className: "max-w-[300px] h-auto"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Text, { variant: "body1", className: "m-0", children: displayMessage }),
    reload && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      Button,
      {
        onClick: reload,
        rounded: "full",
        variant: "primary",
        size: "md",
        children: "Try Again"
      }
    )
  ] });
};

// src/components/molecules/InputOTP/InputOTP.tsx
var import_react25 = require("react");
var import_class_variance_authority15 = require("class-variance-authority");
var import_jsx_runtime40 = require("react/jsx-runtime");
var inputOTPVariants = (0, import_class_variance_authority15.cva)(
  "border bg-white flex items-center justify-center aspect-square transition-colors placeholder:text-neutral placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-center",
  {
    variants: {
      variant: {
        default: "border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50",
        error: "border-danger hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50",
        success: "border-success hover:border-success-600 focus:border-success-600 hover:bg-success-50",
        ghost: "border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50",
        underline: "border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent"
      },
      size: {
        sm: "h-8 w-8 text-sm",
        md: "h-12 w-12 text-lg",
        lg: "h-16 w-16 text-xl"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md"
    }
  }
);
var InputOTP = (0, import_react25.forwardRef)(
  ({
    className,
    variant = "default",
    size = "md",
    rounded = "md",
    error = false,
    errorText,
    helperText,
    label,
    bottomLabel,
    required = false,
    showSubmitButton = false,
    submitButtonLabel = "Submit",
    submitButtonVariant = "primary",
    length = 6,
    numericOnly = true,
    onComplete,
    onChange,
    onSubmit,
    value: controlledValue,
    defaultValue = "",
    disabled = false,
    autoFocus = false,
    ...props
  }, ref) => {
    const [value, setValue] = (0, import_react25.useState)(defaultValue || "");
    const inputRefs = (0, import_react25.useRef)([]);
    (0, import_react25.useEffect)(() => {
      if (controlledValue !== void 0) {
        setValue(controlledValue);
      }
    }, [controlledValue]);
    const isControlled = controlledValue !== void 0;
    const currentValue = isControlled ? controlledValue : value;
    const updateValue = (newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
      onChange?.(newValue);
      if (newValue.length === length) {
        onComplete?.(newValue);
        if (!showSubmitButton) {
          onSubmit?.(newValue);
        }
      }
    };
    const setInputRef = (index) => (element) => {
      inputRefs.current[index] = element;
    };
    const handleInputFocus = (e) => {
      e.target.select();
    };
    const handleChange = (e, index) => {
      const inputValue = e.target.value;
      let newChar = "";
      if (inputValue.length >= 1) {
        newChar = inputValue.slice(-1);
      } else if (inputValue.length === 0) {
        const newValue2 = currentValue.split("");
        newValue2[index] = "";
        updateValue(newValue2.join(""));
        return;
      }
      if (numericOnly && !/^\d$/.test(newChar)) {
        return;
      }
      const newValue = currentValue.split("");
      while (newValue.length <= index) {
        newValue.push("");
      }
      newValue[index] = newChar;
      const updatedValue = newValue.join("");
      updateValue(updatedValue);
      if (index < length - 1 && newChar) {
        inputRefs.current[index + 1]?.focus();
      }
    };
    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace") {
        const newValue = currentValue.split("");
        if (currentValue[index]) {
          e.preventDefault();
          newValue[index] = "";
          updateValue(newValue.join(""));
        } else if (index > 0) {
          e.preventDefault();
          newValue[index - 1] = "";
          updateValue(newValue.join(""));
          inputRefs.current[index - 1]?.focus();
        }
      } else if (e.key === "Delete") {
        if (currentValue[index]) {
          e.preventDefault();
          const newValue = currentValue.split("");
          newValue[index] = "";
          updateValue(newValue.join(""));
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      } else if (!e.ctrlKey && !e.altKey && !e.metaKey && e.key.length === 1) {
        if (numericOnly && !/^\d$/.test(e.key)) {
          e.preventDefault();
          return;
        }
      }
    };
    const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text/plain").trim();
      if (numericOnly && !/^\d+$/.test(pastedData)) {
        return;
      }
      const relevantData = pastedData.slice(0, length);
      const newValue = relevantData.padEnd(currentValue.length, "").slice(0, length);
      updateValue(newValue);
      const nextEmptyIndex = newValue.length < length ? newValue.length : length - 1;
      inputRefs.current[nextEmptyIndex]?.focus();
    };
    const handleSubmit = () => {
      if (currentValue.length === length) {
        onSubmit?.(currentValue);
      }
    };
    const digits = currentValue.split("").concat(Array(length - currentValue.length).fill(""));
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { ref, className: cn("w-full", className), ...props, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("label", { className: "mb-1.5 block text-sm text-neutral-900", children: [
        label,
        required && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "text-danger ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex flex-col items-center space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex items-center justify-center gap-2", children: Array.from({ length }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "input",
          {
            ref: setInputRef(index),
            type: numericOnly ? "tel" : "text",
            inputMode: numericOnly ? "numeric" : "text",
            maxLength: 1,
            value: digits[index] || "",
            onChange: (e) => handleChange(e, index),
            onKeyDown: (e) => handleKeyDown(e, index),
            onPaste: index === 0 ? handlePaste : void 0,
            onFocus: handleInputFocus,
            disabled,
            autoFocus: autoFocus && index === 0,
            className: cn(
              inputOTPVariants({
                variant: error ? "error" : variant,
                size,
                rounded
              })
            ),
            "aria-invalid": error
          },
          index
        )) }),
        error && errorText && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "mt-1 text-xs text-danger self-start", children: errorText }),
        !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "mt-1 text-xs text-neutral self-start", children: helperText }),
        bottomLabel && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "text-sm text-neutral-600", children: bottomLabel }),
        showSubmitButton && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          Button,
          {
            variant: submitButtonVariant,
            disabled: currentValue.length !== length || disabled,
            onClick: handleSubmit,
            className: "mt-4",
            children: submitButtonLabel
          }
        )
      ] })
    ] });
  }
);
InputOTP.displayName = "InputOTP";

// src/components/molecules/BadgeNotif/BadgeNotif.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
var ICON_COLOR_MAP = {
  primary: "#007C99",
  // tailwind primary.DEFAULT
  secondary: "#CEEAE7",
  // tailwind secondary.DEFAULT
  danger: "#CA0000",
  // tailwind danger.DEFAULT
  warning: "#FF9319",
  // tailwind warning.DEFAULT
  info: "#0073E6",
  // tailwind info.DEFAULT
  success: "#00B37D",
  // tailwind success.DEFAULT
  disabled: "#959595"
  // tailwind disabled.DEFAULT
};
var BadgeNotif = ({
  icon,
  className,
  color = "primary",
  value,
  maxValue = 99,
  children,
  ...props
}) => {
  const positionClass = "top-0 right-0";
  const showNumber = typeof value === "number" && !isNaN(value);
  let badgeText = "";
  if (showNumber) {
    if (value > maxValue) {
      badgeText = `${maxValue}+`;
    } else {
      badgeText = String(value);
    }
  }
  const badgePadding = showNumber ? "px-2" : "";
  const badgeMinWidth = showNumber ? "min-w-[20px]" : "w-2.5 h-2.5";
  const badgeHeight = showNumber ? "h-5" : "h-2.5";
  const iconColor = typeof color === "string" && color in ICON_COLOR_MAP ? ICON_COLOR_MAP[color] : color;
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: cn("relative inline-block", className), children: [
    children ? children : icon ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Icon, { icon, color: iconColor, size: 32, ...props }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      "span",
      {
        className: cn(
          "absolute flex items-center justify-center rounded-xl bg-[#FF4C4C] text-white text-[10px] font-semibold",
          positionClass,
          badgePadding,
          badgeMinWidth,
          badgeHeight,
          !showNumber && "p-0",
          !showNumber && "rounded-full"
        ),
        style: {
          transform: "translate(50%,-50%)"
        },
        children: showNumber ? badgeText : ""
      }
    )
  ] });
};

// src/components/organisms/WidgetCardGroup/WidgetCardGroup.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
var WidgetCardGroup = ({
  widgets,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: cn("w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", className), children: widgets.map((widget, index) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(WidgetCard, { ...widget }, index)) });
};

// src/components/organisms/OnboardDialog/OnboardDialog.tsx
var import_react26 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AutoComplete,
  Avatar,
  Badge,
  BadgeNotif,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  DatePicker,
  Dialog,
  DialogActions,
  DialogBody,
  DialogHeader,
  DialogTitle,
  Divider,
  ErrorWrapper,
  FileUpload,
  Icon,
  Input,
  InputOTP,
  Notification,
  Pagination,
  PhoneInput,
  PrimitiveDatePicker,
  Progress,
  Radio,
  Select,
  SelectItem,
  Skeleton,
  Slider,
  StarRating,
  StatusIndicator,
  Stepper,
  Switch,
  Table,
  Tabs,
  Text,
  TimePicker,
  Toast,
  ToastProvider,
  Toggle,
  Tooltip,
  WidgetCard,
  WidgetCardGroup,
  buttonVariants,
  cardVariants,
  cn,
  inputOTPVariants,
  toggleVariants,
  useToast
});
//# sourceMappingURL=index.js.map