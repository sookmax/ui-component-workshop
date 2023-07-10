import type { Meta, StoryObj } from "@storybook/react";
import Card1 from "./Card1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Card1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
