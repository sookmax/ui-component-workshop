import { CalendarDays } from "lucide-react";
import { AvatarRoot, AvatarFallback, AvatarImage } from "./Avatar.primitives";
import { Button } from "./Button";
import {
  HoverCardRoot,
  HoverCardContent,
  HoverCardTrigger,
} from "./HoverCard.primitives";
import React from "react";

export default function HoverCard({
  side = "bottom",
}: {
  side?: React.ComponentPropsWithoutRef<typeof HoverCardContent>["side"];
}) {
  return (
    <HoverCardRoot>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" side={side}>
        <div className="flex justify-between space-x-4">
          <AvatarRoot>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback delayMs={500}>VC</AvatarFallback>
          </AvatarRoot>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCardRoot>
  );
}
