<template>
  <w-app class="wb-app" :theme="theme">
    <router-view />
  </w-app>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { WApp } from "@/components";
import store from "@/app/store";

const theme = computed(() => store.getters["SettingsStore/getTheme"]);
</script>
