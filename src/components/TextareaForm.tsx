"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "./Button";
import {
  FormProvider,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form.primitives";
import { Textarea } from "./Textarea.primitives";
import { toast } from "./Toast.hooks";
import { cn } from "../utils/cn";

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    }),
});

export default function TextareaForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bio: "",
    },
  });

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

  const bioString = form.watch("bio");

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="bio"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <div>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className={cn(
                      "resize-none h-[150px]",
                      fieldState.error && "focus-visible:ring-red-700"
                    )}
                    {...field}
                  />
                </FormControl>
                <p
                  className={cn(
                    "text-right text-xs mt-1",
                    bioString.length > 160 || fieldState.error
                      ? "text-red-500"
                      : "text-gray-500"
                  )}
                >{`${bioString.length} / 160`}</p>
              </div>
              <FormDescription>
                ℹ️ You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
