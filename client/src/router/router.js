import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("@/pages/Posts.vue"),
  },
  {
    path: "/posts/:id",
    name: "postsDetails",
    component: () => import("@/pages/PostsDetails.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/pages/NotFound.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
