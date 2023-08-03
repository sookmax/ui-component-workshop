import type { Meta, StoryObj } from "@storybook/react";
import RadioGroupForm from "./RadioGroupForm";
import { Toaster } from "./Toast";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: RadioGroupForm,
  parameters: {
    // layout: "centered",
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
} satisfies Meta<typeof RadioGroupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
