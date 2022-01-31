<template>
  <div class="wb-container cols-12 grid">
    <div class="col-2">
      <suspense>
        <secondary-sidebar-container />
      </suspense>
    </div>
    <div class="col-8">
      <components-container />
    </div>
    <div class="col-2">
      <primary-sidebar-container />
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import ComponentsContainer from "./ComponentsContainer.vue";
import PrimarySidebarContainer from "./PrimarySidebarContainer.vue";
import SecondarySidebarContainer from "./SecondarySidebarContainer.vue";
import store from "@/app/store";

store.dispatch("ComponentsStore/LoadComponents");
</script>

<style lang="scss">
body,
html,
#app,
.wb-app,
.wb-page,
.w-wrapper,
.wb-container {
  height: 100%;
  max-height: 100vh;
}

.wb-app {
  overflow: hidden;
}
</style>
