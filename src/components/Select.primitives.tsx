import React, { useContext, useState } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "../utils/cn";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

export const ItemText = RadixSelect.ItemText;
export const Value = RadixSelect.Value;

const SelectContext = React.createContext({ open: false });

export function Root(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof RadixSelect.Root>,
    "open" | "onOpenChange"
  >
) {
  const [open, setOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ open }}>
      <RadixSelect.Root open={open} onOpenChange={setOpen} {...props} />
    </SelectContext.Provider>
  );
}

export const Trigger = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(function Trigger({ children, className, ...rest }, ref) {
  const { open } = useContext(SelectContext);

  return (
    <RadixSelect.Trigger
      ref={ref}
      className={cn(
        `flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm
    placeholder:text-gray-200 
    disabled:cursor-not-allowed 
    disabled:opacity-50
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2`,
        className
      )}
      {...rest}
    >
      {children}
      <RadixSelect.Icon
        className={cn("transition-transform", open && "rotate-180")}
      >
        <ChevronDownIcon className="h-4 w-4 opacity-50" />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
});

export function Content({
  children,
  className,
  ...rest
}: Omit<
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content>,
  "position"
>) {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        {...rest}
        className={cn(
          `
        relative
        z-50
        min-w-[8rem] 
        overflow-hidden 
        rounded-md 
        border bg-white shadow-md 
        data-[side=bottom]:translate-y-1 
        data-[side=left]:-translate-x-1 
        data-[side=right]:translate-x-1 
        data-[side=top]:-translate-y-1 
        data-[state=open]:animate-in 
        data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 
        data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 
        data-[state=open]:zoom-in-95 
        data-[side=bottom]:-enter-translate-y-2
        data-[side=left]:enter-translate-x-2 
        data-[side=right]:-enter-translate-x-2 
        data-[side=top]:enter-translate-y-2 
        `,
          className
        )}
        position={"popper"}
      >
        <RadixSelect.Viewport
          className={`
          h-[var(--radix-select-trigger-height)] 
          min-w-[var(--radix-select-trigger-width)]
          w-full p-1
          `}
        >
          {children}
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
}

export function Item({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof RadixSelect.Item>) {
  return (
    <RadixSelect.Item
      className={cn(
        `relative flex w-full cursor-default select-none items-center 
        rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none 
        focus:bg-gray-200 
        data-[disabled]:pointer-events-none 
        data-[disabled]:opacity-50`,
        className
      )}
      {...rest}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RadixSelect.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </RadixSelect.ItemIndicator>
      </span>
      {children}
    </RadixSelect.Item>
  );
}
