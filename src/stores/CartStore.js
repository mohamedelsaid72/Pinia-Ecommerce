import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product) {
      const foundProduct = this.cartItems.find((p) => p.id === product.id);

      if (foundProduct) {
        foundProduct.quantity += 1;
      } else {
        this.cartItems.push({ ...product });
      }
    },

    removeFromCart(product) {
      const foundProductIndex = this.cartItems.findIndex(
        (p) => p.id === product.id
      );

      if (foundProductIndex !== -1) {
        this.cartItems.splice(foundProductIndex, 1);
      }
    },

    incrementQuantity(product) {
      const foundProduct = this.cartItems.find((p) => p.id === product.id);

      if (foundProduct) {
        foundProduct.quantity += 1;
      }
    },

    decrementQuantity(product) {
      const foundProduct = this.cartItems.find((p) => p.id === product.id);

      if (foundProduct) {
        foundProduct.quantity -= 1;
      }

      if (foundProduct.quantity === 0) {
        this.removeFromCart(product);
      }
    },
  },
  getters: {
    cartTotal() {
      return this.cartItems.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
});
