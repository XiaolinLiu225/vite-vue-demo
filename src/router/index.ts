import { createRouter, createMemoryHistory } from "vue-router";

const home = () => import("../views/home/home.vue");
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
  ],
});

export default router;
