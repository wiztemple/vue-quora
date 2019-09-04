import Vue from "vue";
import Router from "vue-router";

import AuthRoutes from "./modules/Authentication/router";

Vue.use(Router);

export default new Router({
  routes: [...AuthRoutes]
});
