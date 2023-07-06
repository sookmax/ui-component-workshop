import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Select,
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
    label: "Fruits",
    placeholder: "Select a fruit...",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { value: "apple", label: "Apple" },
      { value: "orange", label: "Orange" },
      { value: "grape", label: "Grape" },
      { value: "strawberry", label: "Strawberry" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ],
  },
};

export const OnlyValueNoLabel: Story = {
  args: {
    items: [
      { value: "apple" },
      { value: "orange" },
      { value: "grape" },
      { value: "strawberry" },
      { value: "banana" },
      { value: "cherry" },
    ],
  },
};
