<template>
  <div class="dropdown">
    <select id="categories" v-model="selectedCategory" @change="filterProducts" class="text-secondary">
      <option value="" disabled> Category</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewellery</option>
    </select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      selectedCategory: ""
    };
  },
  methods: {
    ...mapMutations(["filterCategory"]),
    filterProducts() {
      this.filterCategory(this.selectedCategory)
    }
  },

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