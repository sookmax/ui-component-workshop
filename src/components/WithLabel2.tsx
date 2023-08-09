import React, { useId } from "react";
import { cn } from "../utils/cn";

type RenderProps = (props: {
  className: string;
  id: string;
}) => React.ReactNode;

type WithLabelProps = {
  className?: string;
  labelPosition?: "top" | "left" | "right";
  label: RenderProps;
  target: RenderProps;
};

export default function WithLabel2({
  className,
  label,
  target,
  labelPosition = "top",
}: WithLabelProps) {
  const id = useId();

  return (
    <div
      className={cn(
        labelPosition === "top" && "flex flex-col-reverse",
        labelPosition === "left" && "flex flex-row-reverse items-center",
        labelPosition === "right" && "flex items-center",
        className
      )}
    >
      {target({ id, className: "peer" })}
      {label({
        id,
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
