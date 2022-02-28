<template>
  <div :class="[classes.wrapper]">
    <input
      :value="props.modelValue"
      :class="[classes.text]"
      type="text"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, computed, ref } from "vue";

// const modelValue = ref("");

interface Props {
  color?: string;
  fill?: string;
  size?: string;
  modelValue: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary--base",
  fill: "secondary--base",
  size: "lg",
});

const emit = defineEmits(["update:modelValue"]);

const classes = computed(() => {
  return {
    wrapper: `w-input w-input--${props.size} ${props.fill}`,
    text: `w-text font-primary text-${props.color}`,
  };
});
</script>

<style lang="scss">
/* === Input Sizes === */
$sizes: (xl, lg, md, sm, xs) !default;
.w-input {
  border: none;

  @each $size in $sizes {
    &--#{$size} {
      height: var(--height-#{$size});
      min-height: var(--height-#{$size});
      padding-left: var(--space-#{$size});
      padding-right: var(--space-#{$size});
      border-radius: var(--border-radius-#{$size});
      min-width: var(--width-#{$size});

      .w-text {
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        font-size: var(--font-size-#{$size});

        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
