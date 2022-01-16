<template>
  <login-container />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginContainer from "@/view/containers/user/login/LoginContainer.vue";

export default defineComponent({
  name: "AccountPage",
  components: {
    LoginContainer,
  },
});
</script>
