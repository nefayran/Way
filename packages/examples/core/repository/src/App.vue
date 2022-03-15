<template>
  <h1>Example:</h1>
  <h2>{{ values }}</h2>
</template>

<script setup lang="ts">
import { IVuexStoreSource } from "@waykit/core";
import { computed } from "vue";
import { ExampleRepository } from "./ExampleRepository";
import { exampleEntitiesStore } from "@/store/modules/example";
import { ExampleEntity } from "@/ExampleEntity";

// Declare new repository.
const repository: ExampleRepository = new ExampleRepository(
  <IVuexStoreSource>exampleEntitiesStore
);
// Declare new entity for example.
const newEntity = new ExampleEntity();
// Add new entity.
repository.Add(new ExampleEntity());
// For demo:
const values = computed(() => repository.GetAll());
</script>
