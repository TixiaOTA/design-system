import React, { useState, useRef, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { getWindow, getDocument } from "../../../utils/ssr";
import { createPortal } from "react-dom";

const tooltipVariants = cva(
  "absolute z-50 px-3 py-2 text-sm rounded-md shadow-lg transition-opacity duration-200",
  {
    variants: {
      color: {
        primary: "bg-primary-500 text-white",
        secondary: "bg-secondary-500 text-white",
        success: "bg-success-500 text-white",
        warning: "bg-warning-500 text-white",
        danger: "bg-danger-500 text-white",
        info: "bg-info-500 text-white",
        neutral: "bg-neutral-500 text-white",
        light: "bg-white text-neutral-900 border border-neutral-200",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  }
);

const arrowVariants = cva("absolute w-2 h-2 transform rotate-45", {
  variants: {
    color: {
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
      success: "bg-success-500",
      warning: "bg-warning-500",
      danger: "bg-danger-500",
      info: "bg-info-500",
      neutral: "bg-neutral-500",
      light: "bg-white border-r border-b border-neutral-200",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export interface TooltipProps {
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

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delay = 0,
  className,
  color = "light",
  size = "md",
  isOpen: controlledIsOpen,
  onOpenChange,
  trigger = "hover",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isControlled = controlledIsOpen !== undefined;
  const showTooltip = isControlled ? controlledIsOpen : isVisible;

  const updatePosition = () => {
    if (!tooltipRef.current || !triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const win = getWindow() as Window;
    const scrollX = win.scrollX || win.pageXOffset;
    const scrollY = win.scrollY || win.pageYOffset;

    let top = 0;
    let left = 0;
    const spacing = 8;

    switch (position) {
      case "top":
        top = triggerRect.top + scrollY - tooltipRect.height - spacing;
        left =
          triggerRect.left +
          scrollX +
          (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + scrollY + spacing;
        left =
          triggerRect.left +
          scrollX +
          (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top =
          triggerRect.top +
          scrollY +
          (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left + scrollX - tooltipRect.width - spacing;
        break;
      case "right":
        top =
          triggerRect.top +
          scrollY +
          (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + scrollX + spacing;
        break;
    }

    // Ensure tooltip stays within viewport
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

  useEffect(() => {
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
    const handleClickOutside = (e: MouseEvent) => {
      if (
        trigger === "click" &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
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

    return createPortal(
      <div
        ref={tooltipRef}
        className={cn(tooltipVariants({ color, size }), className)}
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
        }}
      >
        {content}
        <div
          className={cn(
            arrowVariants({ color }),
            position === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
            position === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
            position === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
            position === "right" && "left-[-4px] top-1/2 -translate-y-1/2"
          )}
        />
      </div>,
      doc.body
    );
  };

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={trigger === "hover" ? handleShow : undefined}
      onMouseLeave={trigger === "hover" ? handleHide : undefined}
      onClick={handleClick}
    >
      {children}
      {renderTooltip()}
    </div>
  );
};
