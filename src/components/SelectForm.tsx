"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "./Button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/registry/default/ui/form"
import * as SelectPrimitive from "./Select.primitives";
import { toast } from "./Toast.hooks";
import WithLabel2 from "./WithLabel2";
import { useId } from "react";
import Label from "./Label";
import { cn } from "../utils/cn";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});

export default function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const emailInputId = useId();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <WithLabel2
          label={({ className }) => (
            <Label
              htmlFor={emailInputId}
              className={cn(
                className,
                form.formState.errors.email && "text-red-500"
              )}
            >
              Email
            </Label>
          )}
          target={({ className }) => (
            <Controller
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <SelectPrimitive.Root
                    value={field.value}
                    onValueChange={(value) => {
                      console.log(value);
                      value && field.onChange(value);
                    }}
                  >
                    <SelectPrimitive.Trigger
                      className={cn(
                        className,
                        form.formState.errors.email
                          ? "border-red-500 focus:ring-red-700"
                          : "border-gray-300 focus:ring-cyan-600"
                      )}
                      name={field.name}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    >
                      <SelectPrimitive.Value asChild>
                        <span className={cn(!field.value && "text-gray-400")}>
                          {field.value || "Select a verified email to display"}
                        </span>
                      </SelectPrimitive.Value>
                    </SelectPrimitive.Trigger>
                    <SelectPrimitive.Content>
                      <SelectPrimitive.Item value="m@example.com">
                        m@example.com
                      </SelectPrimitive.Item>
                      <SelectPrimitive.Item value="m@google.com">
                        m@google.com
                      </SelectPrimitive.Item>
                      <SelectPrimitive.Item value="m@support.com">
                        m@support.com
                      </SelectPrimitive.Item>
                    </SelectPrimitive.Content>
                  </SelectPrimitive.Root>
                );
              }}
            />
          )}
        />
        <p
          className={cn(
            "text-xs text-red-500",
            form.formState.errors.email ? "visible" : "invisible"
          )}
        >
          {form.formState.errors.email?.message || "error message placeholder"}
        </p>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
