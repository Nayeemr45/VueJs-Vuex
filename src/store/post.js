import axios from "axios";

const state = {
  posts: [
    // { id: "1", title: "post", body: "sample" },
    // { id: "2", title: "post", body: "sample" },
    // { id: "3", title: "post", body: "sample" },
    // { id: "4", title: "post", body: "sample" },
  ],
  post: {},
};
const getters = {
  allPost: (state) => state.posts,
  getPostDetails: (state) => state.post,
};
const actions = {
  async fetchPost({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setPost", response.data);
  },

  async postDetails({ commit }, id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    commit("setPostDetails", response.data);
  },
};
const mutations = {
  setPost: (state, posts) => (state.posts = posts),
  setPostDetails: (state, pDetails) => (state.post = pDetails),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
