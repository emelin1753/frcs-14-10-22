import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { validToken } from "@/helpers/global";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authenticated = validToken();
  if (!authenticated && to.name !== "login") next({ name: "login" });
  else if (authenticated && to.name === "login") next({ name: "dashboard" });
  else next();
});

export default router;
