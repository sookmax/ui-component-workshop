import Label from "./Label";
import { RadioGroupRoot, RadioGroupItem } from "./RadioGroup.primitives";

export default function RadioGroup() {
  return (
    <RadioGroupRoot defaultValue="default">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1" className="text-slate-700">
          Default
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2" className="text-slate-700">
          Comfortable
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3" className="text-slate-700">
          Compact
        </Label>
      </div>
    </RadioGroupRoot>
  );
}
