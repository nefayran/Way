import { createApp } from "vue";
import App from "./App.vue";

import router from "./app/router";
import "@way/styles/dist/styles.min.css";
import "@way/fonts";

const app = createApp(App);

app.use(router);

// setup();

router.isReady().then(() => {
  app.mount("#app");
});
