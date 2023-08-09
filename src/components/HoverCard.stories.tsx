import type { Meta, StoryObj } from "@storybook/react";
import HoverCard from "./HoverCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   decorators: [
  //     (Story) => (
  //       <div className="w-[350px]">
  //         <Story />
  //       </div>
  //     ),
  //   ],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PositionTop: Story = {
  args: {
    side: "top",
  },
};
