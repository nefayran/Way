const Components: { [key: string]: any } = {
  WApp: () => import("@/components/WApp/WApp.vue"),
  WButton: () => import("@/components/WButton/WButton.vue"),
};

export { default as WApp } from "./WApp/WApp.vue";
export { default as WButton } from "./WButton/WButton.vue";
export default Components;
