<template>
  <svg
    class="w-sprite"
    :width="width"
    :height="height"
    aria-hidden="true"
    :style="`color: ${color}`"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { withDefaults, computed } from "vue";

interface Props {
  prefix?: string;
  name: string;
  color?: string;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefix: "sprite",
  color: "#333",
  width: "128",
  height: "128",
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
