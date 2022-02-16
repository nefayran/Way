import "../src/styles/styles.scss";
import "@waykit/fonts";
import { WApp } from "@waykit/space";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => ({
    components: { story, WApp },
    template: `<w-app theme='light'><story /></w-app>`,
  }),
];
