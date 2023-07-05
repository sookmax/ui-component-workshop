import React from "react";
import classNames from "classnames";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionItemProps
>(function AccordionItemImpl({ children, className, ...props }, forwardedRef) {
  return (
    <RadixAccordion.Item
      className={classNames("border-b border-gray-300", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </RadixAccordion.Item>
  );
});

// AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  RadixAccordion.AccordionTriggerProps
>(function AccordionTriggerImpl(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <RadixAccordion.Header>
      <RadixAccordion.Trigger
        className={classNames(
          "group flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <p className="pr-2 text-left">{children}</p>
        <ChevronDownIcon
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});

// AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionContentProps
>(function AccordionContentImpl(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <RadixAccordion.Content
      className={classNames(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-1 pb-4 pt-0">{children}</div>
    </RadixAccordion.Content>
  );
});

// AccordionContent.displayName = "AccordionContent";
