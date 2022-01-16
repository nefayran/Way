<template>
  <button 
      :class="[classes]" 
      @click="$emit('click', $event)"
      @mouseover="hover"
  >
    <span class="w-button__text">
      {{ text }}
    </span>
  </button>
</template>

<script lang="ts" setup>
import {defineProps, computed, ref} from "vue";
let test = ref();
interface Props {
  text: string;
  color: string;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "Milky way",
  color: "primary",
  size: "lg",
});

const classes = computed(() => {
    return  "w-button " + props.color + " " + "w-button--" + props.size;
  },
);

const hover = (event: any) => {
  console.log("hover")
}
</script>

<style lang="scss">
/* === Button Sizes === */
$sizes: (
    xl, lg, md, sm, xs,
) !default;
.w-button {
  color: var(--color-secondary);
  border: none;

  &__text {
    font-family: var(--font-primary);
  }

  @each $size in $sizes {
    &--#{$size} {
      height: var(--height-#{$size});
      min-height: var(--height-#{$size});
      padding-left: var(--space-#{$size});
      padding-right: var(--space-#{$size});
      border-radius: var(--border-radius-#{$size});
      min-width: var(--width-#{$size});;

      .w-button__text {
        font-size: var(--font-size-#{$size});
      }
    }
  }
  
  &:hover {
    cursor: pointer;
  }
}
</style>