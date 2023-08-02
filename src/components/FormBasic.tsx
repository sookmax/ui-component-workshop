import { useId } from "react";
import InputWithLabel from "./InputWithLabel";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { cn } from "../utils/cn";

export default function FormBasic() {
  const nameInputId = useId();
  const emailInputId = useId();
  const phoneInputId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; phone: string }>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
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
        <InputWithLabel
          input={{
            id: nameInputId,
            type: "text",
            placeholder: "John Doe",
            ...register("name"),
          }}
          label={{
            htmlFor: nameInputId,
            children: "Name",
          }}
        />
        <div className="space-y-1">
          <InputWithLabel
            input={{
              id: emailInputId,
              type: "email",
              placeholder: "john.doe@gmail.com",
              ...register("email", {
                required: "Please provide your email.",
                pattern: {
                  value: /[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]+$/,
                  message:
                    "Email should be in the form of 'john_h.doe@gmail.com'",
                },
              }),
              className: cn(
                errors.email && "border-red-500 focus-visible:ring-red-700"
              ),
            }}
            label={{
              htmlFor: emailInputId,
              children: (
                <span className="flex items-center space-x-1">
                  <span>Email</span>
                  <span aria-label="required">*</span>
                </span>
              ),
              className: cn(errors.email && "text-red-500"),
            }}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <InputWithLabel
          input={{
            id: phoneInputId,
            type: "number",
            placeholder: "000-0000-0000",
            ...register("phone", {
              valueAsNumber: true,
            }),
          }}
          label={{
            htmlFor: phoneInputId,
            children: "Phone",
          }}
        />
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
