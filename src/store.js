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
      wishList: JSON.parse(localStorage.getItem("wishlist")) || [],
      userAddress: JSON.parse(localStorage.getItem("address")) || [],

    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      state.filterProducts = products;
    },
    addAddress (state,address){
     state.userAddress.push(address)
     localStorage.setItem("address",JSON.stringify(state.userAddress))
    },
    removeAddress(state, index) {
      if (index >= 0 && index < state.userAddress.length) {
        state.userAddress.splice(index, 1);
        localStorage.setItem("address", JSON.stringify(state.userAddress)); // Update localStorage
      }
    },
  
    addToWishlist(state, productId) {
      const product = state.products.find((item) => item.id === productId);
      // console.log(product)
      if (product) {
        state.wishList.push(product);
        localStorage.setItem("wishlist", JSON.stringify(state.wishList));
        console.log("Added");
      }else {
        console.log("product not found");

      }
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
    removeWishlistItems(state, producId){
      const productIndex = state.wishList.findIndex((item) => item.id === producId);
      if (productIndex !== -1) {
        state.wishList.splice(productIndex, 1);
        localStorage.setItem("wishlist", JSON.stringify(state.wishList));
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
      } else {
        state.filterProducts = state.products;
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
    removeAddress({ commit }, index) {
      commit("removeAddress", index);
    },
  },
  getters: {
    allProducts(state) {
      return state.filterProducts;
    },
    cartProduct(state) {
      return state.Cart;
    },
    addressList(state){
      return state.userAddress
    },
    wishListProduct(state) {
      return state.wishList;
    },
    totalCost(state) {
      // console.log(state.Cart);
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
