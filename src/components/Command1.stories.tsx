import type { Meta, StoryObj } from "@storybook/react";
import Command1 from "./Command1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Command1,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: "Email",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
