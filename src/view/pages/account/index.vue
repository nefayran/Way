<template>
  <account-container />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountContainer from "@/view/containers/user/account/AccountContainer.vue";

export default defineComponent({
  name: "AccountPage",
  components: {
    AccountContainer,
  },
});
</script>
