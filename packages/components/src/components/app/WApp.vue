<template>
  <div :class="[classes]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from "vue";

interface Props {
  theme: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "light",
});

const classes = computed(() => {
  return `w-app w-app--${props.theme}`;
});
</script>

<style lang="scss">
.w-app {
  padding: 0;
  margin: 0;
}
</style>
