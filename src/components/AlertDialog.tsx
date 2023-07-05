import React, { useCallback, useEffect, useRef, useState } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "../utils/cn";
import { Button } from "./Button";

type AlertDialogProps = AlertDialogContentBodyProps;

export default function AlertDialog({ onAction }: AlertDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <AlertDialogPrimitive.Trigger asChild>
        <Button>Show Dialog</Button>
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay
          className={cn(
            [
              "data-[state=open]:animate-in",
              "data-[state=open]:duration-200",
              "data-[state=open]:fade-in-0",
            ],
            [
              "data-[state=closed]:animate-out",
              "data-[state=closed]:duration-200",
              "data-[state=closed]:fade-out-0",
            ],
            "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          )}
        />
        <AlertDialogPrimitive.Content
          className={cn([
            "fixed left-1/2 top-1/2 z-50 max-w-lg",
            "-translate-x-1/2 -translate-y-1/2",
            "grid w-full gap-4",
            "border bg-white p-6 shadow-lg sm:rounded-lg md:w-full",
            [
              "data-[state=open]:animate-in",
              "data-[state=open]:duration-200",
              "data-[state=open]:-enter-translate-x-1/2",
              "data-[state=open]:-enter-translate-y-1/2",
              "data-[state=open]:fade-in-0",
              "data-[state=open]:zoom-in-95",
            ],
            [
              "data-[state=closed]:animate-out",
              "data-[state=closed]:duration-200",
              "data-[state=closed]:-exit-translate-x-1/2",
              "data-[state=closed]:-exit-translate-y-1/2",
              "data-[state=closed]:fade-out-0",
              "data-[state=closed]:zoom-out-95",
            ],
          ])}
        >
          <AlertDialogContentBody onAction={onAction} />
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}

type AlertDialogContentBodyProps = {
  /**
   * Action to perform when the user clicks the action button.
   */
  onAction?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | Promise<void>;
};

function AlertDialogContentBody({ onAction }: AlertDialogContentBodyProps) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const [triggerExitAnimation, setTriggerExitAnimation] = useState(false);
  const actionButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (state === "success") {
      const timeoutId = setTimeout(() => {
        setTriggerExitAnimation(true);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [state]);

  useEffect(() => {
    if (triggerExitAnimation) {
      setTimeout(() => {
        if (actionButtonRef.current) {
          actionButtonRef.current.style.display = "none";
        }
      }, 1000);
    }
  }, [triggerExitAnimation]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        setState("loading");
        const result = onAction?.(e);
        if (result instanceof Promise) {
          result
            .then(() => {
              setState("success");
            })
            .catch((e) => {
              console.error(e);
              setState("error");
            });
        } else {
          setState("success");
        }
      } catch (e) {
        console.error(e);
        setState("error");
      }
    },
    [onAction]
  );

  return (
    <>
      <div className={cn("flex flex-col space-y-2 text-center sm:text-left")}>
        <AlertDialogPrimitive.Title>
          Are you absolutely sure?
        </AlertDialogPrimitive.Title>
        <AlertDialogPrimitive.Description
          className={cn("text-muted-foreground text-sm")}
        >
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogPrimitive.Description>
      </div>

      <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end")}>
        <AlertDialogPrimitive.Cancel asChild>
          <Button disabled={state === "loading"} className={cn("w-[100px]")}>
            Close
          </Button>
        </AlertDialogPrimitive.Cancel>
        <AlertDialogPrimitive.Action asChild>
          <Button
            preventInteraction={state !== "idle"}
            ref={actionButtonRef}
            onClick={onClick}
            variant="destructive"
            className={cn(
              !triggerExitAnimation
                ? "ml-2 w-[100px]"
                : "m-0 w-0 border-0 p-0 opacity-0",
              "transition-all",
              state === "loading" &&
                "border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-500",
              state === "success" &&
                "border-green-700 bg-green-700 text-white hover:bg-green-700"
            )}
          >
            {state === "idle" ? (
              "Continue"
            ) : state === "loading" ? (
              <Spinner />
            ) : state === "success" ? (
              "Done!"
            ) : (
              "Error"
            )}
          </Button>
        </AlertDialogPrimitive.Action>
      </div>
    </>
  );
}

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
