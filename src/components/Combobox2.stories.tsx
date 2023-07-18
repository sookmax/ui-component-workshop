import type { Meta, StoryObj } from "@storybook/react";
import Combobox2 from "./Combobox2";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Combobox2,
  parameters: {
    layout: "centered",
  },
  //   decorators: [
  //     (Story) => (
  //       <div className="w-[300px]">
  //         <Story />
  //       </div>
  //     ),
  //   ]
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
