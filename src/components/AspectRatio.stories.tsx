import type { Meta, StoryObj } from "@storybook/react";
import AspectRatio from "./AspectRatio";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: AspectRatio,
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    // docs: {
    //   controls: {
    //     exclude: ["children"],
    //   },
    // },
  },
  argTypes: {
    ratio: {
      control: { type: "range", min: 0.5, max: 2.5, step: 0.1 },
    },
    children: {
      //   control: false,
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://picsum.photos/500/500"
        className="h-full w-full object-cover"
      />
    ),
  },
};
