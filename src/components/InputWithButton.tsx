import { Button, ButtonProps } from "./Button";
import Input, { InputProps } from "./Input";

export type InputWithButtonProps = {
  input?: InputProps;
  button?: ButtonProps;
};

export default function InputWithButton({
  input,
  button,
}: InputWithButtonProps) {
  return (
    <div className="flex space-x-2">
      <Input {...input} />
      <Button {...button} />
    </div>
  );
}
