import type { Meta, StoryObj } from "@storybook/react";
import Popover1 from "./Popover1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Popover1,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex w-full justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Popover1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
