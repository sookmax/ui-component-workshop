import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Input,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: "Email",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
