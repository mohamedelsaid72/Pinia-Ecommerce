<template>
  <div>
    <h2>Products List</h2>
    <ul>
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></product-card>
    </ul>
  </div>
</template>

<script>
import { useProductStore } from "../stores/ProductStore";
import { mapState } from "pinia";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductsList",
  components: {
    ProductCard,
  },
  setup() {
    const productStore = useProductStore();
    productStore.fetchProducts();
  },
  computed: {
    ...mapState(useProductStore, ["products"]),
  },
};
</script>

<style scoped>
div h2 {
  position: relative;
  display: block;
  width: 9rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;
}
div h2::before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 3px;
  background-color: #f0b001;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  ul {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  div h2 {
    font-size: 1.3rem;
  }
  div h2::before {
    bottom: -5px;
    height: 2px;
  }
}
</style>
