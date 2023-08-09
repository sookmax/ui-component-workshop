"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../utils/cn";

const HoverCardRoot = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(
  (
    { className, align = "center", sideOffset = 4, children, ...props },
    ref
  ) => (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        `
      z-50 w-64 rounded-md border bg-white p-4 
      shadow-sm
      outline-none 
      data-[state=open]:animate-in 
      data-[state=open]:fade-in-0 
      data-[state=open]:zoom-in-95 
      data-[state=closed]:animate-out 
      data-[state=closed]:fade-out-0 
      data-[state=closed]:zoom-out-95 
      data-[side=bottom]:-enter-translate-y-2
      data-[side=left]:enter-translate-x-2 
      data-[side=right]:-enter-translate-x-2
      data-[side=top]:enter-translate-y-2
      `,
        className
      )}
      {...props}
    >
      {children}
      <HoverCardPrimitive.Arrow className="fill-white" />
    </HoverCardPrimitive.Content>
  )
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCardRoot, HoverCardTrigger, HoverCardContent };
