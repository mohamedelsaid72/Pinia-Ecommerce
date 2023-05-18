import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "./components/ProductsList.vue";
import TheCart from "./components/TheCart.vue";
import ProductDetails from "./components/ProductDetails.vue";

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    component: ProductsList,
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/cart",
    component: TheCart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// router.js
