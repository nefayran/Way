export const Components: { [key: string]: any } = {
  WApp: () => import("@/components/WApp/WApp.vue"),
  WButton: () => import("@/components/WButton/WButton.vue"),
  WGrid: () => import("@/components/WLayout/WGrid/WGrid"),
  WContainer: () => import("@/components/WLayout/WContainer/WContainer"),
  WRow: () => import("@/components/WLayout/WRow/WRow"),
  WCol: () => import("@/components/WLayout/WCol/WCol"),
  WInput: () => import("@/components/WInput/WInput.vue"),
};

export { default as WApp } from "./WApp/WApp.vue";
export { default as WButton } from "./WButton/WButton.vue";
export { default as WTable } from "./WButton/WButton.vue";
