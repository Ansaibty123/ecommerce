<template>
    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <img :src="product.image" alt="Product Image">
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  

<script>

    export default {
        computed : {
           product () {
            const productId = this.$route.params.id
            return this.$store.getters.allProducts.find((item) => item.id === parseInt(productId))
           }
        },
       
        mounted (){
            if(!this.product){
                this.$store.dispatch('getProducts')
            }
            console.log('ProductPage mounted');
            console.log(this.$store.getters.allProducts);

        }
    }
</script>

<style scoped>

</style>