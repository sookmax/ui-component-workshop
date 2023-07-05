import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import frontMatter from "front-matter";
import md0 from "../markdowns/benefit-of-regular-exercise.md?raw";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Alert,
  decorators: [
    (Story) => (
      <div className="max-w-xl bg-white">
        <Story />
      </div>
    ),
  ],
  // tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    title: "The Magic of Storytelling",
    description:
      "_Immerse_ yourself in the enchanting world of **storytelling** and learn the `art` of captivating and engaging audiences.",
  },
};

export const Warning: Story = {
  args: {
    ...Info.args,
    variant: "warning",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "The Thrill of Adventure Travel",
  },
};

const parsed = frontMatter<{ title: string }>(md0);

export const RichMarkdown: Story = {
  args: {
    title: parsed.attributes.title,
    description: parsed.body,
  },
};
