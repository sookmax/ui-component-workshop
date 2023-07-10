import React from "react";
import { Button, ButtonProps } from "./Button";
import { cn } from "../utils/cn";

export type WithButtonProps = {
  button?: ButtonProps;
  className?: string;
};

type WithButtonPropsInternal = WithButtonProps & {
  children: (props: { className: string }) => React.ReactNode;
};

export default function WithButton({
  button,
  className,
  children,
}: WithButtonPropsInternal) {
  return (
    <div
      className={cn(
        "flex space-x-2",
        button?.disabled && "cursor-not-allowed",
        className
      )}
    >
      {children({ className: "peer" })}
      <Button {...button} />
    </div>
  );
}
