import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "@/supabase";
import HomeView from "@/views/HomeView.vue";

let localUser;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

//getUser
async function getUser(next) {
  localUser = await supabase.auth.getSession();
  if (localUser.data.session == null) {
    next("/login");
  } else {
    next();
  }
}

//auth requirements
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  } else {
    next();
  }
});

export default router;
