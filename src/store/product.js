const state = {
  products: [
    {
      id: "1",
      name: "Asus",
      price: 75000,
      inStock: false,
      available: true,
      discount: "30%",
    },
    {
      id: "2",
      name: "Dell",
      price: 80000,
      inStock: false,
      available: true,
      discount: "30%",
    },
    {
      id: "3",
      name: "Apple",
      price: 175000,
      inStock: false,
      available: true,
      discount: "50%",
    },
    {
      id: "4",
      name: "Msi",
      price: 75000,
      inStock: false,
      available: false,
      discount: "30%",
    },
  ],
  product: [],
};
const getters = {
  products: (state) => state.products,
  product: (state) => state.product,
};
const actions = {
  editProduct: ({ commit }, payload) => {
    commit("edit", payload);
  },
  getProduct({ commit }, id) {
    commit("Product", id);
  },
};
const mutations = {
  edit: (state, payload) => {
      const index = state.products.findIndex((product) => product.id == payload.id);
        state.products[index].name = payload.name;
        state.products[index].price = payload.price;
        state.products[index].inStock = payload.inStock;
        state.products[index].available = payload.available;
        state.products[index].discount = payload.discount;
  },
  Product: (state, id) => {
    state.product = state.products.find((product) => product.id == id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
