import type { Meta, StoryObj } from "@storybook/react";
import InputWithLabelAndButton from "./InputWithLabelAndButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: InputWithLabelAndButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[400px]">
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
    button: {
      children: "Subscribe",
    },
  },
} satisfies Meta<typeof InputWithLabelAndButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    input: {
      ...meta.args.input,
      disabled: true,
    },
    button: {
      ...meta.args.button,
      disabled: true,
    },
  },
};
