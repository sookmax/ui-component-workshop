import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { CaretSortIcon } from "@radix-ui/react-icons";

export default function Collapsible() {
  //   const [isOpen, setIsOpen] = React.useState(false)

  return (
    <CollapsiblePrimitive.Root className="w-[350px] space-y-2">
      <div>
        <CollapsiblePrimitive.Trigger className="w-full">
          <span className="flex w-full items-center justify-between text-sm font-semibold">
            <span>@peduarte starred 3 repositories</span>
            <CaretSortIcon className="h-5 w-5" />
          </span>
          <span className="sr-only">Toggle</span>
        </CollapsiblePrimitive.Trigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsiblePrimitive.Content className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
}
