import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import React from "react";

interface AspectRatioProps {
  ratio: number;
  /**
   * Absolutely positioned
   */
  children: React.ReactNode;
}

export default function AspectRatio({ ratio, children }: AspectRatioProps) {
  return (
    <AspectRatioPrimitive.Root ratio={ratio}>
      {children}
    </AspectRatioPrimitive.Root>
  );
}
