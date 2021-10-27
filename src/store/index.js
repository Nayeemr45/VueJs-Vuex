import Vue from "vue";
import Vuex from "vuex";
import post from "./post";
import product from "./product";
import user from "./user";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { post, product, user },
  state: {
    products: [
      { id: "1", name: "Laptop", price: 200 },
      { id: "2", name: "Orange", price: 150 },
      { id: "3", name: "Mango", price: 180 },
      { id: "4", name: "Apple", price: 100 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map((product) => {
        return {
          id: product.id,
          name: product.name + " ",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: (state) => {
      state.products.forEach((product) => {
        product.price -= 2;
      });
    },
  },
  actions: {
    reducePrice: ({ commit }) => {
      commit("reducePrice");
    },
  },
});
