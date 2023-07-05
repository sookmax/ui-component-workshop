import type { Meta, StoryObj } from "@storybook/react";
import frontMatter from "front-matter";
import { Accordion } from "./Accordion";
import md0 from "../markdowns/evolution-of-social-media.md?raw";
import md1 from "../markdowns/benefit-of-regular-exercise.md?raw";
import md2 from "../markdowns/exploring-the-wonders-of-space.md?raw";
import md3 from "../markdowns/importance-of-financial-literacy.md?raw";
import md4 from "../markdowns/power-of-mindfulness.md?raw";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  component: Accordion,
  decorators: [
    (Story) => (
      <div className="max-w-xl bg-white">
        <Story />
      </div>
    ),
  ],
  parameters: {
    // layout: "centered",
  },
  // tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  args: {
    items: [
      {
        title: "Is it accessible?",
        content: "Yes. It adheres to the `WAI-ARIA` design pattern.",
      },
      {
        title: "Is it styled?",
        content:
          "Yes. It comes with _default_ styles that matches the other components' aesthetic.",
      },
      {
        title: "Is it animated?",
        content:
          "Yes. It's animated by _default_, but you can **disable** it if you prefer.",
      },
    ],
  },
};

export const BasicUsageOpen: Story = {
  args: {
    items: BasicUsage.args.items,
    openFirstItemOnMount: true,
  },
};

const singleItemArray = [md0].map((md) => {
  const {
    attributes: { title },
    body,
  } = frontMatter<{ title: string }>(md);
  return {
    title,
    content: body,
  };
});

export const SingleItem: Story = {
  args: {
    items: singleItemArray,
  },
};

const mdItems = [md1, md2, md3, md4].map((md) => {
  const {
    attributes: { title },
    body,
  } = frontMatter<{ title: string }>(md);
  return {
    title,
    content: body,
  };
});

export const MultilineContents: Story = {
  args: {
    items: mdItems,
    openFirstItemOnMount: true,
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
