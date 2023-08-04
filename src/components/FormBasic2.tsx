import { useId, useState } from "react";
import * as SelectPrimitive from "./Select.primitives";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./Button";
import { cn } from "../utils/cn";
import Label from "./Label";
import WithLabel2 from "./WithLabel2";
import Input from "./Input";

const ICE_CREAM_TYPE = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function FormBasic2() {
  const nameInputId = useId();
  const emailInputId = useId();
  const iceCreamTypeSelectId = useId();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    iceCreamType: string;
  }>({
    defaultValues: {
      name: "",
      email: "",
      iceCreamType: "",
    },
  });

  console.log("errors", errors);

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        console.log("submitted data", data);
      })}
    >
      <div className="space-y-5">
        <WithLabel2
          label={({ className }) => (
            <Label htmlFor={nameInputId} className={className}>
              Name
            </Label>
          )}
          target={({ className }) => (
            <Input
              id={nameInputId}
              type="text"
              placeholder="John Doe"
              className={className}
              {...register("name")}
            />
          )}
        />
        <div className="space-y-1">
          <WithLabel2
            label={({ className }) => (
              <Label
                htmlFor={emailInputId}
                className={cn(className, errors.email && "text-red-500")}
              >
                Email
                <span className="text-red-600" aria-label="required">
                  *
                </span>
              </Label>
            )}
            target={({ className }) => (
              <Input
                id={emailInputId}
                type="email"
                placeholder="john.doe@gmail.com"
                className={cn(
                  className,
                  errors.email && "border-red-500 focus-visible:ring-red-700"
                )}
                {...register("email", {
                  required: "Please provide your email.",
                  pattern: {
                    value: /[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]+$/,
                    message:
                      "Email should be in the form of 'john_h.doe@gmail.com'",
                  },
                })}
              />
            )}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <WithLabel2
            label={({ className }) => (
              <Label
                htmlFor={iceCreamTypeSelectId}
                className={cn(className, errors.iceCreamType && "text-red-500")}
              >
                Ice cream
                <span aria-label="required" className="text-red-600">
                  *
                </span>
              </Label>
            )}
            target={({ className }) => {
              return (
                <Controller
                  name="iceCreamType"
                  control={control}
                  rules={{
                    required: "Please select your favorite ice cream flavor!",
                  }}
                  render={({
                    field: { value, onChange, onBlur, ref, name },
                  }) => {
                    const selectedItem = ICE_CREAM_TYPE.find(
                      (item) => item.value === value
                    );

                    return (
                      <SelectPrimitive.Root
                        value={value}
                        onValueChange={(value) => {
                          // console.log(value);
                          onChange(value);
                        }}
                      >
                        <SelectPrimitive.Trigger
                          className={cn(
                            className,
                            errors.iceCreamType
                              ? "border-red-500 focus:ring-red-700"
                              : "border-gray-300 focus:ring-cyan-600"
                          )}
                          name={name}
                          onBlur={onBlur}
                          ref={ref}
                        >
                          <SelectPrimitive.Value asChild>
                            <span className={cn(!value && "text-gray-400")}>
                              {selectedItem?.label || "Choose ice cream flavor"}
                            </span>
                          </SelectPrimitive.Value>
                        </SelectPrimitive.Trigger>
                        <SelectPrimitive.Content>
                          {ICE_CREAM_TYPE.map((item) => (
                            <SelectPrimitive.Item
                              key={item.value}
                              value={item.value}
                            >
                              <SelectPrimitive.ItemText>
                                {item.label ? item.label : item.value}
                              </SelectPrimitive.ItemText>
                            </SelectPrimitive.Item>
                          ))}
                        </SelectPrimitive.Content>
                      </SelectPrimitive.Root>
                    );
                  }}
                />
              );
            }}
          />
          {errors.iceCreamType && (
            <p className="text-xs text-red-500">
              {errors.iceCreamType.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
