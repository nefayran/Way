<template>
  <div class="wb-container">
    <div class="wb-components my-md mx-md pa-lg br-lg flex">
      <div class="wb-component">
        <component
          :is="wbComponent.component"
          v-if="wbComponent && wbComponent.component"
        />
        <h3 v-else class="font-secondary">EMPTY</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import store from "@/app/store";

const wbComponent = computed(
  () => store.getters["ComponentsStore/getComponent"]
);
</script>

<style lang="scss">
.wb-components {
  height: calc(100% - var(--space-lg) * 3);
  //background: linear-gradient(225deg, #000e3d, #001149);
  //box-shadow: 0 0 25px #000a29, 0 0 50px #00165f;
}

.wb-component {
  margin: auto;
}
</style>
