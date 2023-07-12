import { Button } from "./Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card.primitives";
import { Checkbox } from "./Checkbox";

export default function Card4() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Sidebar</CardTitle>
        <CardDescription>
          Select the items you want to display in the sidebar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col space-y-3">
          {[
            "Recents",
            "Home",
            "Applications",
            "Desktop",
            "Downloads",
            "Documents",
          ].map((item) => (
            <Checkbox key={item} label={item} />
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
