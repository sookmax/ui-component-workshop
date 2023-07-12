import type { Meta, StoryObj } from "@storybook/react";
import Card3 from "./Card3";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Card3,
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
} satisfies Meta<typeof Card3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
