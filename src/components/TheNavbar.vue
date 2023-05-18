<template>
  <nav>
    <div class="nav-brand">
      <router-link to="/">Pinia Ecommerce</router-link>
    </div>
    <ul>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link class="cart-link" to="/cart"
          >Cart
          <span class="categoriesNumber">{{
            categoriesNumber
          }}</span></router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { useCartStore } from "@/stores/CartStore";

export default {
  name: "TheNavbar",
  computed: {
    categoriesNumber() {
      const cartStore = useCartStore();
      return cartStore.cartItems.length;
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10%;
}
nav .nav-brand a {
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
}
ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  gap: 0 2rem;
}
ul li a {
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
}

ul li a:hover,
ul li a:active,
ul li a.router-link-active {
  color: #f0b001;
}
.cart-link {
  display: flex;
  align-items: center;
}

.categoriesNumber {
  background-color: #f0b001;
  color: #fff;
  padding: 0.2rem 0.4rem;
  border-radius: 0.1rem;
  font-size: 0.8rem;
  margin-left: 0.3rem;
}

@media (max-width: 768px) {
  nav {
    padding: 2rem 5%;
  }
  nav .nav-brand a {
    font-size: 1rem;
  }
  ul {
    gap: 0 1rem;
  }
  ul li a {
    font-size: 0.8rem;
  }
  .categoriesNumber {
    font-size: 0.6rem;
  }
}
</style>
