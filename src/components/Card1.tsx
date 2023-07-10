import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card.primitives";
import { Button } from "./Button";
import InputWithLabel from "./InputWithLabel";
import SelectWithLabel from "./SelectWithLabel";

export default function Card1() {
  return (
    <Card className="w-[350px] space-y-4">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col space-y-4">
            <InputWithLabel
              input={{
                id: "email-input",
                placeholder: "type a valid email address.",
              }}
              label={{
                children: "Email",
                htmlFor: "email-input",
              }}
            />
            <SelectWithLabel
              select={{
                items: [
                  {
                    label: "Apple",
                    value: "apple",
                  },
                  {
                    label: "Orange",
                    value: "orange",
                  },
                  {
                    label: "Grape",
                    value: "grape",
                  },
                  {
                    label: "Strawberry",
                    value: "strawberry",
                  },
                  {
                    label: "Banana",
                    value: "banana",
                  },
                  {
                    label: "Cherry",
                    value: "cherry",
                  },
                ],
                label: "Fruits",
                placeholder: "Select a fruit...",
              }}
              label={{
                children: "Your favorite fruit",
              }}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
