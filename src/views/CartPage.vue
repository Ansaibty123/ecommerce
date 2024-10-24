<template>
  <div>
    <Navbar />
    <div class="container my-4">
      <h2 class="mb-4">Your Cart</h2>
      <div v-if="cartItems.length" class="row g-4">
        <div class="col-12 " v-for="item in cartItems" :key="item.id">
          <div class="card shadow">
            <div class="d-flex justify-content-between">
              <div class="col-4 text-center">
                <img :src="item.image" class="img-fluid rounded p-3" alt="Product Image" />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h6 class="card-title">{{ item.title }}</h6>
                  <p class="card-text">Price: ${{ item.price }}</p>
                  <p class="card-text">
                    <small class="text-muted">Quantity: {{ item.quantity }}</small>
                  </p>
                  <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center">Your cart is empty.</p>
      </div>
      <div class="d-flex justify-content-between mt-4" v-if="cartItems.length">
        <div class="text-start">
          <h5 class="p-2"> Total : $ {{ total }}</h5>
        </div>
        <div class="text-end">
          <button class="btn btn-success" @click="checkout">
            Checkout
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  computed: {
    cartItems() {
      return this.$store.state.Cart;
    },
    total() {
      return this.$store.getters.totalCost
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.commit('removeCartItem', itemId);
    },
    checkout() {
      alert('Proceeding to checkout');
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
}

.img-fluid {
  max-height: 200px;
  object-fit: cover;
}
</style>
