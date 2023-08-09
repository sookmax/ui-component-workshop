import type { Meta, StoryObj } from "@storybook/react";
import Menubar from "./Menubar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Menubar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   decorators: [
  //     (Story) => (
  //       <div className="flex w-full justify-center">
  //         <Story />
  //       </div>
  //     ),
  //   ],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
