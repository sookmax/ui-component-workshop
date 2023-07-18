import type { Meta, StoryObj } from "@storybook/react";
import Combobox1 from "./Combobox1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Combobox1,
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
} satisfies Meta<typeof Combobox1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
