import type { Meta, StoryObj } from "@storybook/react";
import Card2 from "./Card2";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Card2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   decorators: [
  //     (Story) => (
  //       <div className="w-[400px]">
  //         <Story />
  //       </div>
  //     ),
  //   ],
} satisfies Meta<typeof Card2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
