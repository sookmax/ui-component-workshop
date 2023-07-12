"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../utils/cn";
import WithLabel from "./WithLabel";

export type SwitchProps = React.ComponentPropsWithRef<typeof Switch>;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchImpl>,
  Omit<React.ComponentPropsWithoutRef<typeof SwitchImpl>, "id"> & {
    label?: string;
  }
>(function Switch({ label, ...switchImplProps }, forwardedRef) {
  if (label) {
    const { className: switchImplClassName, ...switchImplPropsRest } =
      switchImplProps;

    const switchId = `switch-${label.replace(/\s+/g, "_")}`;

    return (
      <WithLabel
        label={{ children: label, htmlFor: switchId }}
        location="right"
      >
        {({ className }) => (
          <SwitchImpl
            className={cn(switchImplClassName, className)}
            id={switchId}
            {...switchImplPropsRest}
            ref={forwardedRef}
          />
        )}
      </WithLabel>
    );
  }

  return <SwitchImpl {...switchImplProps} ref={forwardedRef} />;
});

const SwitchImpl = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center",
      "rounded-full border-2 border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100",
      "data-[state=checked]:bg-cyan-700 data-[state=unchecked]:bg-slate-300",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full",
        "bg-slate-100 shadow-lg ring-0 transition-transform",
        "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
SwitchImpl.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
