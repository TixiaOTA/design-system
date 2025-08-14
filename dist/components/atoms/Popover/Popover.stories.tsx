import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../Button/Button";
import React from "react";

const meta: Meta<typeof Popover> = {
  title: "Atoms/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "neutral",
        "light",
        "custom",
      ],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
    trigger: {
      control: "select",
      options: ["hover", "click"],
    },
    autoFocus: { control: "boolean" },
    customColor: { control: "color" },
    closeOnClickOutside: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    content: <div>This is a popover</div>,
    children: <Button>Click me</Button>,
    position: "bottom",
    color: "primary",
    rounded: "xl",
    shadow: "md",
    trigger: "click",
  },
};

export const WithFormAutoFocus: Story = {
  args: {
    content: (
      <form className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          className="border p-2 rounded"
        />
        <Button type="submit">Submit</Button>
      </form>
    ),
    children: <Button>Open Form</Button>,
    position: "bottom",
    color: "light",
    rounded: "lg",
    shadow: "lg",
    trigger: "click",
    autoFocus: true,
  },
};

export const CustomColor: Story = {
  args: {
    content: <div>Custom color popover</div>,
    children: <Button>Custom Color</Button>,
    color: "custom",
    customColor: "#ff69b4",
    position: "top",
    rounded: "full",
    shadow: "xl",
    trigger: "click",
  },
};

export const AllPositions: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="flex items-center gap-4">
        <Popover content="Top popover" position="top">
          <Button>Top</Button>
        </Popover>
        <Popover content="Bottom popover" position="bottom">
          <Button>Bottom</Button>
        </Popover>
      </div>
      <div className="flex items-center gap-4">
        <Popover content="Left popover" position="left">
          <Button>Left</Button>
        </Popover>
        <Popover content="Right popover" position="right">
          <Button>Right</Button>
        </Popover>
      </div>
    </div>
  ),
};

export const RoundedAndShadow: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Popover content="None" rounded="none" shadow="none">
        <Button>None</Button>
      </Popover>
      <Popover content="Small" rounded="sm" shadow="sm">
        <Button>Small</Button>
      </Popover>
      <Popover content="Medium" rounded="md" shadow="md">
        <Button>Medium</Button>
      </Popover>
      <Popover content="Large" rounded="lg" shadow="lg">
        <Button>Large</Button>
      </Popover>
      <Popover content="Extra Large" rounded="xl" shadow="xl">
        <Button>Extra Large</Button>
      </Popover>
      <Popover content="2xl" rounded="2xl" shadow="xl">
        <Button>2xl</Button>
      </Popover>
      <Popover content="3xl" rounded="3xl" shadow="xl">
        <Button>3xl</Button>
      </Popover>
      <Popover content="Full" rounded="full" shadow="xl">
        <Button>Full</Button>
      </Popover>
    </div>
  ),
};

export const HoverTrigger: Story = {
  args: {
    content: <div>Popover on hover</div>,
    children: <Button>Hover me</Button>,
    trigger: "hover",
    color: "info",
    position: "right",
  },
};

// --- Showcase: Popover with a menu/list ---
export const WithMenu: Story = {
  args: {
    content: (
      <ul className="min-w-[160px]">
        <li className="p-2 hover:bg-neutral-100 cursor-pointer">Profile</li>
        <li className="p-2 hover:bg-neutral-100 cursor-pointer">Settings</li>
        <li className="p-2 hover:bg-neutral-100 cursor-pointer">Logout</li>
      </ul>
    ),
    children: <Button>Menu</Button>,
    position: "bottom",
    color: "light",
    rounded: "md",
    shadow: "md",
    trigger: "click",
  },
};

// --- Showcase: Popover with a complex form ---
export const WithComplexForm: Story = {
  args: {
    content: (
      <form className="flex flex-col gap-3 w-64">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          className="border p-2 rounded"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          className="border p-2 rounded"
        />
        <div className="flex gap-2 justify-end">
          <Button type="button">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    ),
    children: <Button>Open Complex Form</Button>,
    position: "right",
    color: "light",
    rounded: "lg",
    shadow: "lg",
    trigger: "click",
    autoFocus: true,
  },
};

// --- Showcase: Popover with custom width/content ---
export const CustomWidthContent: Story = {
  args: {
    content: (
      <div className="w-80 p-2">
        <h4 className="font-bold mb-2">Popover Title</h4>
        <p>
          This popover has a custom width and more content. You can use it for
          tooltips, cards, or anything else.
        </p>
      </div>
    ),
    children: <Button>Wide Popover</Button>,
    position: "top",
    color: "info",
    rounded: "md",
    shadow: "xl",
    trigger: "click",
  },
};

// --- Showcase: Controlled Popover (external state) ---
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setOpen((v) => !v)}>
          {open ? "Close" : "Open"} Popover
        </Button>
        <Popover
          content={<div>Controlled popover. Click the button to toggle.</div>}
          isOpen={open}
          onOpenChange={setOpen}
          children={<span></span>}
        />
      </div>
    );
  },
};

// --- Showcase: Popover with interactive content (close button inside) ---
export const WithCloseButton: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Popover
        content={
          <div className="flex flex-col gap-2">
            <span>This popover can be closed from inside.</span>
            <Button size="sm" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        }
        isOpen={open}
        onOpenChange={setOpen}
        children={<Button onClick={() => setOpen(true)}>Open Popover</Button>}
      />
    );
  },
};

// --- Showcase: Popover with long content and scrolling ---
export const WithLongContent: Story = {
  args: {
    content: (
      <div className="max-h-60 overflow-y-auto w-64">
        <h4 className="font-bold mb-2">Long Content</h4>
        <ul>
          {Array.from({ length: 20 }).map((_, i) => (
            <li key={i} className="p-1 border-b last:border-b-0">
              Item {i + 1}
            </li>
          ))}
        </ul>
      </div>
    ),
    children: <Button>Show Long Content</Button>,
    position: "left",
    color: "neutral",
    rounded: "md",
    shadow: "md",
    trigger: "click",
  },
};

// --- Showcase: Manual close only (closeOnClickOutside = false) ---
export const ManualCloseOnly: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Popover
        content={
          <div className="flex flex-col gap-2">
            <span>This popover will NOT close on outside click.</span>
            <span className="text-xs text-neutral-500">
              It only closes when you click the button below.
            </span>
            <Button size="sm" onClick={() => setOpen(false)}>
              Close Popover
            </Button>
          </div>
        }
        isOpen={open}
        onOpenChange={setOpen}
        closeOnClickOutside={false}
        children={
          <Button onClick={() => setOpen(true)}>Open Manual Popover</Button>
        }
      />
    );
  },
};

// --- Showcase: Mobile-optimized popover ---
export const MobileOptimized: Story = {
  args: {
    content: (
      <div className="w-72 p-4">
        <h4 className="font-bold mb-3 text-lg">Mobile-Friendly Popover</h4>
        <p className="text-sm mb-3">
          This popover is optimized for mobile devices with:
        </p>
        <ul className="text-sm space-y-1 mb-3">
          <li>• Better touch handling</li>
          <li>• Virtual keyboard awareness</li>
          <li>• Responsive positioning</li>
          <li>• Mobile-optimized spacing</li>
        </ul>
        <div className="flex gap-2">
          <Button size="sm">Action 1</Button>
          <Button size="sm" variant="outline">
            Action 2
          </Button>
        </div>
      </div>
    ),
    children: <Button>Mobile Popover</Button>,
    position: "bottom",
    color: "light",
    rounded: "lg",
    shadow: "lg",
    trigger: "click",
    className: "max-w-[90vw]",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// --- Showcase: Smooth animations and scroll positioning ---
export const SmoothAnimations: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="space-y-8 p-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Smooth Animations Demo</h3>
          <p className="text-sm text-neutral-600 mb-4">
            This popover features smooth open/close animations and accurate
            scroll positioning
          </p>
          <Button onClick={() => setOpen(!open)}>
            {open ? "Close" : "Open"} Animated Popover
          </Button>
        </div>

        <Popover
          content={
            <div className="w-64 p-4">
              <h4 className="font-bold mb-2">Smooth Animations</h4>
              <p className="text-sm mb-3">
                Notice the smooth scale and opacity transitions when opening and
                closing. The popover also maintains accurate positioning during
                scroll.
              </p>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button size="sm" variant="outline">
                  Action
                </Button>
              </div>
            </div>
          }
          isOpen={open}
          onOpenChange={setOpen}
          position="bottom"
          color="light"
          rounded="lg"
          shadow="lg"
          children={<span></span>}
        />

        {/* Add some scrollable content to test positioning */}
        <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-neutral-50">
          <h4 className="font-semibold mb-4">Scrollable Content for Testing</h4>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="mb-4 p-3 bg-white rounded border">
              <h5 className="font-medium">Section {i + 1}</h5>
              <p className="text-sm text-neutral-600">
                This is scrollable content to test the popover positioning
                during scroll. The popover should maintain its relative position
                to the trigger element.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// --- Showcase: Accurate positioning test ---
export const AccuratePositioning: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="space-y-8 p-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">
            Accurate Positioning Test
          </h3>
          <p className="text-sm text-neutral-600 mb-4">
            This popover should always stick close to its parent button, even
            during scroll
          </p>
        </div>

        {/* Test popover in different positions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Popover
            content={<div className="p-3 bg-blue-100 rounded">Top Popover</div>}
            position="top"
            children={<Button>Top Position</Button>}
          />

          <Popover
            content={
              <div className="p-3 bg-green-100 rounded">Bottom Popover</div>
            }
            position="bottom"
            children={<Button>Bottom Position</Button>}
          />

          <Popover
            content={
              <div className="p-3 bg-yellow-100 rounded">Left Popover</div>
            }
            position="left"
            children={<Button>Left Position</Button>}
          />

          <Popover
            content={
              <div className="p-3 bg-purple-100 rounded">Right Popover</div>
            }
            position="right"
            children={<Button>Right Position</Button>}
          />
        </div>

        {/* Scrollable container with positioned popover */}
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-4">Scroll Test Container</h4>
          <div className="h-64 overflow-y-auto border rounded p-4 bg-neutral-50">
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="p-3 bg-white rounded border">
                  <div className="flex items-center justify-between">
                    <span>Scroll Item {i + 1}</span>
                    <Popover
                      content={
                        <div className="p-2 bg-white border rounded shadow">
                          <p className="text-sm">Popover {i + 1}</p>
                          <p className="text-xs text-neutral-500">
                            Should stay with button
                          </p>
                        </div>
                      }
                      position="right"
                      children={<Button size="sm">Info {i + 1}</Button>}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// --- Showcase: Clean animations and scroll positioning ---
export const CleanAnimations: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [currentPosition, setCurrentPosition] = React.useState<
      "top" | "bottom" | "left" | "right"
    >("bottom");

    const positions: Array<"top" | "bottom" | "left" | "right"> = [
      "top",
      "bottom",
      "left",
      "right",
    ];

    return (
      <div className="space-y-8 p-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">
            Clean, Professional Animations
          </h3>
          <p className="text-sm text-neutral-600 mb-4">
            Notice the smooth open/close animations without any sliding effects
            when position changes
          </p>
          <div className="flex gap-2 justify-center mb-4">
            <Button onClick={() => setOpen(!open)}>
              {open ? "Close" : "Open"} Popover
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const nextIndex =
                  (positions.indexOf(currentPosition) + 1) % positions.length;
                setCurrentPosition(positions[nextIndex]);
              }}
            >
              Change Position: {currentPosition}
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <Popover
            content={
              <div className="w-64 p-4">
                <h4 className="font-bold mb-2">Smooth Animations</h4>
                <p className="text-sm mb-3">
                  This popover demonstrates clean, professional animations. Try
                  changing the position while it's open - no sliding effects!
                </p>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setOpen(false)}>
                    Close
                  </Button>
                  <Button size="sm" variant="outline">
                    Action
                  </Button>
                </div>
              </div>
            }
            isOpen={open}
            onOpenChange={setOpen}
            position={currentPosition}
            color="light"
            rounded="lg"
            shadow="lg"
            children={<Button>Hover/Click Me</Button>}
          />
        </div>

        <div className="text-center text-sm text-neutral-500">
          <p>
            Current position: <strong>{currentPosition}</strong>
          </p>
          <p>
            Try changing the position while the popover is open to see the clean
            transition
          </p>
        </div>
      </div>
    );
  },
};
