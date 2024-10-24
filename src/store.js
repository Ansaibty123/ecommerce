import { createStore } from "vuex";
import axios from "axios";

const PRODUCT_URL = "https://fakestoreapi.com/products";

const store = createStore({
  state() {
    return {
      products: [],
      filterProducts: [],
      searchItem: "",
      Cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      state.filterProducts = products;
    },
    addToCart(state, productId) {
      const product = state.products.find((item) => item.id === productId);
      if (product) {
        state.Cart.push(product);
        localStorage.setItem("cart", JSON.stringify(state.Cart));
        console.log("Added");
      } else {
        console.log("product not found");
      }
    },
    removeCartItem(state, producId) {
      const productIndex = state.Cart.findIndex((item) => item.id === producId);
      if (productIndex !== -1) {
        state.Cart.splice(productIndex, 1);
        localStorage.setItem("cart", JSON.stringify(state.Cart));
      }
    },
    filterCategory(state, Category) {
      if (Category) {
        console.log(Category);
        state.filterProducts = state.products.filter(
          (product) => product.category === Category
        );
      } else {
        state.filterProducts = state.products;
      }
    },

    searchItem(state, searchProducts) {
      state.searchItem = searchProducts;
    },
    applySearch(state) {
      if (state.searchItem) {
        state.filterProducts = state.products.filter((item) =>
          item.title.toLowerCase().includes(state.searchItem.toLowerCase())
        );
      } else  {
        state.filterProducts = state.products
      }
    },
    sortHighToLow(state) {
      state.filterProducts.sort((a, b) => b.price - a.price);
    },
    sortLowToHigh(state) {
      state.filterProducts.sort((a, b) => a.price - b.price);
    },
    sortPopularity(state) {
      state.filterProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      //  console.log(state.filterProducts)
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await axios.get(PRODUCT_URL);
        commit("setProducts", response.data);
        console.log("Fetched Products: ", response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
  getters: {
    allProducts(state) {
      return state.filterProducts;
    },
    totalCost(state) {
      console.log(state.Cart);
      return state.Cart.reduce((total, item) => {
        if (item.price) {
          return total + item.price;
        }
        return total;
      }, 0);
    },
  },
});

export default store;
