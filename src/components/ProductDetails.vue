<template>
  <div class="product-details">
    <div class="product-image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="product-text">
      <h3>{{ product.title }}</h3>
      <p class="description">{{ product.description }}</p>
      <div class="card-info">
        <p>
          <strong>Price:</strong><span>${{ product.price }}</span>
        </p>
        <p>
          <strong>Rating:</strong><span>{{ product.rating.rate }}</span>
        </p>
        <p>
          <strong>Count:</strong><span>{{ product.rating.count }}</span>
        </p>
      </div>
      <button class="addToCart" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductDetails",
  props: ["id"],
  setup(props) {
    const productStore = useProductStore();
    const cartStore = useCartStore();

    const product = computed(() => {
      return productStore.products.find((res) => res.id == props.id);
    });

    const addToCart = () => {
      cartStore.addToCart({
        id: product.value.id,
        ...product.value,
        quantity: 1,
      });
    };

    onMounted(() => {
      productStore.fetchProducts(); // Assuming there's a method in the store to fetch the products
    });

    return {
      product,
      addToCart,
    };
  },
});
</script>

<style>
/* Styles for your component */
</style>

<style scoped>
.product-details {
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
.product-details .product-image {
  display: flex;
  justify-content: center;
  height: fit-content;
  padding: 4rem 2rem;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.product-details img {
  width: 80%;
  max-height: 250px;
  object-fit: contain;
}

.product-details .product-text {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}
.product-details .product-text h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.product-details .product-text .description {
  width: 90%;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}
.product-details .product-text .card-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.product-details .product-text .card-info p strong {
  font-weight: 500;
  margin-right: 0.5rem;
}
.product-details .product-text .card-info p span {
  font-size: 0.8rem;
}
.product-text .addToCart {
  display: block;
  width: 120px;
  text-align: center;
  text-decoration: none;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #f0c040;
  cursor: pointer;
  border: 3px solid #f0c040;
  color: #000;
  margin-top: 2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.product-text .addToCart:hover {
  background-color: #fff;
  color: #f0c040;
  font-weight: 600;
}
</style>
