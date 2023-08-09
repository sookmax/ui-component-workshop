import type { Meta, StoryObj } from "@storybook/react";
import ComboboxForm from "./ComboboxForm";
import { Toaster } from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: ComboboxForm,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ComboboxForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
