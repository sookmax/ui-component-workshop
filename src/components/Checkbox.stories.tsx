import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const WithLabelDisabled: Story = {
  args: {
    ...WithLabel.args,
    disabled: true,
  },
};
