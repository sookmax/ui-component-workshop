import { cn } from "../utils/cn";
import { Button, ButtonProps } from "./Button";
import Input, { InputProps } from "./Input";
import InputWithLabel from "./InputWithLabel";
import { LabelProps } from "./Label";
import WithButton, { WithButtonProps } from "./WithButton";
import WithLabel, { WithLabelProps } from "./WithLabel";

export type InputWithLabelAndButtonProps = {
  input?: InputProps;
  label?: LabelProps;
  button?: ButtonProps;
};

export default function InputWithLabelAndButton({
  button,
  label,
  input = {},
}: InputWithLabelAndButtonProps) {
  const {
    className: inputClassName,
    disabled: inputDisabled,
    ...inputRest
  } = input;

  button = inputDisabled ? { ...button, disabled: true } : button;
  label = inputDisabled ? { ...label, "aria-disabled": true } : label;

  return (
    <WithLabel label={label}>
      {({ className }) => (
        <WithButton className={className} button={button}>
          {({ className }) => (
            <Input
              className={cn(inputClassName, className)}
              disabled={inputDisabled}
              {...inputRest}
            />
          )}
        </WithButton>
      )}
    </WithLabel>
  );
}
