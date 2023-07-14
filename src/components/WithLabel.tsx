import React from "react";
import Label, { LabelProps } from "./Label";
import { cn } from "../utils/cn";

export type WithLabelProps = {
  className?: string;
  label?: LabelProps;
  location?: "top" | "left" | "right";
};

type WithLabelInternalProps = WithLabelProps & {
  children: (props: { className: string }) => React.ReactNode;
};

export default function WithLabel({
  className,
  label = {},
  children,
  location = "top",
}: WithLabelInternalProps) {
  const { className: labelClassName, ...labelRest } = label;

  return (
    <div
      className={cn(
        location === "top" && "flex flex-col-reverse",
        location === "left" && "flex flex-row-reverse items-center",
        location === "right" && "flex items-center",
        className
      )}
    >
      {children({ className: "peer" })}
      <Label
        className={cn(
          location === "top" && "mb-1",
          location === "left" && "mr-2",
          location === "right" && "ml-2 grow",
          "text-xs text-slate-600",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          "aria-disabled:cursor-not-allowed aria-disabled:opacity-70",
          labelClassName
        )}
        {...labelRest}
      />
    </div>
  );
}
