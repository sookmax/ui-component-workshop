import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu3 from "./DropdownMenu3";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: DropdownMenu3,
  parameters: {
    // layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
