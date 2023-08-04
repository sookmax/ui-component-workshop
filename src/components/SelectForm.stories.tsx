import type { Meta, StoryObj } from "@storybook/react";
import SelectForm from "./SelectForm";
import { Toaster } from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: SelectForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <div className="w-[300px]">
          <Story />
        </div>
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof SelectForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
