<template>
  <div class="d-flex flex-column gap-3">
    <Navbar />
    <div v-if="wishListProduct.length" class="d-flex flex-wrap ">
      <div v-for="product in wishListProduct" :key="product.id"
        class="d-flex justify-content-center col-6 col-md-4 col-lg-3 p-3 ">
        <div
          class="custom-box-width d-flex flex-column align-items-center justify-content-between border border-lg shadow-lg p-3 gap-2">
          <div class="custom-img-box">
            <img :src="product.image" alt="product image" class="img-fluid custom-width">
            <div class="elipsis" @click="openDropdown">
              <i class="fa-solid fa-ellipsis-vertical fa-lg" data-bs-toggle="dropdown" aria-expanded="false"></i>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="removeItem(product.id)">Remove item</a></li>
              </ul>
            </div>
          </div>
          <div class="fw-bold text-info text-start w-100">
            {{ product.title }}
          </div>
          <div class="fw-bold text-start w-100">
            ${{ product.price }}
          </div>
          <button @click="addToCart(product.id)" class="btn btn-dark w-100">Add to Cart </button>
        </div>

      </div>
      <div>

      </div>
    </div>
    <div v-else class="w-100 text-center fw-bold p-3 text-secondary fs-5">
      Your wishlist is empty!!!
    </div>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(["wishListProduct"])
  },
  methods: {
    addToCart(productId) {
      const isProductInCart = this.$store.getters.cartProduct.some(product => product.id === productId);
      // console.log(productId)
      if (isProductInCart) {
        this.$router.push({ name: 'cart' });
      } else {
        this.$store.commit("addToCart", productId);
      }
    },
    removeItem(productId) {
      this.$store.commit("removeWishlistItems", productId)
    }
  }
}
</script>

<style scoped>
.custom-box-width {
  width: 300px;
  position: relative;

}

.custom-width {
  width: 200px;
  object-fit: contain;
}

.elipsis {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>