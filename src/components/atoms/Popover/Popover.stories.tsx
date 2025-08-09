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
      options: ["primary", "secondary", "success", "warning", "danger", "info", "neutral", "light", "custom"],
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
        <input id="email" type="email" placeholder="Enter email" className="border p-2 rounded" />
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
        <Popover content="Top popover" position="top"><Button>Top</Button></Popover>
        <Popover content="Bottom popover" position="bottom"><Button>Bottom</Button></Popover>
      </div>
      <div className="flex items-center gap-4">
        <Popover content="Left popover" position="left"><Button>Left</Button></Popover>
        <Popover content="Right popover" position="right"><Button>Right</Button></Popover>
      </div>
    </div>
  ),
};

export const RoundedAndShadow: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Popover content="None" rounded="none" shadow="none"><Button>None</Button></Popover>
      <Popover content="Small" rounded="sm" shadow="sm"><Button>Small</Button></Popover>
      <Popover content="Medium" rounded="md" shadow="md"><Button>Medium</Button></Popover>
      <Popover content="Large" rounded="lg" shadow="lg"><Button>Large</Button></Popover>
      <Popover content="Extra Large" rounded="xl" shadow="xl"><Button>Extra Large</Button></Popover>
      <Popover content="2xl" rounded="2xl" shadow="xl"><Button>2xl</Button></Popover>
      <Popover content="3xl" rounded="3xl" shadow="xl"><Button>3xl</Button></Popover>
      <Popover content="Full" rounded="full" shadow="xl"><Button>Full</Button></Popover>
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
        <input id="name" type="text" placeholder="Enter name" className="border p-2 rounded" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter email" className="border p-2 rounded" />
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
        <p>This popover has a custom width and more content. You can use it for tooltips, cards, or anything else.</p>
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
        <Button onClick={() => setOpen((v) => !v)}>{open ? "Close" : "Open"} Popover</Button>
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
            <Button size="sm" onClick={() => setOpen(false)}>Close</Button>
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
            <li key={i} className="p-1 border-b last:border-b-0">Item {i + 1}</li>
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
            <span className="text-xs text-neutral-500">It only closes when you click the button below.</span>
            <Button size="sm" onClick={() => setOpen(false)}>Close Popover</Button>
          </div>
        }
        isOpen={open}
        onOpenChange={setOpen}
        closeOnClickOutside={false}
        children={<Button onClick={() => setOpen(true)}>Open Manual Popover</Button>}
      />
    );
  },
};
