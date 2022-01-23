// import "reflect-metadata"; // try delete.
import { createApp } from "vue";
import App from "./App.vue";
// import { setup } from "./app/ioc/modules";

// import router from "./app/router";
// import "./way/style/_index.scss";
// import "./way/fonts/_index.scss";

const app = createApp(App);

app.use(router);

// setup();

router.isReady().then(() => {
  app.mount("#app");
});
