import axios from "axios";

const posts = {
  namespaced: true,
  state: () => ({
    posts: [],
    post: {},
    loadingError: null,
    postsCount: 0,
  }),
  getters: {},
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    },
    setLoadingError(state, loadingError) {
      state.loadingError = loadingError;
    },
    setPostsCount(state, postsCount) {
      state.postsCount = postsCount;
    },
  },
  actions: {
    async postList({ state, commit }, params) {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/", {
          headers: {
            "Content-Type": "application/json",
          },
          params,
        });

        commit("setPosts", [...state.posts, ...response.data]);
        commit("setPostsCount", response.headers["x-total-count"]);
        commit("setLoadingError", null);
      } catch (error) {
        commit("setPosts", []);
        commit("setPostsCount", 0);
        commit("setLoadingError", error.message);
      }
    },
    deletePost({ commit, state }, id) {
      commit(
        "setPosts",
        state.posts.filter((post) => post.id !== id)
      );
    },
    async postItem({ state, commit }, id) {
      try {
        const postInStore = state.posts.find((post) => post.id === id);
        if (postInStore) {
          commit("setPost", postInStore);
          commit("setLoadingError", null);
        } else {
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          commit("setPost", response.data);
          commit("setLoadingError", null);
        }
      } catch (error) {
        commit("setPost", {});
        commit("setLoadingError", error.message);
      }
    },
  },
};

export default posts;
