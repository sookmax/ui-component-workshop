import { Card, CardContent } from "./Card.primitives";
import { Checkbox } from "./Checkbox";

export default function Card3() {
  return (
    <Card>
      <CardContent className="space-y-2 p-4">
        <Checkbox label="Use different settings for my mobile devices" />
        <p className="indent-6 text-xs text-gray-500">
          You can manage your mobile notifications in the mobile settings page.
        </p>
      </CardContent>
    </Card>
  );
}
