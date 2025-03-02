<template>
  <section class="my-postsInfo">
    <div v-if="Object.keys(post).length">
      <div class="row">
        <div
          class="d-flex flex-column justify-content-center align-items-center col-md-10 col-12 offset-md-1 rounded-3 p-3 mt-5"
        >
          <div class="d-flex flex-column col-12 align-items-start mb-3">
            <div><b>Title:</b> "{{ post.title }}"</div>
            <br />
            <div>
              <b>Description:</b> <br />
              <p>{{ post.body }}</p>
            </div>
          </div>
          <button class="btn btn-outline-secondary mb-3" @click="$router.push('/posts')">Back</button>
          <hr class="my-1" style="width: 75%" />
          <p>
            Visit
            <a href="https://jsonplaceholder.typicode.com" class="nav-link" style="display: inline" alt="" title=""
              >here</a
            >
            to find out more information about these posts
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="loadingError" class="loadingError d-flex flex-column justify-content-center align-items-center">
        <span>Ooops... {{ loadingError }}</span>
        <button class="btn mt-3 btn-outline-green-custom" @click="$router.push('/posts')">Back</button>
      </div>
      <div v-else class="loading d-flex justify-content-center align-items-center">
        <div class="spinner-grow me-3" role="status">
          <span class="visually-hidden"></span>
        </div>
        <span>Loading...</span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "PostsInfo",
  computed: {
    ...mapState({
      post: (state) => state.posts.post,
      loadingError: (state) => state.posts.loadingError,
    }),
  },
  async mounted() {
    await this.postItem(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      postItem: "posts/postItem",
    }),
  },
};
</script>

<style scoped lang="scss"></style>
