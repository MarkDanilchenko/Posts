<template>
  <section class="my-addPostModal">
    <div id="addPostModal" class="modal fade" tabindex="-1" aria-labelledby="addPostModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 id="addPostModalLabel" class="modal-title fs-5">Add post</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="clearInputs"
            ></button>
          </div>
          <div class="modal-body">
            <input v-model="title" type="text" class="form-control mb-3" placeholder="Post title..." />
            <div class="form-floating">
              <textarea
                id="postModalTextarea"
                v-model="body"
                class="form-control mb-3"
                placeholder="Post content..."
              ></textarea>
              <label for="postModalTextarea" class="text-muted">Post content...</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="clearInputs">
              Close
            </button>
            <button class="btn btn-green-custom" data-bs-dismiss="modal" :disabled="!title || !body" @click="addPost">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddPostModal",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),
  },
  methods: {
    ...mapMutations({
      setPosts: "posts/setPosts",
    }),
    clearInputs() {
      this.title = "";
      this.body = "";
    },
    addPost() {
      const newPost = {
        id: uuidv4(),
        userId: uuidv4(),
        title: this.title,
        body: this.body,
      };

      this.setPosts([newPost, ...this.posts]);
      this.clearInputs();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  min-height: 100px !important;
}
</style>
