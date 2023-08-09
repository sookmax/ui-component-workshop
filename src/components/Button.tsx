import * as React from "react";
import { cn } from "../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "link";
  size?: "small" | "medium" | "large";
  preventInteraction?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "default",
      size = "medium",
      children,
      preventInteraction = false,
      ...props
    },
    ref
  ) {
    const finalProps = preventInteraction ? {} : props;

    return (
      <button
        className={cn([
          "inline-flex items-center justify-center rounded-md border text-sm font-medium transition-colors",
          // "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          variant === "default" &&
            "border-transparent bg-cyan-700 text-white hover:bg-cyan-800 focus-visible:ring-cyan-700",
          variant === "secondary" &&
            "border-transparent bg-amber-300 text-black hover:bg-amber-400 focus-visible:ring-amber-300",
          variant === "destructive" &&
            "border-transparent bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
          variant === "outline" &&
            "border-gray-400 focus-visible:ring-gray-400",
          variant === "link" &&
            "border-transparent underline-offset-4 hover:underline focus-visible:ring-gray-300",
          size === "small" && "h-9 rounded-md px-3",
          size === "medium" && "h-10 px-4 py-2",
          size === "large" && "h-11 rounded-md px-8",
          preventInteraction && "cursor-default",
          className,
        ])}
        ref={ref}
        {...finalProps}
      >
        {children}
      </button>
    );
  }
);
