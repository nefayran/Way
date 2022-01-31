<template>
  <div class="wb-container">
    <div class="wb-sidebar ma-md pa-lg br-lg">
      <h2 v-if="wbComponent" class="text-accent--base font-secondary">
        {{ wbComponent.name }}
      </h2>
      <h2 v-else class="text-accent--base font-secondary">Component</h2>
      <h3 class="pt-lg">Properties:</h3>
      <ul
        v-if="wbComponent && properties"
        class="pl-no pt-lg white--base list-none"
      >
        <li
          v-for="(value, name, index) in properties"
          :key="index"
          class="text-md pb-md text-primary--accent-1"
        >
          <span>
            {{ name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script async setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import store from "@/app/store";

const wbComponent = computed(
  () => store.getters["ComponentsStore/getComponent"]
);
const properties = ref();
// const propsPromise = wbComponent.prop;
// const properties = ref(propsPromise());
// console.log(wbComponent.value.props);
// const properties = propsPromise.then((result: any) => result);
// const props = await wbComponent.value.props;

watchEffect(async () => {
  if (wbComponent.value && wbComponent.value.props) {
    properties.value = await wbComponent.value.props;
  }
});
// console.log(propsPromise));
</script>

<style lang="scss">
.wb-sidebar {
  height: calc(100% - var(--space-lg) * 3);
}
</style>
