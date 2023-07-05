import { cn } from "../utils/cn";

type BadgeProps = {
  children: string;
  variant?: "default" | "secondary" | "outline" | "destructive";
};

export default function Badge({ variant = "default", children }: BadgeProps) {
  return (
    <div
      className={cn(
        "focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "default" &&
          "border-transparent bg-purple-500 text-white hover:bg-purple-600",
        variant === "secondary" &&
          "border-transparent bg-lime-200 text-gray-600 hover:bg-lime-300",
        variant === "destructive" &&
          "border-transparent bg-red-600 text-white hover:bg-red-700/90",
        variant === "outline" && "border-gray-400"
      )}
    >
      {children}
    </div>
  );
}
