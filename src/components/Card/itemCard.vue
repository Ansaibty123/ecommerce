<template>
    <div @click="goToProduct(item.id)" class="p-2 p-md-3 d-flex 
    flex-column align-items-center justify-content-between
     shadow-lg border-success my-3 my-md-4">
        <div class="custom-image p-2">
            <img :src="item.image" alt="" class="img-fluid custom-img">
        </div>
        <div class="custom-text fs-6 p-1">
            {{ item.title }}
        </div>
        <div class="custom-text fw-bold p-1 text-start w-100 ">
            $ {{ item.price }}
        </div>
        <div class="text-start w-100">
            <span class="rating-stars ">
                <span v-for="star in 5" :key="star" class="fa"
                  :class="{
                    'fa-star': star <= Math.floor(item.rating.rate),
                    'fa-star-half-o': star === Math.ceil(item.rating.rate) && item.rating.rate % 1 !== 0, 
                    'fa-star-o': star > item.rating.rate
                  }"></span>
              </span>
        </div>
    </div>
</template>

<script>

export default {
    props: ['item'],

    methods: {
        goToProduct(productId) {
            this.$router.push({ name: "ProductPage", params: { id: productId } })
        }
    }
}
</script>

<style scoped>
.custom-image {
    height: 100px;
    width: 100px;

}

.custom-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.custom-text {
    max-width: 150px;
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

@media(min-width:768px) {
    .custom-image {
        height: 150px;
        width: 150px;
    }
}

@media(min-width:920px) {
    .custom-image {
        height: 200px;
        width: 200px;
    }

    .custom-text {
        max-width: 200px;
    }
}
</style>
