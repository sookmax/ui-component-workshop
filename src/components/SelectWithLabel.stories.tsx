import type { Meta, StoryObj } from "@storybook/react";
import SelectWithLabel from "./SelectWithLabel";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: SelectWithLabel,
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
} satisfies Meta<typeof SelectWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    select: {
      label: "Fruits",
      placeholder: "Select a fruit...",
      items: [
        { value: "apple", label: "Apple" },
        { value: "orange", label: "Orange" },
        { value: "grape", label: "Grape" },
        { value: "strawberry", label: "Strawberry" },
        { value: "banana", label: "Banana" },
        { value: "cherry", label: "Cherry" },
      ],
    },
    label: {
      children: "Your favorite fruit",
    },
  },
};

export const Disabled: Story = {
  args: {
    label: Default.args?.label,
    select: { items: [], disabled: true, ...Default.args?.select },
  },
};
