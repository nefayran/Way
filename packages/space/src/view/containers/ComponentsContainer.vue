<template>
  <div class="wb-container">
    <div class="wb-components my-md mx-md pa-lg br-lg flex">
      <div class="wb-component">
        <component
          :is="wbComponent.component"
          v-bind="properties"
          v-if="wbComponent && wbComponent.component"
        />
        <h3 v-else class="font-secondary">EMPTY</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import store from "@/app/store";

const wbComponent = computed(
  () => store.getters["ComponentsStore/getComponent"]
);

const properties = ref({
  color: "black",
});

// watchEffect(async () => {
//   if (wbComponent.value && wbComponent.value.props) {
//     properties.value = await wbComponent.value.props;
//   }
// });
</script>

<style lang="scss">
.wb-components {
  height: calc(100% - var(--space-lg) * 3);
}

.wb-component {
  margin: auto;
}
</style>
