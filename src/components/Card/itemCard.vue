<template>
    <div @click="goToProduct(item.id)" class="p-2 p-md-3 d-flex 
    flex-column align-items-center 
    border border-1 border-success my-3 my-md-4">
        <div class="custom-image p-2">
            <img :src="item.image" alt="" class="img-fluid custom-img">
        </div>
        <div class="custom-text fs-6 p-1">
            {{ item.title }}
        </div>
        <div class="custom-text fw-bold p-1 text-start w-100 ">
            $ {{ item.price }}
        </div>
    </div>
</template>

<script>
import ProductPage from './productPage.vue';

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
