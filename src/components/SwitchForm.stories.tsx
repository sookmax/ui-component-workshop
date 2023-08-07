import type { Meta, StoryObj } from "@storybook/react";
import SwitchForm from "./SwitchForm";
import { Toaster } from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: SwitchForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof SwitchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
