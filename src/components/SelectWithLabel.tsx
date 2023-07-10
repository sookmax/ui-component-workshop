import { cn } from "../utils/cn";
import Select, { SelectProps } from "./Select";
import WithLabel, { WithLabelProps } from "./WithLabel";

export type SelectWithLabelProps = Omit<WithLabelProps, "children"> & {
  select?: SelectProps;
};

export default function SelectWithLabel({
  select = { items: [] },
  ...withLabelProps
}: SelectWithLabelProps) {
  const { className: selectClassName, ...selectRest } = select;

  return (
    <WithLabel {...withLabelProps}>
      {({ className }) => (
        <Select className={cn(selectClassName, className)} {...selectRest} />
      )}
    </WithLabel>
  );
}
