<template>
  <w-grid cols="12" class="wb-container">
    <w-col col="2">
      <suspense>
        <secondary-sidebar-container />
      </suspense>
    </w-col>
    <w-col col="8">
      <suspense>
        <components-container />
      </suspense>
    </w-col>
    <w-col col="2">
      <primary-sidebar-container />
    </w-col>
  </w-grid>
</template>

<script setup lang="ts">
import ComponentsContainer from "./ComponentsContainer.vue";
import PrimarySidebarContainer from "./PrimarySidebarContainer.vue";
import SecondarySidebarContainer from "./SecondarySidebarContainer.vue";
import store from "@/app/store";
import WGrid from "@/components/WLayout/WGrid/WGrid";
import WCol from "@/components/WLayout/WCol/WCol";

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
