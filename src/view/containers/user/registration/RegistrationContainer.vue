<template>
  <div class="container-lg grid cols-5 gap-x-sm gap-y-md primary">
    <div>
      <w-button 
          text="ОТПРАВИТЬ"
          color="accent-1"
          size="lg"
          @click="click"
      />
    </div>
    <div class="col-span-2">
      <w-button 
          text="ОТПРАВИТЬ" 
          color="accent-2"
          size="xl"
          @click="click"
      />
    </div>
    <div>
      <w-button
          text="ОТПРАВИТЬ"
          color="accent-3"
          size="md"
          @click="click"
      />
    </div>
    <div>
      <w-button
          text="плавающая ширина"
          color="accent-4"
          size="sm"
          @click="click"
      />
    </div>
  </div>
<!--  <div class="grid rows-5">-->
<!--    <div class="col">-->
<!--      <h1>hello world</h1>-->
<!--    </div>-->
<!--    <div class="col">-->
<!--      <h1>hello world</h1>-->
<!--    </div>-->
<!--  </div>-->
<!--  <v-container fluid class="h-100">-->
<!--    <v-row>-->
<!--      <v-container>-->
<!--        <v-row>-->
<!--          <v-col cols="4" offset="4">-->
<!--            <h1>Registration</h1>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--        <v-row>-->
<!--          <v-col cols="4" offset="4">-->
<!--            <v-form>-->
<!--              <v-text-field v-model="RegistrationFields.Email" label="Email address" suffix="@gmail.com">-->
<!--                <template #append>-->
<!--                  <v-icon> mdi-mail </v-icon>-->
<!--                </template>-->
<!--              </v-text-field>-->
<!--              <v-text-field v-model="RegistrationFields.Password" type="password" label="Password" autocomplete="on">-->
<!--                <template #append>-->
<!--                  <v-icon> mdi-key </v-icon>-->
<!--                </template>-->
<!--              </v-text-field>-->
<!--              <v-text-field-->
<!--                v-model="RegistrationFields.PasswordConfirmation"-->
<!--                type="password"-->
<!--                label="PasswordConfirmation"-->
<!--                autocomplete="on"-->
<!--              >-->
<!--                <template #append>-->
<!--                  <v-icon> mdi-key </v-icon>-->
<!--                </template>-->
<!--              </v-text-field>-->
<!--              <v-btn @click="Submit">Submit</v-btn>-->
<!--            </v-form>-->
<!--          </v-col>-->
<!--          <v-col v-if="RegistrationResult.Success" cols="4" offset="4">-->
<!--            <v-chip color="green" text-color="white">-->
<!--              {{ RegistrationResult.SuccessMessage }}-->
<!--            </v-chip>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
<!--    </v-row>-->
<!--    <v-row>-->
<!--      <v-col>-->
<!--        <error-list :errors="RegistrationResult.ValidationErrors" />-->
<!--        <error-list :errors="RegistrationResult.Errors" />-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-container>-->
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { container } from "tsyringe";
import RegistrationUseCase, {
  IRegistrationFields,
  IRegistrationUseCase,
  IRegistrationUseCaseResult,
} from "@/app/usescases/User/RegistrationUseCase";
import ErrorList from "@/view/components/ErrorList/ErrorList.vue";
import WButton from "@/way/components/common/button/WButton.vue";
import router from "@/app/router";

const RegistrationResult: any = ref(<IRegistrationUseCaseResult>{
  Success: false,
  Errors: [],
  ValidationErrors: [],
});

const RegistrationFields: any = ref(<IRegistrationFields>{
  Email: "",
  Password: "",
  PasswordConfirmation: "",
});

// Submit create user command.
const Submit = async () => {
  const registrationUseCase: IRegistrationUseCase = container.resolve("RegistrationUseCase");
  RegistrationResult.value = await registrationUseCase.execute(RegistrationFields.value);
  if (RegistrationResult.value.Success) {
    await router.push("/login");
  }
};

const click = (event: any) => {
  console.log(event);
}
</script>
