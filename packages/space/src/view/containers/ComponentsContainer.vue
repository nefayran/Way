<template>
  <div class="wb-container">
    <div class="wb-components my-md mx-md pa-lg br-lg flex">
      <div class="wb-component">
        <component
          :is="wbComponent.component"
          v-if="wbComponent && wbComponent.component"
          v-model="value"
          v-bind="properties"
        />
        <h3 v-else class="font-secondary">EMPTY</h3>
      </div>
    </div>
  </div>
</template>

<script async setup lang="ts">
import { computed, ref, watchEffect, reactive } from "vue";
import store from "@/app/store";

const wbComponent = computed(
  () => store.getters["ComponentsStore/getComponent"]
);

const value = ref("@way");

// const properties = ref({
//   color: "primary--base",
// });

const properties = ref({});

watchEffect(async () => {
  if (wbComponent.value && wbComponent.value.props) {
    const props = await wbComponent.value.props;
    const propertiesObject = <Object>{};
    Object.keys(props).forEach((key: string) => {
      // Object.defineProperty(propertiesObject, key, {
      //   value: props[key],
      // });
      Object.defineProperty(propertiesObject, key, {
        value: props[key].default,
      });
      // propertiesObject[key] = props[key].default;
    });
    properties.value = propertiesObject;
  }
});
</script>

<style lang="scss">
.wb-components {
  height: calc(100% - var(--space-lg) * 3);
}

.wb-component {
  margin: auto;
}
</style>
