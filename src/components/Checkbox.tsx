import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "../utils/cn";
import WithLabel from "./WithLabel";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxImpl>,
  React.ComponentPropsWithoutRef<typeof CheckboxImpl> & { label?: string }
>(function Checkbox({ label, ...checkboxImplProps }, forwardedRef) {
  if (label) {
    const { className: checkboxImplClassName, ...checkboxImplRest } =
      checkboxImplProps;

    const checkboxId = `checkbox-${label.replace(/\s+/g, "_")}`;

    return (
      <WithLabel
        label={{ children: label, htmlFor: checkboxId }}
        location="right"
      >
        {({ className }) => (
          <CheckboxImpl
            id={checkboxId}
            className={cn(checkboxImplClassName, className)}
            {...checkboxImplRest}
            ref={forwardedRef}
          />
        )}
      </WithLabel>
    );
  }

  return <CheckboxImpl {...checkboxImplProps} ref={forwardedRef} />;
});

const CheckboxImpl = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-gray-200",
      "text-white",
      "data-[state=checked]:border-cyan-700 data-[state=checked]:bg-cyan-700 data-[state=checked]:animate-in data-[state=checked]:fade-in-0",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex h-full w-full items-center justify-center text-current"
      )}
    >
      <CheckIcon className="h-full w-full" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
CheckboxImpl.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
