import React from "react";
import { cn } from "../utils/cn";

type WithLabelProps = {
  className?: string;
  labelPosition?: "top" | "left" | "right";
  label: (props: { className: string }) => React.ReactNode;
  target: (props: { className: string }) => React.ReactNode;
};

export default function WithLabel2({
  className,
  label,
  target,
  labelPosition = "top",
}: WithLabelProps) {
  return (
    <div
      className={cn(
        labelPosition === "top" && "flex flex-col-reverse",
        labelPosition === "left" && "flex flex-row-reverse items-center",
        labelPosition === "right" && "flex items-center",
        className
      )}
    >
      {target({ className: "peer" })}
      {label({
        className: cn(
          labelPosition === "top" && "mb-1",
          labelPosition === "left" && "mr-2",
          labelPosition === "right" && "ml-2 grow",
          "text-xs text-slate-600",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          "aria-disabled:cursor-not-allowed aria-disabled:opacity-70"
        ),
      })}
    </div>
  );
}
