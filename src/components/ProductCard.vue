<template>
  <li>
    <div>
      <img :src="product.image" :alt="product.title" />
      <h3>
        <router-link
          :to="{
            name: 'product-details',
            params: { id: product.id },
          }"
          >{{ truncateTitle }}</router-link
        >
      </h3>
      <p class="description">{{ truncateDescription }}</p>
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
      <div class="product-card-actions">
        <button class="addToCart" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </li>
</template>

<script>
import { computed } from "vue";
import { useCartStore } from "@/stores/CartStore";

export default {
  name: "ProductCard",
  props: ["product"],
  setup(props) {
    const cartStore = useCartStore();

    const truncateDescription = computed(() => {
      const words = props.product.description.split(" ");
      if (words.length > 30) {
        return words.slice(0, 30).join(" ") + "...";
      } else {
        return props.product.description;
      }
    });

    const truncateTitle = computed(() => {
      if (props.product.title.length > 50) {
        return props.product.title.slice(0, 50) + "...";
      } else {
        return props.product.title;
      }
    });

    const addToCart = () => {
      cartStore.addToCart({
        id: props.product.id,
        ...props.product,
        quantity: 1,
      });
    };

    return {
      truncateDescription,
      truncateTitle,
      addToCart,
    };
  },
};
</script>

<style>
/* Styles for your component */
</style>

<style scoped>
li {
  list-style: none;
  padding: 2rem 1rem;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.3s ease-in-out;
  height: fit-content;
}
li img {
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin: 1rem 0;
}
li h3 {
  font-size: 1rem;
  font-weight: 500;
  min-height: 40px;
}
li h3 a {
  text-decoration: none;
  color: #000;
}

li h3 a:hover {
  text-decoration: underline;
}
li .description {
  font-size: 13px;
  line-height: 1.7;
  margin: 1rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 60px;
}
.card-info p {
  line-height: 1.5;
}
.card-info p strong {
  margin-right: 0.5rem;
}
.card-info p span {
  font-size: 0.8rem;
}
.product-card-actions {
  margin-top: 2rem;
  text-align: right;
}
.product-card-actions a {
  text-decoration: none;
  color: #f0b001;
  transition: all 0.3s ease-in-out;
}
.product-card-actions a:hover {
  text-decoration: underline;
}

.product-card-actions button {
  padding: 0.5rem 1rem;
  border: 3px solid #f0c040;
  border-radius: 5px;
  background-color: #f0c040;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.product-card-actions button:hover {
  background-color: #fff;
  color: #f0b001;
}
</style>

<!-- ProductCard.vue -->
