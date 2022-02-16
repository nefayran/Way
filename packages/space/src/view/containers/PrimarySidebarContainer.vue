<template>
  <div class="wb-container">
    <div class="wb-sidebar ma-md pa-lg br-lg">
      <w-grid cols="2">
        <w-col>
          <h1 class="text-accent--base font-secondary">@way</h1>
          <button
            class="border-no pa-xs br-sm accent--base"
            @click="switchTheme"
          >
            <span class="font-secondary">
              {{ theme }}
            </span>
          </button>
        </w-col>
        <w-col>
          <w-sprite name="logo" fill="#fffccc" width="50" height="85" />
        </w-col>
      </w-grid>
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
import { WSprite } from "@waykit/sprites";
import WGrid from "@/components/WLayout/WGrid/WGrid";
import WCol from "@/components/WLayout/WCol/WCol";
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
