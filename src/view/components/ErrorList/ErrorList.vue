<template>
  <div class="sol-error-list">
    <div v-for="error in errors" :key="error" class="sol-error-list__error mr-1">
      <v-chip :color="color(error)" class="mt-1">
        {{ error.Message }}
      </v-chip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import IError from "@/app/core/usecases/IError";

const props = defineProps<{
  errors: Array<IError>;
}>();

const color = (error: IError) => {
  if (error.Type === 1) return "orange";
  return "red"; // Default for 0 or other.
};
</script>

<style lang="scss">
.sol-error-list {
  position: absolute;
  right: 0;
  top: 0;

  &__error {
    .v-chip {
      min-width: 300px;
      max-width: 300px;
    }
    color: white;
  }
}
</style>
