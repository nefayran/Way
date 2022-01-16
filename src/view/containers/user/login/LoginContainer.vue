<template>
  <v-container fluid class="h-100">
    <v-row>
      <v-container>
        <v-row>
          <v-col cols="4" offset="4">
            <h1>Login</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" offset="4">
            <v-form>
              <v-text-field v-model="LoginFields.Email" label="Email address" suffix="@gmail.com">
                <template #append>
                  <v-icon> mdi-mail </v-icon>
                </template>
              </v-text-field>
              <v-text-field v-model="LoginFields.Password" type="password" label="Password" autocomplete="on">
                <template #append>
                  <v-icon> mdi-key </v-icon>
                </template>
              </v-text-field>
              <v-btn @click="Submit">Submit</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col>
        <error-list :errors="LoginResult.ValidationErrors" />
        <error-list :errors="LoginResult.Errors" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { container } from "tsyringe";
import { ILoginUseCase, ILoginFields, ILoginUseCaseResult } from "@/app/usescases/User/LoginUseCase";
import ErrorList from "@/view/components/ErrorList/ErrorList.vue";
import router from "@/app/router";

const LoginResult: any = ref(<ILoginUseCaseResult>{
  Success: false,
  Errors: [],
  ValidationErrors: [],
});

const LoginFields: any = ref(<ILoginFields>{
  Email: "",
  Password: "",
});

// Submit create user command.
const Submit = async () => {
  const loginUseCase: ILoginUseCase = container.resolve("LoginUseCase");
  LoginResult.value = await loginUseCase.execute(LoginFields.value);
  if (LoginResult.value.Success) {
    await router.push("/account");
  }
};
</script>
