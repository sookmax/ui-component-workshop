import type { Meta, StoryObj } from "@storybook/react";
import FormBasic2 from "./FormBasic2";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: FormBasic2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FormBasic2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
