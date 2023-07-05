import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  args: {
    imageUrl: "https://github.com/sookmax.png",
    fallbackText: "Sook",
  },
};

export const TextOnly: Story = {
  args: {
    imageUrl: "",
    fallbackText: "SK",
  },
};

export const TextOnlyLong: Story = {
  args: {
    imageUrl: "",
    fallbackText: "Sook",
  },
};
