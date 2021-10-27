import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Posts from "../views/Posts.vue";
import PostDetails from "../views/PostDetails.vue";
import Products from "../views/Products.vue";
import ProductEditPage from "../views/ProductEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/post",
    name: "Post",
    component: Posts,
  },
  {
    path: "/post/:id",
    name: "PostDetails",
    component: PostDetails,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/edit/:id",
    name: "Product Edit",
    component: ProductEditPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
