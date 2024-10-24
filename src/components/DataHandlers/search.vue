<template>
    <div class="">
        <input type="search" v-model="searchProduct"  name="search" id="searchItem" placeholder="search" class="form-control rounded border border-secondary py-1 ">
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            searchProduct: ""
        }
    },
    methods: {
        ...mapMutations(['searchItem', 'applySearch']),
        updateSearch() {
            this.searchItem(this.searchProduct);
            this.applySearch();
        },
    },
    watch: {
        searchProduct(newvalue) {
            this.updateSearch()
        }
    }



}
</script>

<style scoped>
 
</style>