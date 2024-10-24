<template>
  <div class="dropdown ">
    <select id="sort-options" v-model="selectedSortOption" @change="sortProducts" class="text-secondary ">
      <option value="" disabled>Sort By</option>
      <option value="price-low-high">Price: Low to High</option>
      <option value="price-high-low">Price: High to Low</option>
      <option value="popularity">Popularity</option>
    </select>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      selectedSortOption: ""
    }
  },
  methods: {
    ...mapMutations(['sortHighToLow', 'sortLowToHigh','sortPopularity']),
  
    sortProducts (){
      if (this.selectedSortOption === "price-low-high") {
        this.sortLowToHigh()
      }
      if (this.selectedSortOption === "price-high-low") {
        this.sortHighToLow()
      }
      if (this.selectedSortOption === "popularity") {
        this.sortPopularity()
      }
    }
  }
};
</script>


<style scoped>
.dropdown {
  margin-top: 10px;

  select {
    border-radius: 10px;
    border: 1px solid #ccc;
  }
}
</style>
