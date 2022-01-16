import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { container } from "tsyringe";
import { IValidateTokenUseCase } from "@/app/usescases/Token/ValidateTokenUseCase";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Home",
      keepAlive: true,
    },
    component: () => import("@/view/pages/index.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    meta: {
      title: "Registration",
      keepAlive: true,
    },
    component: () => import("@/view/pages/registration/index.vue"),
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   meta: {
  //     title: "Account",
  //     keepAlive: true,
  //   },
  //   component: () => import("@/view/pages/login/index.vue"),
  // },
  // {
  //   path: "/account",
  //   name: "Account",
  //   meta: {
  //     title: "Account",
  //     keepAlive: true,
  //   },
  //   component: () => import("@/view/pages/account/index.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const publicPages = ["/login", "/registration"];
//   const authRequired = !publicPages.includes(to.path);
//   const token = localStorage.getItem("token");
//   const validateTokenUseCase: IValidateTokenUseCase = container.resolve("ValidateTokenUseCase");
//   const valid = await validateTokenUseCase.execute(token);
//   // redirect to login page
//   if (authRequired && !valid) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
