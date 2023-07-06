import type { Meta, StoryObj } from "@storybook/react";
import InputWithLabel from "./InputWithLabel";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: InputWithLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
  args: {
    input: {
      id: "email-input",
      placeholder: "type a valid email address.",
    },
    label: {
      htmlFor: "email-input",
      children: "Email",
    },
  },
} satisfies Meta<typeof InputWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    input: {
      disabled: true,
    },
  },
};
