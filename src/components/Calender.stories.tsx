import type { Meta, StoryObj } from "@storybook/react";
import Calender from "./Calender";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Calender,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calender>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
