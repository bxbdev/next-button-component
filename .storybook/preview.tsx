import type { Preview } from "@storybook/react"
import '../styles/globals.css'

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "Select light or dark theme",
    defaultValue: "both",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark", "both"],
      dynamicTitle: true
    }
  }
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Light",
      values: [
        { name: "Light", value: "#ffffff" },
        { name: "Dark", value: "#121212" },
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
