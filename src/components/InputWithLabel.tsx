import { cn } from "../utils/cn";
import Input, { InputProps } from "./Input";
import WithLabel, { WithLabelProps } from "./WithLabel";

export type InputWithLabelProps = WithLabelProps & {
  input?: InputProps;
};

export default function InputWithLabel({
  input = {},
  ...withLabelProps
}: InputWithLabelProps) {
  const { className: inputClassName, ...inputRest } = input;

  return (
    <WithLabel {...withLabelProps}>
      {({ className }) => (
        <Input className={cn(inputClassName, className)} {...inputRest} />
      )}
    </WithLabel>
  );
}
