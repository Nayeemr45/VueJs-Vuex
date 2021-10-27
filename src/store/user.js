import axios from "axios";

const state = {
  users: [],
};
const getters = {
  users: (state) => state.users,
};
const actions = {
  async getUsers({ commit }) {
    const response = await axios.get("http://localhost:5000/users");
    commit("users", response.data);
  },
};
const mutations = {
  users: (state, res) => (state.users = res),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
