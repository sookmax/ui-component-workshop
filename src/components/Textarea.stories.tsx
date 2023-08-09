import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea.primitives";
import WithLabel2 from "./WithLabel2";
import Label from "./Label";
import { cn } from "../utils/cn";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Textarea,
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
    placeholder: "Type your message here.",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <WithLabel2
      label={({ id, className }) => (
        <Label htmlFor={`${id}-textarea`} className={cn(className, "text-sm")}>
          Your message
        </Label>
      )}
      target={({ id, className }) => (
        <Textarea id={`${id}-textarea`} className={className} {...args} />
      )}
    />
  ),
};
