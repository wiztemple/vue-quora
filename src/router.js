import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import AuthRoutes from "./modules/Authentication/router";
import PostRoutes from "./modules/Post/router";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [...AuthRoutes, ...PostRoutes]
});

// console.log(store.state);
// const loggedIn = Object.keys(store.state.AuthStore.user) > 0;
// console.log(loggedIn);
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (
//       to.path === "/authentication/register" ||
//       to.path === "/authentication/login"
//     ) {
//       if (loggedIn) {
//         next({
//           path: "/post",
//           query: { redirect: to.fullPath }
//         });
//       } else {
//         next();
//       }
//     }
//   }
//   next()
// });

export default router;
