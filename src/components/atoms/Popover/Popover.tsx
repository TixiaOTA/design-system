import React, { useState, useRef, useEffect, useCallback } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { getWindow, getDocument } from "../../../utils/ssr";
import { createPortal } from "react-dom";

const popoverVariants = cva("absolute z-50 p-4", {
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
});

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
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledIsOpen !== undefined;
  const showPopover = isControlled ? controlledIsOpen : isVisible;
  const debounceTimerRef = useRef<NodeJS.Timeout>();
  const animationTimerRef = useRef<NodeJS.Timeout>();
  const positionRef = useRef(position);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const win = getWindow();
      if (win && "navigator" in win && win.navigator) {
        const userAgent = win.navigator.userAgent;
        const isMobileDevice =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            userAgent
          );
        const isSmallScreen = win.innerWidth <= 768;
        setIsMobile(isMobileDevice || isSmallScreen);
      }
    };

    checkMobile();
    const win = getWindow();
    if (win && "addEventListener" in win) {
      win.addEventListener("resize", checkMobile);
      return () => win.removeEventListener("resize", checkMobile);
    }
  }, []);

  // Get accurate viewport dimensions accounting for mobile quirks
  const getViewportDimensions = useCallback(() => {
    const win = getWindow();
    if (!win) return { width: 0, height: 0 };

    // Use visual viewport API for mobile devices when available
    if ("visualViewport" in win && win.visualViewport) {
      return {
        width: win.visualViewport.width,
        height: win.visualViewport.height,
      };
    }

    // Fallback to inner dimensions
    return {
      width: win.innerWidth,
      height: win.innerHeight,
    };
  }, []);

  // Get the best position for mobile devices
  const getBestMobilePosition = useCallback(
    (
      triggerRect: DOMRect,
      popoverRect: DOMRect,
      viewportWidth: number,
      viewportHeight: number
    ) => {
      const positions = ["bottom", "top", "right", "left"] as const;

      for (const pos of positions) {
        let top = 0;
        let left = 0;
        const spacing = 4;

        switch (pos) {
          case "top":
            top = triggerRect.top - popoverRect.height - spacing;
            left = Math.max(0, (viewportWidth - popoverRect.width) / 2);
            if (top >= 0) return { position: pos, top, left };
            break;
          case "bottom":
            top = triggerRect.bottom + spacing;
            left = Math.max(0, (viewportWidth - popoverRect.width) / 2);
            if (top + popoverRect.height <= viewportHeight)
              return { position: pos, top, left };
            break;
          case "right":
            top =
              triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
            left = triggerRect.right + spacing;
            if (
              left + popoverRect.width <= viewportWidth &&
              top >= 0 &&
              top + popoverRect.height <= viewportHeight
            ) {
              return { position: pos, top, left };
            }
            break;
          case "left":
            top =
              triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
            left = triggerRect.left - popoverRect.width - spacing;
            if (
              left >= 0 &&
              top >= 0 &&
              top + popoverRect.height <= viewportHeight
            ) {
              return { position: pos, top, left };
            }
            break;
        }
      }

      // Fallback to centered positioning
      return {
        position: "bottom" as const,
        top: Math.max(0, (viewportHeight - popoverRect.height) / 2),
        left: Math.max(0, (viewportWidth - popoverRect.width) / 2),
      };
    },
    []
  );

  const updatePosition = useCallback(() => {
    if (!popoverRef.current || !triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();

    // Get viewport dimensions for boundary checking
    const { width: viewportWidth, height: viewportHeight } =
      getViewportDimensions();

    // Calculate position relative to the document (not viewport)
    const triggerTop = triggerRect.top + window.scrollY;
    const triggerLeft = triggerRect.left + window.scrollX;

    let top = 0;
    let left = 0;
    const spacing = isMobile ? 4 : 8;

    if (isMobile) {
      // Use mobile-optimized positioning
      const mobilePosition = getBestMobilePosition(
        triggerRect,
        popoverRect,
        viewportWidth,
        viewportHeight
      );
      top = mobilePosition.top + window.scrollY;
      left = mobilePosition.left + window.scrollX;
    } else {
      // Position relative to the document
      switch (position) {
        case "top":
          top = triggerTop - popoverRect.height - spacing;
          left = triggerLeft + (triggerRect.width - popoverRect.width) / 2;
          break;
        case "bottom":
          top = triggerTop + triggerRect.height + spacing;
          left = triggerLeft + (triggerRect.width - popoverRect.width) / 2;
          break;
        case "left":
          top = triggerTop + (triggerRect.height - popoverRect.height) / 2;
          left = triggerLeft - popoverRect.width - spacing;
          break;
        case "right":
          top = triggerTop + (triggerRect.height - popoverRect.height) / 2;
          left = triggerLeft + triggerRect.width + spacing;
          break;
      }
    }

    // Smart boundary detection and repositioning
    let finalPosition = { top, left };

    // Check if popover goes off-screen and reposition if needed
    if (top < 0 || top + popoverRect.height > window.innerHeight) {
      // Try alternative positions
      const alternatives = [
        {
          pos: "bottom",
          top: triggerTop + triggerRect.height + spacing,
          left: triggerLeft + (triggerRect.width - popoverRect.width) / 2,
        },
        {
          pos: "top",
          top: triggerTop - popoverRect.height - spacing,
          left: triggerLeft + (triggerRect.width - popoverRect.width) / 2,
        },
        {
          pos: "center",
          top: Math.max(0, (window.innerHeight - popoverRect.height) / 2),
          left: Math.max(0, (window.innerWidth - popoverRect.width) / 2),
        },
      ];

      for (const alt of alternatives) {
        if (
          alt.top >= 0 &&
          alt.top + popoverRect.height <= window.innerHeight
        ) {
          finalPosition = alt;
          break;
        }
      }
    }

    if (left < 0 || left + popoverRect.width > window.innerWidth) {
      // Center horizontally if it goes off-screen
      finalPosition.left = Math.max(
        0,
        (window.innerWidth - popoverRect.width) / 2
      );
    }

    setPopoverPosition(finalPosition);
  }, [position, isMobile, getViewportDimensions, getBestMobilePosition]);

  // Debounced position update for better mobile performance
  const debouncedUpdatePosition = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(updatePosition, 16); // ~60fps
  }, [updatePosition]);

  // Detect position changes and prevent sliding animations
  useEffect(() => {
    if (positionRef.current !== position) {
      // Position changed, update position immediately without animation
      positionRef.current = position;
      if (showPopover) {
        // Small delay to ensure DOM is ready, then update position
        setTimeout(updatePosition, 0);
      }
    }
  }, [position, showPopover, updatePosition]);

  // Cleanup debounce timer
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showPopover) {
      // Initial position update
      updatePosition();

      // Set up position updates for accuracy (less frequent for better performance)
      const positionInterval = setInterval(updatePosition, 200);

      const win = getWindow();
      if (win) {
        // Immediate position update on scroll for accuracy
        win.addEventListener("scroll", updatePosition, {
          passive: true,
          capture: true,
        });
        win.addEventListener("resize", debouncedUpdatePosition, {
          passive: true,
        });

        // Handle visual viewport changes (mobile virtual keyboard)
        if ("visualViewport" in win && win.visualViewport) {
          win.visualViewport.addEventListener(
            "resize",
            debouncedUpdatePosition
          );
          win.visualViewport.addEventListener("scroll", updatePosition);
        }
      }

      return () => {
        clearInterval(positionInterval);
        const win = getWindow();
        if (win) {
          win.removeEventListener("scroll", updatePosition, true);
          win.removeEventListener("resize", debouncedUpdatePosition);

          if ("visualViewport" in win && win.visualViewport) {
            win.visualViewport.removeEventListener(
              "resize",
              debouncedUpdatePosition
            );
            win.visualViewport.removeEventListener("scroll", updatePosition);
          }
        }
      };
    }
  }, [showPopover, updatePosition, debouncedUpdatePosition]);

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
    setIsOpening(true);
    setIsAnimating(true);

    if (isControlled) {
      onOpenChange?.(true);
    } else {
      setIsVisible(true);
    }

    // Reset opening state after animation
    setTimeout(() => {
      setIsOpening(false);
    }, 50);
  };

  const handleHide = () => {
    setIsAnimating(true);

    // Delay hiding to allow animation to complete
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }
    animationTimerRef.current = setTimeout(() => {
      if (isControlled) {
        onOpenChange?.(false);
      } else {
        setIsVisible(false);
      }
      setIsAnimating(false);
    }, 200); // Match the CSS transition duration
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (trigger === "click") {
      if (isControlled) {
        onOpenChange?.(!controlledIsOpen);
      } else {
        if (isVisible) {
          handleHide();
        } else {
          handleShow();
        }
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

    const handleTouchStart = (e: TouchEvent) => {
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
      // Add touch events for mobile devices
      if (isMobile) {
        document.addEventListener("touchstart", handleTouchStart, true);
      }
    }
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
      if (isMobile) {
        document.removeEventListener("touchstart", handleTouchStart, true);
      }
    };
  }, [showPopover, trigger, closeOnClickOutside, isMobile]);

  const renderPopover = () => {
    if (!showPopover && !isAnimating) return null;
    const doc = getDocument();
    if (!("body" in doc)) return null;

    // Calculate animation values based on state
    const scale = isOpening ? 0.95 : showPopover ? 1 : 0.95;
    const opacity = isOpening ? 0 : showPopover ? 1 : 0;

    return createPortal(
      <div
        ref={popoverRef}
        className={cn(
          popoverVariants({ color, rounded, shadow }),
          color === "custom" && customColor ? customColor : "",
          isMobile && "max-w-[90vw] max-h-[80vh] overflow-auto", // Mobile constraints
          // Professional animation classes with custom timing
          "transform-gpu transition-all duration-200 ease-out",
          className
        )}
        style={{
          top: `${popoverPosition.top}px`,
          left: `${popoverPosition.left}px`,
          background:
            color === "custom" && customColor ? customColor : undefined,
          // Mobile-specific styles
          ...(isMobile && {
            position: "fixed", // Use fixed positioning on mobile for better reliability
            zIndex: 9999, // Ensure it's above other elements
          }),
          // Smooth, professional animations
          transform: `scale(${scale})`,
          opacity: opacity,
          // Smooth transform origin for better animation
          transformOrigin: "center",
          // Prevent any sliding animations and optimize performance
          willChange: "transform, opacity",
          // Custom transition timing for professional feel
          transition:
            "transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
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
