import { createRouter, createWebHistory } from "vue-router";
import Favorites from "./pages/Favorites.vue";
import Home from "./pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorites,
    },
  ],
});

export default router;
