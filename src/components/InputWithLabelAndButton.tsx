import { Button, ButtonProps } from "./Button";
import InputWithLabel, { InputWithLabelProps } from "./InputWithLabel";

export type InputWithLabelAndButtonProps = {
  input?: InputWithLabelProps["input"];
  label?: InputWithLabelProps["label"];
  button?: ButtonProps;
};

export default function InputWithLabelAndButton({
  input,
  label,
  button,
}: InputWithLabelAndButtonProps) {
  return (
    <div className="flex space-x-2">
      <InputWithLabel className="grow" input={input} label={label} />
      <Button {...button} />
    </div>
  );
}
