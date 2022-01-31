import { defineAsyncComponent } from "vue";

const Components: { [key: string]: any } = {
  // WApp: defineAsyncComponent(() => import("@/components/WApp/WApp.vue")),
  WButton: () => import("@/components/WButton/WButton.vue"),
};

export { default as WApp } from "./WApp/WApp.vue";
export { default as WButton } from "./WButton/WButton.vue";
export default Components;
