import { createApp } from "vue";
import App from "./App.vue";

import router from "./app/router";
import "@waykit/styles";
import "@waykit/fonts";

const app = createApp(App);

app.use(router);

// setup();

router.isReady().then(() => {
  app.mount("#app");
});
