<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div class="cart-items" v-if="cartStore.cartItems.length">
      <div class="cart-item" v-for="item in cartStore.cartItems" :key="item.id">
        <div class="cart-item-image">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="cart-item-text">
          <p class="title">
            <router-link
              :to="{
                name: 'product-details',
                params: { id: item.id },
              }"
              >{{ item.title }}</router-link
            >
          </p>
          <p class="price"><strong>Price:</strong> ${{ item.price }}</p>
          <div class="cart-item-quantity">
            <button @click="decrementQuantity(item)">-</button>
            <p>{{ item.quantity }}</p>
            <button @click="incrementQuantity(item)">+</button>
          </div>
          <div class="cart-item-delete">
            <button @click="removeFromCart(item)">Remove From Cart</button>
          </div>
        </div>
      </div>
      <div class="cart-total">
        <p>Total: ${{ cartStore.cartTotal }}</p>
      </div>
    </div>
    <div class="empty-cart" v-else>
      <p>Your cart is empty</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/CartStore";

export default {
  name: "TheCart",
  setup() {
    const cartStore = useCartStore();

    const removeFromCart = (item) => {
      cartStore.removeFromCart(item);
    };

    const incrementQuantity = (item) => {
      cartStore.incrementQuantity(item);
    };

    const decrementQuantity = (item) => {
      cartStore.decrementQuantity(item);
    };

    return {
      cartStore,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
    };
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.cart h2 {
  position: relative;
  display: block;
  width: 7rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;
}

.cart h2::before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 3px;
  background-color: #f0b001;
}
.cart-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.cart-item {
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
}
.cart-item-image {
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
}
.cart-item-image img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.cart-item-text .title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.cart-item-text .title a {
  text-decoration: none;
  color: #000;
}
.cart-item-text .title a:hover {
  text-decoration: underline;
}
.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}
.cart-item-quantity button {
  background-color: #fff;
  color: #000;
  border: 3px solid #f0b001;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

.cart-item-delete button {
  background-color: #ff5656;
  color: #fff;
  border: 1px solid #ff5656;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 2rem;
}
.cart-total {
  margin-top: 1rem;
  font-weight: bold;
}
.empty-cart {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.empty-cart p {
  font-size: 1.2rem;
  font-weight: bold;
}

.empty-cart p::before {
  content: "⚠️ ";
}

/* responsive styles */
@media (max-width: 768px) {
  .cart h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  .cart h2::before {
    bottom: -5px;
    height: 2px;
  }
  .cart-item {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .cart-item-image img {
    width: 100%;
    height: 160px;
    object-fit: contain;
  }
  .cart-item-text .title a {
    font-size: 1rem;
  }
  .cart-item-text .description {
    font-size: 0.8rem;
  }
  .cart-item-text .card-info p strong {
    font-size: 0.8rem;
  }
  .cart-item-text .card-info p span {
    font-size: 0.8rem;
  }
  .cart-item-text .addToCart {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  .cart-item-delete button {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  .cart-total {
    font-size: 0.8rem;
  }
  .empty-cart p {
    font-size: 1rem;
  }
  .empty-cart p::before {
    font-size: 1rem;
  }
}
</style>
