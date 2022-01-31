<template>
  <div :class="[classes.app]">
    <div :class="[classes.wrapper]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, computed } from "vue";

interface Props {
  theme?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "light",
});

const classes = computed(() => {
  return {
    app: `w-app w-app--${props.theme}`,
    wrapper: `w-wrapper primary--base`,
  };
});
</script>
