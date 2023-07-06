import { cn } from "../utils/cn";
import Input, { InputProps } from "./Input";
import Label, { LabelProps } from "./Label";

export type InputWithLabelProps = {
  input?: InputProps;
  label?: LabelProps;
  className?: string;
};

export default function InputWithLabel({
  input = {},
  label = {},
  className,
}: InputWithLabelProps) {
  const { className: labelClassName, ...labelRest } = label;
  const { className: inputClassName, ...inputRest } = input;

  return (
    <div className={cn("relative", className)}>
      <Input className={cn("peer h-full", inputClassName)} {...inputRest} />
      <Label
        className={cn(
          "absolute bottom-full w-full",
          "mb-1 text-xs text-slate-600",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          labelClassName
        )}
        {...labelRest}
      />
    </div>
  );
}
