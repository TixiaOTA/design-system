import React, { useState, useRef, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { getWindow, getDocument } from "../../../utils/ssr";
import { createPortal } from "react-dom";

const popoverVariants = cva(
  "absolute z-50 p-4 transition-opacity duration-200",
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
        light: "bg-white text-neutral-900 border border-neutral-200",
        custom: "", // for custom color
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
      },
    },
    defaultVariants: {
      color: "neutral",
      rounded: "xl",
      shadow: "md",
    },
  }
);

export interface PopOverProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "neutral"
    | "light"
    | "custom";
  customColor?: string; // for custom color code
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
  trigger?: "hover" | "click";
  autoFocus?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnClickOutside?: boolean;
}

export const Popover: React.FC<PopOverProps> = ({
  content,
  children,
  position = "bottom",
  color = "light",
  customColor,
  rounded = "xl",
  shadow = "md",
  className,
  trigger = "click",
  autoFocus = false,
  isOpen: controlledIsOpen,
  onOpenChange,
  closeOnClickOutside = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledIsOpen !== undefined;
  const showPopover = isControlled ? controlledIsOpen : isVisible;

  const updatePosition = () => {
    if (!popoverRef.current || !triggerRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const win = getWindow() as Window;
    const scrollX = win.scrollX || win.pageXOffset;
    const scrollY = win.scrollY || win.pageYOffset;
    let top = 0;
    let left = 0;
    const spacing = 8;
    switch (position) {
      case "top":
        top = triggerRect.top + scrollY - popoverRect.height - spacing;
        left = triggerRect.left + scrollX + (triggerRect.width - popoverRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + scrollY + spacing;
        left = triggerRect.left + scrollX + (triggerRect.width - popoverRect.width) / 2;
        break;
      case "left":
        top = triggerRect.top + scrollY + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.left + scrollX - popoverRect.width - spacing;
        break;
      case "right":
        top = triggerRect.top + scrollY + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.right + scrollX + spacing;
        break;
    }
    // Ensure popover stays within viewport
    const viewportWidth = win.innerWidth;
    const viewportHeight = win.innerHeight;
    if (left < 0) left = 0;
    if (left + popoverRect.width > viewportWidth) {
      left = viewportWidth - popoverRect.width;
    }
    if (top < 0) top = 0;
    if (top + popoverRect.height > viewportHeight) {
      top = viewportHeight - popoverRect.height;
    }
    setPopoverPosition({ top, left });
  };

  useEffect(() => {
    if (showPopover) {
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
  }, [showPopover, position]);

  // Autofocus logic for forms
  useEffect(() => {
    if (showPopover && autoFocus && popoverRef.current) {
      const input = popoverRef.current.querySelector(
        "input, select, textarea, button, [tabindex]:not([tabindex='-1'])"
      ) as HTMLElement | null;
      if (input) input.focus();
    }
  }, [showPopover, autoFocus]);

  const handleShow = () => {
    if (isControlled) {
      onOpenChange?.(true);
    } else {
      setIsVisible(true);
    }
  };

  const handleHide = () => {
    if (isControlled) {
      onOpenChange?.(false);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (trigger === "click") {
      if (isControlled) {
        onOpenChange?.(!controlledIsOpen);
      } else {
        setIsVisible(!isVisible);
      }
    }
  };

  useEffect(() => {
    if (!closeOnClickOutside) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (
        trigger === "click" &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        handleHide();
      }
    };
    if (showPopover) {
      document.addEventListener("pointerdown", handlePointerDown, true);
    }
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [showPopover, trigger, closeOnClickOutside]);

  const renderPopover = () => {
    if (!showPopover) return null;
    const doc = getDocument();
    if (!("body" in doc)) return null;
    return createPortal(
      <div
        ref={popoverRef}
        className={cn(
          popoverVariants({ color, rounded, shadow }),
          color === "custom" && customColor ? customColor : "",
          className
        )}
        style={{
          top: `${popoverPosition.top}px`,
          left: `${popoverPosition.left}px`,
          background: color === "custom" && customColor ? customColor : undefined,
        }}
        tabIndex={-1}
      >
        {content}
      </div>,
      doc.body
    );
  };

  return (
    <div className="relative">
      <div
        ref={triggerRef}
        className="relative inline-block"
        onMouseEnter={trigger === "hover" ? handleShow : undefined}
        onMouseLeave={trigger === "hover" ? handleHide : undefined}
        onClick={handleClick}
        tabIndex={0}
      >
        {children}
        {renderPopover()}
      </div>
    </div>
  );
};