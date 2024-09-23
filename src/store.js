import { createStore } from "vuex";
import axios from "axios";

const PRODUCT_URL = "https://fakestoreapi.com/products";

const store = createStore({
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    setProducts(state,products) {
        state.products = products
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await axios.get(PRODUCT_URL);
        commit("setProducts", response.data);
        console.log("Fetched Products: ");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
  getters: {
    allProducts (state){
        return state.products

    }
  },
});

export default store;
