<template>
  <section class="my-posts">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <nav aria-label="breadcrumb" class="my-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
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
      <div
        class="d-flex flex-wrap justify-content-md-between justify-content-center align-items-center col-md-11 offset-md-1 col-12"
      >
        <div class="d-flex justify-content-center col-md-5 col-10 mb-md-0 mb-3 me-1">
          <input
            id="searchInput"
            v-model="searchInput"
            class="form-control me-1"
            type="text"
            name="searchInput"
            placeholder="Search..."
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Searching by title"
          />
          <select
            id="sortOptions"
            name="sortOptions"
            class="form-select me-1"
            aria-label="Sort options"
            @change="sortOption = $event.target.value"
          >
            <option disabled value="">Sort by</option>
            <option selected value="">Default</option>
            <option value="title">Title</option>
            <option value="contentSize">Content size</option>
          </select>
          <div id="sortDirection" class="d-flex align-items-center">
            <button class="btn me-1" @click="sortDirection = 'asc'">&#9650;</button>
            <button class="btn" @click="sortDirection = 'desc'">&#9660;</button>
          </div>
        </div>
        <div class="d-flex justify-content-end col-md-5 col-10 mb-md-0 mb-3">
          <select id="limit" name="limit" class="form-select me-1" aria-label="Limit options" @change="changeLimit">
            <option disabled>Limit</option>
            <option value="5">5</option>
            <option value="10" default selected>10</option>
            <option value="25">25</option>
          </select>
          <button class="btn btn-outline-green-custom me-1" data-bs-toggle="modal" data-bs-target="#addPostModal">
            Add new
          </button>
          <button class="btn btn-outline-secondary" @click="reset">Reset</button>
        </div>
      </div>
    </div>
    <!-- #addPostModal -->
    <AddPostModal />
    <!-- posts list -->
    <div v-if="filteredAndSortedPosts.length">
      <PostList :posts="filteredAndSortedPosts" />
    </div>
    <div v-else class="row">
      <div v-if="loadingError" class="loadingError d-flex justify-content-center align-items-center">
        <span>Ooops... {{ loadingError }}</span>
      </div>
      <div
        v-else-if="posts.length && !filteredAndSortedPosts.length"
        class="postsNotFound d-flex justify-content-center align-items-center"
      >
        Posts not found &#128577;
      </div>
      <div v-else class="loading d-flex justify-content-center align-items-center">
        <div class="spinner-grow me-3" role="status">
          <span class="visually-hidden"></span>
        </div>
        <span>Loading...</span>
      </div>
    </div>
    <!-- observer for dynamic posts loading -->
    <div v-show="posts.length">
      <div v-show="isMorePosts" ref="observer" class="observer"></div>
      <div v-if="!isMorePosts" id="noMorePosts" class="d-flex justify-content-center align-items-center">
        No more posts for downloading &#128577;
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import PostList from "@/components/PostList.vue";
import AddPostModal from "@/components/AddPostModal.vue";
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  name: "Posts",
  components: {
    PostList,
    AddPostModal,
  },
  data() {
    return {
      searchInput: "",
      sortOption: "",
      sortDirection: "asc",
      page: 1,
      limit: 10,
    };
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      postsCount: (state) => state.posts.postsCount,
      loadingError: (state) => state.posts.loadingError,
    }),
    filteredAndSortedPosts() {
      if (!this.posts.length) {
        return [];
      }

      const convertedPosts = [...this.posts]
        .sort((a, b) => {
          if (this.sortOption === "title") {
            return a.title.localeCompare(b.title);
          } else if (this.sortOption === "contentSize") {
            return a.body.length - b.body.length;
          }

          return true;
        })
        .filter((post) => {
          if (this.searchInput) {
            return post.title.toLowerCase().includes(this.searchInput.toLowerCase());
          }

          return true;
        });

      return this.sortDirection === "asc" ? convertedPosts : convertedPosts.reverse();
    },
    isMorePosts() {
      const totalPages = Math.ceil(this.postsCount / this.limit);

      return this.page <= totalPages;
    },
  },
  beforeUnmount() {
    this.setLoadingError(null);
  },
  async mounted() {
    // tooltips init
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));

    // posts loading
    await this.postList({ _limit: this.limit, _page: this.page });

    // observer for dynamic posts loading
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        this.page += 1;
        await this.postList({ _limit: this.limit, _page: this.page });
      }
    });
    if (this.$refs.observer) observer.observe(this.$refs.observer);
  },
  methods: {
    ...mapActions({
      postList: "posts/postList",
    }),
    ...mapMutations({
      setLoadingError: "posts/setLoadingError",
      setPosts: "posts/setPosts",
    }),
    reset() {
      this.setPosts([]);
      this.page = 1;
      this.limit = 10;
      this.searchInput = "";
      this.sortOption = "";
      this.sortDirection = "asc";
      $("#searchInput").val("");
      $("#sortOptions").val("");
      $("#limit").val("10");

      return this.postList({ _limit: this.limit, _page: this.page });
    },
    changeLimit(event) {
      this.setPosts([]);
      this.page = 1;
      this.limit = event.target.value;

      return this.postList({ _limit: this.limit, _page: this.page });
    },
  },
};
</script>

<style scoped lang="scss"></style>
