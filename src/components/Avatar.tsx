import * as AvatarPrimitive from "@radix-ui/react-avatar";

type AvatarProps = {
  /**
   * Url for the avatar image
   */
  imageUrl?: string;
  /**
   * Text to show while the image is loading.
   *
   * Provided text will be truncated if it's too long.
   */
  fallbackText?: string;
};

export default function Avatar({ imageUrl, fallbackText }: AvatarProps) {
  return (
    <AvatarPrimitive.Root className="relative inline-block h-10 w-10 truncate rounded-full bg-gray-200">
      {imageUrl && <AvatarPrimitive.Image src={imageUrl} />}
      {fallbackText && (
        <AvatarPrimitive.Fallback
          delayMs={imageUrl && fallbackText ? 500 : undefined}
          className="absolute flex h-full w-full items-center justify-center px-[5px] text-sm"
        >
          <span className="w-full truncate text-center">{fallbackText}</span>
        </AvatarPrimitive.Fallback>
      )}
    </AvatarPrimitive.Root>
  );
}
