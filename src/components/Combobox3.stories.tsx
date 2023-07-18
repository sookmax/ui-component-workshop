import type { Meta, StoryObj } from "@storybook/react";
import Combobox3 from "./Combobox3";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Combobox3,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
