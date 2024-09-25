<template>
  <div v-if="product" class="container-fluid vh-100 pt-md-5">
    <div class="d-flex flex-column flex-md-row">
      <div class="container col-md-6 text-center pt-md-3 border shadow-sm">
        <img :src="product.image" alt="Product Image" class="img-fluid w-50 py-4 custom-max-width img-fit">
      </div>
      <div class="col-md-6 pt-3 pt-md-0 ps-3">
        <div class="custom-width row gap-2 gap-md-5 px-2 py-md-5">
          <h3>{{ product.title }}</h3>
          <p class="fs-md-4 fs-5">Description- <span class="text-info fs-6"> {{ product.description }}</span></p>
          <p class="fs-md-4 fs-5 fw-bold">Price: ${{ product.price }}</p>
        </div>

      </div>

    </div>

  </div>
  
</template>


<script>

export default {
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
.img-fit{
object-fit: contain;
}
</style>