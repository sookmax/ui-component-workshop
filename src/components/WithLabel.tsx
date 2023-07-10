import React from "react";
import Label, { LabelProps } from "./Label";
import { cn } from "../utils/cn";

export type WithLabelProps = {
  className?: string;
  label?: LabelProps;
};

type WithLabelInternalProps = WithLabelProps & {
  children: (props: { className: string }) => React.ReactNode;
};

export default function WithLabel({
  className,
  label = {},
  children,
}: WithLabelInternalProps) {
  const { className: labelClassName, ...labelRest } = label;

  return (
    <div className={cn("group flex flex-col-reverse", className)} data-dd>
      {children({ className: "peer" })}
      <Label
        className={cn(
          "mb-1 text-xs text-slate-600",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          "aria-disabled:cursor-not-allowed aria-disabled:opacity-70",
          labelClassName
        )}
        {...labelRest}
      />
    </div>
  );
}
