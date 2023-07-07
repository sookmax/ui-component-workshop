import { cn } from "../utils/cn";
import Select, { SelectProps } from "./Select";
import Label, { LabelProps } from "./Label";

export type SelectWithLabelProps = {
  select?: SelectProps;
  label?: LabelProps;
  className?: string;
};

export default function SelectWithLabel({
  select = { items: [] },
  label = {},
  className,
}: SelectWithLabelProps) {
  const { className: labelClassName, ...labelRest } = label;
  const { className: selectClassName, ...selectRest } = select;

  return (
    <div className={cn("relative", className)}>
      <Select className={cn("peer h-full", selectClassName)} {...selectRest} />
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
