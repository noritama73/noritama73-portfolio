import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "profile",
    component: import("@/views/ProfilePage.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: import("@/views/SkillSet.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
