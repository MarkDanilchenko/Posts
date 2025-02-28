<template>
  <section class="my-posts">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <nav aria-label="breadcrumb" class="my-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Main</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Posts</li>
        </ol>
      </nav>
    </div>
    <!-- logo -->
    <div id="mainLogo" class="d-flex justify-content-center align-items-center">
      <section class="wrapper">
        <div class="top">Posts</div>
        <div class="bottom" aria-hidden="true">Posts</div>
      </section>
    </div>
    <!-- posts interaction panel -->
    <div class="row">
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div class="d-flex justify-content-center col-md-3 col-10 mb-md-0 mb-3 px-1">
          <input
            id="searchInput"
            v-model="searchInput"
            class="form-control"
            type="text"
            name="searchInput"
            placeholder="Search..."
          />
        </div>
        <div class="d-flex justify-content-center col-md-3 col-10 mb-md-0 mb-3 px-1">
          <select id="sortOptions" name="sortOptions" class="form-select" aria-label="Sort options">
            <option selected disabled>Sort options</option>
            <option value="id">by &#8470;</option>
            <option value="title">by title</option>
            <option value="description">by description</option>
          </select>
        </div>
        <div class="d-flex justify-content-end col-md-4 col-10 mb-md-0 mb-3">
          <button class="btn btn-outline-green-custom me-1" data-bs-toggle="modal" data-bs-target="#addPostModal">
            Add new
          </button>
          <button class="btn btn-outline-green-custom">Download</button>
        </div>
      </div>
    </div>
    <!-- #addPostModal -->
    <AddPostModal />

    <!-- posts list -->
    <PostList v-if="posts && posts.length" :posts="posts" />
    <div v-else-if="loadingError" class="loadingError d-flex justify-content-center align-items-center">
      <span>{{ error }}</span>
    </div>
    <div v-else class="loading d-flex justify-content-center align-items-center">
      <div class="spinner-grow me-3" role="status">
        <span class="visually-hidden"></span>
      </div>
      <span>Loading...</span>
    </div>
    <!-- observer for dynamic posts loading -->
    <!-- <div v-if="isMorePosts" ref="observer" class="observer"></div>
    <div v-else id="noMorePosts" class="d-flex justify-content-center align-items-center">No more posts</div> -->
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import PostList from "@/components/PostList.vue";
import AddPostModal from "@/components/AddPostModal.vue";

export default {
  name: "Posts",
  components: {
    PostList,
    AddPostModal,
  },
  data() {
    return {
      searchInput: "",
      page: 1,
      limit: 10,
    };
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      loadingError: (state) => state.posts.loadingError,
      // selectedSort: (state) => state.posts.selectedSort,
      // sortOptions: (state) => state.posts.sortOptions,
      // searchInput: (state) => state.posts.searchQuery,
      // page: (state) => state.posts.page,
      // limit: (state) => state.posts.limit,
      // totalPages: (state) => state.posts.totalPages,
      // postsEnd: (state) => state.posts.postsEnd,
    }),
    ...mapGetters({
      // postSortAndSearch: "posts/postSortAndSearch",
    }),
  },
  mounted() {
    this.postList({ _limit: this.limit, _page: this.page });
    // this.fetchPosts();
    // Dynamic posts band loading
    // Dynamic posts band loading
    // Dynamic posts band loading
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const observer = new IntersectionObserver((entries) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.setPage(this.page + 1);
    //     this.fetchPostsBand();
    //   } else if (this.page === this.totalPages) {
    //     this.setPostsEnd(true);
    //   }
    // });
    // observer.observe(this.$refs.observer);
  },
  methods: {
    ...mapMutations({
      // setPage: "posts/setPage",
      // setPostsEnd: "posts/setPostsEnd",
      // setSearchQuery: "posts/setSearchQuery",
      // setSelectedSort: "posts/setSelectedSort",
    }),
    ...mapActions({
      postList: "posts/postList",
      // fetchPosts: "posts/fetchPosts",
      // fetchPostsBand: "posts/fetchPostsBand",
      // addPostToStore: "posts/addPostToStore",
    }),
    // addNewPost() {
    //   const newPost = {
    //     id: Date.now(),
    //     title: this.addPostModal__title,
    //     body: this.addPostModal__content,
    //   };
    //   this.addPostToStore(newPost);
    //   this.addPostModal__content = "";
    //   this.addPostModal__title = "";
    // },
  },
};
</script>

<style scoped lang="scss"></style>
