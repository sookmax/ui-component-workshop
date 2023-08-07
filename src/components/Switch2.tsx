import WithLabel2 from "./WithLabel2";
import { Switch } from "./Switch.primitives";
import Label from "./Label";
import { useId } from "react";
import { cn } from "../utils/cn";

export default function Switch2() {
  const switchId = `${useId()}-airplane-mode-switch`;

  return (
    <WithLabel2
      labelPosition="right"
      label={({ className }) => (
        <Label htmlFor={switchId} className={cn(className, "cursor-pointer")}>
          Airplane Mode
        </Label>
      )}
      target={({ className }) => <Switch id={switchId} className={className} />}
    />
  );
}
