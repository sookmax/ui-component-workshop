import { cn } from "../utils/cn";
import Input, { InputProps } from "./Input";
import WithButton, { WithButtonProps } from "./WithButton";

export type InputWithButtonProps = WithButtonProps & {
  input?: InputProps;
};

export default function InputWithButton({
  input = {},
  ...withButtonProps
}: InputWithButtonProps) {
  const { className: inputClassName, ...inputRest } = input;

  return (
    <WithButton {...withButtonProps}>
      {({ className }) => (
        <Input className={cn(inputClassName, className)} {...inputRest} />
      )}
    </WithButton>
  );
}
