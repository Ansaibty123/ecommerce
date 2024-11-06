<template>
  <div>
    <Navbar />
    <div v-if="product" class="container-fluid vh-100 pt-md-5 pt-3">
      <div class="d-flex flex-column flex-md-row gap-2 ">
        <div class="container col-md-6 text-center pt-md-3 border-md shadow-lg custom-img-box">
          <img :src="product.image" alt="Product Image" class="img-fluid w-50 py-5  custom-max-width img-fit">
          <div class="heart-icon" @click="addToWishlist(product.id)">
            <i :class="['fa-2x', this.$store.getters.wishListProduct.some(item => item.id === product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart']"></i>
          </div>
        </div>
        <div class="border border-success shadow-lg"></div>
        <div class="col-md-6 pt-3 pt-md-0 p-3 ">
          <div class="custom-width row gap-2 gap-md-5 px-2 py-md-5">
            <h3>{{ product.title }}</h3>
            <p class="fs-md-4 fs-5">Description- <span class="text-secondary fs-6"> {{ product.description }}</span></p>
            <div class="d-flex gap-2">
              <span class="rating-stars">
                <span v-for="star in 5" :key="star" class="fa" :class="{
                  'fa-star': star <= Math.floor(product.rating.rate),
                  'fa-star-half-o': star === Math.ceil(product.rating.rate) && product.rating.rate % 1 !== 0, // Half star
                  'fa-star-o': star > product.rating.rate
                }"></span>
              </span>
              <span>{{ product.rating.rate }}</span>
              <span v-if="product.rating.count" class="text-primary">ratings:
                <span>{{ product.rating.count }}</span></span>
            </div>
            <p class="fs-md-4 fs-5 fw-bold">Price: ${{ product.price }}</p>
          </div>
          <div class="px-2">
            <button @click="addToCart(product.id)" class="btn btn-success">
              add to cart
            </button>
          </div>

        </div>

      </div>

    </div>
  </div>


</template>


<script>
import Navbar from '@/components/Navbar.vue';



export default {
  components: {
    Navbar
  },
  methods: {
    addToCart(productId) {
      const isProductInCart = this.$store.getters.cartProduct.some(product => product.id === productId);
      if (isProductInCart) {
        this.$router.push({ name: 'cart' });
      } else {
        this.$store.commit("addToCart", productId);
      }
    },
    addToWishlist(productId) {
      const product = this.$store.getters.wishListProduct.some(product => product.id === productId)
      if (product) {
        this.$store.commit("removeWishlistItems", productId);
      } else {
        this.$store.commit("addToWishlist", productId)
      }
    }
  },
  computed: {
    product() {
      const productId = this.$route.params.id
      return this.$store.getters.allProducts.find((item) => item.id === parseInt(productId))
    }
  },

  mounted() {
    if (!this.product) {
      this.$store.dispatch('getProducts')
    }
    console.log('ProductPage mounted');

  }
}
</script>

<style scoped>
.custom-max-width {
  max-width: 400px;
}

.custom-width {
  max-width: 500px;

}

.custom-img-box {
  position: relative;
}

.heart-icon {
  position: absolute;
  top: 20px;
  right: 20px;
}


.img-fit {
  object-fit: contain;
}

.rating-stars {
  color: gold;
}

.fa-star {
  font-size: 20px;
}

.fa-star-half-o {
  font-size: 20px;
}

.fa-star-o {
  font-size: 20px;
}
</style>