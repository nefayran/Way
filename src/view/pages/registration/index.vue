<template>
  <registration-container />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegistrationContainer from "@/view/containers/user/registration/RegistrationContainer.vue";

export default defineComponent({
  name: "AccountPage",
  components: {
    RegistrationContainer,
  },
});
</script>
