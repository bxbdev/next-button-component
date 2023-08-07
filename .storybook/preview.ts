import type { Preview } from "@storybook/react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { defaultTheme as lightTheme } from '../components/themes/defaultTheme';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Light",
      values: [
        { name: "Light", value: "#eff7f6" },
        { name: "Dark", value: "#121212" },
        { name: "Blue", value: "#caf0f8" },
        { name: "Pink", value: "#ffe5ec" },
        { name: "Green", value: "#d0f4de" },
      ]
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
