import type { Meta, StoryObj } from "@storybook/react";
import AlertDialog from "./AlertDialog";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: AlertDialog,
  // decorators: [
  //   (Story) => (
  //     <div className="max-w-xl bg-white">
  //       <Story />
  //     </div>
  //   ),
  // ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  args: {
    onAction: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    },
  },
};
