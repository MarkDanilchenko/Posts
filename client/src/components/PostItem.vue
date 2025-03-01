<template>
  <section class="my-postItem">
    <div class="postCard rounded-3 p-3 my-4">
      <div class="row">
        <div class="d-flex flex-column col-md-8 col-12 mb-md-0 mb-3">
          <div><b>Title:</b> "{{ post.title }}"</div>
          <br />
          <div>
            <b>Description:</b> <br />
            <span class="text-small">{{ post.body }}</span>
          </div>
        </div>
        <hr class="d-md-none d-inline-block" />
        <div class="d-flex justify-content-end align-items-end col-md-4 col-12">
          <button class="btn btn-outline-green-custom me-2" @click="$router.push(`/posts/${post.id}`)">More</button>
          <button class="btn btn-outline-danger" @click="">Delete</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    ...mapActions({
      // removePost: "posts/removePost",
    }),
  },
};
</script>

<style scoped lang="scss"></style>
