import type { Meta, StoryObj } from "@storybook/react";
import Collapsible from "./Collapsible";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Collapsible,
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
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
