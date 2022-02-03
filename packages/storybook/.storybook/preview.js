import "../src/styles/styles.scss";
import "@way/fonts"
import { WApp } from "@way/space"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(story) => ({
  components: { story, WApp },
  template: `<w-app theme='light'><story /></w-app>`
})];