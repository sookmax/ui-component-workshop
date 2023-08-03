import type { Meta, StoryObj } from "@storybook/react";
import DatePickerForm from "./DatePickerForm";
import { Toaster } from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: DatePickerForm,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <>
        <div className="w-[350px]">
          <Story />
        </div>
        <Toaster />
      </>
    ),
  ],
  args: {
    placeholder: "Email",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePickerForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
