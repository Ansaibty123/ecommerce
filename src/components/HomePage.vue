<template>
    <div class="container w-100 g-0">
        <div class="row g-0 ">
            <div v-for="item in allProducts" :key="item.id"
                class="col-md-4 col-lg-3 col-6 d-flex justify-content-center">
                <ItemCard :item="item" />   
            </div>
        </div>

    </div>
</template>
< <script>
import { mapGetters } from 'vuex';
import ItemCard from './Card/itemCard.vue';


export default {
    components: {
        ItemCard
    },
    computed: {
        ...mapGetters(['allProducts'])
    },

    mounted() {
        this.$store.dispatch('getProducts').then(() => {
            console.log(this.allProducts)

        })

    }
}
</script>