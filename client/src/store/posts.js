import axios from "axios";

const posts = {
  namespaced: true,
  state: () => ({
    posts: [],
    loadingError: null,
    postsCount: 0,
    // single_post: [],
    // single_post_loading: true,
    // single_post_id: null,
  }),
  getters: {},
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoadingError(state, loadingError) {
      state.loadingError = loadingError;
    },
    setPostsCount(state, postsCount) {
      state.postsCount = postsCount;
    },
    // setSinglePost(state, value) {
    //   state.single_post = value;
    // },
    // setSinglePostLoading(state, value) {
    //   state.single_post_loading = value;
    // },
    // setSinglePostId(state, value) {
    //   state.single_post_id = value;
    // },
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

        commit("setPostsCount", response.headers["x-total-count"]);
        commit("setPosts", [...state.posts, ...response.data]);
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
    async postItem({ state, commit }) {},
    // async fetchPostItem({ commit, state }) {
    //   setTimeout(() => {
    //     if (state.single_post_id <= 100) {
    //       fetch("https://jsonplaceholder.typicode.com/posts/" + state.single_post_id, {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: null,
    //       })
    //         .then((response) => {
    //           if (response.status === 404) {
    //             commit("setSinglePost", null);
    //             commit("setSinglePostLoading", false);
    //             return;
    //           }
    //           return response.json();
    //         })
    //         .then((data) => {
    //           commit("setSinglePost", data);
    //           commit("setSinglePostLoading", false);
    //         })
    //         .catch((error) => {
    //           alert(error.message);
    //         });
    //     } else {
    //       const IDs = [];
    //       state.posts.forEach((post) => {
    //         IDs.push(post.id);
    //       });
    //       if (IDs.includes(state.single_post_id)) {
    //         commit("setSinglePost", state.posts.filter((post) => post.id == state.single_post_id)[0]);
    //         commit("setSinglePostLoading", false);
    //       } else {
    //         commit("setSinglePost", null);
    //         commit("setSinglePostLoading", false);
    //         return;
    //       }
    //     }
    //   }, 1000);
    // },
  },
};

export default posts;
