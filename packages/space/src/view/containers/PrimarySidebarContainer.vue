<template>
  <div class="wb-container">
    <div class="wb-sidebar ma-md pa-lg br-lg">
      <h1 class="text-accent--base font-secondary">@way</h1>
      <button class="border-no pa-xs br-sm accent--base" @click="switchTheme">
        <span class="font-secondary">
          {{ theme }}
        </span>
      </button>
      <h3 class="pt-lg">Components:</h3>
      <ul class="pl-md pt-md white--base list-none">
        <li
          v-for="(component, index) in components"
          :key="index"
          class="text-md pb-md text-primary--accent-1"
          @click="selectComponent(component.name)"
        >
          <span>
            {{ component.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script async setup lang="ts">
import { computed } from "vue";
import store from "@/app/store";

const theme = computed(() => store.getters["SettingsStore/getTheme"]);
const components = computed(
  () => store.getters["ComponentsStore/getComponents"]
);

const switchTheme = async () => {
  await store.dispatch(
    "SettingsStore/SetTheme",
    theme.value === "dark" ? "light" : "dark"
  );
};
const selectComponent = async (name: string) => {
  await store.dispatch("ComponentsStore/SetComponent", name);
};
</script>

<style lang="scss">
.wb-sidebar {
  height: calc(100% - var(--space-lg) * 3);
  border: 1px solid var(--primary-accent-1);
  //box-shadow: 0 0 25px var(--primary-accent-1), 0 0 50px var(--primary-base);
}
</style>
