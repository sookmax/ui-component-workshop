import * as React from "react";
import { cn } from "../utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type, ...props },
  ref
) {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-md border border-gray-300 p-2 text-sm text-slate-500",
        "file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-cyan-600 file:px-3 file:py-2 file:text-xs file:font-normal file:text-white hover:file:bg-cyan-700",
        "placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
