import React from "react";
import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from "@storybook/blocks";

/* TODO: update import to your tailwind styles file */
import "../src/global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    jsx: {
      // https://www.npmjs.com/package/react-element-to-jsx-string
      sortProps: false,
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgTypes />
          {/* <Stories /> */}
        </>
      ),
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
