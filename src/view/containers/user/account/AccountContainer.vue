<template>
  <v-container fluid class="h-100">
    <v-row v-if="user.result">
      <v-col>
        <h2>Account info</h2>
        <p>User Id: {{ user.result.id }}</p>
        <p>User email: {{ user.result.email }}</p>
      </v-col>
    </v-row>
    <v-row v-else> Loading... </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import "reflect-metadata";
import { onMounted, ref } from "vue";
import { container } from "tsyringe";
import IUserQueries from "@/app/application/Interfaces/IUserQueries";

const user: any = ref(<any>{});

onMounted(async () => {
  const userQueries: IUserQueries = container.resolve("UserQueries");
  user.value = await userQueries.GetUserByEmail("nefayran@gmail.com");
});
</script>
