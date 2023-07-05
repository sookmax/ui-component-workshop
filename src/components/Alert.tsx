import {
  InfoCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

import {
  Alert as AlertRoot,
  AlertDescription,
  AlertTitle,
} from "./Alert.primitives";
import Markdown from "./Markdown";
import { cn } from "../utils/cn";

type AlertProps = {
  /**
   * The title of the alert
   */
  title: string;
  /**
   * The description of the alert
   * - `description` may contain markdown syntaxes and/or html tags.
   */
  description?: string;
  /**
   * A variant of the alert
   */
  variant?: "info" | "warning";
};

export default function Alert({
  title,
  description,
  variant = "info",
}: AlertProps) {
  if (!title) {
    return null;
  }

  return (
    <AlertRoot
      className={cn([
        variant === "info" && "border-gray-400 [&_svg]:text-gray-500",
        variant === "warning" &&
          "border-red-500 text-red-700 [&_*]:text-red-700",
      ])}
    >
      <div className="flex items-center [&>svg]:mr-2 [&>svg]:shrink-0">
        {variant === "info" ? (
          <InfoCircledIcon className="h-4 w-4" />
        ) : variant === "warning" ? (
          <ExclamationTriangleIcon className="h-4 w-4" />
        ) : null}
        <AlertTitle>{title}</AlertTitle>
      </div>
      {description && (
        <AlertDescription>
          <Markdown>{description}</Markdown>
        </AlertDescription>
      )}
    </AlertRoot>
  );
}
