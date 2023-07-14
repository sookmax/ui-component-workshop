import { Button } from "./Button";
import InputWithLabel from "./InputWithLabel";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover.primitives";

export default function Popover1() {
  return (
    <Popover defaultOpen={true}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="space-y-2">
            <div>
              <InputWithLabel
                input={{ defaultValue: "100%", id: "width" }}
                label={{
                  htmlFor: "width",
                  children: "Width",
                  className: "w-[80px]",
                }}
                location="left"
              />
            </div>
            <div>
              <InputWithLabel
                input={{ defaultValue: "300px", id: "maxWidth" }}
                label={{
                  htmlFor: "maxWidth",
                  children: "Max. width",
                  className: "w-[80px]",
                }}
                location="left"
              />
            </div>
            <div>
              <InputWithLabel
                input={{ defaultValue: "25px", id: "height" }}
                label={{
                  htmlFor: "height",
                  children: "Height",
                  className: "w-[80px]",
                }}
                location="left"
              />
            </div>
            <div>
              <InputWithLabel
                input={{ defaultValue: "none", id: "maxHeight" }}
                label={{
                  htmlFor: "maxHeight",
                  children: "Max. height",
                  className: "w-[80px]",
                }}
                location="left"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
