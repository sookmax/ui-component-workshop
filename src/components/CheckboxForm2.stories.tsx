import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxForm2 } from "./CheckboxForm2";
import { Toaster } from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: CheckboxForm2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <div className="w-[450px]">
          <Story />
        </div>
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof CheckboxForm2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
